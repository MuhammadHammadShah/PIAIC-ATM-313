import inquirer from "inquirer";
import chalk from "chalk";
async function Other_Aamount(balance: number) {
  const other_amount_ToBe_Withdraw = await inquirer.prompt([
    {
      name: "otheramount",
      type: "number",
      message: "Please enter You want to withdraw",
    },
  ]);
  if (other_amount_ToBe_Withdraw.otheramount < balance) {
    balance -= other_amount_ToBe_Withdraw.otheramount;
  } else {
    console.log(chalk.red("You Have insufficient Balance"));
    balance = await Other_Aamount(balance);
  }
  return balance;
}

async function cashWithdraw(balance: number) {
  const answer_for_balance = await inquirer.prompt([
    {
      name: "amount",
      type: "list",
      choices: ["500", "1000", "2000", "5000", "10000", "other_Amount"],
      message: "Please select your Amount",
    },
  ]);

  switch (answer_for_balance.amount) {
    case "500":
      if (balance > Number(answer_for_balance.amount)) {
        balance -= 500;
        console.log(chalk.yellow(`Your new balance is now ${balance}`));
      } else {
        console.log(chalk.red("You Have insufficient Balance"));
      }
      break;
    case "1000":
      if (balance > Number(answer_for_balance.amount)) {
        balance -= 1000;
        console.log(chalk.yellow(`Your new balance is now ${balance}`));
        break;
      } else {
        console.log(chalk.red("You Have insufficient Balance"));
      }

    case "2000":
      if (balance > Number(answer_for_balance.amount)) {
        balance -= 2000;
        console.log(chalk.yellow(`Your new balance is now ${balance}`));
        break;
      } else {
        console.log(chalk.red("You Have insufficient Balance"));
      }

    case "5000":
      if (balance > Number(answer_for_balance.amount)) {
        balance -= 5000;
        console.log(chalk.yellow(`Your new balance is now ${balance}`));
        break;
      } else {
        console.log(chalk.red("You Have insufficient Balance"));
      }

    case "10000":
      if (balance > Number(answer_for_balance.amount)) {
        balance -= 10000;
        console.log(chalk.yellow(`Your new balance is now ${balance}`));
        break;
      } else {
        console.log(chalk.red("You Have insufficient Balance"));
      }
    case "other_Amount":
      balance = await Other_Aamount(balance);
      console.log(chalk.yellow(`Your new balance is: ${balance}`));

      break;
  }
  return balance;
}

export default cashWithdraw;
