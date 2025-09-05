const card = document.querySelector(".Card");

document.addEventListener("mousemove", (e) => {
    if (!card) {return;}
    // rotateElement(e, card);
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width/2;
    const mouseY = e.clientY - rect.top - rect.height/2;

    const rotateX = (mouseX/rect.width) * 40;
    const rotateY = (mouseY/rect.height) * 40;

    card.setAttribute("style", "transform: rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)");
    // card.style.transform = "rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)";
});

document.addEventListener("mouseleave", () => {
    if (!card) {return;}
    card.setAttribute("style", "transform: rotateX(0) rotateY(0)");
    // card.style.transform = "rotateX(0) rotateY(0)"
})

// function rotateElement(event, element){
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;
//   console.log(mouseX, mouseY);
// }