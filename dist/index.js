"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_functions_1 = require("./functions/student.functions");
const students = [];
students.push({
    name: "Sirius",
    numberOfScippedHW: 1,
});
students.push({
    name: "Eri",
    numberOfScippedHW: 0,
});
students.forEach((student) => console.log((0, student_functions_1.getStudentInfo)(student)));
