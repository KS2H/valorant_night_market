document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            if (item.classList.contains('expanded')) {
                item.classList.remove('expanded');
            } else {
                document.querySelectorAll('.item').forEach(i => i.classList.remove('expanded'));
                item.classList.add('expanded');
            }
        });
    });
});
