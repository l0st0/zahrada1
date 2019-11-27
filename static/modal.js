//MODAL
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fade-in");
}

window.onkeydown = function(event) {
  if (event.keyCode == 39 || event.which == 39) {
    this.plusSlides(1);
  } else if (event.keyCode == 37 || event.which == 37) {
    this.plusSlides(-1);
  }
};

window.onclick = function(e) {
  if (e.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};
