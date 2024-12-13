import './scss/index.scss';
import './fonts/fonts.scss';
import './components/goodvibes-video.js';
import './components/playlists.js';
import {initGoodVibes} from "./components/goodvibes-video";
import {populateContainer} from "./components/playlists";

const videoContainer = document.querySelector('.goodvibes');
const cardTemplate = document.getElementById('playlists-card-template');
const playlistsContainer = document.querySelector('.playlists__container');

document.addEventListener('DOMContentLoaded', () => {
    if (videoContainer) {
        initGoodVibes(videoContainer);
    }
    if (cardTemplate && playlistsContainer) {
        populateContainer(cardTemplate, playlistsContainer);
    }
});