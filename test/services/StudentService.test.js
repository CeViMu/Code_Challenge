
describe("Unit test", () =>{
    test("Test para mostrar la información de todos los estudiantes", () =>{
         const Students = StudentService.getStudents();
         expect(Students.lenght).toBe(51); 
    }) 
})