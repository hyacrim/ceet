//MOIS
var mois = "septembre"

//DATE
const date = '27/09/2023';

//electreicite
const debut = 512;
const fin = 563;
const payer = null;
const pu = 250;

//EAU
const edebut = 82;
const efin = 88;
const epayer = null;
const epu = 400;



















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

// EAU

const eindex = efin - edebut;
const enat = epu * eindex;
const ereste = epayer - enat;
const enattotal = enat;
const epayertotal = epayer;
const erestetotal = epayertotal - enattotal;


document.getElementById("edebut").textContent = edebut;
document.getElementById("efin").textContent = efin;
document.getElementById("eindex").textContent = eindex;
document.getElementById("epu").textContent = epu;
document.getElementById("enat").textContent = enat;
document.getElementById("epayer").textContent = epayer;
document.getElementById("ereste").textContent = ereste;
document.getElementById("enattotal").textContent = enattotal;
document.getElementById("erestetotal").textContent = erestetotal;
document.getElementById("epayertotal").textContent = epayertotal;

// DATE

document.getElementById("date").textContent = date;
document.getElementById("edate").textContent = date;



//RECU 
//FINAL  <h4 style="text-align: right;"> <a href="" download="reçu_de_paiement" style="background-color: rgb(255, 0, 255);" ><b style="color: rgb(0, 0, 0);"> reçu <img src="../IMG/tele.svg"></b></a></h4>
//no dispo      <h4 style="text-align: right;"> <a   style="background-color: rgb(255, 0, 0);" ><b style="color: rgb(0, 0, 0);"> reçu no disponible <img src="./IMG/tele.svg"></b></a></h4>

//STATUT ☑️
var affiche = document.getElementById("affiche");
var statut = restetotal + erestetotal;
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

