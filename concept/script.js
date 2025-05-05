const images = [
    "001.jpeg",
    "002.jpeg",
    "003.jpeg",
    "004.jpeg"
  ];
  let currentIndex = 0;
  
  function changeSlide(n) {
    currentIndex = (currentIndex + n + images.length) % images.length;
    updateCarousel();
  }
  
  function setSlide(n) {
    currentIndex = n;
    updateCarousel();
  }
  
  function updateCarousel() {
    document.getElementById("carouselImage").src = images[currentIndex];
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }
  
  function openModal(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }
  