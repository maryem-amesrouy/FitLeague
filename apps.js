

let cart = document.getElementById("lesDifis")
function cardDifis() {
   difis.forEach(difi => {
   
       let card =`
                    <div class="difi border rounded-xs  bg-white flex flex-col gap-3 rounded-lg p-2 ">
             <img src=${difi.affichage} alt="" class="w-50 h-40">
             <h3 class="font-extrabold">${difi.genre}</h3>
             <p class="text-[#737970] text-xs">${difi.description}</p>
   
             <div class="distance flex justify-between h-10 ">
               <div  class="flex items-center ">
                <img src="./assets/icones/distance.png" alt="km" class="h-4 ">
                <p  >${difi.distance} ${difi.unite }</p>
               </div>
               <p class="flex items-center ">${difi.dateDebut} ${difi.dateFin}</p>
               
              
             </div>
   
             <div class="participen flex justify-between items-center h-20  border-t-2 border-[#E0E4DC]">
               <div class="flex ">
                 <img src="./assets/icones/persone.png" alt="" class="w-5 h-5">
                 <p class="w-40">${difi.participants}</p>
               </div>
               <a href="indexPartic.html" class=" boutont  rounded-md border p-2 bg-black text-white hover:bg-gray-500 data-difi-id="${difi.id}"   ">+ Rejoindre</a>
             </div>
              
             `
   
             cart.innerHTML += card
       
   });

  
}
cardDifis()






let btn = document.querySelectorAll(".boutont")

 

let bntSelectionner =[]
let idDifis;
let bntSE = false;

btn.forEach(bntSlc =>{
    bntSlc.addEventListener("click",function(e){
        idDifis = e.target.dataset.difiId
         bntSE = !bntSE
        if (!bntSE) {
         bntSlc.classList.replace("bg-black", "bg-[#C1F75B]")
        bntSlc.textContent= "En cours"
      }else{ bntSlc.classList.replace("bg-[#C1F75B]", "bg-black")
        bntSlc.textContent= "+ Rejoindre "}
      
})})

// <a class="bg-[#C1F75B] flex items-center justify-center  rounded-md text-sm w-40  hover:bg-gray-200 ">+ Créer mon défi</a>

let creer = document.getElementById("creerDifis")
let btnCreer=[]
let defisSlc = false
creerDifis.addEventListener("click", function() {
   defisSlc=!defisSlc
  if(defisSlc){
     creerDifis.classList.replace("bg-[#C1F75B]","bg-white")
     creerDifis.classList.replace("text-black", "text-white")
  }else{
    creerDifis.classList.replace("bg-white", "bg-[#C1F75B]")
     creerDifis.classList.replace("text-white","text-black")

  }
  
})












// ================================================================================================================





  
const btnRejoindre = document.getElementById("bntRejoindreParticipent")
const formulaire = document.getElementById("fourmulaireARejoidre")
const btnAquiter = document.getElementsById("quiter")

// ouvrire.addEventListener("click", e =>{
//   formulaire.classList.add('show')

// })
// fermer.addEventListener("click", e =>{
//   formulaire.classList.remove('show')

// })

