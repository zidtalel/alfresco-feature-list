# 🎠 Système d'Annonces Hybride - Carrousel + Panneau Latéral

## 📋 Vue d'ensemble

Le système d'annonces a été amélioré pour éviter l'accumulation verticale des bannières. Il utilise maintenant une **approche hybride** combinant :

1. **🎡 Carrousel rotatif** - Pour les annonces prioritaires (max 3)
2. **🔔 Panneau latéral** - Pour consulter toutes les annonces

---

## 🎯 Fonctionnalités

### 1. Carrousel d'Annonces Prioritaires

**Caractéristiques :**
- ✨ Affiche **1 annonce à la fois** dans un espace fixe (90px de hauteur)
- 🔄 **Rotation automatique** toutes les 5 secondes
- 👆 **Navigation manuelle** via points cliquables
- ⭐ Affiche uniquement les annonces marquées comme **prioritaires**
- 🚫 **Maximum 3 annonces** dans le carrousel

**Avantages :**
- Hauteur constante, pas d'accumulation
- Met en avant les annonces importantes
- Animation fluide et élégante
- Ne perturbe jamais l'affichage des cartes

### 2. Panneau Latéral avec Icône 🔔

**Caractéristiques :**
- 🔔 **Icône cloche** avec badge numérique (nombre total d'annonces)
- 🎨 Animation de balancement de la cloche
- 📱 **Panneau coulissant** depuis la droite (400px sur desktop, pleine largeur sur mobile)
- 📜 **Liste scrollable** de toutes les annonces (actives et inactives)
- 📅 Affiche la date de chaque annonce
- 🎨 Code couleur selon le type (info/warning/success/danger)

**Avantages :**
- Accessible à la demande (ne prend pas de place)
- Historique complet des annonces
- Aucune limite de nombre d'annonces
- Fermeture facile (clic extérieur ou bouton ×)

---

## 🛠️ Configuration des Annonces

### Structure JSON

```json
{
  "announcements": [
    {
      "id": 1,
      "title": "Titre de l'annonce",
      "message": "Message détaillé...",
      "type": "info",
      "active": true,
      "priority": true,  // ⭐ NOUVEAU : Affichage dans le carrousel
      "date": "2025-11-09"
    }
  ]
}
```

### Champs

| Champ | Type | Description |
|-------|------|-------------|
| `id` | number | Identifiant unique |
| `title` | string | Titre court de l'annonce |
| `message` | string | Contenu détaillé |
| `type` | string | `info` / `warning` / `success` / `danger` |
| `active` | boolean | Visible ou masquée |
| **`priority`** | **boolean** | **Affichée dans le carrousel (max 3)** |
| `date` | string | Date au format YYYY-MM-DD |

---

## 🎨 Interface d'Administration

### Page `admin-announcements.html`

**Nouveau champ dans le formulaire :**

```
☑️ Annonce prioritaire (affichée dans le carrousel)
ℹ️ Maximum 3 annonces prioritaires sont affichées dans le carrousel rotatif.
```

**Badge visuel :**
- Les annonces prioritaires affichent un badge **⭐ PRIORITAIRE** en orange
- Indicateur **<i class="fas fa-star"></i> Carrousel** dans les métadonnées

---

## 📐 Logique d'Affichage

### Carrousel (menu.html)

```javascript
// Filtre les annonces actives ET prioritaires
const priorityAnnouncements = activeAnnouncements
  .filter(ann => ann.priority)
  .slice(0, 3); // Maximum 3 annonces

// Rotation automatique toutes les 5 secondes
setInterval(() => {
  currentIndex = (currentIndex + 1) % priorityAnnouncements.length;
  showSlide(currentIndex);
}, 5000);
```

### Panneau Latéral

```javascript
// Affiche TOUTES les annonces actives (sans limite)
const notificationBadge = document.getElementById("notification-badge");
notificationBadge.textContent = activeAnnouncements.length;

// Affichage chronologique avec date formatée
activeAnnouncements.forEach(announcement => {
  // ... création des éléments du panneau
});
```

---

## 🎯 Recommandations d'Utilisation

### ⭐ Annonces Prioritaires (Carrousel)

**À utiliser pour :**
- 📢 Annonces urgentes (dates limites imminentes)
- ⚠️ Alertes importantes (changements critiques)
- 🎉 Événements majeurs (nouvelles fonctionnalités)

**Limites :**
- Maximum **3 annonces** simultanées
- Rotation toutes les **5 secondes**
- Privilégier les messages **courts et percutants**

### 🔔 Toutes les Annonces (Panneau)

**À utiliser pour :**
- 📋 Historique complet
- ℹ️ Informations générales
- 📝 Annonces archivées

**Avantages :**
- **Aucune limite** de nombre
- Consultation à la demande
- Affichage détaillé avec dates

---

## 📱 Responsive Design

### Desktop (> 768px)
- Carrousel : 90px de hauteur fixe
- Panneau : 400px de largeur
- Icône cloche : 42x42px

### Mobile (≤ 768px)
- Carrousel : Hauteur automatique (min 80px)
- Panneau : **Pleine largeur** (100%)
- Icône cloche : 36x36px
- Textes réduits pour meilleure lisibilité

---

## 🚀 Déploiement

### Fichiers Modifiés

1. **`announcements.json`**
   - Ajout du champ `priority: boolean`

2. **`menu.html`**
   - Remplacement système de bannières par carrousel
   - Ajout panneau latéral
   - Ajout icône cloche avec badge
   - JavaScript pour rotation automatique

3. **`admin-announcements.html`**
   - Nouveau champ checkbox "Annonce prioritaire"
   - Badge visuel pour annonces prioritaires
   - Mise à jour création d'annonce

### Workflow de Mise à Jour

1. **Modifier les annonces** dans `admin-announcements.html`
2. **Cocher "Annonce prioritaire"** pour max 3 annonces importantes
3. **Sauvegarder sur GitHub** (via API) ou exporter manuellement
4. Les changements sont **immédiatement visibles** après rechargement

---

## 🎬 Démonstration

### Carrousel
```
┌──────────────────────────────────────┐
│ ⚠️ Date de livraison imminente       │
│ Attention ! Plan de test : 13 nov.   │
└──────────────────────────────────────┘
           • ● •    ← Points de navigation
```

### Panneau Latéral
```
                    ┌─────────────────┐
                    │ 🔔 Toutes (2)   │
                    ├─────────────────┤
                    │ ⚠️ Urgent       │
                    │ Message...      │
                    │ 9 novembre 2025 │
                    ├─────────────────┤
                    │ ℹ️ Info         │
                    │ Message...      │
                    │ 8 novembre 2025 │
                    └─────────────────┘
```

---

## 📊 Comparaison Avant/Après

| Aspect | ❌ Avant (Superposées) | ✅ Après (Hybride) |
|--------|----------------------|-------------------|
| Hauteur | Variable (10+ annonces = scroll) | **Fixe (90px)** |
| Visibilité cartes | ⚠️ Perturbée si nombreuses annonces | ✅ Jamais perturbée |
| Accès historique | Toutes visibles en permanence | À la demande (panneau) |
| Mobile | Problème d'espace | Optimisé (panneau 100%) |
| Priorisation | ❌ Aucune | ✅ Carrousel = Important |
| Scalabilité | ❌ Limitée | ✅ Illimitée |

---

## 🔧 Personnalisation

### Modifier l'Intervalle de Rotation

```javascript
// Ligne ~750 de menu.html
setInterval(() => {
  currentIndex = (currentIndex + 1) % priorityAnnouncements.length;
  showSlide(currentIndex);
}, 5000); // ← Changer ici (en millisecondes)
```

### Modifier le Nombre Max d'Annonces Prioritaires

```javascript
// Ligne ~730 de menu.html
const priorityAnnouncements = activeAnnouncements
  .filter(ann => ann.priority)
  .slice(0, 3); // ← Changer ici (recommandé : 2-4)
```

### Changer la Largeur du Panneau

```css
/* Ligne ~450 de menu.html */
.announcements-panel {
  width: 400px; /* ← Changer ici */
  right: -400px; /* ← Synchroniser avec width */
}
```

---

## ✅ Checklist de Test

- [ ] Carrousel affiche max 3 annonces prioritaires
- [ ] Rotation automatique fonctionne (5s)
- [ ] Navigation manuelle par points fonctionne
- [ ] Badge cloche affiche le bon nombre
- [ ] Panneau s'ouvre au clic sur la cloche
- [ ] Panneau se ferme au clic extérieur
- [ ] Panneau affiche toutes les annonces actives
- [ ] Dates formatées en français
- [ ] Responsive mobile (panneau pleine largeur)
- [ ] Admin : checkbox prioritaire fonctionne
- [ ] Admin : badge ⭐ PRIORITAIRE visible

---

## 📚 Ressources

- [ANNOUNCEMENTS_README.md](ANNOUNCEMENTS_README.md) - Documentation système complet
- [GITHUB_API_SETUP.md](GITHUB_API_SETUP.md) - Configuration GitHub API
- [GITHUB_API_IMPLEMENTATION.md](GITHUB_API_IMPLEMENTATION.md) - Détails techniques

---

**Date de mise à jour :** 9 novembre 2025  
**Version :** 2.0 (Système hybride Carrousel + Panneau)
