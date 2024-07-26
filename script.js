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

/*
// script.js

// Set the date we're counting down to
var countDownDate = new Date("July 30, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Happy Birthday!";
    }
}, 1000);
*/