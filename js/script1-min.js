var modalbuttons=document.querySelectorAll(".buy");console.log(modalMessage);var modalMessage=document.querySelector(".modal-buy"),modalClose=document.querySelector(".modal-close");console.log(modalClose),modalbuttons.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),modalMessage.classList.add("modal-show")})}),modalClose.addEventListener("click",function(){modalMessage.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modalMessage.classList.contains("modal-show")&&modalMessage.classList.remove("modal-show"))});