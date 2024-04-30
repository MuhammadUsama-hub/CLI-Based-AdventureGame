#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
// ASCII art for a man
const manArt = `
   O
  /|\\
  / \\
`;
// ASCII art for a boat
const boatArt = `
       __/______
     /            \\
   /                \\
   |    BOAT      |
   \\                /
     \\_________/
`;
// ASCII art for water
const waterArt = `
~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;
const crocodileArt = `
___________
/           \\
/             \\
/               \\
/                 \\
/                   \\
|       .-----.     |
\\      | o o |    //
\\     |  =  |   //
\\    |_____|  //
\\   \\_____/ //
\\_________//
`;
const beachArt = `
/\\
/\\//  \\
/\\//        \\
/\\//              \\
//                    \\
`;
// Function to display ASCII art
function displayAsciiArt(art) {
    return art;
}
//boat journey
async function boatjourney() {
    console.log(chalk.redBright('Your are now in a boat to cross the river.'));
    console.log(chalk.white(displayAsciiArt(manArt)), chalk.bgGreen(displayAsciiArt(boatArt)));
    const askDirection = await inquirer.prompt({ message: chalk.bgGreenBright('Ohh! Suddenly Strome arrives and Ship is going to out of control. You will be sink if you move forword ,You can Either go left/right:'), type: 'input', name: 'status', validate: function (value) {
            if (value.trim() === '') {
                return 'Please make your decision correct';
            }
            return true;
        } });
    if (askDirection.status.toLowerCase() === 'right') {
        seaSide();
    }
    else if (askDirection.status.toLowerCase() === 'left') {
        beachCorner();
    }
}
//beach Corner
async function beachCorner() {
    console.log(chalk.bgRgb(123, 250, 222)('Your are now at Beach Cornor and Safe.'));
    console.log(chalk.white(displayAsciiArt(manArt)), chalk.bgBlue(displayAsciiArt(beachArt)));
    const askDirection = await inquirer.prompt({ message: chalk.bgMagenta('Lets look for a boat to cross river ,You can Either go left/right:'), type: 'input', name: 'status', validate: function (value) {
            if (value.trim() === '') {
                return 'Please make your decision correct';
            }
            return true;
        } });
    if (askDirection.status.toLowerCase() === 'right') {
        boatjourney();
    }
    else if (askDirection.status.toLowerCase() === 'left') {
        deepSea();
    }
}
//deep sea crocodile facing
async function deepSea() {
    console.log(chalk.greenBright(displayAsciiArt(crocodileArt)));
    const askDirection = await inquirer.prompt({ message: chalk.bgMagenta('you are now infron of crocodile ,You can Either go left/right:'), type: 'input', name: 'status', validate: function (value) {
            if (value.trim() === '') {
                return 'Please make your decision correct';
            }
            return true;
        } });
    if (askDirection.status.toLowerCase() === 'right') {
        beachCorner();
    }
    else if (askDirection.status.toLowerCase() === 'left') {
        console.log(chalk.magenta('Ohh! Crocodile eaten you. Gave Over'));
    }
}
//Seaside Scenerio
async function seaSide() {
    console.log(chalk.whiteBright(displayAsciiArt(manArt)), chalk.blueBright(displayAsciiArt(waterArt)));
    const askFirstDirection = await inquirer.prompt({ message: chalk.bgCyanBright('you are standing on a beach , You can move Either Left/Right :'), type: 'input', name: 'status', validate: function (value) {
            if (value.trim() === '') {
                return 'Please make your decision correct';
            }
            return true;
        } });
    if (askFirstDirection.status.toLowerCase() === 'right') {
        console.log(chalk.bgGreenBright('Ops! There is a big crocodile it can eat You ran out'), chalk.green(displayAsciiArt(crocodileArt)));
        deepSea();
    }
    else if (askFirstDirection.status.toLowerCase() === 'left') {
        console.log(chalk.bgYellowBright('Good Bye! It"s Seems Your are currently not interested in exploring more!'));
    }
}
async function gameStart() {
    console.log(chalk.yellowBright('Hurry ! your are on an adventure game.'));
    const playerName = await inquirer.prompt({ message: chalk.greenBright('Hye! What is your name :'), type: 'input', name: 'user', validate: function (value) {
            if (value.trim() === '') {
                return 'Please enter a username';
            }
            return true;
        } });
    console.log(chalk.redBright(`It's nice to meet you ${playerName.user}.`));
    seaSide();
}
gameStart();
