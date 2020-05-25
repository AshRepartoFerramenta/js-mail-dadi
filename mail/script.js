//Richiesta utente prompt
var mailUtente = prompt('Inserire la mail personale');

//Disposizioni mail
var mailPersonale= ['rosa@gmail.com','luca@gmail.com','antonio@gmail.com','mario@gmail.com','elena@gmail.com',];

//Variabile di 
var mailCorretta = mailPersonale;

//Verifica inserimento
var emailCorretta = false;

//Array verifica accesso
for(var i = 0 ; i < mailPersonale.lenght; i++ ){
    if(mailPersonale[i] == emailCorretta){
        emailCorretta = true ;
    }
}

if(emailCorretta){
    alert( 'Accedi alla mail');
}else {
    alert( 'Email inserita non valida');
}
