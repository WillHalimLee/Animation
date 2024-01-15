class Zombie {
  constructor(game) {
    this.game = game;
    this.animator = new Animator(
      ASSET_MANAGER.getAsset("./zombie.PNG"),
      0,
      0,
      39,
      50,
      13,
      0.5
    );
    this.x=0;
    this.y=0;
    this.speed=30;
  };

  update() {
    this.x += this.speed * this.game.clockTick;
  };
  draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
  }
};
