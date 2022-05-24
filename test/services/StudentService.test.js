const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

describe("Unit test", () =>{
    test("Test para mostrar la información de todos los estudiantes", () =>{
         const Students = StudentService.getStudents();
         expect(Students.length).toBe(51); 
    });

    test("Test para mostrar los email de los estudiantes con certificación", ()=>{
        const students = [{name:"Warren", email: "Todd@visualpartnership.xyz", haveCertification: true},
                          {name: "Phillips", email: "Camacho@visualpartnership.xyz", haveCertification: false}];
        const StudentsWithCertification = StudentService.StudentsFilterByEmail(students);
        expect(StudentsWithCertification.length).toBe(1);
    })

    test("Test para mostrar los estudiantes que tengan más de 500 créditos", ()=>{
        const students = [{name:"Warren", email: "Todd@visualpartnership.xyz", haveCertification: true, "credits": 499},
                          {name: "Phillips", email: "Camacho@visualpartnership.xyz", haveCertification: false, "credits": 973}];
        const StudentsWithMoreThan500Credits = StudentService.StudentsFilterByCredits(students);
        expect(StudentsWithMoreThan500Credits.length).toBe(1);
    })
})