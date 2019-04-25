import { ableToMove } from './utils';

class Character {
  constructor(name, y, x, playground) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.playground = { matrix: playground };
  }

  getPlaygroundSize() {
    this.playground.width = this.playground.matrix[0].length;
    this.playground.height = this.playground.matrix.length;
  }

  randomDirection = () => {
    const dirs = ['up', 'down', 'right', 'left'];
    return dirs[Math.floor(Math.random() * 4)];
  }
}

class Pokemon extends Character {
  constructor(id, name, x, y, playground) {
    super(name, x, y, playground);
    this.id = id;
  }

  run() {
    if (!this.playground.width) { this.getPlaygroundSize(); console.log('mk playground'); return; }

    if (!this.direction) { this.direction = this.randomDirection(); console.log('mk pos'); return; }

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
  }

  catched() {
    this.wasCatched = true;
  }
}

export { Character, Pokemon };
