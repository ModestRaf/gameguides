import { LaughtCryIds } from './data.js';
import {createVideoIframe} from "../index";

export function initLcr(container) {
    if (!container) {
        console.error('Контейнер для видео не передан!');
        return;
    }

    container.innerHTML = ''; // Очищаем контейнер

    LaughtCryIds.forEach(videoId => {
        const iframe = createVideoIframe(videoId);
        container.appendChild(iframe);
    });
}