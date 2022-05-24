const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

class StudentController{
    static getStudents(){
        const students = Reader.readJsonFile("students.json");
        return StudentService.getStudents(students);
    }

  /*  static StudentsFilterByEmail(students){
        const StudentsWithCertification = students.filter((student) => student.haveCertification === true);
        return StudentsWithCertification.map((student) => student.email)
    }*/
}

module.exports = StudentController