export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskIfTrue = true;
    const task2IfTrue = false;
    console.log(taskIfTrue, task2IfTrue); // Use the variables to avoid lint errors
  }

  return [task, task2];
}
