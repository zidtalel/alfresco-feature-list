# Sécurité d'Accès au Projet

## Protection des Pages

Toutes les pages du projet (sauf `index.html`) sont maintenant protégées par un système d'authentification basé sur `sessionStorage`.

## Comment ça fonctionne ?

### 1. Page de connexion (`index.html`)
- C'est la **seule page accessible** sans authentification
- Lors d'une connexion réussie, un indicateur est enregistré : `sessionStorage.setItem('isAuthenticated', 'true')`
- L'utilisateur est ensuite redirigé vers `menu.html`

### 2. Pages protégées
Toutes les autres pages HTML contiennent un script de vérification en début de fichier :

```javascript
<script>
    // Vérifier immédiatement si l'utilisateur est authentifié
    (function() {
        const isAuthenticated = sessionStorage.getItem('isAuthenticated');
        if (isAuthenticated !== 'true') {
            // Redirection immédiate vers la page de connexion
            window.location.href = 'index.html';
        }
    })();
</script>
```

Ce script :
- S'exécute **immédiatement** au chargement de la page (avant l'affichage du contenu)
- Vérifie la présence de l'indicateur d'authentification dans `sessionStorage`
- Redirige vers `index.html` si l'utilisateur n'est pas authentifié

### 3. Déconnexion
Un bouton de déconnexion est disponible sur la page `menu.html` qui :
- Supprime l'indicateur d'authentification : `sessionStorage.removeItem('isAuthenticated')`
- Redirige vers la page de connexion

## Pages protégées

Les pages suivantes sont protégées :
- `menu.html` - Menu principal
- `cheat_sheet_robot.html` - Aide-mémoire Robot Framework
- `cheat_sheet_xpath.html` - Aide-mémoire XPath
- `exemple_us.html` - Exemples de User Stories
- `features.html` - Matrice des User Stories
- `features_2_equipes.html` - Matrice pour 2 équipes
- `features_3_equipes.html` - Matrice pour 3 équipes
- `features_4_equipes.html` - Matrice pour 4 équipes
- `features_5_equipes.html` - Matrice pour 5 équipes
- `project_timeline.html` - Chronologie du projet
- `test_environment.html` - Environnement de test

## Limitations importantes

### ⚠️ Sécurité côté client uniquement

Cette protection est basée sur JavaScript côté client et utilise `sessionStorage`. Elle est adaptée pour :
- ✅ Empêcher l'accès accidentel non autorisé
- ✅ Obliger les étudiants à passer par la page de connexion
- ✅ Gérer une session de navigation simple

**MAIS elle NE protège PAS contre :**
- ❌ Un utilisateur technique qui désactive JavaScript
- ❌ Un utilisateur qui modifie manuellement le `sessionStorage` via la console du navigateur
- ❌ L'accès direct aux fichiers sur le serveur (si quelqu'un connaît l'URL exacte du fichier)

### Pour un projet avec des données sensibles

Si vous aviez besoin d'une **vraie sécurité** (ce qui n'est probablement pas le cas pour des pages pédagogiques), il faudrait :
1. Un backend (serveur) avec authentification côté serveur
2. Des sessions serveur avec cookies sécurisés
3. Des tokens JWT ou similaires
4. Une base de données pour stocker les utilisateurs

## Fonctionnement du sessionStorage

- Les données du `sessionStorage` sont **temporaires** et propres à chaque onglet
- Elles sont **supprimées automatiquement** quand l'onglet/fenêtre est fermé
- Elles ne sont **jamais envoyées au serveur** (contrairement aux cookies)
- Chaque onglet a son propre `sessionStorage` indépendant

## Test de la protection

1. Essayez d'accéder directement à `menu.html` → Vous serez redirigé vers `index.html`
2. Connectez-vous via `index.html` → Accès autorisé
3. Fermez l'onglet et rouvrez `menu.html` → Vous serez redirigé vers `index.html`
4. Cliquez sur "Déconnexion" → Retour à `index.html`
