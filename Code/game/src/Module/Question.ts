import readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const util = require('util');
const question = util.promisify(rl.question).bind(rl);

export async function prompt(question_str: string) {
    const answer = await question(question_str);
    let noChoice = parseInt(answer);
    return noChoice;
}