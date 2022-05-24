const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

class StudentController{
    static getStudents(){
        const students = Reader.readJsonFile("students.json");
        return StudentService.getStudents(students);
    }
}

module.exports = StudentController