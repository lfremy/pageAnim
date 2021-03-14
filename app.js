// RECUPERATION DES VARIABLES
const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');


// EVENEMENT DU CHARGEMENT DE LA PAGE - GREENSOCK
window.addEventListener('load', () =>{
    //Créer la timeLine 
    const TL = gsap.timeline({paused : true});
    //Méthode stagger FROM qui anime des éléments à la suite des autres
    TL
            // 1 pour la durée                                              Stagger, durée entre les anims 
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
                                                                // -=1 Ne pas faire démarrer l'anim à la fin de la seconde
    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    TL.play();
})