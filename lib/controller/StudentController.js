const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

class StudentController{
    static getStudents(){
        const students = Reader.readJsonFile("students.json");
        return StudentService.getStudents(students);
    }
 
    static StudentsFilterByEmail(students){
        return StudentService.StudentsFilterByEmail(students);
    }

    static StudentsFilterByCredits(students){
        return StudentService.StudentsFilterByCredits(students);
    }
}

module.exports = StudentController