function initializeSquares() {
    // Remove any existing event listeners first
    document.querySelectorAll('.square').forEach(square => {
        square.replaceWith(square.cloneNode(true));
    });

    // Add new event listeners
    document.querySelectorAll('.square').forEach(square => {
        // Set initial color
        square.style.backgroundColor = 'rgb(230, 230, 250)';

        square.addEventListener('mouseover', function(e) {
            document.querySelectorAll('.square').forEach(sq => {
                if (sq !== e.target) {
                    sq.style.backgroundColor = 'rgb(111, 78, 55)';
                }
            });
        });

        square.addEventListener('mouseleave', function() {
            document.querySelectorAll('.square').forEach(sq => {
                sq.style.backgroundColor = 'rgb(230, 230, 250)';
            });
        });
    });
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSquares);
} else {
    initializeSquares();
}