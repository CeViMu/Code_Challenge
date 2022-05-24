
test("Prueba para primer requerimiento", ()=>{
    const getStudents = StudentController.getStudents();
    expect(getStudents).not.toBeUndefined();
})