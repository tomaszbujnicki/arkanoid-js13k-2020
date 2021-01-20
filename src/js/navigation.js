import { DOMelements, GAMESTATE, SVG } from './data';
import SOUND from './sounds';
import { options } from './options';
import highscore from './highscore';
import fscreen from 'fscreen';

export class Navigation {
  constructor(game) {
    this.game = game;
    this.listen();
    this.theme();
    DOMelements.newGameBtn.focus();
  }
  listen() {
    document.addEventListener('keydown', (e) => {
      if (this.game.state === GAMESTATE.MENU || /Key[FMP]/.test(e.code))
        this.action(e.code);
    });

    DOMelements.buttons.forEach((button) =>
      button.addEventListener('click', () => SOUND.mouseClick.play())
    );
    DOMelements.newGameBtn.addEventListener('click', () => this.newGame());
    DOMelements.startGameBtn.addEventListener('click', () => this.startGame());
    DOMelements.endGameBtn.addEventListener('click', () => this.gameOver());
    DOMelements.continueGameBtn.addEventListener('click', () =>
      this.continueGame()
    );
    DOMelements.highscoreBtn.addEventListener('click', () => this.highscore());
    DOMelements.creditsBtn.addEventListener('click', () => this.credits());
    DOMelements.menuBtns.forEach((button) =>
      button.addEventListener('click', () => this.menu())
    );
    DOMelements.muteBtn.addEventListener('click', () => options.toggleMute());
    DOMelements.fullscreenBtn.addEventListener('click', () =>
      options.toggleFullscreen()
    );
    DOMelements.themeBtn.addEventListener('click', () => this.theme());
    fscreen.addEventListener('fullscreenchange', this.fullscreenIcon, false);
  }

  newGame() {
    this.openCard(DOMelements.newGameCard);
    DOMelements.playerNameInput.focus();
  }

  startGame() {
    const playerName = DOMelements.playerNameInput.value;
    this.game.startNewGame(playerName, (isStarted) => {
      this.hide(DOMelements.endGameBtn);
      this.disable(DOMelements.continueGameBtn, false);
      this.openCard(DOMelements.playgroundCard);
    });
  }

  continueGame() {
    if (this.game.resume()) {
      this.openCard(DOMelements.playgroundCard);
    }
  }

  pause() {
    if (this.game.pause()) {
      this.openCard(DOMelements.menuCard);
      DOMelements.continueGameBtn.focus();
    }
  }

  gameOver() {
    if (this.game.endGame()) {
      this.disable(DOMelements.continueGameBtn);
      this.openCard(DOMelements.gameOverCard);
      DOMelements.menuGameOverBtn.focus();
    }
  }

  highscore() {
    highscore.show();
    this.openCard(DOMelements.highscoreCard);
    DOMelements.menuHighscoreBtn.focus();
  }

  credits() {
    this.openCard(DOMelements.creditsCard);
    DOMelements.menuCreditsBtn.focus();
  }

  menu() {
    this.openCard(DOMelements.menuCard);
    DOMelements.newGameBtn.focus();
  }

  action(key) {
    console.log(key);
    if (document.activeElement === DOMelements.playerNameInput) {
      switch (key) {
        case 'ArrowDown':
          DOMelements.startGameBtn.focus();
          break;
        case 'Enter':
          if (!DOMelements.newGameCard.classList.contains('hide')) {
            this.startGame();
          }
          break;
        case 'NumpadEnter':
          if (!DOMelements.newGameCard.classList.contains('hide')) {
            this.startGame();
          }
          break;
        default:
          break;
      }
    } else {
      switch (key) {
        case 'KeyF':
          options.toggleFullscreen();
          break;
        case 'KeyM':
          options.toggleMute();
          break;
        case 'KeyP':
          this.pause();
          break;
        case 'ArrowUp':
          this.moveFocus(-1);
          break;
        case 'ArrowDown':
          this.moveFocus(1);
          break;
        case 'ArrowLeft':
          const topButton = document.querySelector(
            '.game-card:not(.hide) button'
          );
          topButton.focus();
          break;
        case 'ArrowRight':
          DOMelements.muteBtn.focus();
          break;
        default:
          break;
      }
    }
  }

  fullscreenIcon() {
    if (fscreen.fullscreenElement !== null) {
      DOMelements.fullscreenBtn.innerHTML = SVG.fullscreenExit;
    } else {
      DOMelements.fullscreenBtn.innerHTML = SVG.fullscreen;
    }
  }

  theme() {
    /*     let root = document.documentElement;
    root.style.setProperty('--background', 'white');
    root.style.setProperty('--first', 'red');
    root.style.setProperty('--second', 'black'); */
    DOMelements.muteBtn.innerHTML = SVG.soundOn;
    DOMelements.languageBtn.innerHTML = SVG.language;
    DOMelements.themeBtn.innerHTML = SVG.theme;
    DOMelements.fullscreenBtn.innerHTML = SVG.fullscreen;
  }

  moveFocus(step) {
    const focused = document.activeElement;
    const buttons = focused.classList.contains('options__button')
      ? [...document.querySelectorAll('.options__button')]
      : [
          ...document.querySelectorAll(
            '.game-card:not(.hide) button:not(.disabled), #playerName_Field'
          ),
        ];
    const index = buttons.findIndex((e) => e === focused);
    if (buttons[index + step]) {
      buttons[index + step].focus();
    }
  }

  hide(el) {
    el.classList.add('hide');
  }
  show(el) {
    el.classList.remove('hide');
  }

  openCard(card) {
    DOMelements.cards.forEach((card) => this.hide(card));

    if (card === DOMelements.playgroundCard) {
      this.hide(DOMelements.options);
      this.show(DOMelements.infoPanel);
    } else {
      this.show(DOMelements.options);
      this.hide(DOMelements.infoPanel);
    }

    this.show(card);
  }

  disable(el, isDisabled = true) {
    el.disabled = isDisabled;
    if (!isDisabled) {
      el.classList.remove('disabled');
    } else {
      el.classList.add('disabled');
    }
  }
}
