import { GoodvibesIds } from './data.js';
import {createVideoIframe, updateContainer} from "../index";

export function initGoodVibes(container) {
    const fragment = document.createDocumentFragment();
    GoodvibesIds.forEach(videoId => {
        const iframe = createVideoIframe(videoId);
        fragment.appendChild(iframe);
    });
    updateContainer(container, fragment);
}