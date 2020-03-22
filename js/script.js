var message = document.querySelector(".link-message");
var popup = document.querySelector(".modal-message");
var close = document.querySelector(".modal-close");
var yourName = popup.querySelector("[name=your-name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");


var isStorageSupport = true;
var storage = "";


try {
   storage = localStorage.getItem("yourName");
} catch (err) {
   isStorageSupport = false;
}
message.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
   if (storage) {
      yourName.value = storage;
      email.focus();
   } else {
      yourName.focus();
   }
});

close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
   popup.classList.remove("modal-error");
});




form.addEventListener("submit", function (evt) {
   if (!yourName.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
   } else {
      if (isStorageSupport) {
         localStorage.setItem("email", "yourName", email.value, yourName.value);
      }
   }
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
         popup.classList.remove("modal-show");
         popup.classList.remove("modal-error");
      }
   }
});




//карта.....
var linkMap = document.querySelector(".map");
var bigMap = document.querySelector(".modal-map");

linkMap.addEventListener("click", function (amg) {
   amg.preventDefault();
   bigMap.classList.add("modal-show");
});


var modalClose = bigMap.querySelector(".modal-close");
modalClose.addEventListener("click", function () {
   bigMap.classList.remove("modal-show");
});



window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      evt.preventDefault();
      if (bigMap.classList.contains("modal-show")) {
         bigMap.classList.remove("modal-show");
      }
   }
});


//доставка....

var guaranteeButton = document.querySelectorAll(".guarantee");
var deliveryWindow = document.querySelector(".service-section-delivery");
var guaranteeWindow = document.querySelector(".service-section-guarantee");
var creditWindow = document.querySelector(".service-section-credit");
var creditButton = document.querySelectorAll(".credit");
var deliveryButton = document.querySelectorAll(".delivery");


guaranteeButton.forEach(function (currentValue) {
   currentValue.addEventListener("click", function (gua) {
      gua.preventDefault();
      guaranteeWindow.classList.add("modal-show1");
      guaranteeWindow.classList.remove("modal-none");
      deliveryWindow.classList.add("modal-none");
      creditWindow.classList.add("modal-none");
   })
});


creditButton.forEach(function (currentValue) {
   currentValue.addEventListener("click", function (cre) {
      cre.preventDefault();
      creditWindow.classList.add("modal-show1");
      creditWindow.classList.remove("modal-none");
      deliveryWindow.classList.add("modal-none");
      guaranteeWindow.classList.add("modal-none");
   })
});

deliveryButton.forEach(function (currentValue) {
   currentValue.addEventListener("click", function (del) {
      del.preventDefault();
      guaranteeWindow.classList.add("modal-none");
      deliveryWindow.classList.add("modal-show1");
      deliveryWindow.classList.remove("modal-none");
      creditWindow.classList.add("modal-none");

   })
});
