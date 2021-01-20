export const GAMESTATE = {
  RUN: 0,
  MENU: 1,
  ABORT: 2,
  WAIT: 3,
};

export const DOMelements = {
  game: document.getElementById('game'),
  // buttons
  buttons: [...document.querySelectorAll('button')],
  newGameBtn: document.getElementById('new-button'),
  startGameBtn: document.getElementById('playerName_Button'),
  continueGameBtn: document.getElementById('continue-button'),
  highscoreBtn: document.getElementById('high-score-button'),
  creditsBtn: document.getElementById('credits-button'),
  menuBtns: [...document.querySelectorAll('.main-menu-button')],
  menuHighscoreBtn: document.getElementById('main-menu-highscore'),
  menuCreditsBtn: document.getElementById('main-menu-credits'),
  menuGameOverBtn: document.getElementById('main-menu-gameOver'),
  muteBtn: document.getElementById('options__mute-button'),
  languageBtn: document.getElementById('options__language-button'),
  themeBtn: document.getElementById('options__theme-button'),
  fullscreenBtn: document.getElementById('options__fullscreen-button'),
  endGameBtn: document.getElementById('endGame-button'),
  // text input
  playerNameInput: document.getElementById('playerName_Field'),
  // cards
  cards: document.querySelectorAll('#game div.game-card'),
  playgroundCard: document.getElementById('playground'),
  newGameCard: document.getElementById('new-game'),
  highscoreCard: document.getElementById('high-score'),
  creditsCard: document.getElementById('credits'),
  menuCard: document.getElementById('menu'),
  gameOverCard: document.getElementById('gameOver'),
  // panel
  options: document.getElementById('options'),
  infoPanel: document.getElementById('info-panel'),
};

export const SVG = {
  fullscreenExit: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 215.4 215.4" xml:space="preserve">
<g>
 <path class="fill" d="M146.7,204.3c4.1,0,7.5-3.4,7.5-7.5v-32l48.3,48.3c1.5,1.5,3.4,2.2,5.3,2.2c1.9,0,3.8-0.7,5.3-2.2
   c2.9-2.9,2.9-7.7,0-10.6l-48.3-48.3h32c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-50.1c-4.1,0-7.5,3.4-7.5,7.5v50.1
   C139.2,201,142.6,204.3,146.7,204.3z"/>
 <path class="fill" d="M70.1,12.5c-4.1,0-7.5,3.4-7.5,7.5v32L12.8,2.2c-2.9-2.9-7.7-2.9-10.6,0s-2.9,7.7,0,10.6L52,62.6H20
   c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h50.1c4.1,0,7.5-3.4,7.5-7.5V20C77.6,15.9,74.2,12.5,70.1,12.5z"/>
 <path class="fill" d="M201.6,2.2L151.8,52V20c0-4.1-3.4-7.5-7.5-7.5s-7.5,3.4-7.5,7.5v50.1c0,4.1,3.4,7.5,7.5,7.5h50.1
   c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-32l49.8-49.8c2.9-2.9,2.9-7.7,0-10.6C209.3-0.7,204.5-0.7,201.6,2.2z"/>
 <path class="fill" d="M69.3,139.2H19.3c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h32L2.9,202.5c-2.9,2.9-2.9,7.7,0,10.6
   c1.5,1.5,3.4,2.2,5.3,2.2c1.9,0,3.8-0.7,5.3-2.2l48.3-48.3v32c0,4.1,3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5v-50.1
   C76.8,142.6,73.5,139.2,69.3,139.2z"/>
</g>
</svg>`,
  fullscreen: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 215.35 215.35" style="enable-background:new 0 0 215.35 215.35;" xml:space="preserve">
<g>
 <path class="fill" d="M7.5,65.088c4.143,0,7.5-3.358,7.5-7.5V25.61l48.305,48.295c1.465,1.464,3.384,2.196,5.303,2.196
   c1.92,0,3.84-0.732,5.304-2.197c2.929-2.929,2.929-7.678-0.001-10.606L25.604,15.002h31.985c4.142,0,7.5-3.358,7.5-7.5
   c0-4.142-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.358-7.5,7.5v50.087C0,61.73,3.357,65.088,7.5,65.088z"/>
 <path class="fill" d="M207.85,150.262c-4.143,0-7.5,3.358-7.5,7.5v31.979l-49.792-49.792c-2.93-2.929-7.678-2.929-10.607,0
   c-2.929,2.929-2.929,7.678,0,10.606l49.791,49.791h-31.977c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h50.086
   c4.143,0,7.5-3.358,7.5-7.5v-50.084C215.35,153.62,211.992,150.262,207.85,150.262z"/>
 <path class="fill" d="M64.792,139.949L15.005,189.74v-31.978c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v50.086c0,4.142,3.357,7.5,7.5,7.5
   h50.084c4.142,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H25.611l49.788-49.793c2.929-2.929,2.929-7.678-0.001-10.607
   C72.471,137.02,67.722,137.02,64.792,139.949z"/>
 <path class="fill" d="M207.85,0.002h-50.086c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.979l-48.298,48.301
   c-2.929,2.929-2.929,7.678,0.001,10.607c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.733,5.304-2.197l48.298-48.301v31.98
   c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V7.502C215.35,3.359,211.992,0.002,207.85,0.002z"/>
</g>
</svg>`,
  soundOn: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
 <g>
   <path class="fill" d="m424.962 97.1c-5.857 5.858-5.856 15.356.003 21.213 36.78 36.77 57.035 85.666 57.035 137.682 0 52.015-20.255 100.912-57.035 137.682-9.38 9.377-2.771 25.613 10.605 25.613 4.225 0 8.042-1.748 10.768-4.56 42.345-42.419 65.662-98.782 65.662-158.735 0-60.031-23.377-116.461-65.825-158.898-5.858-5.857-15.356-5.855-21.213.003z"/>
   <path class="fill" d="m382.542 351.265c-5.857 5.859-5.855 15.356.004 21.213 5.857 5.856 15.356 5.856 21.213-.004 31.109-31.12 48.241-72.484 48.241-116.474s-17.132-85.354-48.242-116.475c-5.857-5.859-15.354-5.861-21.213-.004s-5.861 15.354-.004 21.213c25.446 25.455 39.459 59.287 39.459 95.266s-14.013 69.811-39.458 95.265z"/>
   <path class="fill" d="m340.11 330.043c5.856 5.859 15.353 5.863 21.213.006 19.782-19.769 30.677-46.068 30.677-74.049s-10.895-54.28-30.676-74.05c-5.86-5.856-15.357-5.853-21.213.006-5.856 5.86-5.853 15.357.006 21.213 14.112 14.104 21.883 32.866 21.883 52.831s-7.771 38.727-21.883 52.83c-5.86 5.856-5.863 15.353-.007 21.213z"/>
   <path class="fill" d="m15 146.429h60v219.14h-60c-8.28 0-15-6.71-15-15v-189.14c0-8.29 6.72-15 15-15z"/>
   <path class="fill" d="m303.81 78.589v354.82c0 21.57-23.12 35.24-42.01 24.83l-156.8-86.32v-231.84l156.8-86.32c18.9-10.41 42.01 3.27 42.01 24.83z"/>
 </g>
</svg>`,
  soundOff: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
 <g>
   <path class="fill" d="m15 146.429h60v219.14h-60c-8.28 0-15-6.71-15-15v-189.14c0-8.29 6.72-15 15-15z"/>
   <path class="fill" d="m303.81 78.589v354.82c0 21.57-23.12 35.24-42.01 24.83l-156.8-86.32v-231.84l156.8-86.32c18.9-10.41 42.01 3.27 42.01 24.83z"/>
 </g>
</svg>`,
  language: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
 <g>
   <path class="fill" d="m207.386 280.048c0-4.142-3.358-7.5-7.5-7.5h-168.338c-9.125 0-16.548-7.423-16.548-16.548v-224.452c0-9.125 7.423-16.548 16.548-16.548h224.452c9.125 0 16.548 7.423 16.548 16.548v168.338c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-168.338c0-17.396-14.152-31.548-31.548-31.548h-224.452c-17.396 0-31.548 14.152-31.548 31.548v224.452c0 17.396 14.152 31.548 31.548 31.548h168.338c4.142 0 7.5-3.358 7.5-7.5z"/>
   <path class="fill" d="m480.452 224.452h-64.129c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h64.129c9.125 0 16.548 7.423 16.548 16.548v224.452c0 9.125-7.423 16.548-16.548 16.548h-224.452c-9.125 0-16.548-7.423-16.548-16.548v-224.452c0-9.125 7.423-16.548 16.548-16.548h128.259c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-128.259c-17.396 0-31.548 14.152-31.548 31.548v224.452c0 17.396 14.152 31.548 31.548 31.548h224.452c17.396 0 31.548-14.152 31.548-31.548v-224.452c0-17.396-14.152-31.548-31.548-31.548z"/>
   <path class="fill" d="m215.919 80.161h-64.645v-8.532c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v8.532h-64.645c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h110.446c-4.319 13.874-15.141 41.853-38.337 69.779-14.166-17.038-23.762-34.166-30.118-48.323-1.697-3.778-6.133-5.467-9.914-3.771-3.779 1.697-5.467 6.135-3.771 9.914 7.021 15.639 17.728 34.661 33.696 53.479-11.383 11.809-25.167 23.259-41.814 33.248-3.552 2.131-4.704 6.738-2.572 10.29 1.406 2.344 3.89 3.642 6.438 3.642 1.313 0 2.644-.345 3.852-1.07 17.648-10.589 32.225-22.703 44.2-35.007 12.11 12.434 26.701 24.462 44.276 35.007 1.208.725 2.539 1.07 3.852 1.07 2.548 0 5.032-1.298 6.438-3.642 2.131-3.552.979-8.159-2.572-10.29-16.676-10.005-30.473-21.447-41.88-33.265 11.789-13.878 20.436-27.488 26.589-38.914 9.956-18.49 15.043-34.033 17.292-42.148h18.189c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.499-7.5-7.499z"/>
   <path class="fill" d="m378.434 295.254c-1.668-4.055-5.577-6.674-9.961-6.674-.003 0-.007 0-.011 0-4.388.004-8.297 2.631-9.958 6.693-.023.056-.045.113-.067.169l-54.181 142.258c-1.474 3.871.468 8.204 4.339 9.678.879.335 1.781.493 2.668.493 3.022 0 5.871-1.84 7.01-4.833l11.654-30.599h76.701l11.54 30.578c1.463 3.875 5.788 5.832 9.665 4.369 3.875-1.462 5.832-5.79 4.369-9.665l-53.688-142.264c-.025-.067-.052-.135-.08-.203zm-42.793 102.187 32.813-86.156 32.514 86.156z"/>
   <path class="fill" d="m204.387 410.323-32.064-24.048c-3.313-2.485-8.015-1.813-10.5 1.5s-1.813 8.015 1.5 10.5l14.064 10.548h-25.597c-26.806 0-48.613-21.808-48.613-48.613v-48.093c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v48.093c0 35.077 28.537 63.613 63.613 63.613h25.597l-14.064 10.548c-3.313 2.485-3.985 7.187-1.5 10.5 1.474 1.965 3.726 3 6.006 3 1.566 0 3.145-.489 4.494-1.5l32.064-24.048c1.889-1.417 3-3.639 3-6s-1.111-4.584-3-6z"/>
   <path class="fill" d="m307.613 101.677 32.064 24.048c1.349 1.012 2.928 1.5 4.494 1.5 2.28 0 4.533-1.036 6.006-3 2.485-3.313 1.813-8.015-1.5-10.5l-14.064-10.548h25.597c26.806 0 48.613 21.808 48.613 48.613v48.093c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-48.093c0-35.077-28.537-63.613-63.613-63.613h-25.597l14.064-10.548c3.313-2.485 3.985-7.187 1.5-10.5-2.486-3.314-7.186-3.985-10.5-1.5l-32.064 24.048c-1.889 1.417-3 3.639-3 6s1.111 4.584 3 6z"/>
 </g>
</svg>`,
  theme: `<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
	<g>
		<g>
			<path class="fill" d="M475.691,0.021c-14.656,0-27.776,8.725-33.451,22.251l-32.64,77.973c-9.728-9.152-22.421-14.933-36.267-14.933h-320
			C23.936,85.312,0,109.248,0,138.645v320c0,29.397,23.936,53.333,53.333,53.333h320c29.397,0,53.333-23.936,53.333-53.333V225.152
			l81.92-172.821c2.24-4.757,3.413-10.048,3.413-16.043C512,16.299,495.701,0.021,475.691,0.021z M405.333,458.645
			c0,17.643-14.357,32-32,32h-320c-17.643,0-32-14.357-32-32v-320c0-17.643,14.357-32,32-32h320
			c11.243,0,21.312,6.101,27.072,15.573l-37.739,90.197v-52.437c0-5.888-4.779-10.667-10.667-10.667H74.667
			c-5.888,0-10.667,4.779-10.667,10.667v85.333c0,5.888,4.779,10.667,10.667,10.667h269.76l-8.939,21.333h-90.155
			c-5.888,0-10.667,4.779-10.667,10.667v128c0,0.277,0.128,0.512,0.149,0.789c-8.768,7.787-14.144,10.389-14.528,10.539
			c-3.371,1.259-5.888,4.096-6.699,7.616c-0.811,3.584,0.256,7.339,2.859,9.941c15.445,15.445,36.757,21.333,57.6,21.333
			c26.645,0,52.48-9.643,64.128-21.333c16.768-16.768,29.056-50.005,19.776-74.773l47.381-99.925V458.645z M270.635,397.525
			c2.944-9.685,5.739-18.859,14.229-27.349c15.083-15.083,33.835-15.083,48.917,0c13.504,13.504,3.2,45.717-10.667,59.584
			c-11.563,11.541-52.672,22.677-80.256,8.256c3.669-2.859,7.893-6.549,12.672-11.328
			C264.448,417.749,267.605,407.467,270.635,397.525z M256,375.339v-76.672h70.571l-16.363,39.083
			c-14.251-0.256-28.565,5.483-40.448,17.387C263.125,361.771,259.008,368.661,256,375.339z M331.264,342.741l28.715-68.629
			l16.128,7.915l-32.555,68.651C339.605,347.477,335.531,344.747,331.264,342.741z M341.333,170.645v64h-256v-64H341.333z
			 M489.28,43.243l-104.064,219.52l-17.003-8.341l54.08-129.237l39.616-94.677c2.325-5.568,7.744-9.152,13.803-9.152
			c8.235,0,14.933,6.699,14.933,15.659C490.645,39.147,490.176,41.344,489.28,43.243z"/>
		</g>
	</g>
	<g>
		<g>
			<path class="fill" d="M181.333,277.312H74.667c-5.888,0-10.667,4.779-10.667,10.667v149.333c0,5.888,4.779,10.667,10.667,10.667h106.667
			c5.888,0,10.667-4.779,10.667-10.667V287.979C192,282.091,187.221,277.312,181.333,277.312z M170.667,426.645H85.333v-128h85.333
			V426.645z"/>
		</g>
	</g>
</svg>`,
};
