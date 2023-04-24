const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
	slidesContainer.scrollLeft += slideWidth * 2;
});

prevButton.addEventListener("click", () => {
	slidesContainer.scrollLeft -= slideWidth * 2;
});
