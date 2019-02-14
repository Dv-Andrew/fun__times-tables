import { map } from "../libs/Math";
import { Vector } from "../libs/Vector";

export default class Visualization {

  private _canvas: any;
  private _context: any;

  private _previousTime: number;
  private _fps: number;

  private _radius: number;
  private _totalPoints: number;
  private _factor: number;
  private _factorFlag: boolean;

  constructor(canvasSelector: string) {
    this._canvas = document.querySelector(canvasSelector);
    this._context = this._canvas.getContext('2d');
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
    this._canvas.focus();

    this.setup();
    window.requestAnimationFrame(this.frame.bind(this));
  }

  frame(timestamp: number) {
    if (!this._previousTime) {
      this._previousTime = timestamp;
    }
    let elapsedTime = timestamp - this._previousTime;
    this._previousTime = timestamp;
    this._fps = 1000 / elapsedTime;

    this.update(elapsedTime / 1000);
    this.draw();

    window.requestAnimationFrame(this.frame.bind(this));
  }


  setup() {
    this._totalPoints = 200;
    this._factor = 0.005;
    this._factorFlag = true;

    if (this._canvas.width > this._canvas.height) {
      this._radius = this._canvas.height / 2.2;
    } else {
      this._radius = this._canvas.width / 2.2;
    }
  }

  draw() {
    let ctx = this._context;
    ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 0.5;

    ctx.save();
    ctx.translate(this._canvas.width / 2, this._canvas.height / 2);

    ctx.beginPath();
    ctx.arc(0, 0, this._radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();

    for (let i = 0; i < this._totalPoints; i++) {
      let vector = new Vector(this.getVector(i));

      ctx.beginPath();
      ctx.arc(vector.getX(), vector.getY(), 1, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    for (let i = 0; i < this._totalPoints; i++) {
      let a = new Vector(this.getVector(i));
      let b = new Vector(this.getVector(i * this._factor));

      ctx.strokeStyle = `hsl(${map(i, 0, this._totalPoints, 0, 360)}, 100%, 50%)`;

      ctx.beginPath();
      ctx.moveTo(a.getX(), a.getY());
      ctx.lineTo(b.getX(), b.getY());
      ctx.closePath();
      ctx.stroke();
    }

    ctx.restore();
  }

  update(elapsedTime: number) {
    if (this._factorFlag) {
      this._factor += 0.005;
      if (this._factor >= 100) {
        this._factorFlag = !this._factorFlag;
      }
    } else {
      this._factor -= 0.005;
      if (this._factor <= 0) {
        this._factorFlag = !this._factorFlag;
      }
    }
    console.log(this._factor);
  }

  getVector(index: number) {
    let angle = map(index % this._totalPoints, 0, this._totalPoints, 0, Math.PI * 2);
    let vector = Vector.fromAngle(angle + Math.PI);
    vector.mult(this._radius);
    return vector;
  }

}