class Characters {
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

  static randomDirection = () => Math.floor(Math.random() * 4);
}
