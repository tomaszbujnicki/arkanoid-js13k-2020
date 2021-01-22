import { DOMelements, SVG } from './data';

export let theme;
let root = document.documentElement;

const themeList = [
  {
    name: 'default',
    background: '#000000',
    first: '#ffffff',
    second: '#0000ff',
    sound: SVG.soundOn,
    mute: SVG.soundOff,
    language: SVG.language,
    theme: SVG.theme,
    fullscreen: SVG.fullscreen,
    fullscreenExit: SVG.fullscreenExit,
    stroke: 'silver',
    block1: 'white',
    block2: 'blue',
    block3: 'green',
    block4: 'red',
  },
  {
    name: 'custom',
    background: '#cccccc',
    first: '#333333',
    second: '#999999',
    block1: 'pink',
    block2: 'brown',
    block3: 'wheat',
    block4: 'black',
  },
  {
    name: 'burn',
    background: '#000000',
    first: '#ff0000',
    second: '#ffff00',
  },
  {
    name: 'B&R',
    background: '#aaaaaa',
    first: '#000000',
    second: '#ffffff',
  },
];

export function setTheme() {
  theme = themeList[0];
  root.style.setProperty('--background', theme.background);
  root.style.setProperty('--first', theme.first);
  root.style.setProperty('--second', theme.second);
  if (!theme.sound) {
  }
  DOMelements.muteBtn.innerHTML = theme.sound
    ? theme.sound
    : themeList[0].sound;
  DOMelements.languageBtn.innerHTML = theme.language
    ? theme.language
    : themeList[0].language;
  DOMelements.themeBtn.innerHTML = theme.theme
    ? theme.theme
    : themeList[0].theme;
  DOMelements.fullscreenBtn.innerHTML = theme.fullscreen
    ? theme.fullscreen
    : themeList[0].fullscreen;
}
