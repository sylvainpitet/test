function byId(id) {
    "use strict";
    return document.getElementById(id);
}

function log(data) {
    "use strict";
    window.console.log(data);
}

var app = function app() {
    "use strict";
    var action, btn, resultat, saisie, inverser;
    
    btn = byId("btn_action");
    saisie = byId("saisie");
    resultat = byId("resultat");
    
    action = function action() {
        log("btn cliqué !!!");
        var motInverse = inverser(saisie.value);
        log("motInverse => ");
        log(motInverse);
        resultat.textContent = motInverse;
    };
    
    inverser = function inverser(mot) {
        var i, tableau, res;
        res = '';
        tableau = mot.split('');

        log('**** parcours à l\'envers ****');
        for (i = tableau.length - 1; i >= 0; i -= 1) {
            log(tableau[i]);
            res += tableau[i];
        }
        // on a concaténé chaque lettre dans res...
        return res;
    };
    
    btn.onclick = action;
};