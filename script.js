document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope-wrapper');
    const heart = document.querySelector('.heart');
    const container = document.querySelector('.container');

    // Add click event to both envelope and heart for better usability
    envelope.addEventListener('click', toggleEnvelope);
    heart.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent double triggering if needed, though toggle is safe
        toggleEnvelope();
    });

    function toggleEnvelope() {
        container.classList.toggle('open');
    }
});
