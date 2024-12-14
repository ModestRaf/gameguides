import { GoodvibesIds } from './data.js';
import {createVideoIframe} from "../index";

export function initGoodVibes(container) {
    if (!container) {
        console.error('Контейнер для видео не передан!');
        return;
    }

    container.innerHTML = ''; // Очищаем контейнер

    GoodvibesIds.forEach(videoId => {
        const iframe = createVideoIframe(videoId);
        container.appendChild(iframe);
    });
}