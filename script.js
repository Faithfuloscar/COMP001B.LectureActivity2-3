let myGrade = 90;
console.log(myGrade);

if (myGrade >= 90) {
    console.log("A");
} else if (myGrade >= 80) {
    console.log("B");
} else if (myGrade >= 70) {
    console.log("C");
} else if (myGrade >= 60) {
    console.log("D");
} else {
    console.log("F");
}
// else statement should be the remainder of the percentages represented by F

myGrade = 85;
console.log(myGrade);

switch (true) {
    case (myGrade >= 90):
        console.log("A");
        break;
    case (myGrade >= 80):
        console.log("B");
        break;
    case (myGrade >= 70):
        console.log("C");
        break;
    case (myGrade >= 60):
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}

// Personally I prefer utilizing else if statements as it is easier to follow along.
// Switch statements definitely look cleaner in comparison to if else statements as it is less bulky.

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log("!");
    } else {
        console.log(i);
    }
}
