/* 
 Descrizione

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

PREPARAZIONE
- prompt for userKm
- prompt for userAge
- const/let for price
- if/else if/ else for discounts
- output with innerHTML
*/
const firstName = prompt("First Name")
console.log(firstName);

const lastName = prompt("Last Name")
console.log(lastName);

const fullName = firstName + " " + lastName
console.log(fullName);


const userKm = Number(prompt("Insert Km that u want to travel[numeric value: '1200']"))
console.log(userKm);

const userAge = Number(prompt("Insert age of the traveler"))
console.log(userAge)

const price = userKm * 0.21
console.log(price)

if (userAge < 18) {
    let minorDiscount = price * 20 / 100
    let minor_discount = price - minorDiscount.toFixed(2)
    document.getElementById("price").innerHTML = minor_discount
}
else if (userAge > 65) {
    let overDiscount = price * 40 / 100
    let over_discount = price - overDiscount.toFixed(2)
    document.getElementById("price").innerHTML = over_discount

}
else {
    let Price = price.toFixed(2)
    document.getElementById("price").innerHTML = Price

}

document.getElementById("fullName").innerHTML = fullName
document.getElementById("Age").innerHTML = userAge
document.getElementById("Km").innerHTML = userKm




