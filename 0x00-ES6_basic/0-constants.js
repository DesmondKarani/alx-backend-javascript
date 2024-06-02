// 0-constants.js

export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  const phrase = 'But sometimes let';
  let combination = phrase;
  combination += getLast();
  return combination;
}
