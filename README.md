# 🎴 Jeu de Memory — [Voir la démo en ligne](https://TON-PSEUDO-GITHUB.github.io/js-memory-game/)

Un jeu de memory interactif développé en **Vanilla JavaScript**, sans framework ni librairie externe, dans le cadre du TD "Conception, Déploiement et Documentation d'un Jeu de Memory" (BUT Informatique 2A — R3.01).

## 📖 Description

Ce projet consiste à retrouver les paires d'images identiques parmi 16 cartes disposées aléatoirement sur un plateau de jeu. Les images sont générées dynamiquement via l'API [Picsum Photos](https://picsum.photos/).

## 🛠️ Technologies utilisées

- **HTML5** — structure sémantique de la page
- **CSS Grid** — mise en page du plateau de jeu (`#game-board`)
- **JavaScript ES6** — logique du jeu, sans dépendance externe
  - Littéraux de gabarit (template literals)
  - Spread Operator
  - Fonctions fléchées (arrow functions)
  - `let` / `const`, déstructuration

## ✨ Fonctionnalités

- **Génération dynamique** des cartes via l'API Picsum Photos
- **Algorithme de Fisher-Yates** pour un mélange aléatoire et équitable des cartes
- **Accessibilité (A11y / ARIA)** : attributs `role="button"` et `tabindex="0"` sur chaque carte
- **Gestion asynchrone** des tours de jeu via `setTimeout` (masquage des cartes non appariées après 800ms)
- **Chronomètre** en temps réel, formaté en `mm:ss`
- **Compteur de coups** (moves)
- **Détection de victoire** avec affichage du score final
- **Réinitialisation** de la partie (nouveau mélange, nouveau chronomètre)

## 🚀 Lancement en local

1. Clone le dépôt :
   ```bash
   git clone https://github.com/TON-PSEUDO-GITHUB/js-memory-game.git
   cd js-memory-game
   ```

2. Ouvre le projet dans VS Code.

3. Lance le fichier `index.html` avec l'extension **Live Server** :
   - Clic droit sur `index.html` → **"Open with Live Server"**
   - Le jeu s'ouvre automatiquement dans ton navigateur à l'adresse `http://127.0.0.1:5500`

Aucune installation de dépendance n'est nécessaire (pas de `npm install`), le projet est en Vanilla JS pur.

## 📁 Structure du projet

```
js-memory-game/
├── index.html
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
├── favicon.png
└── README.md
```

## 👤 Auteur

Simon — Étudiant BUT Informatique, IUT Grand Ouest Normandie (Caen)
