import GameField from './game_field';
import Goblin from './goblin';

const field = document.getElementById('wrapper')

const gameField = new GameField(4); // инициировали игровое поле
const goblin = new Goblin(gameField.cells, field);
const points = gameField.getPoints();
gameField.init();
gameField.getPoints();  
goblin.init();

// goblin.getGoblinCell();
console.log(points)
//const points = gameField.getPoints() // взяли точки поля по которым Гоблин может ходить
//const goblin = new Goblin(points); // вы инициировали гоблина , просто создали какую то сущность которая может ходить на определенные точки