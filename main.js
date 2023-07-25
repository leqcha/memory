const divResultat = document.querySelector("#resultat");

var tabJeu = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

// var tabResultat = [
//     [1,4,3,4],
//     [1,2,3,2],
//     [7,8,6,5],
//     [8,7,5,6]
// ]
var tabResultat = genereTableauAleatoire();

var oldSelection = [];
var nbAffiche = 0;
var ready = true;

afficherTableau();

function afficherTableau() {
    var txt = "";

    for (var i = 0; i < tabJeu.length; i++) {
        txt += "<div>";
        for (var j = 0; j < tabJeu[i].length; j++) {
            if (tabJeu[i][j] === 0) {
                txt += "<button class='btn btn-primary m-2' onClick='verif(\"" + i + "-" + j + "\")'>Tourner</button>";
            } else {
                txt += "<img src='" + getImage(tabJeu[i][j]) + "' class='m-2'>";
            }
        }
        txt += "</div>";
    }

    divResultat.innerHTML = txt;

    // Vérifier si toutes les figures sont retournées
    if (toutesFiguresRetournees()) {
        afficherMessageBravo();
    }
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
        default: console.log("cas non pris en compte")
    }
    return imgTxt;
}

function verif(bouton) {
    if (ready) {
        nbAffiche++;

        var ligne = bouton.substr(0, 1);
        var colonne = bouton.substr(2, 1);

        tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
        afficherTableau();

        if (nbAffiche > 1) {
            ready = false;
            setTimeout(() => {
                //verification
                if (tabJeu[ligne][colonne] !== tabJeu[oldSelection[0]][oldSelection[1]]) {
                    tabJeu[ligne][colonne] = 0;
                    tabJeu[oldSelection[0]][oldSelection[1]] = 0;
                }
                afficherTableau();
                ready = true;
                nbAffiche = 0;
                oldSelection = [ligne, colonne];
            }, 1000)
        } else {
            oldSelection = [ligne, colonne];
            console.log("Bien joué !");
        }
    }
}

function genereTableauAleatoire() {
    var tab = [];
    var nbImagePosition = [0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < 4; i++) {
        var ligne = [];
        for (var j = 0; j < 4; j++) {
            var fin = false;
            while (!fin) {
                var randomImage = Math.floor(Math.random() * 8);
                if (nbImagePosition[randomImage] < 2) {
                    ligne.push(randomImage + 1);
                    nbImagePosition[randomImage]++;
                    fin = true;
                }
            }
        }
        tab.push(ligne);
    }
    return tab;
}
function toutesFiguresRetournees() {
    // Vérifier si toutes les figures sont retournées
    for (let i = 0; i < tabJeu.length; i++) {
        for (let j = 0; j < tabJeu[i].length; j++) {
            if (tabJeu[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

function afficherMessageBravo() {
    // Afficher le message "Bravo Lucien" avec une animation sympa ici.
    // Par exemple, vous pouvez créer un élément de texte et lui ajouter des classes d'animation.
    var messageBravo = document.createElement("div");
    messageBravo.textContent = "Bravo Lucien!";
    messageBravo.classList.add("message-bravo", "animate__animated", "animate__bounceInDown");
    divResultat.appendChild(messageBravo);
}