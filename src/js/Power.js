import { random } from './functions';

export default class Power {
  constructor(block) {
    this.id = uniqueId();
    this.type = 'power';
    this.left = block.left;
    this.top = block.top;
    this.width = block.width;
    this.height = block.height;
    let index = pickPower();
    this.name = powers[index].name;
    this.color = powers[index].color;
  }

  move() {
    this.top++;
  }
}

function pickPower() {
  const rand = random(0, weightRange - 1);
  const index = powersArray.findIndex((e) => e > rand);
  console.log(index);
  return index;
}

const powers = [
  {
    id: 0,
    name: 'Wider Paddle',
    weight: 10,
    color: 'red',
  },
  {
    id: 1,
    name: 'Faster Paddle',
    weight: 10,
    color: 'green',
  },
  {
    id: 2,
    name: 'Sticky Paddle',
    weight: 10,
    color: 'blue',
  },
  {
    id: 3,
    name: 'Shooting',
    weight: 10,
    color: 'yellow',
  },
  {
    id: 4,
    name: 'Balls slow down',
    weight: 10,
    color: 'pink',
  },
  {
    id: 5,
    name: 'Balls slow down',
    weight: 10,
    color: 'white',
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
