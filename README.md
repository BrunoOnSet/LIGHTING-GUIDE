# BOS — LIGHTING GUIDE V2

Carnet personnel de révision pour directeur de la photographie expérimenté. La V2 ne cherche plus à enseigner les bases de l’éclairage : elle sert à réactiver des principes précis, du vocabulaire de plateau et des alternatives de mise en lumière avant un tournage.

## Déploiement

Application statique sans compilation.

- **Cloudflare Pages** : dépôt `BrunoOnSet/LIGHTING-GUIDE`
- **Production branch** : `main`
- **Build command** : vide
- **Build output directory** : racine du dépôt

Une modification de `main` déclenche donc le redéploiement si la connexion Cloudflare Pages reste active.

## V2 — structure affichée

La page publique ne charge plus les anciens catalogues V1. Elle utilise :

- **Principes** : phénomènes séparés des recettes — taille angulaire, fall-off, shadow transfer, ambient floor, spectre, réponse spéculaire, exposition.
- **Méthodes** : book light, bounce, negative/passive fill, CRLS, far-side key, overhead base, zone lighting, practical augmentation, cross-key, soustraction en extérieur, etc.
- **Situations** : cinq tournages documentés avec plan de feu, BTS, image finale et lecture source par source.
- **Cas de plateau** : contraintes à résoudre avant d’ouvrir trois pistes de travail et leurs compromis.
- **Vocabulaire** : termes lumière, grip, staging et colorimétrie utilisés sur les plateaux.
- **Matériel** : surfaces et outils décrits par leur effet réel dans le trajet lumineux.

Les fiches sont verticales et repliables. Le bouton **Fiche au hasard** permet de feuilleter l’application comme un carnet de révision.

## Règle éditoriale

Une fiche doit apporter au moins une des choses suivantes :

1. une nuance technique facile à oublier ;
2. un terme professionnel à garder actif ;
3. une méthode ou un dispositif réellement exploitable ;
4. une autre manière de penser le blocking, le décor ou le contraste.

Les Méthodes ne contiennent **aucun schéma BOS inventé**. Les visuels des Situations proviennent uniquement de tournages documentés et restent chargés depuis leurs publications d’origine.

## Fichiers V2

- `index.html` : interface et six rubriques
- `style.css` : UI responsive
- `data-v2.js` : contenu éditorial V2
- `data-visual-cases.js` : archive des vrais tournages, plans et BTS
- `app.js` : recherche globale, accordéons, cas de plateau, tirage aléatoire
- `sw.js`, `manifest.webmanifest` : PWA / cache
- `tests/verify.mjs` : contrôle de la structure V2 et des 15 visuels distincts

Les anciens fichiers V1 restent présents dans le dépôt comme archive de travail, mais ne sont plus chargés par `index.html`.

## Sources principales

Le contenu V2 renvoie notamment vers American Cinematographer, ARRI et Lightbridge lorsque la fiche dépend d’un terme, d’un test ou d’une méthode documentée. Les liens sont affichés directement dans les fiches concernées.

© Bruno OnSet
