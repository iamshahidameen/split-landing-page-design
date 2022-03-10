const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");
const  mainWrap = document.querySelector(".container");


leftSide.addEventListener("mouseenter", () => {
    mainWrap.classList.add("hover-left");
    mainWrap.classList.remove("hover-right");
})
rightSide.addEventListener("mouseenter", () => {
    mainWrap.classList.add("hover-right");
    mainWrap.classList.remove("hover-left");
})