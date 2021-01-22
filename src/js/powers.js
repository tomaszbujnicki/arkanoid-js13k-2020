import { SOUND } from './sound';

export function powers() {
  const level = this;
  const playfield = level.playfield;
  const paddle = level.paddle;
  const powerArray = level.powerArray;
  powerArray.forEach((power) => {
    const isCaught =
      power.top >= paddle.top - power.height &&
      power.top <= paddle.top + paddle.height &&
      power.left >= paddle.left - power.width &&
      power.left <= paddle.left + paddle.width;

    if (isCaught) {
      level.deletePower(power);
      paddle.width -= 20;
      paddle.left += 10;
    }

    if (power.top > playfield.height + playfield.top) {
      level.deletePower(power);
    }
  });
}
