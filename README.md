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
- `data-method-tips.js` : conseils de chefs opérateurs attribués et sources originales
- `app.js` : recherche, filtres, favoris, bulles Méthodes et fiches Situations
- `manifest.webmanifest`, `sw.js`, `icon.svg` : PWA
- `SOURCES.md` : sources, droits d'image et limites

## Méthodes V1.4 — consultation rapide

Les **62 fiches Méthodes** s'affichent verticalement en **bulles repliables**, fermées par défaut et indépendantes les unes des autres. Filtres : Toutes, Méthodes, Configurations types.

Chaque bulle ouverte présente une seule indication pratique, puis les conseils professionnels réellement retrouvés, avec nom et lien vers l'auteur. Lorsque la fiche dispose d'une vraie photographie documentaire, elle reste visible avec son crédit et son lien source. **Aucun schéma généré par BOS, aucune image de substitution ni longue liste numérotée ne figure dans Méthodes.**

Au démarrage, **35 conseils sourcés** concernent **33 méthodes**. Ce sont des synthèses éditoriales françaises, pas des citations. Lorsque la provenance d'un conseil n'est pas vérifiable, aucun nom de chef opérateur n'est attribué.

Les favoris fonctionnent dans les bulles. Les raccourcis et liens de méthode utilisent des adresses `#methode/<id>` et ouvrent directement la bonne bulle, sans passer par les anciennes fiches à schéma.

Le module `data-method-tips.js` conserve les notes et les URL de référence. Les quatre photographies existantes sont hébergées par leurs auteurs ; leur affichage et réutilisation publique dépendent des sites sources et des droits applicables.
## Parcours

La recherche croise les quatre rubriques dès qu'un terme est saisi ; les filtres de catégories agissent sur les résultats. Les favoris sont locaux. Les fiches de situation détaillent une séquence de mise en place, les projecteurs décrivent leurs usages, les accessoires sont expliqués en terminologie FR/EN et les schémas représentent le principe en plan, non des implantations constructibles au centimètre.


## V1.3 — Situations réelles, une seule fois

**Situations** contient cinq études de tournages réels. Chaque carte correspond à un **dispositif distinct**, avec un **plan d'éclairage publié par son auteur**, une **photo du plateau du même tournage**, une **image tournée**, et une lecture claire de chaque source : emplacement, fonction et conséquence sur le rendu.

Les cinq études retenues sont :

- *The Bar* — Josh White (plan large, intérieur nuit).
- *Nights Crawling* — Grant MacAllister (appartement dystopique).
- *The Fantastic Four: First Steps* — Jess Hall ASC, Times Square (scène 54).
- *The Fantastic Four: First Steps* — Jess Hall ASC, Worldship (scène 83, autre décor / photos distinctes).
- *Gibson Songbook: Fantastic Negrito* — Grant MacAllister (interview).

**Aucune photographie du triptyque principal n'est répétée entre deux Situations.** Le plan large et le gros plan de *The Bar* sont regroupés dans une même étude, plutôt que comptés comme deux situations. Les schémas ne sont jamais attribués à un autre tournage.

La rubrique **Méthodes** conserve les 35 principes d'éclairage et les **27 anciennes configurations types**, classées ici comme connaissances techniques (faux jour, nuit américaine, mouvement d'acteurs, etc.). Leurs dossiers professionnels restent accessibles, mais ils ne réutilisent plus les photos des tournages de Situations. Ce sont des configurations possibles, pas des plans de production attribués à un auteur.

La navigation précédente / suivante et le sélecteur sont maintenus. Les photos sont hébergées par leurs auteurs ; l'affichage sur une page publique reste soumis aux conditions des droits photographiques et aux éventuelles protections contre le chargement distant.

## Organisation technique

- `data-shoots.js` sélectionne cinq études distinctes dans l'archive documentaire, puis déplace les configurations génériques vers Méthodes.
- `data-visual-cases.js` conserve les sources et notes d'archive, **sans aucune association automatique d'un même tournage à plusieurs situations**.
- `app.js` construit la page courte : contexte, trois visuels, sources analysées poste par poste et point à retenir.
- `tests/verify.mjs` contrôle notamment qu'il existe cinq situations, 15 images distinctes, un plan de feu + une photo de plateau + un résultat par fiche, et aucun doublon d'URL.
- `sw.js` assure la consultation hors ligne de l'interface et des textes. Les photographies hébergées ailleurs requièrent une connexion Internet.

## Conditions d'utilisation

Voir [SOURCES.md](SOURCES.md) pour les sources, les licences visuelles, les limites des fiches et la sécurité. Toutes les images intégrées sont des références externes, sans fichiers de photos copiés dans le dépôt. L'utilisation publique des images soumises au droit d'auteur reste à autoriser.

© Bruno OnSet — contenus éditoriaux et interface.