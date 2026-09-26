// FreshCut Barbers
// Simple website interactions

document.addEventListener("DOMContentLoaded", () => {

    // Show a welcome message when the website loads
    console.log("Welcome to FreshCut Barbers!");

    // Add a small animation when service cards are clicked
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("selected");
        });
    });

});
.service-card.selected {
    transform: translateY(-8px);
    border-color: #f5b400;
}