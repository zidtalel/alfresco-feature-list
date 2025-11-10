// admin-guard.js - Protection stricte pour pages réservées administrateur
// Redirige vers menu.html si l'utilisateur n'a pas le rôle 'admin'.
(function () {
  try {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
    const role = sessionStorage.getItem("userRole");
    if (!isAuthenticated || role !== "admin") {
      // Optionnel : message rapide (évite alert bloquante en contexte pédagogique)
      console.warn("Accès refusé : page réservée à l'administrateur.");
      window.location.href = "menu.html";
    }
  } catch (e) {
    console.error("Erreur dans admin-guard:", e);
    window.location.href = "menu.html";
  }
})();
