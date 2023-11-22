const slides = document.querySelectorAll(".hero__slides");
var index = slides.length - 1;

function changeDisplayProperty(element, property) {
  element.style.display = property;
}

// duration of 400ms
// fade-in-HeroCarousel
// fade-out-HeroCarousel

function changeSlide() {
  if (index == slides.length - 1) {
    slides[index].classList.remove("fade-in-HeroCarousel");
    slides[index].classList.add("fade-out-HeroCarousel");
    setTimeout(() => {
      slides[index].style.display = "none";
    }, 405);
    setTimeout(() => {
      index = 0;
      slides[index].style.display = "block";
      slides[index].classList.remove("fade-out-HeroCarousel");
      slides[index].classList.add("fade-in-HeroCarousel");
    }, 405);
  } else {
    slides[index].classList.remove("fade-in-HeroCarousel");
    slides[index].classList.add("fade-out-HeroCarousel");
    setTimeout(() => {
      slides[index].style.display = "none";
    }, 405);
    setTimeout(() => {
      index++;
      slides[index].style.display = "block";
      slides[index].classList.remove("fade-out-HeroCarousel");
      slides[index].classList.add("fade-in-HeroCarousel");
    }, 405);
  }

  setTimeout(changeSlide, 5000);
}

export { changeSlide };
