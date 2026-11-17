# BOS — LIGHTING GUIDE

Encyclopédie technique interactive de l’éclairage cinéma, rattachée à l’écosystème Bruno OnSet.

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
- `app.js` : recherche, filtres, favoris, vues de détail, schémas originaux, images Wikimedia
- `manifest.webmanifest`, `sw.js`, `icon.svg` : PWA
- `SOURCES.md` : sources, droits d'image et limites

## Parcours

La recherche croise les quatre rubriques dès qu'un terme est saisi ; les filtres de catégories agissent sur les résultats. Les favoris sont locaux. Les fiches de situation détaillent une séquence de mise en place, les projecteurs décrivent leurs usages, les accessoires sont expliqués en terminologie FR/EN et les schémas représentent le principe en plan, non des implantations constructibles au centimètre.

## Conditions d'utilisation

Voir [SOURCES.md](SOURCES.md) pour les sources, les licences visuelles, les limites des fiches et la sécurité. Toutes les images intégrées sont des références externes, sans fichiers de photos copiés dans le dépôt. L'utilisation publique des images soumises au droit d'auteur reste à autoriser.

© Bruno OnSet — contenus éditoriaux et interface.