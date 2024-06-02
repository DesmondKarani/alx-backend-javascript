export default function createIteratorObject(report) {
  const { allEmployees } = report; // Use object destructuring
  const employeeList = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  return employeeList[Symbol.iterator]();
}
