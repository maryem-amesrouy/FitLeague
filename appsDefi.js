
// -------- Créer le défi -----------
console.log("ok");



const forms = document.getElementById("forms")
const nomDefi = document.getElementById("nomDefi")
const descriptionDefi = document.getElementById("descriptionDefi")
const objectifDefi = document.getElementById("objectifDefi")
const uniteDefi = document.getElementById("uniteDefi")
const dateDebutDefi = document.getElementById("dateDebutDefi")
const dateFinDefi = document.getElementById("dateFinDefi")


forms.addEventListener("submit", function (event) {
    event.preventDefault()


    console.log(nomDefi.value);
    


    if (/^[0-9]{1,3}$/.test(objectifDefi.value)) {
      
    } else {
        objectifDefi.value = ""
        alert("L'objectif doit être un nombre de 1 à 3 chiffres.")
        return
    }

    if (/^[a-zA-Z0-9\s]{2,100}$/.test(descriptionDefi.value)) {
    } else {
        descriptionDefi.value = ""
        alert("La description doit contenir entre 2 et 100 caractères.")
        return
    }
    if (dateFinDefi.value < dateDebutDefi.value) {
        alert("La date de fin doit être après la date de début.")
        return
    }
    let defi = {
        affichage: "assets/images/sport_logo.jpg",
        genre: nomDefi.value,
        description: descriptionDefi.value,
        distance: objectifDefi.value,
        unite: uniteDefi.value,
        dateDebut: dateDebutDefi.value,
        dateFin: dateFinDefi.value,
        participants: 0

    }
    difis.push(defi)

    localStorage.setItem("sport", JSON.stringify(difis))

    window.location.href = "index.html";
}) 


// const btnAnnuler = document.getElementById("btnAnnuler")

// btnAnnuler
