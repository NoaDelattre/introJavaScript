//var permet de déclarer une variable globale
var myVar = "Hello World!";
var monNombre = 42;
//let permet de déclarer une variable locale
let maVariableLocale = "Je suis locale";
//const permet de déclarer une constante
const MA_CONSTANTE = 3.14;

//Affichage dans la console
console.log(myVar);
console.log("Le nombre est : " + monNombre);
console.log(maVariableLocale);
console.log("La constante est : " + MA_CONSTANTE);

console.log("Atape 1  ");


console.log("Atape 2  ");

function maFonction(parametre){
    console.log("Bonjour" + parametre + "!")
}

maFonction("Julien")
maFonction("Alice")
maFonction("Bob")