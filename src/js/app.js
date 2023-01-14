import Gui from './main';
import Logic from './game';

const gui = new Gui();
gui.init();
const logic = new Logic(gui);
logic.init();
