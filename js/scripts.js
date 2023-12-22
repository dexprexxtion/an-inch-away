document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.header_home_page_start_b1');

    button.addEventListener('mouseenter', function() {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        this.style.backgroundColor = '#000';
        this.style.color = '#fff';
    });

    button.addEventListener('mouseleave', function() {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        this.style.backgroundColor = '#fff';
        this.style.color = '#000';
    });
})