document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const colors = ['green', 'blue', 'red', 'yellow', 'orange'];

    items.forEach(item => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const coverElement = item.querySelector('.cover');
        const itemContentElement = item.querySelector('.item-content');
        
        coverElement.style.borderColor = randomColor;
        itemContentElement.style.borderColor = randomColor; // item-content의 테두리 색상도 설정

        item.addEventListener('click', function() {
            item.classList.toggle('expanded');
        });
    });
});
