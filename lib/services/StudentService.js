const Reader = require("./../../lib/utils/Reader");

class StudentService{
    static getStudents(){
        return Reader.readJsonFile("students.json");
    }

    static StudentsFilterByEmail(students){
        const StudentsWithCertification = students.filter((student) => student.haveCertification === true);
        return StudentsWithCertification.map((student) => student.email)
    }
}

module.exports= StudentService;