class Characters {
  constructor(name, y, x, playground) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.playground = playground;
  }

  ableToMove(direction, step) {
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
      !this.playground[newPos.y][newPos.x].includes(-1)
    );
  }
}
