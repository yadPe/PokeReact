/* eslint-disable no-multi-assign */
import Easystar from 'easystarjs';
import { ableToMove, convertToCollideMap } from './utils';

class Character {
  constructor(name, y, x, playground) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.playground = { matrix: playground };
  }

  init() {
    this.playground.width = this.playground.matrix[0].length;
    this.playground.height = this.playground.matrix.length;
    this.direction = this.randomDirection();
    this.collisionMap = convertToCollideMap(this.playground);
    // eslint-disable-next-line new-cap
    this.aStar = new Easystar.js();
    this.aStar.setGrid(this.collisionMap);
    this.aStar.setAcceptableTiles([0]);
  }

  randomDirection = () => {
    const dirs = ['up', 'down', 'right', 'left'];
    return dirs[Math.floor(Math.random() * 4)];
  }


  goto(destX, destY) {
    this.aStar.findPath(this.x, this.y, destX, destY, (path) => {
      if (path === null) {
        // eslint-disable-next-line no-alert
        alert('Path was not found.');
      } else {
        // eslint-disable-next-line no-alert
        alert(`Path was found. The first Point is ${path[0].x} ${path[0].y}`);
      }
    });
  }
}

class Pokemon extends Character {
  constructor(id, name, x, y, playground) {
    super(name, x, y, playground);
    this.id = id;
    this.speed = 1;
  }


  run() {
    if (!this.lastMove) { this.lastMove = this.lastMove = performance.now(); return; }
    if (performance.now() - this.lastMove < 1000 / this.speed) return;

    if (ableToMove({ x: this.x, y: this.y }, this.direction, 1, this.playground.matrix)) {
      if ((this.direction === 'up') || (this.direction === 'down')) {
        if (this.direction === 'up') {
          this.y -= 1;
        } else {
          this.y += 1;
        }
      } else if ((this.direction === 'right') || (this.direction === 'left')) {
        if (this.direction === 'right') {
          this.x += 1;
        } else {
          this.x -= 1;
        }
      }
    } else {
      this.direction = this.randomDirection();
    }
    this.lastMove = performance.now();
  }

  catched() {
    this.wasCatched = true;
  }
}

export { Character, Pokemon };
