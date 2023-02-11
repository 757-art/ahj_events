import Goblin from './goblin';
import Field from './field';
import Game from './game';

const root = document.getElementById('wrapper');

const game = new Game(root);
const field = new Field(root);

field.drawField();

const goblin = new Goblin(field.cells);
game.initGame(goblin.initGoblin.bind(goblin));
