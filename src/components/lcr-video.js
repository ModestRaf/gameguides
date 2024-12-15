import { LaughtCryIds } from './data.js';
import {createVideoIframe, updateContainer} from "../index";

export function initLcr(container) {
    const fragment = document.createDocumentFragment();
    LaughtCryIds.forEach(videoId => {
        const iframe = createVideoIframe(videoId);
        fragment.appendChild(iframe);
    });
    updateContainer(container, fragment);
}