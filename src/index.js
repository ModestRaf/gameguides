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
            if (data.url) {
                window.location.href = data.url;
            }
        });

        return card;
    }

    // Функция для добавления карточек в контейнер
    function populateContainer(template, container) {
        // Очищаем контейнер перед добавлением карточек
        container.innerHTML = '';

        cardsData.forEach(data => container.appendChild(createCard(template, data)));
    }

    // Функция для запуска приложения, когда элементы готовы
    function initializeApp() {
        const cardTemplate = document.getElementById('playlists-card-template');
        const playlistsContainer = document.querySelector('.playlists__container');

        if (cardTemplate && playlistsContainer) {
            populateContainer(cardTemplate, playlistsContainer);
        } else {
            console.error('Шаблон или контейнер не найдены!');
        }
    }

    // Инициализация
    initializeApp();
});