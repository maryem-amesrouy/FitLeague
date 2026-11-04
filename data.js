let difis =[
    {
        id : 1,
        affichage: "assets/images/velot.png",
        genre: "200 km, zéro excuse",
        description: "Les petites sorties font les grandes distances.",
        distance:"200 km",
        date:"1 – 30 novembre",
        participants:"86 participants",

    },

    {
        id : 2,
        affichage: "assets/images/randonnée.png",
        genre: "Le sommet nous attend",
        description: "Prends de la hauteur, à ton rythme.",
        distance:"2 000 m D+",
        date:"24 oct. – 8 nov.",
        participants:"124 participants",

    },

    {
        id : 2,
        affichage: "assets/images/renforcement.png",
        genre: "15 jours pour se dépasser",
        description: "20 minutes par jour. Une version plus forte de toi..",
        distance:"15 séances",
        date:"26 oct. – 9 nov",
        participants:"62 participantss",

    }
]


let sports = [
    {name: "Vélo", id: 101},
    {name: "Randonnée", id: 102}, 
    {name: "Renforcement", id: 103}, 
    {name: "Natation", id: 104}, 
    {name: "Marche", id: 105}, 
    {name: "Running", id: 106}
] 

const forms = document.getElementById("forms")
const nomDefi = document.getElementById("nomDefi")
const descriptionDefi = document.getElementById("descriptionDefi")
const objectifDefi = document.getElementById("objectifDefi")
const uniteDefi = document.getElementById("uniteDefi")
const dateDebutDefi = document.getElementById("dateDebutDefi")
const dateFinDefi = document.getElementById("dateFinDefi")

let sport = []
forms.addEventListener("submit", function(event){
    if(objectifDefi == /^[0-9]{1,2}$/){
        sport.push
    }
    if(nomDefi ==  nomDefi.value){
        sport.push
    }
    if(descriptionDefi == descriptionDefi.value){
        sport.push
    }
    if 

})



