var notAttempt = 0;
var qNo = 0;
var rightAns;
var ansTable;
var numRightAns = 0;
var numWrongAns = 0;
document.onload = (
    rightAns = document.querySelectorAll('.rightAns'),
    ansTable = document.querySelectorAll('.menu-tbl'),
    ansTable.forEach((ansTable) => {
        let ans = parseInt(ansTable.firstElementChild.lastChild.innerText.substring(16, ansTable.firstElementChild.lastChild.innerText.length), 10);
        if (isNaN(ans)) {
            notAttempt++
        }
    })
)

for (let index = 0; index <= 74; index++) {
    let rs = parseInt(rightAns[index].innerText, 10);
    let ys = parseInt(ansTable[index].firstElementChild.lastChild.innerText.substring(16, ansTable[index].firstElementChild.lastChild.innerText.length), 10)

    if (isNaN(ys)) {
        console.log("Q." + (index + 1) + ": Not Attempted.")
    } else if (rs === ys) {
        console.log("Q." + (index + 1) + ": Correct Choice.");
        numRightAns++;
    } else {
        console.log("Q." + (index + 1) + ": Wrong Choice.");
        numWrongAns++;
    }

}

console.log("You Have Not Attempted " + notAttempt + " Questions");
console.log("You Have Attempted " + (75 - notAttempt) + " Questions");
console.log("Your Total Right Answers: " + numRightAns);
console.log("Your Total Wrong Answers: " + numWrongAns);

console.log("If the paper is of 75 Mrks then your Number: " + ((numRightAns) - ((numWrongAns) / 3)));
//                                                               31