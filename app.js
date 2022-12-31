// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn")
const modalOverlay = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")

modalBtn.addEventListener("click", function(){
    modalOverlay.classList.toggle("open-modal");
})

closeBtn.addEventListener("click", function(){
    modalOverlay.classList.toggle("open-modal");
})

const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", ()=>{
        removeActiveClass();
        panel.classList.add("active");
    })
})
panels.forEach(panel => {
    panel.addEventListener("mouseover", ()=>{
        removeActiveClass();
        panel.classList.add("active");
    })
})

function removeActiveClass() {
    panels.forEach(panel =>{
        panel.classList.remove("active");
    })
}