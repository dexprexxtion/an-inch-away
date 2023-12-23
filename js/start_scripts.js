document.addEventListener('DOMContentLoaded', function() {
    // Get element
    const start_p1_t1 = document.querySelector('.start_p1_t1');

    // Use Chance to generate a random name
    const chance = new Chance();
    const name = chance.first({ gender: 'male' });

    //Set the name to the element
    start_p1_t1.textContent = name;


});

