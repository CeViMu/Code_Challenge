const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

describe("Unit test", () =>{
    test("Test para mostrar la información de todos los estudiantes", () =>{
         const Students = StudentService.getStudents();
         expect(Students.length).toBe(51); 
    }) 
})