
var message = document.querySelector(".modal-buy");
var list = document.querySelector(".catalog-items");
var toBuy = document.querySelectorAll(".buy");
var close = message.querySelector(".modal-close");


toBuy.addEventListener("click", function(svt){
   svt.preventDefault();
   message.classList.add("modal-show");
});


close.addEventListener("click", function(svt){
   svt.preventDefault();
   if(message.classList.contains("modal-show")){
   message.classList.remove("modal-show")};
});

window.addEventListener("keydown", function (esc){
   if (esc.keyCode === 27){
      esc.preventDefault();
      if(message.classList.contains("modal-show")){
         message.classList.remove("modal-show");
      }
   }
});