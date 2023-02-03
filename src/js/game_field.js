export default class GameField {
  constructor(fieldSize){
    this.fieldSize = fieldSize;
    this.interval = null;
    this.cells = [];
  }

  init(){
    this.drawField();
  }
  drawField() {
    const root = document.getElementById("wrapper");
    for (let i = 0; i < this.fieldSize * 4; i += 1) {
      const div = document.createElement("div");
      root.appendChild(div);
    }
  }
  getPoints() {
      const points = Math.floor(Math.random() * ((this.fieldSize - 1) * 4));
      this.cells.push(points);
    
    return this.cells
  }

  gameOver(){
    setTimeout(()=>{
      clearInterval(this.interval);
    })
  }
}