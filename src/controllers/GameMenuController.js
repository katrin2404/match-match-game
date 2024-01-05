/**
 * Created by K.Sachko on 28.10.2017.
 */

import {GameMenu} from "../models/GameMenu";

export class GameMenuController {
  constructor(gameController) {
    this.gameController = gameController;
    this.model = new GameMenu();
    this.showPopover();
    this.initMenu();
    this.initThemes(this.model.themes);
    this.initDifficulties(this.model.difficulties);
    this.initStartButton();
    this.toggleMenu();
  }


  showPopover() {
    this._menuButtonElement = document.querySelector('.modal-trigger');
    this._menuButtonElement.addEventListener('click', () => this.toggleMenu());
  }

  initMenu() {
    this._menuElement = document.querySelector('.modal-container');
    this._menuStartButtonElement = document.querySelector('.submit');
    this._menuStartButtonElement.disabled = true;
    this._menuStartButtonElement.addEventListener('click', () => this.toggleMenu());
  }


  toggleMenu() {
    const selectedTheme = this._themeElement.querySelector('.selected');
    const selectedDifficulty = this._difficultyElement.querySelector('.selected-btn');
    if (this._menuElement.classList.contains('open') && selectedTheme && selectedDifficulty) {
      this._menuElement.classList.remove('open');
    } else {
      this._menuElement.classList.add('open');
    }
  }

  initThemes(themes) {
    this._themeElement = document.querySelector('.menu-selector.theme');
    themes.forEach(theme => {
      const item = document.createElement('li');
      item.classList.add('theme-element');
      item.innerHTML = `<img src="${theme.avatar}"><span class="caption-theme">${theme.name}</span>`;
      item.addEventListener('click', (event) => {
        if (this._difficultyElement.querySelector('.selected-btn')){
          this._menuStartButtonElement.disabled = false;
        }
        this.setTheme(event, theme)
      });
      this._themeElement.appendChild(item);
    });
  }

  setTheme(event, theme) {
    this.model.setTheme(theme);
    const selectedElement = this._themeElement.querySelector('.selected');
    if (selectedElement && selectedElement !== event.currentTarget) {
      selectedElement.classList.remove('selected');
    }
    event.currentTarget.classList.add('selected');
  }

  initDifficulties(difficulties) {
    this._difficultyElement = document.querySelector('.menu-selector.difficulty');
    difficulties.forEach(difficulty => {
      const item = document.createElement('li');
      item.innerHTML = `<button class='difficulty-button'>${difficulty.name}</button>`;
      item.addEventListener('click', (event) => {
        if (this._themeElement.querySelector('.selected')){
          this._menuStartButtonElement.disabled = false;
        }
        this.setDifficulty(event, difficulty)
      });
      this._difficultyElement.appendChild(item);
    });
  }

  setDifficulty(event, difficulty) {
    this.model.setDifficulty(difficulty);
    const selectedElement = this._difficultyElement.querySelector('.selected-btn');
    if (selectedElement && selectedElement !== event.currentTarget) {
      selectedElement.classList.remove('selected-btn');
    }
    event.currentTarget.classList.add('selected-btn');
  }


  initStartButton() {
    this._startGameElement = document.querySelector('.submit');
    this._startGameElement.addEventListener('click', () => {
        const game = this.model.startGame();
        this.gameController.setGame(game);
      }
    );
  }
}
