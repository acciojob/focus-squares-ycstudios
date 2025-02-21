//your JS code here. If required.
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', (e) => {
        document.querySelectorAll('.square').forEach(sq => {
            if (sq !== e.target) {
                sq.style.background = '#6F4E37'; // Coffee color
            }
        });
    });

    square.addEventListener('mouseleave', () => {
        document.querySelectorAll('.square').forEach(sq => {
            sq.style.background = 'rgb(230, 230, 250)'; // Reset to Lavender
        });
    });
});
