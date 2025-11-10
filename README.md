# 📚 Portail de Documentation - Projet de Test Alfresco# 📚 Portail de Documentation - Projet de Test Alfresco



> Plateforme pédagogique centralisée pour l'enseignement des tests logiciels et de l'automatisation> Plateforme pédagogique centralisée pour l'enseignement des tests logiciels et de l'automatisation



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Status: Active](https://img.shields.io/badge/Status-Active-success.svg)]()[![Status: Active](https://img.shields.io/badge/Status-Active-success.svg)]()

[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue.svg)]()[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue.svg)]()



## 🎯 Vue d'ensemble## 🎯 Vue d'ensemble



Ce portail web est conçu comme **ressource pédagogique** pour l'enseignement des techniques de test logiciel, de l'automatisation et de la gestion de projet Agile. Il centralise l'ensemble de la documentation, guides et outils nécessaires aux étudiants pour mener à bien un projet de test sur le CMS Alfresco.Ce portail web est conçu comme **ressource pédagogique** pour l'enseignement des techniques de test logiciel, de l'automatisation et de la gestion de projet Agile. Il centralise l'ensemble de la documentation, guides et outils nécessaires aux étudiants pour mener à bien un projet de test sur le CMS Alfresco.



**Public cible :** Étudiants en informatique (Groupe 1292)  **Public cible :** Étudiants en informatique (Groupe 1292)  

**Contexte :** Projet de test du CMS Alfresco dans le cours projet de synthèse  **Contexte :** Projet de test du CMS Alfresco dans le cours projet de synthèse  

**Technologies couvertes :** Robot Framework, Selenium WebDriver, Gherkin/BDD, XPath, PICT (pairwise testing), Jira, Xray**Technologies couvertes :** Robot Framework, Selenium WebDriver, Gherkin/BDD, XPath, PICT (pairwise testing), Jira, Xray



------



## 🚀 Fonctionnalités## 🚀 Fonctionnalités



### 🔐 Système d'authentification### 🔐 Système d'authentification

- Connexion par rôle (étudiant/admin)

- Connexion par rôle (étudiant/admin)- Protection par session (`sessionStorage`)

- Protection par session (`sessionStorage`)- Guards JavaScript (auth-guard.js, admin-guard.js)

- Guards JavaScript (auth-guard.js, admin-guard.js)- Redirection automatique si non authentifié

- Redirection automatique si non authentifié

### 📖 Guides pédagogiques complets

### 📖 Guides pédagogiques complets

| Guide | Description |

| Guide | Description ||-------|-------------|

|-------|-------------|| **Plan de test (ISO 29119-3)** | Structure conforme à la norme internationale |

| **Plan de test (ISO 29119-3)** | Structure conforme à la norme internationale || **Plan d'automatisation** | Bonnes pratiques, outils, organisation |

| **Plan d'automatisation** | Bonnes pratiques, outils, organisation || **Rapport de tests** | Modèle, métriques, traçabilité |

| **Rapport de tests** | Modèle, métriques, traçabilité || **Gherkin / BDD** | Écriture de scénarios en langage naturel |

| **Gherkin / BDD** | Écriture de scénarios en langage naturel || **Markdown** | Syntaxe, astuces, visualisation dans navigateurs |

| **Markdown** | Syntaxe, astuces, visualisation dans navigateurs || **PICT / Pairwise** | Guide complet avec podcasts audio (FR/EN) |

| **PICT / Pairwise** | Guide complet avec podcasts audio (FR/EN) |

### 🛠️ Ressources techniques

### 🛠️ Ressources techniques

- **Aide-mémoire XPath** : Sélecteurs et astuces pour localiser les éléments

- **Aide-mémoire XPath** : Sélecteurs et astuces pour localiser les éléments- **Environnement de test** : Infrastructure, accès, jeux de données

- **Environnement de test** : Infrastructure, accès, jeux de données- **Planification & Timeline** : Phases du projet, jalons, deadlines (dates configurables via JSON)

- **Planification & Timeline** : Phases du projet, jalons, deadlines (dates configurables via JSON)- **User Stories & Epics** : Backlog complet avec Épics et user stories (multiple variantes par équipe)

- **User Stories & Epics** : Backlog complet avec Épics et user stories (multiple variantes par équipe)- **Exemples de User Story** : Modèles et templates pour user stories et critères d'acceptation

- **Exemples de User Story** : Modèles et templates pour user stories et critères d'acceptation- **Quiz interactifs** : Évaluation des connaissances (avec mode local)

- **Quiz interactifs** : Évaluation des connaissances (avec mode local)

### 🎯 Fonctionnalités dynamiques

### 🎯 Fonctionnalités dynamiques

- **Annonces** : Carrousel rotatif et panneau latéral avec annonces prioritaires

- **Annonces** : Carrousel rotatif et panneau latéral avec annonces prioritaires- **Timeline configurable** : Dates de sprints modifiables via JSON (admin)

- **Timeline configurable** : Dates de sprints modifiables via JSON (admin)- **Quiz** : Système de quiz interactif avec correction automatique

- **Quiz** : Système de quiz interactif avec correction automatique- **GitHub API** : Sauvegarde automatique des configurations (annonces, quiz, timeline)

- **GitHub API** : Sauvegarde automatique des configurations (annonces, quiz, timeline)

### 👨‍💼 Interface d'administration

### 👨‍💼 Interface d'administration

- **Gestion des Annonces** : Ajout, modification, activation/désactivation avec GitHub API

- **Gestion des Annonces** : Ajout, modification, activation/désactivation avec GitHub API- **Gestion des Quiz** : Création et gestion de quiz (questions, réponses, explications)

- **Gestion des Quiz** : Création et gestion de quiz (questions, réponses, explications)- **Gestion du Calendrier** : Configuration des dates de sprints pour la timeline

- **Gestion du Calendrier** : Configuration des dates de sprints pour la timeline- **Configuration** : Paramètres globaux (placeholder)

- **Configuration** : Paramètres globaux (placeholder)- **Matrice des User Stories** : Vue de toutes les user stories organisées par équipe

- **Matrice des User Stories** : Vue de toutes les user stories organisées par équipe

### 🎨 Interface utilisateur

### 🎨 Interface utilisateur

- ✅ Design moderne et responsive (mobile-friendly)

- ✅ Design moderne et responsive (mobile-friendly)- ✅ Navigation intuitive avec système de cartes (CSS Grid)

- ✅ Navigation intuitive avec système de cartes (CSS Grid)- ✅ Badge utilisateur avec rôle (admin/étudiant)

- ✅ Badge utilisateur avec rôle (admin/étudiant)- ✅ Menu dropdown pour l'administration (visible uniquement aux admins)

- ✅ Menu dropdown pour l'administration (visible uniquement aux admins)- ✅ Système de notifications avec compteur

- ✅ Système de notifications avec compteur- ✅ Déconnexion sécurisée

- ✅ Déconnexion sécurisée- ✅ Fit-to-screen automatique pour certaines pages

- ✅ Fit-to-screen automatique pour certaines pages- ✅ Mode impression optimisé

- ✅ Mode impression optimisé

---

---

## 📁 Structure du projet

## 📁 Structure du projet

```

```plaintextalfresco-project/

alfresco-project/│

│├── index.html                    # Page de connexion (authentification)

├── index.html                    # Redirection root → pages/main/index.html├── menu.html                     # Portail principal (hub de navigation)

├── README.md                     # Documentation du projet│

│├── guides/

├── pages/                        # Pages HTML organisées par catégorie│   ├── guide_plan.html          # Guide du Plan de test

│   ├── main/                     # Pages principales│   ├── guide_plan_auto.html     # Guide du Plan d'automatisation

│   │   ├── index.html            # Page de connexion│   ├── guide_rapport_tests.html # Guide du Rapport de tests

│   │   ├── menu.html             # Portail principal (hub)│   ├── guide_gherkin.html       # Guide Gherkin/BDD

│   │   ├── project_timeline.html # Timeline verticale (dates dynamiques)│   └── guide_md.html            # Guide Markdown

│   │   ├── quiz.html             # Page de quiz interactifs│

│   │   └── test_environment.html # Environnement de test├── resources/

│   ││   ├── cheat_sheet_xpath.html   # Aide-mémoire XPath

│   ├── admin/                    # Pages d'administration│   ├── cheat_sheet_robot.html   # Aide-mémoire Robot Framework (en cours)

│   │   ├── admin-announcements.html  # Gestion des annonces│   ├── test_environment.html    # Environnement de test

│   │   ├── admin-quiz.html           # Gestion des quiz│   ├── project_timeline.html    # Chronologie du projet

│   │   ├── admin-timeline.html       # Configuration du calendrier│   ├── features_3_equipes.html  # Epics & User Stories

│   │   ├── admin-settings.html       # Paramètres (placeholder)│   └── exemple_us.html          # Exemple de User Story

│   │   └── features.html             # Matrice des US (toutes équipes)│

│   │├── js/

│   ├── guides/                   # Guides pédagogiques│   └── auth-guard.js            # Script de protection d'accès (DRY)

│   │   ├── guide_plan.html       # Plan de test (ISO 29119-3)│

│   │   ├── guide_plan_auto.html  # Plan d'automatisation├── images/                       # Icônes et ressources visuelles

│   │   ├── guide_rapport_tests.html # Rapport de tests├── downloads/                    # Fichiers téléchargeables (Excel, templates)

│   │   ├── guide_gherkin.html    # Gherkin/BDD└── credentials.json             # Identifiants de connexion (hors production)

│   │   ├── guide_md.html         # Markdown```

│   │   └── guide_pict.html       # PICT/Pairwise (avec podcasts audio)

│   │---

│   ├── tools/                    # Outils et aide-mémoires

│   │   ├── cheat_sheet_xpath.html   # XPath## 🔧 Installation & Déploiement

│   │   ├── cheat_sheet_robot.html   # Robot Framework

│   │   └── exemple_us.html          # Exemple de User Story### Prérequis

│   │- Aucun ! Simple hébergement de fichiers statiques HTML/CSS/JS

│   └── features/                 # User Stories par équipe

│       ├── features_3_equipes.html### Déploiement sur GitHub Pages

│       ├── features_4_equipes.html

│       └── features_5_equipes.html1. **Activer GitHub Pages** dans les paramètres du dépôt

│   - Settings → Pages → Source : `master` branch

├── assets/                       # Ressources consolidées

│   ├── js/2. **Accéder au portail**

│   │   ├── auth-guard.js         # Protection accès étudiant   - URL : `https://<votre-username>.github.io/alfresco-project/`

│   │   ├── admin-guard.js        # Protection accès admin

│   │   └── quiz.js               # Logique quiz### Utilisation en local

│   ├── images/                   # Icônes et images

│   └── downloads/                # Fichiers téléchargeables```bash

│# Cloner le dépôt

├── config/                       # Configuration JSONgit clone https://github.com/<votre-username>/alfresco-project.git

│   ├── credentials.json          # Identifiants (étudiant/admin)

│   ├── announcements.json        # Annonces du portail# Ouvrir directement index.html dans un navigateur

│   ├── quizzes.json              # Questions de quiz# Ou utiliser un serveur local (recommandé)

│   └── timeline.json             # Dates des sprintscd alfresco-project

│python -m http.server 8000

├── docs/                         # Documentation technique# Ouvrir http://localhost:8000

│   ├── markdown/                 # Docs Markdown (.md)```

│   └── prd/                      # Product Requirements Documents

│---

└── ressources/                   # Ressources audio/vidéo

    └── podcasts/                 # Podcasts pédagogiques## 🔑 Authentification

```

Les identifiants de connexion sont définis dans `credentials.json` :

---

```json

## 🔧 Installation & Déploiement{

  "groupe1": "pass1",

### Prérequis  "groupe2": "pass2"

}

- Aucun ! Simple hébergement de fichiers statiques HTML/CSS/JS```



### Déploiement sur GitHub Pages> ⚠️ **Note :** Ce système d'authentification est **purement pédagogique** et ne doit pas être utilisé en production. Il n'offre aucune sécurité réelle (les mots de passe sont en clair côté client).



1. **Activer GitHub Pages** dans les paramètres du dépôt---

   - Settings → Pages → Source : `master` branch

## 📚 Ressources pédagogiques

2. **Accéder au portail**

   - URL : `https://<votre-username>.github.io/alfresco-project/`### Technologies enseignées



### Utilisation en local- **Tests logiciels** : Méthodologies, normes (ISO 29119-3), documentation

- **Automatisation** : Robot Framework, Selenium WebDriver, XPath

```bash- **BDD (Behavior-Driven Development)** : Gherkin, scénarios en langage naturel

# Cloner le dépôt- **Agilité** : User Stories, Epics, critères d'acceptation

git clone https://github.com/<votre-username>/alfresco-project.git- **Documentation technique** : Markdown, rapports de tests



# Ouvrir directement index.html dans un navigateur### Normes & Standards

# Ou utiliser un serveur local (recommandé)

cd alfresco-project- ✅ **ISO/IEC/IEEE 29119-3** : Structure des plans de test

python -m http.server 8000- ✅ **Gherkin** : Syntaxe Given-When-Then

# Ouvrir http://localhost:8000- ✅ **Markdown** : Format de documentation léger

```

---

---

## 🎓 Usage pédagogique

## 🔑 Authentification

Ce portail est utilisé dans le cadre d'un cours universitaire sur les tests logiciels. Il sert de :

Les identifiants de connexion sont définis dans `config/credentials.json` :

1. **Support de cours** : Documentation centralisée et accessible 24/7

```json2. **Guide de référence** : Aide-mémoires et templates

{3. **Outil de projet** : Backlog, planning, environnement

  "accounts": [4. **Exercice pratique** : Exemple concret de documentation projet

    {

      "username": "ZXR1ZGlhbnQ=",---

      "password": "ZzEyOTI=",

      "role": "student"## 🛡️ Sécurité

    },

    {### Système actuel (pédagogique)

      "username": "YWRtaW4=",- Protection par `sessionStorage` (JavaScript)

      "password": "YWRtaW4xMjM=",- Vérification côté client uniquement

      "role": "admin"- **Non adapté à un environnement de production**

    }

  ]### Améliorations possibles

}- Authentification backend (Node.js, PHP)

```- Base de données sécurisée

- Tokens JWT

> ⚠️ **Note :** Ce système d'authentification est **purement pédagogique** et ne doit pas être utilisé en production. Il n'offre aucune sécurité réelle (les mots de passe sont encodés en base64 côté client).- HTTPS obligatoire



**Identifiants par défaut :**---



- **Étudiant** : `etudiant` / `g1292`## 🤝 Contribution

- **Admin** : `admin` / `admin123`

**Usage strictement pédagogique** - Ce projet est destiné à un usage personnel dans un cadre d'enseignement universitaire.

---

Si vous êtes enseignant et souhaitez réutiliser ce portail :

## 📚 Configuration dynamique1. Fork le projet

2. Adaptez le contenu à votre contexte

### Annonces (`config/announcements.json`)3. Modifiez `credentials.json` avec vos identifiants

4. Personnalisez les guides selon vos besoins

Gestion des annonces affichées sur le portail :

---

- Carrousel rotatif (max 3 annonces prioritaires)

- Panneau latéral avec toutes les annonces actives## 📝 License

- Types : info, success, warning, danger

- Activation/désactivation individuelleCe projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

- Sauvegarde via GitHub API (admin)

---

### Quiz (`config/quizzes.json`)

## 📧 Contact

Questions interactives pour l'évaluation :

**Enseignant** : Talel Zid  (zidtalel@gmail.com)

- Questions à choix multiples**Institution** : Collège de Bois de Boulogne  

- Correction automatique**Année académique** : 2025

- Explications détaillées

- Gestion complète via interface admin---



### Timeline (`config/timeline.json`)## 🙏 Remerciements



Dates configurables des sprints :- **Font Awesome** pour les icônes

- **Tailwind CSS** pour le système de design (page de connexion)

```json- **GitHub Pages** pour l'hébergement gratuit

{

  "sprints": [---

    { "id": 1, "label": "Sprint 1", "date": "3 novembre" },

    { "id": 2, "label": "Sprint 2", "date": "10 novembre" }<div align="center">

  ]

}**Dernière mise à jour :** 5 novembre 2025

```

Made with ❤️ for education

- 8 sprints configurables

- Injection dynamique dans la timeline</div>

- Interface admin dédiée pour la modification

---

## 📚 Ressources pédagogiques

### Technologies enseignées

- **Tests logiciels** : Méthodologies, normes (ISO 29119-3), documentation
- **Automatisation** : Robot Framework, Selenium WebDriver, XPath
- **BDD (Behavior-Driven Development)** : Gherkin, scénarios en langage naturel
- **Pairwise Testing** : PICT, génération de jeux de données
- **Agilité** : User Stories, Epics, critères d'acceptation
- **Documentation technique** : Markdown, rapports de tests

### Normes & Standards

- ✅ **ISO/IEC/IEEE 29119-3** : Structure des plans de test
- ✅ **Gherkin** : Syntaxe Given-When-Then
- ✅ **Markdown** : Format de documentation léger

---

## 🎓 Usage pédagogique

Ce portail est utilisé dans le cadre d'un cours universitaire sur les tests logiciels. Il sert de :

1. **Support de cours** : Documentation centralisée et accessible 24/7
2. **Guide de référence** : Aide-mémoires et templates
3. **Outil de projet** : Backlog, planning, environnement
4. **Exercice pratique** : Exemple concret de documentation projet
5. **Plateforme d'évaluation** : Quiz interactifs et suivi

---

## 🔧 Administration

### Accès admin

Se connecter avec le compte admin pour accéder au menu d'administration (roue dentée en haut à gauche du portail).

### Fonctionnalités disponibles

1. **Gestion des Annonces**
   - Ajouter/modifier/supprimer des annonces
   - Activer/désactiver la visibilité
   - Marquer comme prioritaire (carrousel)
   - Sauvegarde automatique via GitHub API

2. **Gestion des Quiz**
   - Créer des questions à choix multiples
   - Ajouter des explications détaillées
   - Organiser par catégorie
   - Export/import JSON

3. **Gestion du Calendrier**
   - Modifier les dates des 8 sprints
   - Format libre (ex: "8 décembre au 23 janvier")
   - Synchronisation automatique avec la timeline

4. **Configuration GitHub API**
   - Token d'accès personnel (PAT) avec scope `repo`
   - Owner et repository
   - Branch de destination (master par défaut)
   - Commit automatique des modifications

---

## 🛡️ Sécurité

### Système actuel (pédagogique)

- Protection par `sessionStorage` (JavaScript)
- Vérification côté client uniquement
- Identifiants encodés en base64
- **Non adapté à un environnement de production**

### Améliorations possibles

- Authentification backend (Node.js, PHP)
- Base de données sécurisée
- Tokens JWT
- HTTPS obligatoire
- Hashing bcrypt des mots de passe

---

## 🤝 Contribution

**Usage strictement pédagogique** - Ce projet est destiné à un usage personnel dans un cadre d'enseignement universitaire.

Si vous êtes enseignant et souhaitez réutiliser ce portail :

1. Fork le projet
2. Adaptez le contenu à votre contexte
3. Modifiez `config/credentials.json` avec vos identifiants
4. Personnalisez les guides selon vos besoins
5. Configurez les fichiers JSON (annonces, quiz, timeline)

---

## 📝 License

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📧 Contact

**Enseignant** : Talel Zid ([zidtalel@gmail.com](mailto:zidtalel@gmail.com))  
**Institution** : Collège de Bois de Boulogne  
**Année académique** : 2025

---

## 🙏 Remerciements

- **Font Awesome** pour les icônes
- **GitHub Pages** pour l'hébergement gratuit
- **GitHub API** pour la persistance des données

---

<div align="center">

**Dernière mise à jour :** 10 novembre 2025

Made with ❤️ for education

</div>
