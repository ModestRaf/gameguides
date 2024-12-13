/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/goodvibes-gi.7a6c6ac3a6f60e1718ea.jpg";

/***/ }),

/***/ 831:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/goodvibes-goodvibes.d358e1c0dc5aa12efa0b.jpg";

/***/ }),

/***/ 966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/goodvibes-lcr.d934d0d8a119508d8233.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/gameguides/";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/components/playlists-data.js
var cardsData = [{
  title: "Good Vibes Of Таверна",
  imageUrl: __webpack_require__(831),
  url: "goodvibes-goodvibes.html" // URL для перехода
}, {
  title: "Laugh, Cry, Repeat",
  imageUrl: __webpack_require__(966)
}, {
  title: "Genshin Impact",
  imageUrl: __webpack_require__(117)
}];
;// ./src/components/goodvibes-data.js
var videoIds = ['7GD91esrJv8', '6VMFfIS8AsE', 'X2E5NRZ7YMs', 'TtKzENzJdUs', 'T7DNeYpG4pY', 'Rc8_-ifnRV4', 'VAIeubbl8HA', 'ML20vihZ1KI', 'FPNk2ui6OkE', 'i7dREPa20PI', '8Tja4a4y4fk'];
;// ./src/components/goodvibes-video.js

document.addEventListener('DOMContentLoaded', function () {
  var videoContainer = document.querySelector('.goodvibes');
  videoIds.forEach(function (videoId) {
    var iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/".concat(videoId);
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);
  });
});
;// ./src/index.js




document.addEventListener('DOMContentLoaded', function () {
  // Функция для создания карточки
  function createCard(template, data) {
    var cardClone = document.importNode(template.content, true);

    // Заполнение данных
    var card = cardClone.querySelector('.playlists-card');
    card.querySelector('.playlists-card-title').textContent = data.title;
    card.querySelector('.playlists-card-image').style.backgroundImage = "url(".concat(data.imageUrl, ")");

    // Обработчик клика
    card.addEventListener('click', function () {
      window.location.href = data.url;
    });
    return card;
  }

  // Функция для добавления карточек в контейнер
  function populateContainer(template, container) {
    cardsData.forEach(function (data) {
      return container.appendChild(createCard(template, data));
    });
  }

  // Функция для запуска приложения, когда элементы готовы
  function initializeApp() {
    var cardTemplate = document.getElementById('playlists-card-template');
    var playlistsContainer = document.querySelector('.playlists__container');
    if (cardTemplate && playlistsContainer) {
      populateContainer(cardTemplate, playlistsContainer);
    }
  }

  // Функция для наблюдения за DOM
  function observeDOM() {
    var observer = new MutationObserver(function () {
      if (document.getElementById('playlists-card-template') && document.querySelector('.playlists__container')) {
        observer.disconnect(); // Отключаем наблюдение
        initializeApp();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Инициализация
  initializeApp(); // Попробуем сразу
  observeDOM(); // Запустим наблюдение на случай, если элементы загрузятся позже
});
/******/ })()
;