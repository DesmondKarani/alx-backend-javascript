const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    // Count students in each field
    const fields = {};
    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, students: [] };
      }
      fields[field].count += 1;
      fields[field].students.push(firstName);
    });

    // Log the results
    for (const [field, data] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
