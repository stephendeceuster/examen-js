import randomColor from "random-color";

export default class Rectangle {
  constructor(width, height, x, y) {
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
    this._counter = 0;
    this._ref = this.generateHTML();
    this.styling();
    this.setupEvent();
  }
  generateHTML = () => {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <div class='circle'>
        <span>${this._counter}<span>
      </div>
      `
    );
    return document.querySelector("div:first-child");
  };
  styling = () => {
    const styles = {
      left: this._x - this._width / 2 + "px",
      top: this._y - this._height / 2 + "px",
      width: this._width + "px",
      height: this._height + "px",
      backgroundColor: randomColor().hexString(),
    };
    Object.assign(this._ref.style, styles);
  };
  setupEvent = () => {
    this._ref.onclick = this.clickHandler;
  }
  clickHandler = () => {
      if (this._counter === 10) {
          this._ref.remove()
      } else {
          this._counter++;
          this.setCounter();
      }
  }
  setCounter = () => {
    this._ref.innerHTML = `<span>${this._counter}<span>`;
  }
}
