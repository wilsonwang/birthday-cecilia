// Set the date of your wife's next birthday (YYYY, MM-1, DD)
// const birthdayDate = new Date(2025, 0, 1); // Example: January 1, 2025
const birthdayDate = new Date(2024, 6, 30)

function updateCountdown() {
    const now = new Date();
    const difference = birthdayDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds
    `;

    if (difference < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Happy Birthday!";
    }
}

const countdownTimer = setInterval(updateCountdown, 1000);

updateCountdown(); // Initial call to avoid delay        
