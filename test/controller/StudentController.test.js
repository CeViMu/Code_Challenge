const StudentController = require("./../../lib/controller/StudentController");

test("Prueba para primer requerimiento, mostrar a los estudiantes", ()=>{
    const getStudents = StudentController.getStudents();
    expect(getStudents).not.toBeUndefined();
})

test("Prueba para segundo requerimiento, mostrar los correos de los estudiantes con certificación", ()=>{
    const students = [{name:"Warren", email: "Todd@visualpartnership.xyz", haveCertification: true},
                      {name: "Phillips", email: "Camacho@visualpartnership.xyz", haveCertification: false}];
    const StudentsWithCertification = StudentController.StudentsFilterByEmail(students);
    expect(StudentsWithCertification.length).toBe(1);
})

test("Prueba para tercer requerimiento, mostrar a los estudiantes con más de 500 créditos", ()=>{
    const students = [{name:"Warren", email: "Todd@visualpartnership.xyz", haveCertification: true, "credits": 499},
                     {name: "Phillips", email: "Camacho@visualpartnership.xyz", haveCertification: false, "credits": 973}];
    const StudentsWithMoreThan500Credits = StudentController.StudentsFilterByCredits(students);
    expect(StudentsWithMoreThan500Credits.length).toBe(1);
})