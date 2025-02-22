document.addEventListener("DOMContentLoaded", function() {
    const addServiceButton = document.querySelector(".add-service");
    const serviceList = document.getElementById("service-list");

    const services = [
        { name: "Deep Tissue Massage", duration: "30 min", price: "$75.00" },
        { name: "Deep Tissue Massage", duration: "1h", price: "$150.00" }
    ];

    addServiceButton.addEventListener("click", function() {
        const randomService = services[Math.floor(Math.random() * services.length)];
        addService(randomService.name, randomService.duration, randomService.price);
    });

    function addService(name, duration, price) {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("service-card");

        serviceCard.innerHTML = `
            <div>
                <strong>${name}</strong><br>
                <span>${duration} - ${price}</span>
            </div>
            <button class="remove-service">X</button>
        `;

        serviceList.appendChild(serviceCard);

        serviceCard.querySelector(".remove-service").addEventListener("click", function() {
            serviceList.removeChild(serviceCard);
        });
    }
});
