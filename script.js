
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

document.addEventListener("DOMContentLoaded", function () {

  const words = ["Collage Student", "3D Modeler", "Photo Editor"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typing = document.getElementById("typing");

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typing.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 500;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

});

function openModal(card) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalText = document.getElementById("modal-text");

  const img = card.querySelector("img");
  const text = card.querySelector("p");

  modal.style.display = "block";
  modalImg.src = img.src;
  modalText.textContent = text.textContent;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

