import getPosition from './position';

export default class Gui {
  constructor() {
    [this.img] = document.images;
    console.log(document)
    this.wrapper = document.querySelector('.wrapper');
    this.header = document.querySelector('#result_header');
    this.successScore = document.querySelector('#success_click');
    this.failScore = document.querySelector('#fail_click');
    this.insertImg = this.insertImg.bind(this);
    this.oldIndex = null;
  }

  init() {
    this.img.parentElement.removeChild(this.img);
    this.createField();
    
  }

  createField() {
    for (let i = 0; i < 4*4; i += 1) {
      const div = document.createElement('div');
      this.wrapper.appendChild(div);
    }
  }

  insertImg() {
    console.log(document.images)
    if (document.images[0]) this.removeImg();
   
    const childDivs = this.wrapper.children;
    console.log(childDivs)
    const index = getPosition();
    childDivs[index].append(this.img);
    console.log(childDivs[index])
  }

  removeImg() {
    const activeDiv = document.images[0].parentElement;
    activeDiv.removeChild(this.img);
  }

  showScore(score, status) {
    this.header.innerText = status;
    this.successScore.innerText = score.win;
    this.failScore.innerText = score.loose;
  }
}
