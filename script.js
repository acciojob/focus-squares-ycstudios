document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', (e) => {
        document.querySelectorAll('.square').forEach(sq => {
            if (sq !== e.target) {
                sq.style.backgroundColor = 'rgb(111, 78, 55)'; // Coffee color
            }
        });
    });

    square.addEventListener('mouseleave', () => {
        setTimeout(() => { // Ensure async execution for Cypress
            document.querySelectorAll('.square').forEach(sq => {
                sq.style.backgroundColor = 'rgb(230, 230, 250)'; // Reset to Lavender
            });
        }, 50); // Small delay to allow color update
    });
});
