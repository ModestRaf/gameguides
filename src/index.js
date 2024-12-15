import './scss/index.scss';
import './fonts/fonts.scss';
import './components/goodvibes-video.js';
import './components/playlists.js';
import { initGoodVibes } from "./components/goodvibes-video";
import { populateContainer } from "./components/playlists";
import { initLcr } from "./components/lcr-video";

const cardTemplate = document.getElementById('playlists-card-template');
const mainContainer = document.querySelector('.playlists__container.container');

document.addEventListener('DOMContentLoaded', () => {
    if (cardTemplate && mainContainer) {
        populateContainer(cardTemplate, mainContainer);
        setupCardClickHandlers(mainContainer);
    }
    // Инициализация MutationObserver
    setupMutationObserver([mainContainer]);
});

// Обновление содержимого контейнера
export function updateContainer(container, newContent) {
    container.innerHTML = ''; // Очищаем контейнер
    container.appendChild(newContent); // Добавляем новый контент
}

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
                        //можно добавить дополнительную логику для обработки нового iframe
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

// Настройка кликов для карточек
function setupCardClickHandlers(container) {
    container.addEventListener('click', (event) => {
        const target = event.target.closest('.playlists-card');
        if (target) {
            const cardIndex = Array.from(container.children).indexOf(target);
            if (cardIndex === 0) {
                initGoodVibes(container);
            } else if (cardIndex === 1) {
                initLcr(container);
            } else {
                console.warn('Функция для этой карточки еще не реализована');
            }
        }
    });
}