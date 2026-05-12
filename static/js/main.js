// main.js — students will add JavaScript here as features are built

// Video Modal
(function() {
    const modal = document.getElementById('video-modal');
    const openLink = document.getElementById('see-how-it-works');
    const closeBtn = document.getElementById('modal-close');
    const videoFrame = document.getElementById('video-frame');

    // YouTube video placeholder URL - replace with actual video ID
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    if (modal && openLink && closeBtn && videoFrame) {
        openLink.addEventListener('click', function(e) {
            e.preventDefault();
            videoFrame.src = videoUrl;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Clear src to stop video
        setTimeout(function() {
            videoFrame.src = '';
        }, 300);
    }
})();
