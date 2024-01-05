/**
 * Created by K.Sachko on 28.10.2017.
 */

import themes from '../constants/themes';
import difficulties from '../constants/difficulties';
import {Game} from "./Game";

export class GameMenu {

  get themes() {
    return themes;
  }

  get difficulties() {
    return difficulties;
  }

  setDifficulty(difficulty) {
    this.difficulty = difficulty;
  }

  setTheme(theme) {
    this.theme = theme;
  }

  getDifficulty() {
    return this.difficulty;
  }

  getTheme() {
    return this.theme;
  }

  startGame() {
    return new Game(this.difficulty, this.theme);
  }

}

