class Character {
  constructor(name, y, x, playground) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.playground = { matrix: playground };
  }

  static ableToMove(direction, step) {
    const newPos = { x: this.x, y: this.y };
    switch (direction) {
      case 'up':
        newPos.y += step;
        break;
      case 'down':
        newPos.y -= step;
        break;
      case 'right':
        newPos.x += step;
        break;
      case 'left':
        newPos.x -= step;
        break;
      default:
        return undefined;
    }
    return (
      !this.playground.matrix[newPos.y][newPos.x].includes(-1)
    );
  }

  static getPlaygroundSize() {
    this.playground.width = this.playground.matrix[0].length;
    this.playground.height = this.playground.matrix.length;
  }

  go(direction) {}

  static randomDirection = () => {
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
    if (!this.playground.x) { this.getPlaygroundSize(); }

    if (!this.direction) { this.direction = this.randomDirection(); }

    if (this.ableToMove(this.direction, 1)) {
      if (this.direction === 'up' || 'down') {
        if (this.direction === 'up') {
          this.y -= 1;
        } else {
          this.y += 1;
        }
      }
      if (this.direction === 'right' || 'left') {
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
