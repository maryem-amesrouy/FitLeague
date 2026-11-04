
let sport = [
    {
        id: 3,
        affichage: "assets/images/renforcement.png",
        genre: "Renfocement",
        description: "20 minutes par jour. Une version plus forte de toi..",
        distance: "15 ",
        unite: " m D+",
        dateDebut: "26 oct",
        dateFin: "-15 nov",
        participants: "62 participants",

    }
]



const forms = document.getElementById("forms")
const nomDefi = document.getElementById("nomDefi")
const descriptionDefi = document.getElementById("descriptionDefi")
const objectifDefi = document.getElementById("objectifDefi")
const uniteDefi = document.getElementById("uniteDefi")
const dateDebutDefi = document.getElementById("dateDebutDefi")
const dateFinDefi = document.getElementById("dateFinDefi")

console.log(sport)

forms.addEventListener("submit", function (event) {
    event.preventDefault()

    if (/^[0-9]{1,3}$/.test(objectifDefi.value)) {
       
    } else {
        objectifDefi.value = ""
    }
    if (/^[a-zA-Z0-9\s]{2,100}$/.test(descriptionDefi.value)) {
    } else {
        descriptionDefi.value = ""
    }

    let defi = {
        genre : nomDefi.value,
        description : descriptionDefi.value,
        distance : objectifDefi.value,
        unite : uniteDefi.value,
        dateDebut : dateDebutDefi.value,
        dateFin : dateFinDefi.value,
        participants : value = 0

    }
    sport.push(defi)

    localStorage.setItem("sport", JSON.stringify(sport))

    console.log(sport)

})

