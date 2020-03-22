var modalbuttons = document.querySelectorAll(".buy");
console.log(modalMessage);
var modalMessage = document.querySelector(".modal-buy");
var modalClose = document.querySelector(".modal-close");
console.log(modalClose);


modalbuttons.forEach(function (currentValue) {
   currentValue.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalMessage.classList.add("modal-show");
   })
});



modalClose.addEventListener("click", function () {
   modalMessage.classList.remove("modal-show");
});



window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalMessage.classList.contains("modal-show")) {
         modalMessage.classList.remove("modal-show");
      }
   }
});
