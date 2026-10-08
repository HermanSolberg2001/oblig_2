const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]


//Oppgave 1. Leser opp students arrayen og bruker .length for å telle antall studenter
document.getElementById("studentCount").innerHTML = students.length;

//Oppgave 2. Lager en funksjon som skal telle gjennomsnittet til elevene også runder jeg tallet slik at det blir et helt tall med math.ceil
// så gjør jeg om karakterene til bokstav karakterer.
function gjennomsnitt(array) {
    let sum = 0;

    array.map(n => {sum += Number(n.grade)})

    const average = sum / array.length;

    const roundNumber = Math.ceil(average);

    const LetterGrade = grades.filter(s => s.score === roundNumber);

    console.log(LetterGrade[0].letter);
    
    return LetterGrade[0].letter;
}

document.getElementById("averageGrade").innerHTML = gjennomsnitt(students);

//Oppgave 3. Her printer jeg ut antallet som har fått hvilken karakter, samme fremgangsmåte på alle karakterene

const numberGradeA = students.filter(s => s.grade === "6");
const numberGradeB = students.filter(s => s.grade === "5");
const numberGradeC = students.filter(s => s.grade === "4");
const numberGradeD = students.filter(s => s.grade === "3");
const numberGradeE = students.filter(s => s.grade === "2");
const numberGradeF = students.filter(s => s.grade === "1");

document.getElementById("gradeA").innerHTML = numberGradeA.length;
document.getElementById("gradeB").innerHTML = numberGradeB.length;
document.getElementById("gradeC").innerHTML = numberGradeC.length;
document.getElementById("gradeD").innerHTML = numberGradeD.length;
document.getElementById("gradeE").innerHTML = numberGradeE.length;
document.getElementById("gradeF").innerHTML = numberGradeF.length;

//Oppgave 4. Her finner jeg gjennomsnitt alderen til alle studentene, bruker summen av alderen ogdeler de på antall, bruker også toFixed for 2 decimaler

function gjennomsnittAlder(array) {
    let sum = 0; 

    array.map(s => {sum += s.age})

    const averageAge = sum / array.length;
    return averageAge.toFixed(2);
}

document.getElementById("averageAge").innerHTML = gjennomsnittAlder(students);

//Oppgave 5. Her så filtrerer jeg alle 19 åringer og printer de ut i html arket

const age19 = students.filter(s => s.age === 19);

document.getElementById("highSchool").innerHTML = age19.length;

//Oppgave 6. her sjekker jeg studenetene som har mer enn 1 års jobberfaring og printer til html arket.

const jobbErfaring = students.filter(s => s.workexperience >= 1);

document.getElementById("workExperience").innerHTML = jobbErfaring.length;

//har kun brukt ki til veiledning og hint 
// https://chatgpt.com/s/cx_6ac7f8dd39688191a4c5aff568c8ca3f
