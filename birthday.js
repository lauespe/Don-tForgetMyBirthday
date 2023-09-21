let name = prompt("Hello! What's your name?");
alert("Hello " + name + "! Are you ready to play 'Guess their birthdays? >>> You have 3 people and 3 tries.");

let lives = 3;

while (lives > 0) {
    let guessing1 = prompt("Taylor Swift's birthday is on 13th ____________");
    if (guessing1.toLowerCase() === "december") {
        alert("Correct!");
    } else if (guessing1 === "") {
        alert("You must enter a month");
    } else {
        alert("Sorry...Wrong answer!");
        lives--;
        if (lives === 0) {
            alert("Sorry! You ran out of lives... Thanks for playing!");
            break; 
        }
        guessing1 = prompt("Give it another try 'Taylor Swift's birthday is on 13th ____________'");
    }

    let guessing2 = prompt("Lionel Messi's birthday is on 24th ____________");
    if (guessing2.toLowerCase() === "june") {
        alert("Correct!");
    } else if (guessing2 === "") {
        alert("You must enter a month");
    } else {
        alert("Sorry...Wrong answer!");
        lives--;
        if (lives === 0) {
            alert("Sorry! You ran out of lives... Thanks for playing!");
            break; 
        }
        guessing2 = prompt("Give it another try 'Lionel Messi's birthday is on 24th ____________'");
    }

    let guessing3 = prompt("Barack Obama's birthday is on 20th ____________");
    if (guessing3.toLowerCase() === "january") {
        alert("Correct! Congratulations!! You rock!");
        break;
    } else if (guessing3 === "") {
        alert("You must enter a month");
    } else {
        alert("Sorry...Wrong answer!");
        lives--;
        if (lives === 0) {
            alert("Sorry! You ran out of lives...Thanks for playing!");
            break;
        }
        guessing3 = prompt("Give it another try 'Barack Obama's birthday is on 20th ____________'");
    }
}