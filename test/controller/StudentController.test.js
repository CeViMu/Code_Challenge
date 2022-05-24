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