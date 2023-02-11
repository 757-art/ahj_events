const intervalNumber = 1000;
export default class Game {
  constructor(root) {
    this.root = root;
    this.interval = null;
    this.failCount = 0;
    this.winCount = 0;
  }

  initGame(initGoblin) {
    this.root.addEventListener('click', (event) => {
      if (event.target.children.length !== 0) {
        this.failCount + 1;
      } else {
        this.winCount + 1;
      }
      if (this.failCount === 5 || this.winCount === 5) {
        this.gameOver();
      }
    });

    this.interval = setInterval(() => {
      initGoblin();
    }, intervalNumber);
    this.interval();
  }

  gameOver() {
    clearInterval(this.interval);
    const resultHeader = document.getElementById('result_header');

    if (this.failCount === 0) {
      resultHeader.innerText = 'Вы выиграли!!!';
    } else {
      resultHeader.innerText = 'Вы проиграли!!!';
    }
  }
}
