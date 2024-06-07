// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Index signature to allow additional properties
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the StudentInterface for the StudentClass
interface StudentInterface {
  firstName: string;
  lastName: string;
}

// Define the StudentClass
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create a StudentClass object
const student1 = new StudentClass("Alice", "Smith");

// Test the StudentClass methods
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName()); // Output: Alice
