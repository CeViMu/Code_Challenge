const Reader = require("./../../lib/utils/Reader");

class StudentService{
    static getStudents(){
        return Reader.readJsonFile("students.json");
    }
}

module.exports= StudentService;