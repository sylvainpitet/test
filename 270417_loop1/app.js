/*global console*/
function init() {
    "use strict";
    var exo1;
    
    exo1 = function exo1(e) {
        console.log(e);
        var i = 0, tab = [11, null, true, NaN, {msg: "hello"}];
        console.log(tab);
        while (i < tab.length) {
            console.log(tab[i]);
            i += 1;
        }
        console.log("fin de boucle");
    };
    
        console.log("document ready !!!");
    
        document.getElementById("exo1").onclick = exo1;
}
        