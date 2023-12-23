// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var start_button = document.querySelector('.header_home_page_start_b1');
    var container = document.querySelector('.header_home_page');
    var restart_button = document.querySelector('.restart_p2_b1');
    var button_next = document.querySelector('.button_next_b1');

    // Function to handle hover and mouseleave style changes for both buttons restart and next
    function handleRestartAndNextButtonHover() {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        restart_button.style.backgroundColor = '#000';
        restart_button.style.color = '#fff';
        button_next.style.backgroundColor = '#000';
        button_next.style.color = '#fff';
    }

    function handleRestartAndNextButtonMouseLeave() {
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
        start_button.style.backgroundColor = '#000';
        start_button.style.color = '#fff';
    });

    start_button.addEventListener('mouseleave', function() {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        start_button.style.backgroundColor = '#fff';
        start_button.style.color = '#000';
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
            document.querySelector('.subheader-p2-st1').style.display = 'block';
            restart_button.style.display = 'block';
            button_next.style.display = 'block';

            // Trigger reflow to ensure CSS transitions are applied correctly
            document.querySelector('.header-p2-t1').offsetHeight;
            document.querySelector('.subheader-p2-st1').offsetHeight;
            restart_button.offsetHeight;
            button_next.offsetHeight;

            // Fade in new elements
            document.querySelector('.header-p2-t1').style.opacity = '1';
            document.querySelector('.subheader-p2-st1').style.opacity = '1';
            restart_button.style.opacity = '1';
            button_next.style.opacity = '1';

        }, 1000);
    });

    // Handle hover and click interactions for restart button
    restart_button.addEventListener('mouseenter', function() {
        handleRestartAndNextButtonHover();
    });

    restart_button.addEventListener('mouseleave', function() {
        handleRestartAndNextButtonMouseLeave();
    });

    restart_button.addEventListener('click', function() {
        // Redirect to ../index.html
        window.location.href = '../index.html';
    });

    

    // Handle hover and click interactions for next button
    button_next.addEventListener('mouseenter', function() {
        handleRestartAndNextButtonHover(button_next);
    });

    button_next.addEventListener('mouseleave', function() {
        handleRestartAndNextButtonMouseLeave();
    });

    button_next.addEventListener('click', function() {
        // Add logic for the "Next" button click if needed
        // For now, let's reload the page
        window.location.reload();
    });
});
