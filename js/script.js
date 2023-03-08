let messageBox = document.getElementById("message-box");
let inputBox = document.getElementById("input-box");
let submit = document.getElementById("submit");
let distance = new Number;
const KM_COST = new Number(0.21);
let age = new Number;
let ticketCost = new Number;

function start(){

    messageBox.textContent = "Cominciamo! Dimmi, quanti km intendi percorrere sul nostro treno?";
    inputBox.classList.remove("d-none");
    submit.setAttribute("onclick", "askDistance()");
    submit.textContent = "Invia";
}

function askDistance(){
    
    distance = getPositiveInteger();

    if(!Number.isNaN(distance)){
        messageBox.textContent = "Bene, ora dimmi la tua età";
        submit.setAttribute("onclick", "askAge()");
    }
}

function askAge(){
    
    age = getPositiveInteger();

    if(!Number.isNaN(age)){
        messageBox.textContent = "La tariffa è di " + KM_COST + "€ al chilometro. Inoltre viene applicato uno sconto del 20% per i minorenni e del 40% per gli over 60";
        inputBox.classList.add("d-none");
        submit.textContent = "Calcola";
        submit.setAttribute("onclick", "showResult()");
    }
}

function showResult(){

    ticketCost = KM_COST * distance;

    if(age < 18){
        messageBox.textContent = "Il costo totale del biglietto è di: " + ((ticketCost * 80) / 100).toFixed(2) + "€ invece che di " + ticketCost.toFixed(2) + "€. E' stato applicato uno sconto del 20%";
    }
    else if(age >= 60){
        messageBox.textContent = "Il costo totale del biglietto è di: " + ((ticketCost * 60) / 100).toFixed(2) + "€ invece che di " + ticketCost.toFixed(2) + "€. E' stato applicato uno sconto del 40%";
    }
    else
        messageBox.textContent = "Il costo totale del biglietto è di: " + ticketCost.toFixed(2) + "€";

    inputBox.classList.add("d-none");
    submit.textContent = "Inserisci nuovi dati";
    submit.setAttribute("onclick", "start()");
}

function getPositiveInteger(){

    let x = new Number(inputBox.value);
    inputBox.value = "";

    if(Number.isSafeInteger(+x) && x > 0)
        return x;
    else{
        messageBox.textContent = "Errore! Inserisci un numero intero positivo valido";
        return NaN;
    }
        
}