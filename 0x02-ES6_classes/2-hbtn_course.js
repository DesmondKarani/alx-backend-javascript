// 2-hbtn_course.js
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students) || students.some((s) => typeof s !== 'string')) { // Add parentheses around arrow function argument
      throw TypeError('Students must be an array of strings');
    }
    this.name = name; // Remove underscore
    this.length = length; // Remove underscore
    this.students = students; // Remove underscore
  }

  get name() {
    return this.name; // Remove underscore
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this.name = newName; // Remove underscore
  }

  // Implement getters and setters for length and students similarly
}
