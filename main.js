const divResultat = document.querySelector("#resultat");

var tabJeu = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

afficherTableau();

function afficherTableau() {
    var txt = "";

    for (let i = 0; i < tabJeu.length; i++) {
        txt += "<div>";
        for (let j = 0; j < tabJeu[i].length; j++) {
            if (tabJeu[i][j] === 0) {
                txt += "<button class = 'btn btn-primary m-2'>Afficher</button>"
            } else {
                txt += "<img src='" + getImage(tabJeu[i][j]) + "' class='m-2'>";

            }

        }
        txt += "</div>";
    }
    divResultat.innerHTML = txt;
}

function getImage(valeur) {
    var imgTxt = "image/";
    switch (valeur) {
        case 1: imgTxt += "elephant.png";
            break;
        case 2: imgTxt += "giraffe.png";
            break;
        case 3: imgTxt += "hippo.png";
            break;
        case 4: imgTxt += "monkey.png";
            break;
        case 5: imgTxt += "panda.png";
            break;
        case 6: imgTxt += "parrot.png";
            break;
        case 7: imgTxt += "penguin.png";
            break;
        case 8: imgTxt += "pig.png";
            break;
        default: console.log("Y a un truc qui marche pas");
    }
    return imgTxt;
}