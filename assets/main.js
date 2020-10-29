// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina
// e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi
$(document).ready(function () {

    var min = 1;
    var max = 100;
    var numbers = 5;
    var millisecondi = 10000;
    var countdown_seconds = millisecondi / 1000;
    var numeri_casuali = [];
    var numeri_inseriti = [];
    var numeri_indovinati = [];

    // Creazione array di 5 numeri casuali da 1 a 100
    numeri_casuali = random_generator(numbers, min, max);
    console.log(numeri_casuali);

    // Inserisce nella pagina l'array di numeri
    $("#random_n").text(numeri_casuali.join(" | "));

    // Creazione timer countdown
    $("#timer").text(countdown_seconds);
    var countdown = setInterval( function(){
        countdown_seconds--;
        $("#timer").text(countdown_seconds);
        // Se arriva a 0 secondi, blocca il setInterval
        if(countdown_seconds<=0){
            clearInterval(countdown);
        }
    }, 1000);

    // Eventi dopo i 30 secondi
    setTimeout( function(){
        // Svuota la lista dei numeri casuali
        $("#random_n").text("");
    }, millisecondi);

    // Dopo mezzo secondo dallo svuotamento
    setTimeout( function(){
        // Chiede l'inserimento dei 5 numeri
        do {
            var input_number = parseInt(prompt("Inserisci un numero"));
            if(!numeri_inseriti.includes(input_number) && !isNaN(input_number)){
                numeri_inseriti.push(input_number);
                console.log(numeri_inseriti);
            } else{
                alert("Numero inserito non valido o già presente nell array");
            }
        } while (numeri_inseriti.length < 5);




        // Mostro l' array dei numeri casuali e inseriti
        $("#random_n").text(numeri_casuali.join(" | "));
        console.log(numeri_casuali);
        $("#input_n").text(numeri_inseriti.join(" | "));
        console.log(numeri_inseriti);

        // Verifica e conta dei numeri indovinati
        for (var i = 0; i < numeri_inseriti.length; i++) {
            if( numeri_casuali.includes(numeri_inseriti[i]) ){
                numeri_indovinati.push(numeri_inseriti[i]);
            }
        }

        console.log(numeri_indovinati);



    }, (millisecondi+500));














// ************************ Functions ************************

// Funzione countdosno che mostra i numeri casuali e li nasconde dopo tot millisecondi



// Funzione che restituisce un array di 5 numeri casuali
    function random_generator(numbers, n_min, n_max){
        var array = [];
        do {
            var current_random = getRndInteger(n_min, n_max);
            if(!array.includes(current_random)){
                array.push(current_random);
            }
        } while (array.length < 5);
        return array;
    }

// Funzione di creazione di un numero intero casuale
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

});
