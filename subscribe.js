function subscribe(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        // Here we can add the logic to send the email to your server
        console.log('Subscribed with email:', email);
        alert('Thank you for subscribing!');
        document.getElementById('subscribe-form').reset(); // Optional: Reset the form
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}