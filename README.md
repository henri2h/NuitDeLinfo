# Application Nuit de l'info 2020
## Equipe LetMeIn

## Présentation générale de l'idée

Notre objectif était de pouvoir satisfaire à la fois les surfeurs et l'association Surfrider afin que l'application soit le plus largement utilisée.

Afin que l'application soit la plus utilisée possible, et donc qu'elle permette à l'association de disposer d'un maximum d'informations, nous souhaitions combiner un maximum de fonctionnalités utiles aux surfeurs. Nous voulions y intégrer de quoi connaitre la hauteur de la houle, la météo, la qualité de l'eau ainsi que tout un calendrier permettant aux surfeurs de comparer leur activité sur une grande période.

A la fin de chaque session, l'utilisateur aurait rempli un formulaire très court permettant de noter la qualité de l'eau, l'activité pratiquée et les éventuels produits utilisés. 
Ces informations seraient ensuite transmises à l'Association qui les traiteraient pour analyser la qualité de l'eau et prévenir d'un éventuel danger, dans le respect des règles en vigueur concernant les données personnelles.


## Technologies et fonctionnement

### Frameworks 

Nous avons fait le choix de n'utiliser que des framework ou des bibliothèques *JavaScript*.

L'application a été faite avec les frameworks ReactJS et NextJS. L'utilisation du NextJS permet de simplifier le développement en React étant donné que tous les membres de l'équipe n'étaient pas habitués à ce framework.

La base de données est gérée par Prisma, que nous avons choisi pour sa simplicité d'intégration avec NextJS.

### Base de données

La base de données comprend actuellement 3 tables 
 * ```Pratiques``` : qui permet de conserver les données concernant l'activité d'un waterman
 * ```User``` : qui conserve les données de l'utilisateur pour qu'il puisse se connecter à son compte et voir les informations qu'il désire
 * ```Spots``` : qui liste l'ensemble des spots disponibles. Il est aussi possible que l'utilisateur sélectionne son favori ou en recherche un s'il est dans un lieu qui lui est inconnu.

### Connexion

Afin de pouvoir utiliser l'application et profiter des fonctionnalités, l'utilisateur doit se connecter à l'aide de son email et de son mot de passe. Les sessions de connexions sont conservées dans un cookie sécurisé par un **JsonWebToken**.
 
### Comptes différenciés

Nous voulions également créer plusieurs types de comptes : 
 * l'un pour les utilisateurs classiques, comme les surfeurs
 * l'autre pour les membres de l'association afin qu'ils profitent des informations dont ils ont besoin
 
## Comment l'utiliser 

NB : afin que l'application puisse se lancer, il est nécessaire de disposer de **NodeJS** et **npm** préalablement installés.

 1. Cloner le repertoire git
 2. Installer les bibliothèques nécessaires, par la commande : ```npm install```
 3. Compiler le projet NextJS par la commande ```next build```
 4. Lancer l'application par la commande ```npm start```
 5. L'application se lance sur le port *3000*. Elle est donc accessible à l'adresse 

```
http://localhost:3000/
```
## Rendu final


L'application rendue dispose de peu de fonctionnalités par rapport à notre objectif initial. Seule l'interface générale et les systèmes de connexion sont fonctionnels.

Notre objectif était davantage de nous amuser que d'arriver à un résultat proche d'une application commercialisable.

Merci à vous d'avoir pris le temps de lire notre projet. 

**EQUIPE LetMeIn**
