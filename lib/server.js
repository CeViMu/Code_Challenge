const StudentController = require("./../lib/controller/StudentController");
const express = require('express');
const {request, response} = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.json());
const port = 3000;

app.get('/',(request, response) =>{
    response.send('Hello world');
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});

app.get("/v1/students", (request, response) =>{
    const students = StudentController.getStudents();
    response.json(students);
});

app.get("/v1/students/email", (request, response) =>{
    const EmailStudentsWithCertification = StudentController.StudentsFilterByEmail();
    response.json(EmailStudentsWithCertification);
});

app.get("/v1/students/credits", (request, response) =>{
    const StudentsWithMoreThan500Credits = StudentController.StudentsFilterByCredits();
    response.json(StudentsWithMoreThan500Credits);
})
