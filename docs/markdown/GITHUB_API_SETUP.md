# 🔐 Configuration GitHub API - Guide Rapide

## Étape 1 : Créer un Personal Access Token (PAT)

1. **Aller sur GitHub** : [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new?scopes=repo)

2. **Remplir les informations** :
   - **Note** : `Alfresco Project - Admin Announcements`
   - **Expiration** : 90 days (ou plus selon vos besoins)
   - **Scopes** : Cocher **`repo`** (accès complet aux dépôts)

3. **Générer le token** :
   - Cliquer sur "Generate token"
   - **⚠️ IMPORTANT** : Copier le token immédiatement (commence par `ghp_...`)
   - Vous ne pourrez plus le voir après avoir quitté la page

## Étape 2 : Configurer dans l'interface

1. **Ouvrir** : `admin-announcements.html`

2. **Remplir le formulaire** "Configuration GitHub API" :
   - **Personal Access Token** : `ghp_xxxxxxxxxxxxxxxxxxxxxxxxx`
   - **Owner** : `zidtalel` (votre nom d'utilisateur GitHub)
   - **Repository** : `alfresco-project`
   - **Branch** : `master` (ou `main` selon votre repo)

3. **Cliquer sur** "Connecter"
   - Si succès : Badge vert "✅ Connecté"
   - Le bouton "Sauvegarder sur GitHub" devient actif

## Étape 3 : Utiliser la sauvegarde automatique

1. **Modifier les annonces** dans l'interface

2. **Cliquer sur** "Sauvegarder sur GitHub"
   - Commit automatique
   - Message : "[Admin] Mise à jour des annonces (date)"
   - GitHub Pages redéploie automatiquement

3. **Attendre ~1 minute** pour voir les changements en ligne

## 🔒 Sécurité

- ✅ Le token est stocké dans `sessionStorage` (disparaît à la fermeture)
- ✅ Pas de token dans le code source
- ✅ Nécessite permissions admin du repo
- ⚠️ Ne partagez jamais votre token
- ⚠️ Si compromis : régénérer un nouveau token sur GitHub

## 🆘 Dépannage

### "Erreur 404 Not Found"
- Vérifier le nom du repository
- Vérifier le nom du owner (username GitHub)

### "Erreur 401 Unauthorized"
- Token invalide ou expiré
- Régénérer un nouveau token

### "Erreur 403 Forbidden"
- Permissions insuffisantes
- Vérifier que le scope `repo` est coché

### "Le fichier n'est pas mis à jour"
- Attendre 1-2 minutes (délai de déploiement GitHub Pages)
- Vider le cache du navigateur (Ctrl+Shift+R)

## 📚 Alternative manuelle

Si vous préférez ne pas utiliser l'API :
1. Cliquer sur "Télécharger JSON"
2. Remplacer manuellement `announcements.json` dans le projet
3. Commit + Push via Git normal
