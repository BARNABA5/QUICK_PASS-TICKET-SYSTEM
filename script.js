document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ticketForm");
    const confirmation = document.getElementById("confirmation");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const eventCards = document.querySelectorAll(".event-card");

    // Ticket Booking Form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const event = document.getElementById("event").value;
        const tickets = document.getElementById("tickets").value;

        if (!name || !email || !event || !tickets) {
            confirmation.textContent = "Please fill in all fields!";
            confirmation.style.color = "#ff4b2b";
            return;
        }

        confirmation.innerHTML = `Thank you, <strong>${name}</strong>! Your <strong>${tickets}</strong> ticket(s) for <strong>${event}</strong> have been booked successfully. ✅`;
        confirmation.style.color = "#00ffb3";
        form.reset();
    });

    // Search Functionality
    searchBtn.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        eventCards.forEach(card => {
            const eventName = card.querySelector("h3").textContent.toLowerCase();
            if (eventName.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
    // Buy Tickets button functionality
const buyButtons = document.querySelectorAll(".buy-btn");
buyButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        const eventName = this.previousElementSibling.textContent.toLowerCase();
        const select = document.getElementById("event");
        select.value = eventName; // Pre-select the event
        document.querySelector(".booking-form").scrollIntoView({ behavior: "smooth" });
    });
});

});
