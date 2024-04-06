#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\twelcome to CodeWithMughalZaad - CLI Number Gussing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userguessingnumber",
        message: "Guess a number between (1 and 5)",
    },
]);

if (answers.userguessingnumber === randomNumber) {
    console.log("Congrats! You got it right Number!");
}
else{
    console.log("Sorry! You got it wrong Number!");
}