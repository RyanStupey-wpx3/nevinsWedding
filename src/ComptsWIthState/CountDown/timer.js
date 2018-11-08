// Date couting down to
let countDownDate = new Date("Sept 28, 2019 16:00:00").getTime();

// set interval will refresh every second
const x = setInterval(function() {

    // Tells js what the time is right now when the user visits the page
    let now = new Date().getTime();

    // calculates the difference between the countdown date and the current date
    const distance = countDownDate - now;

    // calculates days, hours, min, seconds from distance
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // inserts days, horus, min, and seconds into the 'timer' html
    document.getElementById("timer").innerHTML = `${days} days ${hours}hrs ${minutes} min ${seconds}s`;

    // Will insert 'The time is now!' instead of timer if the the countdown date is already reached
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "The Time Is Now!";
    }

}, 1000);