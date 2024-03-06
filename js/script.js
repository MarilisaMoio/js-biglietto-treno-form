//replicare l'esercizio di ieri con i form

const inputButton = document.querySelector('[type="button"]') //sperimentazione per vedere cosa prende qS

//evento al click
inputButton.addEventListener("click", function() {
    //raccolta dati dal form
    const travelKm =  parseInt(document.querySelector("#travel-km").value);

    const userAge =  parseInt(document.querySelector("#user-age").value);

    //prezzo base del biglietto
    const fare = 0.21;

    const basePrice = fare * travelKm;

    //definire l'eventuale scontistica
    const teenFare = 20;

    const elderlyFare = 40;

    //definire il prezzo finale
    let finalPrice = basePrice;

    if (userAge < 18) {
        finalPrice = basePrice / 100 * (100 - teenFare);
    } else if (userAge > 65){
        finalPrice = basePrice / 100 * (100 - elderlyFare);
    }

    //output
    console.log(finalPrice);
})