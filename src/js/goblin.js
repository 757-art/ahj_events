export default class Goblin {
    constructor(points, board) {
        this.points = points;
        this.board = board;
        this.goblinPositionIndex = null;
        this.header = document.getElementById('result_header');
        this.successful = document.getElementById('win_score');
        this.unsuccessful = document.getElementById('fail_score');
    }

    init() {
        const goblin = document.createElement('img');
        goblin.src = './img/goblin.png';
        this.goblinPositionIndex = this.points[0];
        const cell = this.board.children[this.goblinPositionIndex];
        console.log(cell);
        cell.append(goblin);
        this.cellOnClick();
    }

    getGoblinCell() {


        // const getRandom = (points, board) => {
        //     return Math.floor(Math.random() * ((points - 1) * board));
        //     //todo!

        // }

        // setInterval(() => {
        //     this.goblinPositionIndex = getRandom(this.points, this.board.children.length - 1)
        //     const cell = this.board.children[this.goblinPositionIndex];
        //     console.log(cell);
        //     cell.append(goblin);

        // }, 1000)

    }

    cellOnClick(){
        this.board.addEventListener('click', (event) => {
            if(event.target.children.length > 0){
                console.log('Гоблин')
            } else {
                console.log('Не попал!!!!')
            }
        })
        
    }

}