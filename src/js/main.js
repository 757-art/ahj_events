export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.scores = {
      win: 0,
      loose: 0,
    };
    this.checkField = this.checkField.bind(this);
  }

  init() {
    this.gui.wrapper.addEventListener('click', this.checkField);
    this.gui.insertImg();
    this.timerId = setInterval(() => {
      const gameOver = this.checkScores(false);
      if (gameOver) return;
      this.gui.showScore(this.scores, '');
      this.gui.insertImg();
    }, 1000);
  }

  checkScores(clickEvent) {
    if (this.scores.win >= 5 || this.scores.loose >= 5) {
      clearInterval(this.timerId);
      this.gui.wrap.removeEventListener('click', this.checkField);
      this.gui.showScore(this.scores, 'Игра окончена');
      return true;
    }
    if (!clickEvent) this.scores.loose += 1;
    else this.scores.loose -= 1;
    return false;
  }

  checkField(e) {
    if (e.target === this.gui.img) {
      this.scores.win += 1;
      this.gui.removeImg();
      this.checkScores(true);
    }
  }
}
