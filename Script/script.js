let course1 = {
    code:"ACIT 1515", 
    course:"Scripting for IT",
} 
let course2 = {
    code:"ACIT 1620", 
    course:"Fundamental Web Technologies",
}
let course3 = {
    code:"ACIT 1630", 
    course:"Database Systems",
}

const courseList = [course1, course2, course3

]

let input = "";
do{
    input = prompt("Enter a 4 digit number");
    //prompt always returns a string
    } while (
        input.length != 4 || isNaN(Number(input))
    )