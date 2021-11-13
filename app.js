const openBtn = document.querySelector(".open");
const sectionContainer = document.querySelector(".section-container");
const closeBtn =document.querySelector(".close");


openBtn.addEventListener("click", function () {
    sectionContainer.classList.add("show");

});

closeBtn.addEventListener("click", function () {
    sectionContainer.classList.remove("show");

});

