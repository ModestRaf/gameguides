import './scss/index.scss';
import './fonts/fonts.scss';
import './components/goodvibes-video.js';
import './components/playlists.js';
import { initGoodVibes } from "./components/goodvibes-video";
import { populateContainer } from "./components/playlists";
import { initLcr } from "./components/lcr-video";

const goodvibesContainer = document.querySelector('.goodvibes');
const lcrContainer = document.querySelector('.lcr');
const cardTemplate = document.getElementById('playlists-card-template');
const playlistsContainer = document.querySelector('.playlists__container');

document.addEventListener('DOMContentLoaded', () => {
    if (cardTemplate && playlistsContainer) {
        populateContainer(cardTemplate, playlistsContainer);
    }
    if (goodvibesContainer) {
        initGoodVibes(goodvibesContainer);
    }
    if (lcrContainer) {
        initLcr(lcrContainer);
    }

    // Инициализация MutationObserver для всех контейнеров
    setupMutationObserver([goodvibesContainer, lcrContainer, playlistsContainer]);
});

// Функция для создания iframe
export function createVideoIframe(videoId) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    return iframe;
}

// Функция для настройки MutationObserver
function setupMutationObserver(containers) {
    if (!containers || containers.length === 0) {
        console.warn('Нет контейнеров для наблюдения.');
        return;
    }

    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node instanceof HTMLElement && node.tagName === 'IFRAME') {
                        console.log('Новый iframe добавлен:', node);
                        // Здесь можно добавить дополнительную логику для обработки нового iframe
                    }
                });
            }
        });
    });

    containers.forEach(container => {
        if (container) {
            observer.observe(container, {
                childList: true, // Отслеживаем добавление/удаление дочерних элементов
                subtree: true,   // Отслеживаем изменения во всем поддереве
            });
        }
    });
}