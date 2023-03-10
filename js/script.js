// VARIABILI
const rowElement = document.querySelector(".row");
let colore="";
let messaggio="";

// LOGICA 
// ALGORITMO BUZZFIZZ
for(let i = 1; i <= 100 ; i++ ){
    if(i % 3 === 0 && i % 5 === 0){
        colore="rosso";
        messaggio="FIZZBUZZ";
    }else if(i % 3 === 0){
        colore="verde";
        messaggio="FIZZ";
    }else if(i % 5 === 0){
        colore="giallo";
        messaggio="BUZZ";
    }else{
        colore="blu";
        messaggio=i;
    }  
    // OUTPUT
    rowElement.innerHTML += `<div class="col ${colore}"> <p>${messaggio}</p> </div>`;
}

