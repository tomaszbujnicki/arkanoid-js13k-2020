clearLevel();
createLevelObjects(levelArray[game.level]);

function clearLevel() {
  playfield = {};
  paddle = {};
  blockArray = [];
  ballArray = [];
  IdCounter = 0;

  const playfieldElement = document.getElementById('playfield');
  if (playfieldElement) playfieldElement.remove();
}