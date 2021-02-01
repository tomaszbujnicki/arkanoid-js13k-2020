import { DOMelements, SVG } from './data';

const root = document.documentElement;

export const theme = {
  id: 0,
  active: undefined,

  get() {
    if (localStorage.getItem('theme')) {
      this.id = parseInt(localStorage.getItem('theme'));
    }
    this.load();
  },

  save() {
    localStorage.setItem('theme', this.id);
  },

  next() {
    themeList.length - 1 > this.id ? this.id++ : (this.id = 0);
    this.load();
  },

  previous() {
    this.id > 0 ? this.id : (this.id = themeList.length - 1);
    this.load();
  },

  load() {
    if (themeList[this.id]) {
      this.save();
      this.active = themeList[this.id];

      root.style.setProperty('--background', this.active.background);
      root.style.setProperty('--first', this.active.first);
      root.style.setProperty('--second', this.active.second);

      DOMelements.muteBtn.innerHTML = this.active.sound;
      DOMelements.languageBtn.innerHTML = this.active.language;
      DOMelements.themeBtn.innerHTML = this.active.theme;
      DOMelements.fullscreenBtn.innerHTML = this.active.fullscreen;
    }
  },
};

const themeList = [
  {
    name: 'default',
    background: 'black',
    first: '#ffffff',
    second: '#0000ff',
    sound: SVG.soundOn,
    mute: SVG.soundOff,
    language: SVG.language,
    theme: SVG.theme,
    fullscreen: SVG.fullscreen,
    fullscreenExit: SVG.fullscreenExit,
    block1: 'violet',
    block2: 'blue',
    block3: 'green',
    block4: 'orange',
    block5: 'gold',
    block6: 'silver',
  },
  {
    name: 'custom',
    background: '#cccccc',
    first: '#333333',
    second: '#999999',
    sound: SVG.soundOn,
    mute: SVG.soundOff,
    language: SVG.language,
    theme: SVG.theme,
    fullscreen: SVG.fullscreen,
    fullscreenExit: SVG.fullscreenExit,
    block1: 'pink',
    block2: 'brown',
    block3: 'wheat',
    block4: 'black',
    block5: 'gold',
    block6: 'silver',
  },
  {
    name: 'burn',
    background: '#000000',
    first: '#ff0000',
    second: '#ffff00',
    sound: SVG.soundOn,
    mute: SVG.soundOff,
    language: SVG.language,
    theme: SVG.theme,
    fullscreen: SVG.fullscreen,
    fullscreenExit: SVG.fullscreenExit,
    block1: 'violet',
    block2: 'blue',
    block3: 'green',
    block4: 'orange',
    block5: 'gold',
    block6: 'silver',
  },
  {
    name: 'B&R',
    background: '#aaaaaa',
    first: '#000000',
    second: '#ffffff',
    sound: SVG.soundOn,
    mute: SVG.soundOff,
    language: SVG.language,
    theme: SVG.theme,
    fullscreen: SVG.fullscreen,
    fullscreenExit: SVG.fullscreenExit,
    block1: 'violet',
    block2: 'blue',
    block3: 'green',
    block4: 'orange',
    block5: 'gold',
    block6: 'silver',
  },
];
