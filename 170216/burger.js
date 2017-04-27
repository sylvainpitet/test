/*global console*/
var burger = function burger() {
    "use strict";
    var icone, navMobile, animerBurger;
    
    // on cible l'icone
    icone = document.getElementById("burger");
    // on cible la nav mobile
    navMobile = document.querySelector('#nav_mobile .list');

    animerBurger = function animerBurger() {
        // si navMobile n'a pas la classe active => on la met
        // si navMobile a la classe active => on l'enlève
        na
        
        vMobile.classList.toggle('is-active');
    };
    
    // au click sur l'icone, la fonction animerBurger
    // est déclenchée
    icone.onclick = animerBurger;
};