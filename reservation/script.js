function showTerms() {
    window.location.href = 'tnc.html';
}

document.getElementById('date').addEventListener('input', function () {
    updateSlotsInfo(this.value);
});

function updateSlotsInfo(selectedDate) {
    // You can implement logic to check available slots for the selected date
    // and update the #slotsInfo element accordingly.
    // For simplicity, let's assume there are 5 slots available for each day.
    const slotsInfoElement = document.getElementById('slotsInfo');
    const slotsAvailable = 5;
    slotsInfoElement.textContent = `Slots available on ${selectedDate}: ${slotsAvailable}`;
}

document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Add your form submission logic here
    
    // Redirect to Thank You page after successful submission
    window.location.href = 'thankyou.html';
});