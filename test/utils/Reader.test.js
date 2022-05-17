const fs = require("fs");
const Reader = require("./../../lib/utils/Reader");

describe("Unit Test", () =>{
    test("Test para probar que el archivo students sea leido", () =>{
        const reader = Reader.readJsonFile("students.json");
        const data = fs.readFileSync("students.json");
        expect(reader).toStrictEqual(JSON.parse(data)); 
    });
})