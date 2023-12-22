// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var start_button = document.querySelector('.header_home_page_start_b1');
    var container = document.querySelector('.header_home_page');
    var header_home_page_t1 = document.querySelector('.header_home_page_t1');
    var restart_button;

  
    // Handle hover interaction
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

    // Handle click interaction
    start_button.addEventListener('click', function() {
        // Fade out the original elements by reducing the opacity
        header_home_page_t1.style.opacity = '0';
        start_button.style.opacity = '0';

        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';

        // Wait for the transition to end (300ms is the expected duration)
        setTimeout(function() {
            // Remove original elements
            header_home_page_t1.remove();
            start_button.remove();

            // Create new h1 and h2 elements
            var header_p2_t1 = document.createElement('h1');
            var subheader_p2_st1 = document.createElement('h2');
            restart_button = document.createElement('button');

            // Apply CSS classes for styling and initial state hidden via opacity
            header_p2_t1.className = 'header-p2-t1';
            subheader_p2_st1.className = 'subheader-p2-st1';
            restart_button.className = 'restart_p2_b1';

            header_p2_t1.textContent = 'do you ever wonder how...';
            subheader_p2_st1.textContent = 'death can be an inch away?';
            restart_button.textContent = 'restart';

            // Append the new elements to the container
            container.appendChild(header_p2_t1);
            container.appendChild(subheader_p2_st1);
            container.appendChild(restart_button);

            // Trigger reflow to ensure CSS transitions are applied correctly
            header_p2_t1.offsetHeight;
            subheader_p2_st1.offsetHeight;
            restart_button.offsetHeight;

            // Fade in new elements
            header_p2_t1.style.opacity = '1';
            subheader_p2_st1.style.opacity = '1';
            restart_button.style.opacity = '1';
        }, 300);
    });

    // Handle hover interaction for restart button
    restart_button.addEventListener('mouseenter', function() {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        restart_button.style.backgroundColor = '#000';
        restart_button.style.color = '#fff';
    });

    restart_button.addEventListener('mouseleave', function() {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        restart_button.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    });

    // Handle click interaction for restart button
    restart_button.addEventListener('click', function(event) {
        window.location.href = '../index.html';
    });

    // TODO: Make the restart button work, the function above doesn't work.
});


