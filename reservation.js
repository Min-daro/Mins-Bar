function submitReservation() {
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time").value.trim();
    const guests = document.getElementById("guests").value.trim();

    // Validate the form (if needed)
    if (!name || !email || !phone || !date || !time || !guests) {
        alert("Please fill out all fields.");
        return;
    }

    // Display a confirmation message
    const message = `Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been confirmed. We'll contact you at ${phone} or ${email} if needed.`;
    const messageElement = document.getElementById("reservationMessage");
    messageElement.textContent = message;
    messageElement.style.display = "block";

    // Reset the form (optional)
    document.getElementById("reservationForm").reset();
}
