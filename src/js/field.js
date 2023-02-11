const row = 4;
const column = 4;
export default class Field {
    constructor(root) {
        this.root = root;
        this.cells = [];
    }

    drawField() {
        for (let i = 0; i < row * column; i++) {
            const cell = document.createElement('div');
            this.root.appendChild(cell);
            const cellImage = document.createElement('img');
            cellImage.className = 'goblin-image';
            cellImage.src = '';
            cell.append(cellImage);
        }
        this.cells = [...this.root.querySelectorAll('div')]
        return this.cells
    }

    getCells() { 
        return this.cells 
    };


}