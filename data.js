/* BOS LIGHTING GUIDE — référentiel éditorial V1
 * Les photographies affichées proviennent d'URLs de sites sources : aucune image n'est copiée dans ce dépôt.
 * Les sources sont datées et listées ici. Les schémas sont des dessins originaux, non photométriques.
 */
window.BOS_GUIDE={techniques:[],situations:[],projecteurs:[],accessoires:[]};
window.BOS_SOURCES={
arri:{label:"ARRI · Catalogue éclairage",url:"https://www.arri.com/en/lighting"},
skypanel:{label:"ARRI · Données SkyPanel X",url:"https://www.arri.com/en/lighting/led-panel-lights/skypanel-x/tech-data"},
m18:{label:"ARRI · Fiche M18",url:"https://www.arri.com/en/lighting/daylight-tungsten/daylight/m-series/m18"},
aputure:{label:"Aputure · Famille STORM",url:"https://aputure.com/EN-US/product-families/storm"},
storm1200:{label:"Aputure · STORM 1200x",url:"https://aputure.com/EN-US/products/storm-1200x"},
nanlux:{label:"Nanlux · Gamme Evoke chez Impact Événement",url:"https://impact-even.com/en/marques/nanlux/"},
astera:{label:"Astera · Catalogue officiel",url:"https://astera-led.com/"},
kino:{label:"Kino Flo · Catalogue officiel",url:"https://kinoflo.com/"},
dedo:{label:"Dedolight · Catalogue officiel",url:"https://www.dedolight.com/"},
cream:{label:"Creamsource · Catalogue officiel",url:"https://creamsource.com/"},
litegear:{label:"LiteGear · Catalogue officiel",url:"https://www.litegear.com/"},
k5600:{label:"K5600 · Catalogue officiel",url:"https://www.k5600.com/"},
rosco:{label:"Rosco · Butterfly & Overheads, matériaux et dimensions",url:"https://emea.rosco.com/sites/default/files/content/resource/2023-08/Rosco_Butterflies_and_Overheads_data_sheet_0.pdf"},
diffusion:{label:"Expressway Cine · Comparatif de diffusions",url:"https://blog.expresswaycine.com/diffusion-101/"},
matthews:{label:"Matthews Studio Equipment · C-stands",url:"https://www.msegrip.com/collections/c-stands"},
grip:{label:"Serious Grippage · Inventaire matériel grip",url:"https://www.seriousgrippage.com/grip-equipment/"},
cinemech:{label:"CineMechanics · Flags, nets et floppies",url:"https://cinemechanics.com/stories/lighting-grip/stands"},
deakins:{label:"Roger Deakins · Cove lighting (forum)",url:"https://www.rogerdeakins.com/forums/topic/cove-lightning/"},
book:{label:"No Film School · Book light, Shane Hurlbut ASC",url:"https://nofilmschool.com/2012/11/build-book-light-shane-hurlbut"},
moving:{label:"HSM University · Lighting people for motion",url:"https://hsmuniversity.org/us/course/cine-220-lighting-for-the-moving-image-i/lesson-9-lighting-people-for-motion"},
lighting:{label:"Manuel des techniciens lumière · principes de motivation",url:"https://nosotrasaudiovisuales.cl/noa/wp-content/uploads/2025/04/set_lighting_technicians_handbook_film_lighting_equipment_practice_and_electrical_distribution.pdf"},
wiki:{label:"Wikimedia Commons · Photographies sous licences libres",url:"https://commons.wikimedia.org/wiki/Category:Film_lighting_equipment"}
};
window.BOS_MEDIA={
arriM18:{url:"https://www.direct-digital.com/sites/default/files/Website-Stock-Image-Bank/MSRARRIM18%20-%2001.jpg",credit:"Photographie réelle ARRI M18 · Direct Digital",page:"https://www.direct-digital.com/en/hire/arri-m18-1800w-hmi-arri-max-1000hz-kit"},
vortex8:{url:"https://www.prisma.film/media/image/product/10684/lg/creamsource-vortex-8-650w-true-colour-led-inklusive-buegel~3.png",credit:"Photographie produit Creamsource Vortex8 · Prisma Film",page:"https://www.prisma.film/Creamsource-Vortex-8-650W-True-Colour-LED-Including-Yoke"},
cstand:{url:"https://www.msegrip.com/cdn/shop/files/c-stand-collection.jpg?v=1732890366&width=875",credit:"Photographie C-stand · Matthews Studio Equipment",page:"https://www.msegrip.com/collections/matthews-university"},
softbox:{url:"https://media.vocas.nl/media/catalog/product/a/p/aputure_light_dome_iii-2-vocas.png",credit:"Photographie d'une softbox Light Dome III · Vocas",page:"https://vocas.nl/aputure-light-dome-iii/"},
portraitSetup:{url:"https://www.newsshooter.com/wp-content/uploads/2023/07/1DX_2931.jpg",credit:"Mise en situation d'une softbox Aputure Light Dome III · Newsshooter",page:"https://www.newsshooter.com/2023/07/25/aputure-announces-light-dome-iii-and-light-dome-mini-iii/"},
studioGrid:{url:"https://www.panavision.com/images/default-source/articles/thumbnail_simon_rowling_video-1000x507-eaac6fd.png?sfvrsn=195b3a39_1",credit:"Mise en œuvre de diffuseurs sur une scène de nuit · Panavision",page:"https://www.panavision.com/highlights/highlights-detail/lighting-a-night-interior-bar-scene-with-lee-filters"},

book:{url:"https://nofilmschool.com/media-library/shane-hurlbut-book-light2-e1353446145555.jpg?id=34091967&width=980",credit:"Photographie de montage : No Film School / article Shane Hurlbut ASC",page:"https://nofilmschool.com/2012/11/build-book-light-shane-hurlbut"},
bounce:{url:"https://static.wixstatic.com/media/cb34b4_6257818ca12b4e96bcd70f58a39aaa40~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85/cb34b4_6257818ca12b4e96bcd70f58a39aaa40~mv2.jpg",credit:"Essais de diffusion et réflexion : Matt Porwoll",page:"https://www.mattporwoll.com/the-ultimate-diffusion-bounce-test"},
cove:{url:"https://www.rogerdeakins.com/wp-content/uploads/hm_bbpui/214768/aa8nwhlf7748n9z0th1tboyxdpd4mp96.jpeg",credit:"Discussion sur le cove lighting : Roger Deakins",page:"https://www.rogerdeakins.com/forums/topic/cove-lightning/"},
window:{url:"https://images.squarespace-cdn.com/content/v1/559285ebe4b078fd8d34c240/1507120047506-W8XXVWDTW08FQURZA0M8/20170830_blinds-direct_sept-oct-tv-ad_0238.jpg",credit:"Installation HMI en extérieur : Don McVey DOP",page:"https://donmcveydop.com/cinematography-blog/2017/10/4/tv-commercial-lighting-breakdown"},
floppy:{url:"https://images.squarespace-cdn.com/content/v1/63936321ad4f1a7c8e5384d6/1681223407519-FQICY3YF3MTNNIZ442VN/Untitled-1.jpg?format=1500w",credit:"Floppy sur pied : Bulb Rentals / Kupo",page:"https://bulbrentals.co.uk/store-2-2/p/the-kupo-kt-3636tf-full-frame-black-floppy-top-hinge"},
skypanel:{url:"https://avgear.shop/21286-large_default/arri-skypanel-x21-soft-hard-light-package-schuko-led-panel.webp",credit:"Photo produit ARRI SkyPanel X21 : AV Gear",page:"https://www.arri.com/en/lighting/led-panel-lights/skypanel-x"},
storm1200:{url:"https://cdn.shopify.com/s/files/1/1343/1935/files/Storm1200x-04.png?v=1774336290",credit:"Photo produit : Aputure",page:"https://aputure.com/EN-US/products/storm-1200x"},
nanlux2400:{url:"https://shop16774.sfstatic.io/upload_dir/shop/product-images/nanlux/spot/nanlux-evoke-2400b-spot-light-with-45-degree-reflector-rear-view-left.jpg",credit:"Photo produit Nanlux Evoke 2400B : Stjernholm",page:"https://impact-even.com/en/marques/nanlux/"},
orbiter:{url:"https://www.efd.com.mx/image/familias/OrbiterArri%20Orbiter/62-orbiter.png",credit:"Photo produit ARRI Orbiter : EFD",page:"https://www.arri.com/en/lighting"},
titan:{url:"https://cdn.awsli.com.br/2500x2500/555/555190/produto/226544242/astera_fp1_individual_tube_titantube_72w_power_1541950-8rx9dalg7r.jpg",credit:"Photo produit Astera Titan Tube : MCI Store",page:"https://astera-led.com/"}
};
window.BOS_REGISTER=(section,entries)=>{window.BOS_GUIDE[section].push(...entries)};
window.BOS_REFERENCE_DATE="17 novembre 2026";
