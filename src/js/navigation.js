import { DOMelements } from './data';
import SOUND from './sounds';
import { options } from './options';

export class Navigation {
  constructor(game) {
    this.game = game;
    this.listen();
  }
  listen() {
    DOMelements.buttons.forEach((button) =>
      button.addEventListener('click', () => SOUND.mouseClick.play())
    );
    DOMelements.newGameBtn.addEventListener('click', () => this.newGame());
    DOMelements.startGameBtn.addEventListener('click', () => this.startGame());
    DOMelements.continueGameBtn.addEventListener('click', () =>
      this.continueGame()
    );
    DOMelements.highscoreBtn.addEventListener('click', () => this.highscore());
    DOMelements.creditsBtn.addEventListener('click', () => this.credits());
    DOMelements.mainMenuBtns.forEach((button) =>
      button.addEventListener('click', () => this.mainMenu())
    );
    DOMelements.muteBtn.addEventListener('click', () => this.mute());
    DOMelements.fullscreenBtn.addEventListener('click', () =>
      this.fullscreen()
    );
  }

  hide(el) {
    el.classList.add('hide');
  }
  show(el) {
    el.classList.remove('hide');
  }

  openCard(el) {
    DOMelements.cards.forEach((card) => this.hide(card));

    if (el === DOMelements.playgroundCard) {
      this.hide(DOMelements.options);
      this.show(DOMelements.infoPanel);
    } else {
      this.show(DOMelements.options);
      this.hide(DOMelements.infoPanel);
    }

    this.show(el);
  }

  disable(el, isDisabled = true) {
    el.disabled = isDisabled;
    if (!isDisabled) {
      el.classList.remove('disabled');
    } else {
      el.classList.add('disabled');
    }
  }

  newGame() {
    this.openCard(DOMelements.playerNameCard);
    DOMelements.playerNameInput.focus();
  }

  startGame() {
    this.disable(DOMelements.continueGameBtn, false);
    this.openCard(DOMelements.playgroundCard);
    this.game.startNewGame();
  }

  continueGame() {
    this.openCard(DOMelements.playgroundCard);
    this.game.resume();
  }

  highscore() {
    highscore.show();
    openCard('high-score');
    document.getElementById('main-menu-highscore').focus();
  }

  credits() {
    openCard('credits');
    document.getElementById('main-menu-credits').focus();
  }

  mainMenu() {
    openCard('menu');
    document.getElementById('start-button').focus();
  }

  mute() {
    options.toggleMute();
  }

  fullscreen() {
    options.toggleFullscreen();
  }

  keyboard() {
    DOMelements.newGameBtn.focus();
    // focus order
    document.querySelector('#menu button').focus();
    const optionsButtons = document.querySelectorAll('#options button');

    document.addEventListener('keydown', press);

    function press(e) {
      if (document.activeElement.tagName !== 'INPUT') {
        // F
        if (e.keyCode === 70) {
          action('fullscreen');
        }
        // M
        if (e.keyCode === 77) {
          action('mute');
        }
        // Right
        if (e.keyCode === 39) {
          if (document.getElementById('playground').offsetWidth === 0) {
            const firstButton = document.querySelector('.options__button');
            firstButton.focus();
          }
        }
        // Left
        if (e.keyCode === 37) {
          if (document.getElementById('playground').offsetWidth === 0) {
            const firstButton = document.querySelector(
              '.game-card:not(.hide) button'
            );
            firstButton.focus();
          }
        }
      }

      // Enter
      if (e.keyCode === 13) {
        if (
          document.activeElement === document.getElementById('playerName_Field')
        ) {
          action('start-game');
        }
      }

      // Down
      if (e.keyCode === 40) {
        const focused = document.activeElement;
        const buttons = focused.classList.contains('options__button')
          ? [...document.querySelectorAll('.options__button')]
          : [
              ...document.querySelectorAll(
                '.game-card:not(.hide) button:not(.disabled)'
              ),
            ];

        if (buttons.length > 1) {
          if (focused !== buttons[buttons.length - 1]) {
            const index = buttons.findIndex((e) => e === focused);
            buttons[index + 1].focus();
          }
        }
      }

      // Up
      if (e.keyCode === 38) {
        const focused = document.activeElement;
        const buttons = focused.classList.contains('options__button')
          ? [...document.querySelectorAll('.options__button')]
          : [
              ...document.querySelectorAll(
                '.game-card:not(.hide) button:not(.disabled)'
              ),
            ];

        if (buttons.length > 1) {
          if (focused !== buttons[0]) {
            const index = buttons.findIndex((e) => e === focused);
            buttons[index - 1].focus();
          }
        }
      }
    }
  }
  getPlayerName() {
    let playerName = document.getElementById('playerName_Field').value;
    if (!playerName) {
      playerName = 'Player';
    }
    return playerName;
  }
}
