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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/gameguides/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ createVideoIframe),
  Z: () => (/* binding */ updateContainer)
});

;// ./src/components/data.js
var GoodvibesIds = ['7GD91esrJv8', '6VMFfIS8AsE', 'X2E5NRZ7YMs', 'TtKzENzJdUs', 'T7DNeYpG4pY', 'Rc8_-ifnRV4', 'VAIeubbl8HA', 'ML20vihZ1KI', 'FPNk2ui6OkE', 'i7dREPa20PI', '8Tja4a4y4fk'];
var LaughtCryIds = ['eWzOGm241po', 'fCcjngycS68', '_nKDRXcj3Xk', '5Ktgnj98OpM', 'u3PpfNJv9K8'];
var cardsData = [{
  title: "Good Vibes Of Таверна",
  imageUrl: __webpack_require__(831)
}, {
  title: "Laugh, Cry, Repeat",
  imageUrl: __webpack_require__(966)
}, {
  title: "Genshin Impact",
  imageUrl: __webpack_require__(117)
}];
;// ./src/components/goodvibes-video.js


function initGoodVibes(container) {
  var fragment = document.createDocumentFragment();
  GoodvibesIds.forEach(function (videoId) {
    var iframe = createVideoIframe(videoId);
    fragment.appendChild(iframe);
  });
  updateContainer(container, fragment);
}
;// ./src/components/playlists.js


// Функция для создания одной карточки
function createCard(template, data) {
  var cardClone = document.importNode(template.content, true);
  var card = cardClone.querySelector('.playlists-card');
  card.querySelector('.playlists-card-title').textContent = data.title;
  card.querySelector('.playlists-card-image').style.backgroundImage = "url(".concat(data.imageUrl, ")");
  return card;
}

// Функция для добавления карточек в контейнер
function populateContainer(template, container) {
  container.innerHTML = ''; // Очищаем контейнер
  cardsData.forEach(function (data) {
    return container.appendChild(createCard(template, data));
  });
}
;// ./src/components/lcr-video.js


function initLcr(container) {
  var fragment = document.createDocumentFragment();
  LaughtCryIds.forEach(function (videoId) {
    var iframe = createVideoIframe(videoId);
    fragment.appendChild(iframe);
  });
  updateContainer(container, fragment);
}
;// ./src/index.js







var cardTemplate = document.getElementById('playlists-card-template');
var mainContainer = document.querySelector('.playlists__container.container');
document.addEventListener('DOMContentLoaded', function () {
  if (cardTemplate && mainContainer) {
    populateContainer(cardTemplate, mainContainer);
    setupCardClickHandlers(mainContainer);
  }
  // Инициализация MutationObserver
  setupMutationObserver([mainContainer]);
});

// Обновление содержимого контейнера
function updateContainer(container, newContent) {
  container.innerHTML = ''; // Очищаем контейнер
  container.appendChild(newContent); // Добавляем новый контент
}

// Функция для создания iframe
function createVideoIframe(videoId) {
  var iframe = document.createElement('iframe');
  iframe.src = "https://www.youtube.com/embed/".concat(videoId);
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
  var observer = new MutationObserver(function (mutationsList) {
    mutationsList.forEach(function (mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function (node) {
          if (node instanceof HTMLElement && node.tagName === 'IFRAME') {
            console.log('Новый iframe добавлен:', node);
            //можно добавить дополнительную логику для обработки нового iframe
          }
        });
      }
    });
  });
  containers.forEach(function (container) {
    if (container) {
      observer.observe(container, {
        childList: true,
        // Отслеживаем добавление/удаление дочерних элементов
        subtree: true // Отслеживаем изменения во всем поддереве
      });
    }
  });
}

// Настройка кликов для карточек
function setupCardClickHandlers(container) {
  container.addEventListener('click', function (event) {
    var target = event.target.closest('.playlists-card');
    if (target) {
      var cardIndex = Array.from(container.children).indexOf(target);
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
/******/ })()
;