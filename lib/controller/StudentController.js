const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

class StudentController{
    static getStudents(){
        const students = Reader.readJsonFile("students.json");
        return StudentService.getStudents(students);
    }
 
    static StudentsFilterByEmail(){
        const students = Reader.readJsonFile("students.json");
        return StudentService.StudentsFilterByEmail(students);
    }

    static StudentsFilterByCredits(){
        const students = Reader.readJsonFile("students.json");
        return StudentService.StudentsFilterByCredits(students);
    }
}

module.exports = StudentController