export default function getListStudentIds(ListOfStudents) {
  if (!Array.isArray(ListOfStudents)) {
    return [];
  }

  return ListOfStudents.map((student) => student.id);
}
