




let cart = document.getElementById("lesDifis")

difis.forEach(difi => {

    let card =`
                 <div class="difi border rounded-xs  bg-white flex flex-col gap-3 rounded-lg p-2 ">
          <img src=${difi.affichage} alt="" class="w-50 h-40">
          <h3 class="font-extrabold">${difi.genre}</h3>
          <p class="text-[#737970] text-xs">${difi.description}</p>

          <div class="distance flex justify-between">
            <div  class="flex ">
             <img src="./assets/icones/distance.png" alt="km">
             <p class="w-40" >${difi.distance}</p>
            </div>
            <p>${difi.date}</p>
           
          </div>

          <div class="participen flex justify-between border-t-1">
            <div class="flex">
              <img src="./assets/icones/persone.png" alt="" class="w-5 h-5">
              <p class="w-40">${difi.participants}</p>
            </div>
            <a href="3" class="rounded-md border p-2 bg-black text-white">+ Rejoindre</a>
          </div>
           
          `

          cart.innerHTML += card
    
});