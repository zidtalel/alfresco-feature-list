(function(){
  const screens = {
    list: document.getElementById('screen-list'),
    start: document.getElementById('screen-start'),
    quiz: document.getElementById('screen-quiz'),
    summary: document.getElementById('screen-summary')
  };
  const els = {
    list: document.getElementById('quiz-list'),
    startTitle: document.getElementById('start-title'),
    startDesc: document.getElementById('start-desc'),
    begin: document.getElementById('btn-begin'),
    backList: document.getElementById('btn-back-list'),
    question: document.getElementById('question-container'),
    prev: document.getElementById('btn-prev'),
    next: document.getElementById('btn-next'),
    finish: document.getElementById('btn-finish'),
    progress: document.getElementById('progress-bar'),
    summaryTitle: document.getElementById('summary-title'),
    summaryBox: document.getElementById('summary-box'),
    retry: document.getElementById('btn-retry'),
    toList: document.getElementById('btn-to-list')
  };

  let quizzes = [];
  let currentQuiz = null;
  let currentIndex = 0;
  let answers = {};

  function show(id){ Object.values(screens).forEach(s => s.classList.remove('active')); screens[id].classList.add('active'); }

  async function loadQuizzes(){
    try{
      const res = await fetch('quizzes.json');
      const data = await res.json();
      quizzes = data.quizzes || [];
    }catch(e){
      console.warn('Impossible de charger quizzes.json', e);
      quizzes = [];
    }
  }

  function bestScore(quizId){
    try{
      const store = JSON.parse(localStorage.getItem('quizProgress')||'{}');
      return store.bestScores && typeof store.bestScores[quizId] === 'number' ? store.bestScores[quizId] : null;
    }catch{ return null; }
  }

  function renderList(){
    els.list.innerHTML = quizzes.map(q => `
      <div class="quiz-card">
        <div class="badge" style="background:#e6f7ff;color:#087ea4">${q.category}</div>
        <h3>${q.title}</h3>
        <div class="meta">${q.description || ''}</div>
        <div class="meta">${q.questions.length} questions • Difficulté: ${q.difficulty || 'n/a'} • Meilleur score: ${bestScore(q.id) ?? '—'}%</div>
        <div class="actions">
          <button class="btn" data-action="start" data-id="${q.id}"><i class="fas fa-play"></i> Commencer</button>
        </div>
      </div>
    `).join('');

    els.list.querySelectorAll('button[data-action="start"]').forEach(btn => btn.addEventListener('click', () => startQuiz(btn.dataset.id)));
  }

  function startQuiz(id){
    currentQuiz = quizzes.find(q=>q.id===id);
    if(!currentQuiz){ return; }
    currentIndex = 0;
    answers = {};
    els.startTitle.textContent = currentQuiz.title;
    els.startDesc.textContent = currentQuiz.description || '';
    show('start');
  }

  function begin(){ show('quiz'); renderQuestion(); updateProgress(); }

  function renderQuestion(){
    const q = currentQuiz.questions[currentIndex];
    if(!q) return;
    const idx = currentIndex+1;
    let html = `<div class="meta">Question ${idx}/${currentQuiz.questions.length}</div><h3>${q.question}</h3>`;
    html += '<div class="options">';

    const saved = answers[currentIndex];

    if(q.type==='single_choice' || q.type==='true_false'){
      const opts = q.type==='true_false' ? ['Vrai','Faux'] : q.options;
      html += opts.map((opt,i)=>`<label class="option"><input type="radio" name="q${currentIndex}" value="${i}" ${saved==i? 'checked':''}/> ${opt}</label>`).join('');
    }else if(q.type==='multiple_choice'){
      const savedSet = Array.isArray(saved) ? new Set(saved) : new Set();
      html += q.options.map((opt,i)=>`<label class="option"><input type="checkbox" value="${i}" ${savedSet.has(i)? 'checked':''}/> ${opt}</label>`).join('');
    }else if(q.type==='match'){
      // simple select-based matching
      const keys = Object.keys(q.pairs);
      const values = Object.values(q.pairs);
      html += keys.map((k, i)=>{
        const v = saved && saved[k] ? saved[k] : '';
        return `<div class="option"><strong>${k}</strong> → <select data-key="${k}">`+
               `<option value="">-- Choisir --</option>`+
               values.map(val=>`<option value="${val}" ${v===val? 'selected':''}>${val}</option>`).join('')+
               `</select></div>`;
      }).join('');
    }else if(q.type==='free_text'){
      const v = typeof saved==='string' ? saved : '';
      html += `<div class="option"><input id="free-text" type="text" placeholder="Votre réponse" value="${v}" style="width:100%;padding:10px;border:1px solid #e5e7eb;border-radius:8px"/></div>`;
    } else {
      html += `<div class="option">Type de question non supporté.</div>`;
    }

    html += '</div>';
    els.question.innerHTML = html;
  }

  function collect(){
    const q = currentQuiz.questions[currentIndex];
    if(q.type==='single_choice' || q.type==='true_false'){
      const checked = els.question.querySelector('input[type=radio]:checked');
      answers[currentIndex] = checked ? Number(checked.value) : undefined;
    }else if(q.type==='multiple_choice'){
      answers[currentIndex] = Array.from(els.question.querySelectorAll('input[type=checkbox]:checked')).map(i=>Number(i.value));
    }else if(q.type==='match'){
      const map = {};
      els.question.querySelectorAll('select[data-key]').forEach(sel=>{ map[sel.dataset.key] = sel.value; });
      answers[currentIndex] = map;
    }else if(q.type==='free_text'){
      answers[currentIndex] = (els.question.querySelector('#free-text')?.value||'').trim();
    }
  }

  function updateProgress(){
    const pct = Math.round((currentIndex)/(currentQuiz.questions.length-1)*100);
    els.progress.style.width = `${pct}%`;
  }

  function arraysEqual(a,b){
    if(!Array.isArray(a)||!Array.isArray(b)||a.length!==b.length) return false;
    const sa=[...a].sort(); const sb=[...b].sort();
    return sa.every((v,i)=>v===sb[i]);
  }

  function evaluate(){
    let total = currentQuiz.questions.length;
    let correct = 0;
    const details = [];

    currentQuiz.questions.forEach((q, i)=>{
      const user = answers[i];
      let ok = false;
      if(q.type==='single_choice') ok = (user===q.answer);
      else if(q.type==='true_false') ok = (user=== (q.answer?0:1) || user===q.answer); // support radio index or boolean
      else if(q.type==='multiple_choice') ok = arraysEqual(user||[], q.answers||[]);
      else if(q.type==='match'){
        const expected = q.pairs||{}; const u=user||{};
        ok = Object.keys(expected).every(k=>u[k]===expected[k]);
      }else if(q.type==='free_text'){
        const mode = (q.mode||'contains').toLowerCase();
        const exp = String(q.expected||'').trim().toLowerCase();
        const got = String(user||'').trim().toLowerCase();
        ok = mode==='equals' ? (got===exp) : (got.includes(exp));
      }
      if(ok) correct++;
      details.push({ index:i, ok, user, expected:q.answer ?? q.answers ?? q.pairs ?? q.expected, type:q.type, explanation:q.explanation||''});
    });

    const score = Math.round((correct/total)*100);
    return { total, correct, score, details };
  }

  function persistAttempt(result){
    try{
      const key='quizProgress';
      const store = JSON.parse(localStorage.getItem(key)||'{}');
      store.attempts = store.attempts||[];
      store.attempts.push({ quizId: currentQuiz.id, timestamp: Date.now(), score: result.score, details:{ total: result.total, correct: result.correct } });
      store.bestScores = store.bestScores||{};
      store.bestScores[currentQuiz.id] = Math.max(store.bestScores[currentQuiz.id]||0, result.score);
      if(store.attempts.length>500){ store.attempts.splice(0, store.attempts.length-500); }
      localStorage.setItem(key, JSON.stringify(store));
    }catch(e){ console.warn('localStorage indisponible', e); }
  }

  function renderSummary(result){
    els.summaryTitle.textContent = `${currentQuiz.title} — ${result.score}%`;
    const level = result.score>=80 ? 'success' : (result.score>=50 ? 'warning' : 'danger');
    let html = `<div class="badge ${level}">Score ${result.score}% • ${result.correct}/${result.total}</div>`;
    html += '<div style="margin-top:10px">';
    result.details.forEach(d=>{
      const icon = d.ok ? '<i class="fas fa-check" style="color:#28a745"></i>' : '<i class="fas fa-times" style="color:#dc3545"></i>';
      html += `<div style="padding:8px 0;border-bottom:1px solid #eef2f5">${icon} Q${d.index+1} — ${d.ok? 'Correct' : 'Incorrect'}${d.explanation? ` <span style=\"color:#6b7280\">• ${d.explanation}</span>`:''}</div>`;
    });
    html += '</div>';
    els.summaryBox.innerHTML = html;
  }

  // Events
  els.begin.addEventListener('click', ()=>{ begin(); });
  els.backList.addEventListener('click', ()=>{ show('list'); });
  els.prev.addEventListener('click', ()=>{ if(currentIndex>0){ collect(); currentIndex--; renderQuestion(); updateProgress(); } });
  els.next.addEventListener('click', ()=>{ if(currentIndex<currentQuiz.questions.length-1){ collect(); currentIndex++; renderQuestion(); updateProgress(); } });
  els.finish.addEventListener('click', ()=>{ collect(); const res = evaluate(); persistAttempt(res); renderSummary(res); show('summary'); });
  els.retry.addEventListener('click', ()=>{ currentIndex=0; answers={}; show('quiz'); renderQuestion(); updateProgress(); });
  els.toList.addEventListener('click', ()=>{ show('list'); });

  // Init
  (async function init(){
    await loadQuizzes();
    renderList();
  })();
})();
