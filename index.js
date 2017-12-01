var chalk = require("chalk");

var message = "Hello " + chalk.green("World ") + chalk.cyan("Good morning!");

console.log(chalk.hex('#BADA55').underline('Hello, world!'));
console.log(chalk.keyword('orange')('Some orange text'));
console.log(chalk.rgb(15, 100, 204).bgBlue('Hello!'));

console.log(message);