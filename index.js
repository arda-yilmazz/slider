let list = document.querySelectorAll(".container .image-container ul li ");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

nextButton.addEventListener("click", () => {
  let active = document.querySelector("li.active");

  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add("active");
    active.classList.remove("active");
  } else {
    active.classList.remove("active");
    document.querySelector(".image-container ul li:first-child").classList.add("active");
  }
});

prevButton.addEventListener("click", () => {
    let active = document.querySelector("li.active");
  
    if (active.previousElementSibling) {
      active.previousElementSibling.classList.add("active");
      active.classList.remove("active");
    } else {
      active.classList.remove("active");
      document.querySelector(".image-container ul li:last-child").classList.add("active");
    }
  });
  