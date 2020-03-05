
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
  }  catch (err)  {
     isStorageSupport = false;
  }

        message.addEventListener("click", function(evt){
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
            if (!yourName.value || !email.value){
               evt.preventDefault();
               popup.classList.remove("modal-error");
               popup.offsetWidth = popup.offsetWidth;
               popup.classList.add("modal-error");
            } else {
               if (isStorageSupport)
               {localStorage.setItem("email", "yourName", email.value, yourName.value);
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



      var linkMap = document.querySelector(".map");
      var bigMap = document.querySelector(".modal-map");
      var closeMap = bigMap.querySelector(".modal-close");
      linkMap.addEventListener("click", function(amg){
        amg.preventDefault();
        bigMap.classList.add("modal-show");
      });

     closeMap.addEventListener("click", function(amg){
           amg.preventDefault();
           bigMap.classList.remove("modal-show");
        });

      window.addEventListener("keydown", function(amg){
         if(key.Code === 27) {
            amg.preventDefault();
            if(bigMap.classList.contains("modal-show")){
               bigMap.classList.remove("modal-show");
            }
         }
      });