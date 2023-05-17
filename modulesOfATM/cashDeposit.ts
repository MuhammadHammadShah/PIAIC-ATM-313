import inquirer from "inquirer";

async function cashDeposit(balance: number) {
  const amount_for_Deposit = await inquirer.prompt([
    {
      name: "amount_of_deposit",
      type: "number",
      message: "Enter your amount to Deposit",
    },
  ]);
  balance += amount_for_Deposit.amount_of_deposit;
  return balance;
}

export default cashDeposit;
