// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var start_button = document.querySelector('.header_home_page_start_b1');
    var container = document.querySelector('.header_home_page');
    var restart_button = document.querySelector('.restart_p2_b1');
    var button_next = document.querySelector('.button_next_b1');

    // Function to handle hover and mouseleave style changes for both buttons
    function handleButtonHover(button) {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        restart_button.style.backgroundColor = '#000';
        restart_button.style.color = '#fff';
        button_next.style.backgroundColor = '#000';
        button_next.style.color = '#fff';
    }

    function handleButtonMouseLeave() {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        restart_button.style.backgroundColor = '#fff';
        restart_button.style.color = '#000';
        button_next.style.backgroundColor = '#fff';
        button_next.style.color = '#000';
    }

    // Handle hover and click interactions for start button
    start_button.addEventListener('mouseenter', function() {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        start_button.style.backgroundColor = '#333';
        start_button.style.color = '#fff';
    });

    start_button.addEventListener('mouseleave', function() {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        start_button.style.backgroundColor = '#fff';
        start_button.style.color = '#333';
    });

    start_button.addEventListener('click', function() {
        // Fade out the original elements by reducing the opacity
        container.style.opacity = '0';

        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';

        // Wait for the transition to end (300ms is the expected duration)
        setTimeout(function() {
            // Remove original elements
            container.style.display = 'none';

            // Show elements on the second page
            document.querySelector('.header-p2-t1').style.display = 'block';
            
            // Trigger reflow to ensure CSS transitions are applied correctly
            document.querySelector('.header-p2-t1').offsetHeight;

            // Fade in header_p2_t1
            document.querySelector('.header-p2-t1').style.opacity = '1';

            // Wait for 1s and then show subheader_p2_st1
            setTimeout(function() {
                document.querySelector('.subheader-p2-st1').style.display = 'block';

                // Trigger reflow
                document.querySelector('.subheader-p2-st1').offsetHeight;

                // Fade in subheader_p2_st1
                document.querySelector('.subheader-p2-st1').style.opacity = '1';
            }, 1000);

            // Wait for 3s and then show restart_button and button_next
            setTimeout(function() {
                restart_button.style.display = 'block';
                button_next.style.display = 'block';

                // Trigger reflow
                restart_button.offsetHeight;
                button_next.offsetHeight;

                // Fade in restart_button and button_next
                restart_button.style.opacity = '1';
                button_next.style.opacity = '1';
            }, 3000);

        }, 300);
    });

    // Handle hover and click interactions for restart button
    restart_button.addEventListener('mouseenter', function() {
        handleButtonHover(restart_button);
    });

    restart_button.addEventListener('mouseleave', function() {
        handleButtonMouseLeave();
    });

    restart_button.addEventListener('click', function() {
        // Redirect to ../index.html
        window.location.href = '../index.html';
    });

    // Handle hover and click interactions for next button
    button_next.addEventListener('mouseenter', function() {
        handleButtonHover(button_next);
    });

    button_next.addEventListener('mouseleave', function() {
        handleButtonMouseLeave();
    });

    button_next.addEventListener('click', function() {
        window.location.href = '../start.html';
    });
});
