export const highscore = {
  maxLength: 5,
  table: [
    { player: 'Mike', score: 1 },
    { player: 'Derrek', score: 2 },
    { player: 'Emily', score: 3 },
    { player: 'Bart', score: 4 },
    { player: 'Sally', score: 5 },
  ],

  update(player, score) {
    if (localStorage.getItem('highscore')) {
      this.table = JSON.parse(localStorage.getItem('highscore'));
    }
    if (!player) player = 'Player';
    if (score) {
      this.table.push({ player, score });
    }
    this.table.sort(function (a, b) {
      return b.score - a.score;
    });

    this.table.length = this.maxLength;
    localStorage.setItem('highscore', JSON.stringify(this.table));
    this.fillCard();
  },

  fillCard() {
    for (const index in this.table) {
      let name = document.getElementById('high-score-name-' + index);
      let score = document.getElementById('high-score-score-' + index);
      if (!name || !score) break;
      name.textContent = this.table[index].player;
      score.textContent = this.table[index].score;
    }
  },
};
