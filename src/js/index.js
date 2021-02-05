import Circle from "./Circle";
import randomColor from "random-color";

const getRandomRangeIntInc = (min, max) =>
  Math.floor(Math.random() * max - min + 1) + min;

const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;


const makeCircle = () => {
  const w = getRandomRangeIntInc(50, 400);
  const h = getRandomRangeIntInc(50, 400);
  const x = getRandomRangeIntInc(w, (viewportWidth - w));
  const y = getRandomRangeIntInc(h, (viewportHeight - h));
  new Circle(w, h, x, y);
}

setInterval(() => {
 makeCircle();
}, 5000);
