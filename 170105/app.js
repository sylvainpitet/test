/*global */

function log(data) {
    "use strict";
    window.console.log(data);
}

var app = function app() {
    "use strict";
    var crouge, cvert, changerCouleur;
    crouge = document.getElementById('c_rouge');
    cvert = document.getElementById('c_vert');
    //    console.log('page chargée');
    //    log(crouge);
    //    log(cvert);

    changerCouleur = function changerCouleur(e) {
        log(this); // la source du click...
        var autreCarre;

        if (this.classList.contains("rouge")) {
            autreCarre = document.querySelector('.vert');         
            autreCarre.classList.add('rouge');
    
            
            autreCarre.classList.remove('vert');
            this.classList.remove('rouge');
            this.classList.add('vert');

        } else {
            autreCarre = document.querySelector('.rouge');
            autreCarre.classList.add('vert');
            autreCarre.classList.remove('rouge');
            this.classList.remove('vert');
            this.classList.add('rouge');

        }
    };

    // utiliser onclick pour déclencher une function
    crouge.onclick = changerCouleur;
    cvert.onclick = changerCouleur;
};