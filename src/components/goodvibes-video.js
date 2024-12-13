import { videoIds } from './data.js';

export function initGoodVibes(container) {
    if (!container) {
        console.error('Контейнер для видео не передан!');
        return;
    }

    container.innerHTML = ''; // Очищаем контейнер

    videoIds.forEach(videoId => {
        const iframe = createVideoIframe(videoId);
        container.appendChild(iframe);
    });
}

function createVideoIframe(videoId) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    return iframe;
}