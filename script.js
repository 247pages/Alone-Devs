document.addEventListener("DOMContentLoaded", function() {
  var image = document.getElementById("image");
  var spinner = document.querySelector(".spinner");

  image.onload = function() {
    image.classList.remove("hidden");
    spinner.style.display = "none";
  };
});
