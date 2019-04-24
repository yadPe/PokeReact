import React, { Component } from 'react';

class Character {
  constructor(name, y, x, playground) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.playground = { matrix: playground };
  }

  ableToMove(direction, step) {
    const newPos = { x: this.x, y: this.y };

    switch (direction) {
      case 'up':
        if (!this.playground.matrix[this.y - 1][this.x].includes(-1)) {
          newPos.y -= step;
          break;
        } else {
          return null;
        }

      case 'down':
        if (!this.playground.matrix[this.y + 1][this.x].includes(-1)) {
          newPos.y = step;
          break;
        } else {
          return null;
        }


      case 'right':
        if (!this.playground.matrix[this.y][this.x + 1].includes(-1)) {
          newPos.x += step;
          break;
        } else {
          return null;
        }


      case 'left':
        if (!this.playground.matrix[this.y][this.x - 1].includes(-1)) {
          newPos.x -= step;
          break;
        } else {
          return null;
        }


      default:
        return undefined;
    }
    return !this.playground.matrix[newPos.y][newPos.x].includes(-1);
  }

  getPlaygroundSize() {
    this.playground.width = this.playground.matrix[0].length;
    this.playground.height = this.playground.matrix.length;
  }

  // go(direction) {}

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
      console.log('pokemon blok');
    }
  }

  catched() {
    this.wasCatched = true;
  }
}

export { Character, Pokemon };
