const pieces = document.querySelectorAll('.piece');

const centerX = 150;
const centerY = 150;
const startRadius = 800;
const spinDuration = 500;

pieces.forEach((piece, index) => {
    const angleOffset = (index / pieces.length) * 2 * Math.PI;
    let angle = angleOffset;
    let radius = startRadius;

    piece.style.opacity = 1;

    const spinInterval = setInterval(() => {
        angle += 0.1;
        radius -= 3;

        const x = centerX + radius * Math.cos(angle) - 150;
        const y = centerY + radius * Math.sin(angle) - 150;

        piece.style.transform = `translate(${x}px, ${y}px) rotate(${angle * 180 / Math.PI}deg)`;
    }, 20);

    setTimeout(() => {
        clearInterval(spinInterval);
        piece.style.transition = "all 1s ease-in-out";
        piece.style.transform = `translate(0px, 0px) rotate(0deg)`;

        // When last piece finishes, trigger fade and redirect
        if (index === pieces.length - 1) {
            setTimeout(() => {
                document.body.style.transition = "opacity 1s ease";
                document.body.style.opacity = 0;

                setTimeout(() => {
                    window.location.href = "../index.html"; // Change to your target page
                }, 1000); // After fade-out completes
            }, 1000); // Wait for transition to center
        }
    }, spinDuration);
});
