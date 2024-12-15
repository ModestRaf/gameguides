import { cardsData } from './data.js';

// Функция для создания одной карточки
export function createCard(template, data) {
    const cardClone = document.importNode(template.content, true);
    const card = cardClone.querySelector('.playlists-card');
    card.querySelector('.playlists-card-title').textContent = data.title;
    card.querySelector('.playlists-card-image').style.backgroundImage = `url(${data.imageUrl})`;

    return card;
}

// Функция для добавления карточек в контейнер
export function populateContainer(template, container) {
    container.innerHTML = ''; // Очищаем контейнер
    cardsData.forEach(data => container.appendChild(createCard(template, data)));
}
