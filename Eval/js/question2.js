class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}




let studentArray = [
    "Aidan Younathan",
    "Bria Harrold",
    "Elizabeth Trotter",
    "Halley Pham",
    "Jayvon Khuth",
    "Jeriah Marson",
    "Joseph Poncini",
    "Kyle Ma",
    "Michael Heckerman",
    "Sinatha Chin",
    "Zahid Afsar",
    "Xavier Hopkins"
];


let studentObjectArray = []

studentArray.forEach(student => {
    let x = student.split(" ");
    studentObjectArray.push(new Student(x[0], x[1]));
})

let keyboardAlphabet = "qwertyuiopasdfghjklzxcvbnm";

let byFirst = true;

let AddNamesHere = document.getElementById("AddNamesHere");

for (let i = 0; i < keyboardAlphabet.length; i++) {
    document.getElementById(keyboardAlphabet[i] + "Btn").addEventListener("click", () => {

        let result = "";
        AddNamesHere.innerText = "Students: "

        if (byFirst) {
            studentObjectArray.forEach(x => {
                if (x.firstName[0].toLowerCase() == keyboardAlphabet[i]) {
                    result += x.firstName + " " + x.lastName + ", "
                }
            })
        } else {
            studentObjectArray.forEach(x => {
                if (x.lastName[0].toLowerCase() == keyboardAlphabet[i]) {
                    result += x.firstName + " " + x.lastName + ", "
                }
            })
        }
        if (result) {

            AddNamesHere.innerText = "Students: " + result.substring(0, result.length - 2);
        }else{
            AddNamesHere.innerText = "No Student";
        }


    })
}

