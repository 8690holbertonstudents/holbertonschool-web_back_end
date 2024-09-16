const fs = require('node:fs');
const { parse } = require('csv-parse/sync');

function countStudents(DatabaseFile) {
  try {
    const data = fs.readFileSync(DatabaseFile, 'utf8');
    const lines = parse(data, { columns: true, skip_empty_lines: true });

    let countStudents = 0;
    let countCS = 0;
    const ListCS = [];
    let countSWE = 0;
    const ListSWE = [];

    lines.forEach((line) => {
      if (line.field === 'CS') {
        countCS += 1;
        ListCS.push(line.firstname);
      } else if (line.field === 'SWE') {
        countSWE += 1;
        ListSWE.push(line.firstname);
      }
      countStudents += 1;
    });

    console.log(`Number of students: ${countStudents}`);
    console.log(`Number of students in CS: ${countCS}. List: ${ListCS}`);
    console.log(`Number of students in SWE: ${countSWE}. List: ${ListSWE}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
