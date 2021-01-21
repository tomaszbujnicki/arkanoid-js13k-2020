import { random } from './functions';

export default class Power {
  constructor(block) {
    this.id = uniqueId();
    this.type = 'power';
    this.left = block.left;
    this.top = block.top;
    this.width = block.width;
    this.height = block.height;
    this.power = pickPower();
  }

  move() {
    this.top++;
  }
}

function pickPower() {
  const rand = random(0, weightRange - 1);
  console.log(powers[powersArray.findIndex((e) => e > rand)]);
  return powers[powersArray.findIndex((e) => e > rand)];
}

const powers = [
  {
    id: 0,
    name: 'Wider Paddle',
    isGood: true,
    weight: 10,
  },
  {
    id: 1,
    name: 'Faster Paddle',
    isGood: true,
    weight: 10,
  },
  {
    id: 2,
    name: 'Sticky Paddle',
    isGood: true,
    weight: 10,
  },
  {
    id: 3,
    name: 'Shooting',
    isGood: true,
    weight: 1,
  },
  {
    id: 4,
    name: 'Balls slow down',
    isGood: true,
    weight: 10,
  },
];

const weightRange = powers.reduce((a, b) => a + (b['weight'] || 0), 0);
const powersArray = [0];
for (let item of powers) {
  powersArray.push(item.weight + powersArray[powersArray.length - 1]);
}
powersArray.splice(0, 1);

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}
