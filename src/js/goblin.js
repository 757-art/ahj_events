import goblin from '../img/goblin.png';

export default class Goblin {
  constructor(cells) {
    this.cells = cells;
    this.cellIndex = 0;
    this.updateIndex = 0;
  }

  getGoblin() {
    const goblinIcon = this.cells[this.cellIndex].querySelector('.goblin-image');
    const goblinUpdateIcon = this.cells[this.updateIndex].querySelector('.goblin-image');
    goblinIcon.src = '';
    goblinUpdateIcon.src = goblin;
  }

  initGoblin() {
    if (this.updateIndex === this.cellIndex) {
      if (this.updateIndex + 1 <= this.cells.length) {
        this.updateIndex += 1;
      } else if (this.updateIndex - 1 >= 0) {
        this.updateIndex += 1;
      }
    }

    this.getGoblin();
    this.cellIndex = this.updateIndex;
  }
}
