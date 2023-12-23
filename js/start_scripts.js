document.addEventListener('DOMContentLoaded', function() {
    // Get element
    const start_p1_t1 = document.querySelector('.start_p1_t1');
    const goButton = document.querySelector('.go_button');
    
    // Variables
    var born = 'false';

    // Use Chance to generate a random name
    const chance = new Chance();
    const name = chance.first({ gender: 'male' });

    //Set the name to the element
    if (born === 'true') {
      start_p1_t1.textContent = name;  
    }
    
    goButton.addEventListener('click', function() {
        // Redirect or perform actions to proceed to the next part of the game
        window.location.href = "game.html"; // Replace with the actual file/path for Chapter 2
    });
    
    


});

