var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log("Before deleting rollno property: ");

delete student.rollno;
console.log("After deleting",student);