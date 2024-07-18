export default class HolbertonCourse {
  constructor(name = '', lenght = 0, students = []) {
    this._name = name;
    this._lenght = lenght;
    this._students = students;
  }

  set name(newName) {
    this._name = newName;
  }

  set lenght(newLenght) {
    this._lenght = newLenght;
  }

  set students(newStudents) {
    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get lenght() {
    return this._lenght;
  }

  get students() {
    return this._students;
  }
}
