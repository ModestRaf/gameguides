import { videoIds } from './goodvibes-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.goodvibes');

    videoIds.forEach(videoId => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.title = 'YouTube video player';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        videoContainer.appendChild(iframe);
    });
});