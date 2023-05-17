import inquirer from "inquirer";
import chalk from "chalk";
async function tranfer(balance: number) {
  const answer_for_tranfer = await inquirer.prompt([
    {
      name: "accountNumber",
      type: "number",
      message: "Enter The account number you want to send the amount",
    },
    {
      name: "amount",
      type: "number",
      message: "Enter your amount",
    },
  ]);
  if (balance > answer_for_tranfer.amount) {
    balance -= answer_for_tranfer.amount;
  } else {
    console.log(chalk.red("You have insufficient balance"));
    
  }
  
  return balance;
}

export default tranfer;
