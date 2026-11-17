# BOS — LIGHTING GUIDE

Carnet technique personnel de directeur de la photographie, avec dossiers de mise en lumière, diagnostics, sources et choix de projecteurs, rattaché à Bruno OnSet.

## Déploiement

Le dépôt est une application statique sans compilation, sans framework ni serveur.

- **Cloudflare Pages** → connexion au dépôt `BrunoOnSet/LIGHTING-GUIDE`.
- **Build command** : laisser vide.
- **Build output directory** : `/` (racine du dépôt). Selon l'interface Cloudflare, laisser ce champ vide pour un site statique directement à la racine.
- **Production branch** : `main`.

En prévisualisation locale, servir le dossier par HTTP : `python3 -m http.server 8000`, puis ouvrir http://localhost:8000/. Le simple mode `file://` peut limiter la recherche d'images externes et le service worker.

## Fichiers

- `index.html` : interface
- `style.css` : design BOS responsive
- `data.js` : sources documentaires et index des photographies
- `data-techniques.js`, `data-situations.js`, `data-projecteurs.js`, `data-accessoires.js` : référentiel de fiches
- `data-pro.js`, `data-pro-extra.js`, `data-pro-final.js`, `data-pro-methods.js` : dossiers professionnels, configurations alternatives, colorimétrie, pièges, contrôles et liens matériel
- `app.js` : recherche, filtres, favoris, vues de détail, schémas originaux, images Wikimedia
- `manifest.webmanifest`, `sw.js`, `icon.svg` : PWA
- `SOURCES.md` : sources, droits d'image et limites

## Parcours

La recherche croise les quatre rubriques dès qu'un terme est saisi ; les filtres de catégories agissent sur les résultats. Les favoris sont locaux. Les fiches de situation détaillent une séquence de mise en place, les projecteurs décrivent leurs usages, les accessoires sont expliqués en terminologie FR/EN et les schémas représentent le principe en plan, non des implantations constructibles au centimètre.


## Dossiers de chef opérateur — V1.1

Chaque **situation de tournage** possède désormais un dossier de travail approfondi. Les méthodes majeures (book light, bounce, négatif, diffusion, overhead, cross key et practicals) disposent également d’une version technique avancée. Les dossiers comprennent : implantation, alternatives, critères de contrôle caméra, difficultés de couleur/peaux, diagnostics symptôme → cause → correction, exemples de projecteurs actuels ou classiques, contrôle avant prise et documentation liée.

Une navigation précédente/suivante et un sélecteur par situation permettent de passer d’une fiche à une autre dans le même panneau ; des raccourcis donnent accès aux thèmes prioritaires directement depuis l’accueil.

**Fausse nuit et nuit américaine :** les fiches sont volontairement distinctes : filmer de jour pour nuit (day-for-night extérieur), filmer un intérieur nuit en plein jour avec occultations, créer une nuit dans un décor de studio, composer une source lunaire par fenêtre, produire une nuit extérieure, traiter les peaux rouges/magenta. La qualité des peaux varie selon les sources, l’exposition et la postproduction : les causes et solutions proposées restent des diagnostics à confirmer par essais caméra.


## Situations V1.2 — pleine page & plan / BTS / rendu

Les 27 **Situations** s'ouvrent en lecture pleine largeur, sur téléphone comme sur ordinateur (les autres rubriques conservent leur panneau latéral). Une navigation précédente / suivante et un sélecteur donnent accès à toute la bibliothèque sans refermer la fiche ; un index déroulant permet aussi d'accéder directement à une autre Situation.

L'**Atlas visuel** associe, lorsque les auteurs les ont publiés : plan d'implantation original, photo du plateau, photogramme final et analyse de chaque source (position / fonction / conséquence sur l'image). Les exemples provenants de films et de breakdowns professionnels sont regroupés **par tournage** afin de ne jamais montrer des images de trois scènes comme si elles étaient liées. Les images de comparaison et BTS sans photogramme identique sont signalées. Des photos supplémentaires du dispositif peuvent être consultées à partir de certaines études.

**Toutes les situations** conservent, même sans vrai jeu complet de photos, plusieurs configurations techniques et un plan BOS original vu du dessus. Ces schémas ne simulent pas les lux, les ratios réels, les distances de sécurité ou les appareils exacts d'une scène dont le plan de feu n'a pas été publié.

Au démarrage V1.2, dix études visuelles d'auteur sont disponibles, avec couvertures différentes : certaines ont trois documents de même scène, d'autres deux documents et un schéma pédagogique. Les autres situations affichent clairement l'absence de photos vérifiées. Pour les crédits, l'usage des images et les liens de source : voir [SOURCES.md](SOURCES.md).

## Conditions d'utilisation

Voir [SOURCES.md](SOURCES.md) pour les sources, les licences visuelles, les limites des fiches et la sécurité. Toutes les images intégrées sont des références externes, sans fichiers de photos copiés dans le dépôt. L'utilisation publique des images soumises au droit d'auteur reste à autoriser.

© Bruno OnSet — contenus éditoriaux et interface.