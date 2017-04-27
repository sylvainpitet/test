/*global window, select, log*/
// création d'un slider simple
var slider = (function slider() {
    "use strict";
    var dom = {}, faireDefiler, images, position = 0;

    images = [
        "fractale_1.jpg",
        "fractale_2.jpg",
        "fractale_3.jpg"
    ];

    // on attend le load pour déclencher le programme
    window.onload = function start() {
        // on séléctionne les boutons
        dom.image = select(".slider .img");
        dom.btnPrev = select(".slider .btn.prev");
        dom.btnNext = select(".slider .btn.next");
        // on écoute les clicks sur les deux boutons
        dom.btnPrev.onclick = faireDefiler;
        dom.btnNext.onclick = faireDefiler;
    };

    faireDefiler = function faireDefiler() {
        // dans ce contexte, this représente le bouton cliqué
        //  log(this);
        if (this.classList.contains("next")) {
            position += 1;
            dom.image.src = "images/" + images[position];
        }
    };

    
    
    
    
    
    
    
}());