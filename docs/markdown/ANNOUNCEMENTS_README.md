# 📢 Système de Gestion des Annonces

## Présentation

Ce système permet aux administrateurs de gérer les annonces affichées sur le portail étudiant avec **sauvegarde automatique sur GitHub**.

## Fonctionnalités

### Pour les étudiants
- ✅ Visualisation automatique des annonces actives sur `menu.html`
- ✅ 4 types d'annonces colorées : Info, Succès, Avertissement, Danger
- ✅ Affichage non intrusif sous le titre principal

### Pour les administrateurs
- ✅ Interface complète de gestion (`admin-announcements.html`)
- ✅ Ajouter/modifier/supprimer des annonces
- ✅ Activer/désactiver sans suppression
- ✅ **Sauvegarde automatique via GitHub API**
- ✅ Alternative : export manuel JSON

## Architecture

```
┌─────────────────────────────────────────────┐
│  menu.html (Public)                         │
│  ├─ Charge announcements.json               │
│  └─ Affiche les annonces actives            │
└─────────────────────────────────────────────┘
                    ▲
                    │ (fetch JSON)
                    │
┌─────────────────────────────────────────────┐
│  announcements.json (GitHub)                │
│  └─ Base de données des annonces            │
└─────────────────────────────────────────────┘
                    ▲
                    │ (commit via API)
                    │
┌─────────────────────────────────────────────┐
│  admin-announcements.html (Admin only)      │
│  ├─ Configuration GitHub API                │
│  ├─ Interface CRUD annonces                 │
│  └─ Sauvegarde auto ou manuelle             │
└─────────────────────────────────────────────┘
```

## Configuration requise

### Pour la sauvegarde automatique (recommandé)

1. **Personal Access Token GitHub**
   - Créer sur : https://github.com/settings/tokens/new?scopes=repo
   - Scope requis : `repo`
   - Voir : [GITHUB_API_SETUP.md](GITHUB_API_SETUP.md)

2. **Informations du repository**
   - Owner : `zidtalel`
   - Repository : `alfresco-project`
   - Branch : `master`

### Pour la sauvegarde manuelle (alternative)

1. Télécharger le fichier JSON généré
2. Remplacer `announcements.json` dans le projet
3. Commit + Push via Git

## Utilisation

### Accès administration

1. Se connecter avec compte admin (`admin / admin123`)
2. Cliquer sur la roue dentée ⚙️
3. Sélectionner "Gestion des Annonces"

### Configurer GitHub API (première fois)

1. Créer un Personal Access Token (voir guide)
2. Remplir le formulaire "Configuration GitHub API"
3. Cliquer sur "Connecter"
4. Vérifier le badge vert "✅ Connecté"

### Gérer les annonces

#### Ajouter une annonce
```
1. Remplir le formulaire "Nouvelle Annonce"
   - Titre : "Mise à jour importante"
   - Message : "Le rapport doit être soumis avant..."
   - Type : Info / Success / Warning / Danger
2. Cliquer sur "Ajouter l'annonce"
```

#### Modifier la visibilité
```
- Cliquer sur l'icône 👁️ pour activer/désactiver
- L'annonce reste en base mais invisible pour les étudiants
```

#### Supprimer une annonce
```
- Cliquer sur l'icône 🗑️
- Confirmer la suppression
```

### Sauvegarder les modifications

#### Méthode automatique (GitHub API)
```
1. Cliquer sur "Sauvegarder sur GitHub"
2. Commit automatique + déploiement
3. Attendre ~1 minute
4. Rafraîchir menu.html pour voir les changements
```

#### Méthode manuelle (sans API)
```
1. Cliquer sur "Télécharger JSON"
2. Remplacer announcements.json dans le projet
3. Git commit + push
4. GitHub Pages redéploie automatiquement
```

## Format du fichier JSON

```json
{
  "announcements": [
    {
      "id": 1,
      "title": "Bienvenue !",
      "message": "Consultez régulièrement les ressources...",
      "type": "info",
      "active": true,
      "date": "2025-11-09"
    }
  ]
}
```

### Champs

- **id** : Identifiant unique (auto-incrémenté)
- **title** : Titre de l'annonce (court)
- **message** : Contenu détaillé
- **type** : `info` | `success` | `warning` | `danger`
- **active** : `true` (visible) | `false` (masquée)
- **date** : Date de création (YYYY-MM-DD)

## Sécurité

- ✅ Pages admin protégées par `admin-guard.js`
- ✅ Token stocké en `sessionStorage` (non persistant)
- ✅ Validation des permissions GitHub
- ✅ Commits tracés avec message descriptif
- ⚠️ Ne jamais commiter le token dans le code
- ⚠️ Régénérer le token si compromis

## Dépannage

### Les annonces ne s'affichent pas
- Vérifier que `announcements.json` existe
- Vérifier que `active: true`
- Vider le cache (Ctrl+Shift+R)

### Erreur de sauvegarde GitHub
- Vérifier la validité du token
- Vérifier les permissions `repo`
- Vérifier owner/repo/branch

### GitHub Pages ne se met pas à jour
- Attendre 1-2 minutes (délai normal)
- Vérifier l'onglet "Actions" sur GitHub
- Forcer un nouveau déploiement

## Évolutions possibles

- 📅 Planification d'annonces (date début/fin)
- 🔔 Notifications push
- 👥 Annonces ciblées par groupe
- 📊 Statistiques de consultation
- 🎨 Éditeur WYSIWYG pour formatage riche
- 📎 Pièces jointes (liens, documents)

## Licence

Projet éducatif - Enseignement supérieur
