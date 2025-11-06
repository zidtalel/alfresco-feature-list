// auth-guard.js - Protection d'accès par session
// Vérifie si l'utilisateur est authentifié via sessionStorage
// Redirige vers index.html si non authentifié

(function () {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  if (isAuthenticated !== "true") {
    // Redirection immédiate vers la page de connexion
    window.location.href = "index.html";
  }
})();
