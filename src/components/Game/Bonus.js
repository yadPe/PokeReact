class Bonus {
  constructor(random, x, y, map) {
    this.random = random;
    this.x = x;
    this.y = y;
    this.map = map;
  }


  run() {
    if (this.random === 0) {
      this.slowPokemon = true;
      setTimeout(() => {
        this.slowPokemon = false;
      }, 10000);
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { Bonus };
