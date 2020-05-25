// ** Dadi

// Variabili dadi Computer
var primotirocomputer = Math.floor(Math.random() * 6) + 1; 
    alert('Il Computer ha ' + primotirocomputer);
var secondotirocomputer = Math.floor(Math.random() * 6) + 1; 
    alert('Il Computer ha ' + secondotirocomputer);

// Variabili dadi giocatore
var primotirogiocatore = Math.floor(Math.random() * 6) + 1; 
    alert('Il Giocatore ha ' + primotirogiocatore);
var secondotirogiocatore = Math.floor(Math.random() * 6) + 1; 
    alert('Il Giocatore ha ' + secondotirogiocatore);

//Variabili giocate
var tirocomputer = primotirocomputer + secondotirocomputer;
var tirogiocatore = primotirogiocatore + secondotirogiocatore;

// Risultato delle giocate
if (tirocomputer == tirogiocatore){
    alert('PARI');
}else if (tirocomputer > tirogiocatore){
    alert('HAI PERSO');
}else {
    alert('HAI VINTO');
}
