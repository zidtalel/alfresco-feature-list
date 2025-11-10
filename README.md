# 📚 Portail de Documentation - Projet de Test Alfresco

> Plateforme pédagogique centralisée pour l'enseignement des tests logiciels et de l'automatisation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Active](https://img.shields.io/badge/Status-Active-success.svg)]()
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue.svg)]()

## 🎯 Vue d'ensemble

Ce portail web est conçu comme **ressource pédagogique** pour l'enseignement des techniques de test logiciel, de l'automatisation et de la gestion de projet Agile. Il centralise l'ensemble de la documentation, guides et outils nécessaires aux étudiants pour mener à bien un projet de test sur le CMS Alfresco.

**Public cible :** Étudiants en informatique (Groupes SQL)  
**Contexte :** Projet de test du CMS Alfresco dans le cours projet de synthèse  
**Technologies couvertes :** Robot Framework, Selenium webdriver, Gherkin/BDD, Xpath, Postman, Jmeter

---

## 🚀 Fonctionnalités

### 🔐 Système d'authentification
- Connexion par groupe d'étudiants (identifiants de groupe)
- Protection par session (`sessionStorage`)
- Redirection automatique si non authentifié

### 📖 Guides pédagogiques complets

| Guide | Description |
|-------|-------------|
| **Plan de test (ISO 29119-3)** | Structure conforme à la norme internationale |
| **Plan d'automatisation** | Bonnes pratiques, outils, organisation |
| **Rapport de tests** | Modèle, métriques, traçabilité |
| **Gherkin / BDD** | Écriture de scénarios en langage naturel |
| **Markdown** | Syntaxe, astuces, visualisation dans navigateurs |

### 🛠️ Ressources techniques

- **Aide-mémoire XPath** : Sélecteurs et astuces pour localiser les éléments
- **Environnement de test** : Infrastructure, accès, jeux de données
- **Planification & Timeline** : Phases du projet, jalons, deadlines
- **User Stories & Epics** : Backlog complet avec Épics et user stories
- **Exemples de User Story** : Modèles et templates pour user stories et critères d'acceptation

### 🎨 Interface utilisateur

- ✅ Design moderne et responsive (mobile-friendly)
- ✅ Navigation intuitive avec système de cartes (CSS Grid)
- ✅ Bouton "Accueil" sur toutes les pages
- ✅ Déconnexion sécurisée
- ✅ Mise à jour datée (footer)

---

## 📁 Structure du projet

```
alfresco-project/
│
├── index.html                    # Page de connexion (authentification)
├── menu.html                     # Portail principal (hub de navigation)
│
├── guides/
│   ├── guide_plan.html          # Guide du Plan de test
│   ├── guide_plan_auto.html     # Guide du Plan d'automatisation
│   ├── guide_rapport_tests.html # Guide du Rapport de tests
│   ├── guide_gherkin.html       # Guide Gherkin/BDD
│   └── guide_md.html            # Guide Markdown
│
├── resources/
│   ├── cheat_sheet_xpath.html   # Aide-mémoire XPath
│   ├── cheat_sheet_robot.html   # Aide-mémoire Robot Framework (en cours)
│   ├── test_environment.html    # Environnement de test
│   ├── project_timeline.html    # Chronologie du projet
│   ├── features_3_equipes.html  # Epics & User Stories
│   └── exemple_us.html          # Exemple de User Story
│
├── js/
│   └── auth-guard.js            # Script de protection d'accès (DRY)
│
├── images/                       # Icônes et ressources visuelles
├── downloads/                    # Fichiers téléchargeables (Excel, templates)
└── credentials.json             # Identifiants de connexion (hors production)
```

---

## 🔧 Installation & Déploiement

### Prérequis
- Aucun ! Simple hébergement de fichiers statiques HTML/CSS/JS

### Déploiement sur GitHub Pages

1. **Activer GitHub Pages** dans les paramètres du dépôt
   - Settings → Pages → Source : `master` branch

2. **Accéder au portail**
   - URL : `https://<votre-username>.github.io/alfresco-project/`

### Utilisation en local

```bash
# Cloner le dépôt
git clone https://github.com/<votre-username>/alfresco-project.git

# Ouvrir directement index.html dans un navigateur
# Ou utiliser un serveur local (recommandé)
cd alfresco-project
python -m http.server 8000
# Ouvrir http://localhost:8000
```

---

## 🔑 Authentification

Les identifiants de connexion sont définis dans `credentials.json` :

```json
{
  "groupe1": "pass1",
  "groupe2": "pass2"
}
```

> ⚠️ **Note :** Ce système d'authentification est **purement pédagogique** et ne doit pas être utilisé en production. Il n'offre aucune sécurité réelle (les mots de passe sont en clair côté client).

---

## 📚 Ressources pédagogiques

### Technologies enseignées

- **Tests logiciels** : Méthodologies, normes (ISO 29119-3), documentation
- **Automatisation** : Robot Framework, Selenium WebDriver, XPath
- **BDD (Behavior-Driven Development)** : Gherkin, scénarios en langage naturel
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

---

## 🛡️ Sécurité

### Système actuel (pédagogique)
- Protection par `sessionStorage` (JavaScript)
- Vérification côté client uniquement
- **Non adapté à un environnement de production**

### Améliorations possibles
- Authentification backend (Node.js, PHP)
- Base de données sécurisée
- Tokens JWT
- HTTPS obligatoire

---

## 🤝 Contribution

**Usage strictement pédagogique** - Ce projet est destiné à un usage personnel dans un cadre d'enseignement universitaire.

Si vous êtes enseignant et souhaitez réutiliser ce portail :
1. Fork le projet
2. Adaptez le contenu à votre contexte
3. Modifiez `credentials.json` avec vos identifiants
4. Personnalisez les guides selon vos besoins

---

## 📝 License

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📧 Contact

**Enseignant** : Talel Zid  (zidtalel@gmail.com)
**Institution** : Collège de Bois de Boulogne  
**Année académique** : 2025

---

## 🙏 Remerciements

- **Font Awesome** pour les icônes
- **Tailwind CSS** pour le système de design (page de connexion)
- **GitHub Pages** pour l'hébergement gratuit

---

<div align="center">

**Dernière mise à jour :** 5 novembre 2025

Made with ❤️ for education

</div>
