//replicare l'esercizio di ieri con i form
const inputButton = document.querySelector(".input-btn");

//evento al click
inputButton.addEventListener("click", function() {
    //raccolta dati dal form
    const userName = document.querySelector("#user-name").value;

    const travelKm =  parseInt(document.querySelector("#travel-km").value);

    const userAge =  document.querySelector("#user-age").value;

    //prezzo base del biglietto
    const fare = 0.21;

    const basePrice = fare * travelKm;

    //definire l'eventuale scontistica
    const teenFare = 20;

    const elderlyFare = 40;

    //definire il prezzo finale
    let finalPrice = basePrice;

    if (userAge === "Young") {
        finalPrice = basePrice / 100 * (100 - teenFare);
    } else if (userAge === "Senior"){
        finalPrice = basePrice / 100 * (100 - elderlyFare);
    }

    //carrozza e codice biglietto
    const carriage = Math.floor(Math.random() * 9) + 1;

    const code = Math.floor(Math.random() * 90000) + 10000;

    //output
    document.querySelector("#buyer-price").innerHTML = finalPrice.toFixed(2) + "&euro;";

    document.querySelector("#buyer-offer").innerHTML = userAge;

    document.querySelector("#buyer-name").innerHTML = userName;

    document.querySelector("#buyer-carriage").innerHTML = carriage;
    
    document.querySelector("#buyer-code").innerHTML = code;

})

//aggiunta tasto per pulire gli input
const cancelButton = document.querySelector(".cancel-btn");

cancelButton.addEventListener("click", function() {
    document.querySelector("#user-name").value = "";

    document.querySelector("#travel-km").value = "";

    document.querySelector("#user-age").value = "Base";
})

//evento hover per le info
const info = document.querySelector(".info");

info.addEventListener("mouseover", function(){
    document.querySelector(".info-box").classList.remove("display-none");
})

info.addEventListener("mouseout", function(){
    document.querySelector(".info-box").classList.add("display-none");
})