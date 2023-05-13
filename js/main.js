// selezioniamo il bottone dal quale, mediante l'evento click verranno generati i 5 numeri e partirà il countdown
let start = document.getElementById("my-button");

// settiamo la veriabile per i secondi e mostriamoli in pagina
let seconds = 5;

// settiamo la varibile per i numeri indovinati
let totNumeriIndovinati = 0;

// generiamo l'evento click dal quale partirà il processo
start.addEventListener('click',

    function(){
        console.log('Ciao!');

        // generiamo i 5 numeri casuali tramite la funzione
        let fiveNumbers = createNumbersArray();
        console.log(fiveNumbers);

        // mostriamo in pagina i 5 numeri generati
        document.getElementById("numbers").innerHTML = fiveNumbers;

        // gestiamo il countdown
        let clock = setInterval(

            function(){
                if(seconds === 0){
                    clearInterval(clock);
                    document.getElementById("numbers").innerHTML = "";

                    // chiedo all'utente di inserire i 5 numeri
                    for(i = 0; i < 5; i++){
                        const userNumbers = parseInt(prompt("Inserisci i numeri uno alla volta"));
                        console.log(userNumbers);

                        if(fiveNumbers.includes(userNumbers)){
                            totNumeriIndovinati++;
                            console.log(totNumeriIndovinati);

                            // mostriamo in pagina quanti e quali numeri sono stati indovinati
                            document.getElementById("numeri-indovinati").innerHTML = "Il totale dei numeri che hai indovinato è: " + totNumeriIndovinati;
                        }
                    }

                }else{
                    seconds--;
                    console.log(seconds);
                    document.getElementById("time").innerHTML = "Timer: " + seconds;
                }
            },

            1000

        )

    }

)


// FUNZIONI
// funzione per generare numeri random
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// funzione per generare l'array di 5 valori 
function createNumbersArray(){
    let rememberNumbers = [];

    while (rememberNumbers.length < 5) {
        let randomNumbers = randomNumber(1 , 100);

        if (rememberNumbers.indexOf(randomNumbers) === -1) {
            rememberNumbers.push(randomNumbers);
        }
    }
    
    return rememberNumbers;
    
}