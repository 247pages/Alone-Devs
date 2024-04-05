document.addEventListener("DOMContentLoaded", function() {
  var image = document.getElementById("image");
  var spinner = document.querySelector(".spinner");

  image.onload = function() {
    image.classList.remove("hidden");
    spinner.style.display = "none";
  };
});
    

        window.addEventListener('load', () => {

          registerSW();

        });

     

        // Register the Service Worker

        async function registerSW() {

          if ('serviceWorker' in navigator) {

            try {

              await navigator

                    .serviceWorker

                    .register('serviceworker.js');

            }

            catch (e) {

              console.log('SW registration failed');

            }

          }

        }

