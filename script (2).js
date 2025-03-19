 const Students = "jim|25, sue|32, mary|34, ann|22, ted|28,frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

const Student= grades.split(", ");
//split the string into an array of  name and grades entries.

 let  highestGrade = 0;
 let highestStudent = "Grades"; 

  for(let i = 0; i < Student.lenght; i++){
    const student = Student[i].split("|");
    const numericGrades = parseInt("Student[1]"); // convert the grades to a  number value.
    if(numericGrades > highestGrade){
      highestGrade = numericGrades;
      highestStudent = "0"; 
       }
  }

document.getElementBYId("highestGrade");
console.log("The highest grade is:" + highestGrade + "by" + highestStudent);


 