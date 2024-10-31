// script.js

// Alternar vídeo principal ao clicar em uma miniatura
const thumbnails = document.querySelectorAll('.categoria-videos a');
const mainVideo = document.getElementById('video-principal');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        e.preventDefault();
        const newVideoSrc = thumbnail.getAttribute('data-video');
        mainVideo.src = newVideoSrc;
    });
});

