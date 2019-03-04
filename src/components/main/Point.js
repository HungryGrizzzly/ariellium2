const PI2 = Math.PI * 2;
const COEFFICIENT = .1;
const FILL_COLOR = 'rgb(199, 214, 235)';
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

export default class Point {
    constructor(width, height) {
        this.position = {
            x: Math.random() * width,
            y: Math.random() * height
        }
        this.speed = {
            x: Math.random() > .5 ? (Math.random() * .1) + COEFFICIENT : -((Math.random() * .1) + COEFFICIENT),
            y: Math.random() > .5 ? (Math.random() * .1) + COEFFICIENT : -((Math.random() * .1) + COEFFICIENT)
        }
        this.radius = .5;
        this.width = width;
        this.height = height;
    }

    update() {
        if (this.position.x + this.radius > WIDTH || this.position.x - this.radius < 0) {
            this.speed.x = -this.speed.x;
        }
        if (this.position.y + this.radius > HEIGHT || this.position.y - this.radius < 0) {
            this.speed.y = - this.speed.y;
        }
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = FILL_COLOR;
        ctx.arc(this.position.x, this.position.y, this.radius, 0, PI2, false);
        ctx.fill();
    }
}