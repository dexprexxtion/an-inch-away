document.addEventListener('DOMContentLoaded', function() {
    const countdownContainer = document.querySelector('.countdown_container');
    const personDataContainer = document.querySelector('.person_data_container');
    const personDataName = document.querySelector('.person_data_name')
    const personDataAge = document.querySelector('.person_data_age');

    // Countdown function
    function startCountdown(count) {
        if (count === 0) {
            generateNameAndAge();
            return;
        }

        //Create countdown container
        const countdownElement = document.createElement('div');
        countdownElement.textContent = count;
        countdownElement.className = 'countdown_number';

        //Append countdown element to container
        countdownContainer.appendChild(countdownElement);

        //Remove countdown element after a delay
        setTimeout(function() {
            countdownElement.remove();
            // Continue countdown with the next number
            startCountdown(count -1);
        }, 1000);
    }

    // Function to generate and display name and age
    function generateNameAndAge() {
        console.log('Generating name and age')
        const chance = new Chance();
        const name = chance.first({ gender: 'male' });
        const age = chance.integer({ min: 13, max: 17});

        personDataName.textContent = name;
        personDataAge.textContent = age + ' years old';
    }

    // Start the countdown when the page loads
    startCountdown(5);



})