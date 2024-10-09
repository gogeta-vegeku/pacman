let pacman = document.getElementById("pacman")
let posX = 0, posY = 0;
let pg = document.getElementById("pg");

let hammertime = new Hammer(pg);


console.dir(pg);
let widthPg = pg.clientWidth;
let heightPg = pg.clientHeight;
console.log(posX, posY);
console.dir(pacman);
//declarare una funzione
function movePacman(direction) {
    //condizione che definisce il limite dello spostamento
    // posX>0 => gauche
    //posY>0 => haut
    //posX < widthPg - 200 => droite
    //posY < widthPg - 200 => bas

    switch (direction) {
        case "gauche":
            if (posX > 0) {
                posX -= 50;
            }
            break;
        case "haut":
            if (posY > 0) {
                posY -= 50;
            }
            break;
        case "droit":
            if (posX < widthPg - 200) {
                posX += 50;
            }
            break;
        case "bas":
            if (posY < heightPg - 200) {
                posY += 50;
            }
            break;

        default:
            break;
    }


    pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
}
window.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 37:
        case 81:
            movePacman("gauche");
            break;
        case 38:
        case 90:
            movePacman("haut");
            break;
        case 39:
        case 68:
            movePacman("droit");
            break;
        case 40:
        case 83:
            movePacman("bas");
            break;

        default:
            break;
    }

})
//gestione tattile
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
hammertime.on("swipeleft swiperight swipeup swipedown ", function (ev) {
    console.dir(ev.type);
    switch (ev.type) {
        case "swipeleft"://gauche
            movePacman("gauche");
            break;

        default:
            break;

        case "swiperight"://droit
            movePacman("droit");
            break;

        case "swipeup"://haut
            movePacman("haut");
            break;

        case "swipedown"://bas
            movePacman("bas");
            break;

    }
});




