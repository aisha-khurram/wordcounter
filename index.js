#! usr/bin/env node
import inquirer from "inquirer";
//teacher asahrib ali
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words"
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is ${words.length}`);
