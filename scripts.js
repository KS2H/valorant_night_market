document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const colors = ['green', 'blue', 'red', 'yellow', 'orange'];

    items.forEach(item => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        item.querySelector('.cover').style.borderColor = randomColor;

        item.addEventListener('click', function() {
            item.classList.toggle('expanded');
        });
    });
});
