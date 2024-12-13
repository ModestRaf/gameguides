import './scss/index.scss';
import './fonts/fonts.scss';
import { cardsData } from './components/playlists-data.js';
import './components/goodvibes-video.js';

document.addEventListener('DOMContentLoaded', () => {
    // Функция для создания карточки
    function createCard(template, data) {
        const cardClone = document.importNode(template.content, true);

        // Заполнение данных
        const card = cardClone.querySelector('.playlists-card');
        card.querySelector('.playlists-card-title').textContent = data.title;
        card.querySelector('.playlists-card-image').style.backgroundImage = `url(${data.imageUrl})`;

        // Обработчик клика
        card.addEventListener('click', () => {
            window.location.href = data.url;
        });

        return card;
    }

    // Функция для добавления карточек в контейнер
    function populateContainer(template, container) {
        cardsData.forEach(data => container.appendChild(createCard(template, data)));
    }

    // Функция для запуска приложения, когда элементы готовы
    function initializeApp() {
        const cardTemplate = document.getElementById('playlists-card-template');
        const playlistsContainer = document.querySelector('.playlists__container');

        if (cardTemplate && playlistsContainer) {
            populateContainer(cardTemplate, playlistsContainer);
        }
    }

    // Функция для наблюдения за DOM
    function observeDOM() {
        const observer = new MutationObserver(() => {
            if (document.getElementById('playlists-card-template') && document.querySelector('.playlists__container')) {
                observer.disconnect(); // Отключаем наблюдение
                initializeApp();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Инициализация
    initializeApp(); // Попробуем сразу
    observeDOM(); // Запустим наблюдение на случай, если элементы загрузятся позже
});