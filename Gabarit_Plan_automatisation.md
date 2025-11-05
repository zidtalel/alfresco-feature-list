**Contrôle du document**

**AUTEURS :**

  ----------------- -----------------------------------------------------
  **Rôle**          **Nom**

  Scrum master      

  Membres de        
  l\'équipe de test 
  ----------------- -----------------------------------------------------

**MODIFICATIONS :**

  ------------- ---------- ------------------- -----------------------------------
  **Version**   **Date**   **Auteur/editor**   **Description/Sommaire des
                                               changements**

  1.0                                          

                                               
  ------------- ---------- ------------------- -----------------------------------

**RÉVISION :**

  ----------------- ----------------- ----------------- -----------------
  **Version**       **Date**          **Nom**           **Position**

                                                        

                                                        

                                                        
  ----------------- ----------------- ----------------- -----------------

**DOCUMENTS RELIÉS**

  ----------------- -----------------------------------------------------
  **Document**      **Description/Emplacement**

                    

                    

                    
  ----------------- -----------------------------------------------------

**Table des matières**

# Table des matières {#table-des-matières .TOC-Heading}

[1. INTRODUCTION [4](#introduction)](#introduction)

[1.1 Contexte [4](#contexte)](#contexte)

[1.2 Description du système à tester
[4](#description-du-système-à-tester)](#description-du-système-à-tester)

[1.3 Objectif du document
[4](#objectif-du-document)](#objectif-du-document)

[1.4 Envergure du projet
[4](#envergure-du-projet)](#envergure-du-projet)

[2. Éléments faisant l\'objet de l'automatisation
[5](#éléments-faisant-lobjet-de-lautomatisation)](#éléments-faisant-lobjet-de-lautomatisation)

[2.1 Système ou application
[5](#système-ou-application)](#système-ou-application)

[2.2 Types de tests couverts par l'automatisation
[5](#types-de-tests-couverts-par-lautomatisation)](#types-de-tests-couverts-par-lautomatisation)

[2.3 Critères de sélection de cas de tests à automatiser
[5](#critères-de-sélection-de-cas-de-tests-à-automatiser)](#critères-de-sélection-de-cas-de-tests-à-automatiser)

[2.4 Fonctionnalités couvertes par l'automatisation
[5](#fonctionnalités-couvertes-par-lautomatisation)](#fonctionnalités-couvertes-par-lautomatisation)

[3. Stratégie d'automatisation de tests
[6](#stratégie-dautomatisation-de-tests)](#stratégie-dautomatisation-de-tests)

[3.1 Objectifs de l'automatisation
[6](#objectifs-de-lautomatisation)](#objectifs-de-lautomatisation)

[3.2 Niveau de l'automatisation
[6](#niveau-de-lautomatisation)](#niveau-de-lautomatisation)

[3.3 Techniques d'automatisation
[6](#techniques-dautomatisation)](#techniques-dautomatisation)

[3.4 Outils [6](#outils)](#outils)

[3.4.1 Critères de sélection de l'outil d'automatisation de tests
[6](#critères-de-sélection-de-loutil-dautomatisation-de-tests)](#critères-de-sélection-de-loutil-dautomatisation-de-tests)

[3.4.2 Outils d'automatisation de tests
[6](#outils-dautomatisation-de-tests)](#outils-dautomatisation-de-tests)

[3.4.3 Outil de support à l\'automatisation de tests
[6](#outil-de-support-à-lautomatisation-de-tests)](#outil-de-support-à-lautomatisation-de-tests)

[3.4.4 Outil de support au processus de tests
[6](#outil-de-support-au-processus-de-tests)](#outil-de-support-au-processus-de-tests)

[3.5 Fréquence des exécutions des tests automatisés
[6](#fréquence-des-exécutions-des-tests-automatisés)](#fréquence-des-exécutions-des-tests-automatisés)

[3.6 Environnement d'automatisation
[6](#environnement-dautomatisation)](#environnement-dautomatisation)

[3.6.1 Composants Logiciels
[6](#composants-logiciels)](#composants-logiciels)

[3.6.2 Composants Matériels
[7](#composants-matériels)](#composants-matériels)

[3.7 Gestion de données de tests
[8](#gestion-de-données-de-tests)](#gestion-de-données-de-tests)

[3.8 Gestion des incidents
[8](#gestion-des-incidents)](#gestion-des-incidents)

[3.9 Déploiement des scripts de test
[8](#déploiement-des-scripts-de-test)](#déploiement-des-scripts-de-test)

[3.10 Normes, règles, bonnes pratiques à suivre
[8](#normes-règles-bonnes-pratiques-à-suivre)](#normes-règles-bonnes-pratiques-à-suivre)

[3.10.1 Règles : [8](#règles)](#règles)

[3.10.2 Bonnes pratiques : [8](#bonnes-pratiques)](#bonnes-pratiques)

[3.10.3 Convention de nommage des scripts
[8](#convention-de-nommage-des-scripts)](#convention-de-nommage-des-scripts)

[4. Plan de l'automatisation :
[8](#plan-de-lautomatisation)](#plan-de-lautomatisation)

[4.1 Cas de tests à automatiser absolument (Must be automated) :
[8](#cas-de-tests-à-automatiser-absolument-must-be-automated)](#cas-de-tests-à-automatiser-absolument-must-be-automated)

[4.2 Cas de tests à automatiser ultérieurement (Should be automated):
[9](#cas-de-tests-à-automatiser-ultérieurement-should-be-automated)](#cas-de-tests-à-automatiser-ultérieurement-should-be-automated)

[4.3 Cas de tests à automatiser si possible (Could be automated):
[9](#cas-de-tests-à-automatiser-si-possible-could-be-automated)](#cas-de-tests-à-automatiser-si-possible-could-be-automated)

[4.4 Cas de tests à ne pas automatiser (Will not be automated now)
[9](#cas-de-tests-à-ne-pas-automatiser-will-not-be-automated-now)](#cas-de-tests-à-ne-pas-automatiser-will-not-be-automated-now)

[4.5 Mots clés [10](#mots-clés)](#mots-clés)

[4.6 Répartition des tâches sur les membres de l\'équipe en charge de
l'automatisation
[10](#répartition-des-tâches-sur-les-membres-de-léquipe-en-charge-de-lautomatisation)](#répartition-des-tâches-sur-les-membres-de-léquipe-en-charge-de-lautomatisation)

[4.6.1 Automatisation : [10](#automatisation)](#automatisation)

[4.6.2 Autres ressources et responsabilités
[10](#autres-ressources-et-responsabilités)](#autres-ressources-et-responsabilités)

[5. Besoin de formation
[11](#besoin-de-formation)](#besoin-de-formation)

[6. Planning des activités
[11](#planning-des-activités)](#planning-des-activités)

[7. Risques et contournement
[12](#risques-et-contournement)](#risques-et-contournement)

[7.1 Identification des risques
[12](#identification-des-risques)](#identification-des-risques)

[7.2 Analyse des risques
[12](#analyse-des-risques)](#analyse-des-risques)

[7.3 Plan de contingentement [12](#_Toc33867831)](#_Toc33867831)

**Identification du plan d\'automatisation :**

> Afin d\'identifier ce document nous avons utilisé la norme IEEE
> 829-1998.pdf.
>
> Selon cette norme, le présent fichier s'appellera :
> **PA\-\-\-\-\-\-\-\--.docx**

1.  # INTRODUCTION

    1.  ## Contexte

Ce document décrit le plan et la stratégie d'automatisation de cas de
tests fonctionnels de non-régression de l'application

## Description du système à tester

Description du système

Modules

N° de version

Préciser si les tests manuels ont été effectués, leur taux de couverture
et leur taux de réussite.

Rappeler la date de début et de fin de la phase d\'automatisation.

##  Objectif du document

Le but de ce document est :

> Résumé des principaux objectifs de ce document.

## Envergure du projet

Résumé de l\'envergure du projet :

Nombre de cas de tests total à automatiser

Nombre de cas de test par équipe

Nombre de cas de test par testeur

Niveaux de priorité

Les environnements d\'automatisation qui seront employés

Source des cas test

Outil de gestion des anomalies

Outil de gestion du code source et rappel de la structure du projet

 

2.  # Éléments faisant l\'objet de l'automatisation

    1.  ##  Système ou application

Description de l'application à tester

Description de l\'architecture de l'application à tester

##  Types de tests couverts par l'automatisation

Lister et décrire les types de tests couverts par le processus
d\'automatisation

-   Tests fonctionnels :

-   Tests de performance

    1.  ##  Critères de sélection de cas de tests à automatiser

Donner la liste des critères de sélection (voir fichier Excel)

-   Le cas de test a été exécuté manuellement et a réussi.

-   Le cas de test est de haute priorité, donc important pour le client
    (métier).

-   Le cas de test est automatisable avec les outils dont nous
    disposons.

-   Le cas de test concerne une fonctionnalité fréquemment utilisée par
    les usagers.

-   Le cas de test présente une complexité élevée pour les tests
    manuels.

-   Le cas de test nécessite l'utilisation d'un datapool avec beaucoup
    de données.

-   Le cas de test est un test de transition d\'état.

-   Le cas de test correspond à une fonctionnalité entièrement
    développée.

-   ....

```{=html}
<!-- -->
```
-   Les critères éliminatoires :

    -   Le cas de test a été exécuté manuellement et a réussi.

    -   Le cas de test est automatisable avec les outils dont nous
        disposons.

    -   Le cas de test correspond à une fonctionnalité entièrement
        développée.

-   Les critères de classement :

    -   Le cas de test est de haute priorité, donc important pour le
        client (métier).

    -   Le cas de test concerne une fonctionnalité fréquemment utilisée
        par les usagers.

    -   Le cas de test présente une complexité élevée pour les tests
        manuels.

    -   Le cas de test nécessite l'utilisation d'un datapool avec
        beaucoup de données.

    -   Le cas de test est un test de transition d\'état.

##  Fonctionnalités couvertes par l'automatisation

 Cette section présente la liste des fonctions concernées par
l\'automatisation tels qu\'elles apparaissent dans le plan de test.
Uniquement votre équipe.

Détails des fonctionnalités :

+---+------+--------------------------------------------------+--------+
| N | **Co | **Détail**                                       | **Lien |
| o | de** |                                                  | BF**   |
+---+------+--------------------------------------------------+--------+
| 1 | RQ1  |                                                  |        |
| . |      |                                                  |        |
|   |      |                                                  |        |
|   |      |                                                  |        |
+---+------+--------------------------------------------------+--------+
| 2 | RQ1  |                                                  |        |
| . |      |                                                  |        |
|   |      |                                                  |        |
|   |      |                                                  |        |
+---+------+--------------------------------------------------+--------+
| 3 | RQ1  |                                                  |        |
| . |      |                                                  |        |
|   |      |                                                  |        |
|   |      |                                                  |        |
+---+------+--------------------------------------------------+--------+
| 4 | RQ2  |                                                  |        |
| . |      |                                                  |        |
|   |      |                                                  |        |
|   |      |                                                  |        |
+---+------+--------------------------------------------------+--------+
| 5 | RQ2  |                                                  |        |
| . |      |                                                  |        |
|   |      |                                                  |        |
|   |      |                                                  |        |
+---+------+--------------------------------------------------+--------+

3.  # Stratégie d'automatisation de tests

    1.  ## Objectifs de l'automatisation

Présenter les objectifs de l\'automatisation pour le projet.

##  Niveau de l'automatisation

Rappeler les types de tests et le pourcentage de couverture attendu.

## Techniques d'automatisation

Rappeler les techniques d\'automatisation qui seront appliquées au
projet et décrire chacune :

-   **Record/Playback et export**

-   **[Data
    Driven](http://www.seleniumhq.org/docs/06_test_design_considerations.jsp#data-driven-testing)
    Test ([DDT](https://en.wikipedia.org/wiki/Data-driven_testing))**

-   **Keywords Driven test**

-   **Behaviour Drive Test**

-   **...**

 

1.  ##  Outils

    1.  ## Critères de sélection de l'outil d'automatisation de tests

Rappeler les principaux critères qui guident le choix des outils.

-   Coût d'acquisition des licences

-   Facilité d'intégration avec d\'autres outils

-   Possibilité d'extension avec l'ajout de plugins

-   Présence de journal d'exécution détaillé (log)

-   Facilité d'utilisation

-   Possibilité de structurer le projet de manière personnalisée

    1.  ## Outils d'automatisation de tests

Rappeler la liste des outils avec la version de chacun et son
environnement d\'utilisation.

## Outil de support à l\'automatisation de tests

Rappeler les outils complémentaires qui aident le testeur dans la phase
d\'automatisation : Navigateurs, outils de capture de localisateur,
outils d\'enregistrement (recorder), outils de génération de données de
test, ...

## Outil de support au processus de tests

Rappeler les outils supports pour le processus : Testlink, Jira, Google
docs, ...

##  Fréquence des exécutions des tests automatisés

Préciser à quelle fréquence ou suite à quels types d\'évènements les
tests automatisés sont exécutés.

3.  ##  Environnement d'automatisation

    1.  ## Composants Logiciels

  ----------------------------------- -----------------------------------
  **Type de Test**                    **Plateforme**

                                      

                                      
  ----------------------------------- -----------------------------------

## Composants Matériels

  ------------------ --------------------- ---------------------------------------
  **Identification   **Caractéristique**   **Valeur**
  du composant**                           

  Client             Navigateur            

                     OS                    

                     CPU                   

                     RAM                   

  Serveur web,       OS                    
  application et BDD                       

                     CPU                   

                     RAM                   
  ------------------ --------------------- ---------------------------------------

  ------------------------- ---------------------------------------------
  **Configuration des       
  machines virtuelles**     

  OS                        

  CPU                       

  RAM                       

  Résolution                

  Espace libre dans le      
  disque dur.               
  ------------------------- ---------------------------------------------

##  Gestion de données de tests

Expliquer de quelle manière les données de test seront gérées. 

##  Gestion des incidents

Décrire de quelle manière seront gérés les incidents sur le projet.
Attention, ici on ne parle pas de la gestion des anomalies sur Jira.

## Déploiement des scripts de test

Rappel de la date de déploiement des tests

7.  ## Normes, règles, bonnes pratiques à suivre

    1.  ## Règles : 

Rappeler les principales règles d\'automatisation.

-   Les tests doivent toujours avoir un point de départ connu.

-   Les tests doivent être autonomes (ne doivent pas dépendre d\'autres
    > tests).

-   Les tests doivent tester une fonction à la fois.

-   Les tests doivent revenir eux-mêmes aux conditions initiales.

-   ...

    1.  ## Bonnes pratiques :

Rappeler les bonnes pratiques pour la rédaction de scripts.

## Convention de nommage des scripts

Rappeler les conventions de nommage exigées sur Github au niveau de la
page d\'accueil de votre projet.

# Plan de l'automatisation :

Cas de tests à automatiser :

##  Cas de tests à automatiser absolument (Must be automated) :

  -------- --------------- ------------------------------------ --------------
  **N°**   **Code**        **Description de la fonctionnalité** **Lien BF**

                                                                

                                                                

                                                                

                                                                

                                                                

                                                                
  -------- --------------- ------------------------------------ --------------

## Cas de tests à automatiser ultérieurement (Should be automated):

  -------- -------------- -------------------------------------- --------------
  **N°**   **Code**       **Description de la fonctionnalité**   **Lien BF**

                                                                 

                                                                 

                                                                 

                                                                 

                                                                 
  -------- -------------- -------------------------------------- --------------

## Cas de tests à automatiser si possible (Could be automated):

  -------- -------------- -------------------------------------- --------------
  **N°**   **Code**       **Détail**                             **Lien BF**

                                                                 

                                                                 

                                                                 

                                                                 
  -------- -------------- -------------------------------------- --------------

## Cas de tests à ne pas automatiser (Will not be automated now)

+----+-------------+------------------------------------------+-------+
| ** | **Code**    | **Détail**                               | *     |
| No |             |                                          | *Lien |
| ** |             |                                          | BF**  |
+----+-------------+------------------------------------------+-------+
| 1. |             |                                          |       |
|    |             |                                          |       |
+----+-------------+------------------------------------------+-------+
| 2. |             |                                          |       |
|    |             |                                          |       |
+----+-------------+------------------------------------------+-------+
| 3. |             |                                          |       |
|    |             |                                          |       |
+----+-------------+------------------------------------------+-------+

## Mots clés

Liste des mots clés identifiés par les membres de l\'équipe. Les mots
clés doivent être regroupés par fonction ou par cas de test.

2.  ## Répartition des tâches sur les membres de l\'équipe en charge de l'automatisation

    1.  ## Automatisation :

+-----------------+----------------------------------------------------+
| **Rôle**        | **Responsabilité**                                 |
+-----------------+----------------------------------------------------+
| **Testeur 1 :** | Les Keywords :                                     |
|                 |                                                    |
|                 | Pour chaque keyword :                              |
|                 |                                                    |
|                 | -   Liste des arguments                            |
|                 |                                                    |
|                 | -   Valeur de retour                               |
|                 |                                                    |
|                 | -   Tâche effectuée                                |
|                 |                                                    |
|                 | Cas de Test Robot : 5                              |
|                 |                                                    |
|                 | Cas de test Selenium Webdriver : 4                 |
|                 |                                                    |
|                 | Cas de test Gherkin : 0                            |
|                 |                                                    |
|                 | Autre environnement : 1                            |
|                 |                                                    |
|                 | PlayWright :                                       |
|                 |                                                    |
|                 | Cypress                                            |
+-----------------+----------------------------------------------------+
| **Testeur 2:**  |                                                    |
+-----------------+----------------------------------------------------+
| **Testeur 3:**  |                                                    |
+-----------------+----------------------------------------------------+

## Autres ressources et responsabilités

-   **Scrum Master :**

    -   L'intermédiation entre la compagnie et le client

```{=html}
<!-- -->
```
-   La coordination entre les membres de l'équipe

-   Résolution des problèmes

-   ...

```{=html}
<!-- -->
```
-    **Comité de Vérification et Validation (Scrum Master + Analystes
    QA)**

       - Vérification de validation des cas de test et des keywords

> ...

-   **Testeurs :**

**-** Automatisation des cas de test.

\- La création des keywords.

# Besoin de formation 

-   Une formation sur l'outil d'automatisation Robot Framework

-   ...

# Planning des activités

+---+-----------------------------+-------------+--------+------------+
| * | **Activité**                | **Date de   | **D    | **Date de  |
| * |                             | début**     | urée** | fin**      |
| N |                             |             |        |            |
| ° |                             |             | **(jo  |            |
| * |                             |             | urs)** |            |
| * |                             |             |        |            |
+---+-----------------------------+-------------+--------+------------+
| * | Élaboration du plan         |             |        |            |
| * | d\'automatisation           |             |        |            |
| 1 |                             |             |        |            |
| * |                             |             |        |            |
| * |                             |             |        |            |
+---+-----------------------------+-------------+--------+------------+
| * |                             |             |        |            |
| * |                             |             |        |            |
| 2 |                             |             |        |            |
| * |                             |             |        |            |
| * |                             |             |        |            |
+---+-----------------------------+-------------+--------+------------+
| * |                             |             |        |            |
| * |                             |             |        |            |
| 3 |                             |             |        |            |
| * |                             |             |        |            |
| * |                             |             |        |            |
+---+-----------------------------+-------------+--------+------------+
| * |                             |             |        |            |
| * |                             |             |        |            |
| 4 |                             |             |        |            |
| * |                             |             |        |            |
| * |                             |             |        |            |
+---+-----------------------------+-------------+--------+------------+
| * |                             |             |        |            |
| * |                             |             |        |            |
| 5 |                             |             |        |            |
| * |                             |             |        |            |
| * |                             |             |        |            |
+---+-----------------------------+-------------+--------+------------+
|   |                             |             |        |            |
+---+-----------------------------+-------------+--------+------------+
|   |                             |             |        |            |
+---+-----------------------------+-------------+--------+------------+

7.  # Risques et contournement

    1.  ## Identification des risques

Les principaux risques liés aux activités de tests d'automatisation pour
ce projet sont:

A.  Perte des scripts d'automatisation

B.  ...

    1.  ## Analyse des risques

  -------------- -------------- ---------- -------------- -------------------------------------------
  Probabilité    Indolores      Limités    Graves         ![](media/image1.png){width="3.84375in"
                                                          height="2.8229166666666665in"}Dramatiques

  Improbables                                             

  Occasionnels                                            

  Courants                                                

  Très courants                                           
  -------------- -------------- ---------- -------------- -------------------------------------------

## Plan de contingentement

  -------- ---------------------------- --------------------------------------
  **No**   **Risques**                  **Plan de contingentement**

                                        

                                        

                                        

                                        

                                        
  -------- ---------------------------- --------------------------------------
