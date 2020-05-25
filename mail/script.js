//Richiesta utente prompt
var mailUtente = prompt('Inserire la mail personale');

//Disposizioni mail
var mailPersonale= ['rosa@gmail.com','luca@gmail.com','antonio@gmail.com','mario@gmail.com','elena@gmail.com',];


//Verifica inserimento
var mailCorretta = false;

//Array verifica accesso
for(var i = 0 ; i < mailPersonale.lenght; i++ ){
    if(mailPersonale[i] == mailUtente){
        mailCorretta = true ;
    }
}
//Condizioni di correttezza o meno
if(mailCorretta == true){
    alert( 'Email corretta');
}else {
    alert( 'Email inserita non valida');
}
