export default function updateStudentGradeByCity(Students, city, newGrades) {
  if (!Array.isArray(Students)) {
    throw new TypeError('Students must be an array');
  }
  if (typeof city !== 'string') {
    throw new TypeError('City must be a string');
  }

  if (!Array.isArray(newGrades)) {
    throw new TypeError('newGrades must be an array');
  }

  const StudentsByCity = Students.filter(
    (student) => student.location === city
  );

  const UpdatedStudents = StudentsByCity.map((student) => {
    let newGrade = 'N/A';
    for (const grade of newGrades) {
      if (grade.studentId === student.id) {
        newGrade = grade.grade;
      }
    }

    const ResultArray = {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: newGrade,
    };
    return ResultArray;
  });

  return UpdatedStudents;
}
