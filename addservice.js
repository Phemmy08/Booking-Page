// Get modal elements
const modal = document.getElementById("serviceModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.querySelector(".close");
const addButtons = document.querySelectorAll(".add-btn");

// Open the modal when clicking "Add Service"
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close the modal when clicking the close button
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Toggle "Add" / "Added" when clicking the button
addButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (this.textContent === "Add") {
            this.textContent = "Added";
            this.style.background = "#ccc";
        } else {
            this.textContent = "Add";
            this.style.background = "#FF7F7F";
        }
    });
});
