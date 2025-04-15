//MOIS
var mois = "mars"

//DATE
const date = '31/03/2025';

//electreicite
const debut = 77;
const fin = 107;
const payer = 7500;
const pu = 250;





















const index = fin - debut;
const nat = pu * index;
const reste = payer - nat;
const nattotal = nat;
const payertotal = payer;
const restetotal = payertotal - nattotal;

document.getElementById("debut").textContent = debut;
document.getElementById("fin").textContent = fin;
document.getElementById("index").textContent = index;
document.getElementById("pu").textContent = pu;
document.getElementById("nat").textContent = nat;
document.getElementById("payer").textContent = payer;
document.getElementById("reste").textContent = reste;
document.getElementById("nattotal").textContent = nattotal;
document.getElementById("restetotal").textContent = restetotal;
document.getElementById("payertotal").textContent = payertotal;
document.getElementById("mois").textContent = mois;



// DATE

document.getElementById("date").textContent = date;



//RECU 
//FINAL  <h4 style="text-align: right;"> <a href="" download="reçu_de_paiement" style="background-color: rgb(255, 0, 255);" ><b style="color: rgb(0, 0, 0);"> reçu <img src="../IMG/tele.svg"></b></a></h4>
//no dispo      <h4 style="text-align: right;"> <a   style="background-color: rgb(255, 0, 0);" ><b style="color: rgb(0, 0, 0);"> pas disponible <img src="./IMG/tele.svg"></b></a></h4>

//STATUT ☑️
var affiche = document.getElementById("affiche");
var statut = restetotal ;
if (debut === null ) {
    document.getElementById("statut").textContent = "" ;
} else {
    if (statut === 0) {
        document.getElementById("statut").textContent = "☑️";
        affiche.innerHTML = '<h4 style="text-align: right;"> <a href="" download="reçu_de_paiement" style="background-color: rgb(255, 0, 255);" ><b style="color: rgb(0, 0, 0);"> reçu <img src="../IMG/tele.svg"></b></a></h4>'
    } else { 
        if (statut > 0) {
            document.getElementById("statut").textContent = statut ;
            document.getElementById("val").textContent = "oui";
            document.getElementById("eval").textContent = "oui";
            affiche.innerHTML = '<h4 style="text-align: right;"> <a href="" download="reçu_de_paiement" style="background-color: rgb(255, 0, 255);" ><b style="color: rgb(0, 0, 0);"> reçu <img src="../IMG/tele.svg"></b></a></h4>'
        }
document.getElementById("statut").textContent = statut ;
}}

