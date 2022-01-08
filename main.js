// Get DOM elements
const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

// Event listener
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
document.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close if outside event  
function outsideClick(e) {
    if(e.target == modal){
    modal.style.display = "none"};
  }