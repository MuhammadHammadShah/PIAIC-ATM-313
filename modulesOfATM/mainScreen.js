import inquirer from "inquirer";
import cashWithdraw from "./cashWithdraw.js";
import cashDeposit from "./cashDeposit.js";
import tranfer from "./transfer.js";
import Utility from "./utitlity.js";
import chalk from "chalk";
async function anotherTransaction() {
    const another_transaction = await inquirer.prompt([
        {
            name: "Another__Transacrion",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do You want another Transaction ?",
        },
    ]);
    return another_transaction.Another__Transacrion;
}
async function mainScreen(balance) {
    do {
        const options = await inquirer.prompt([
            {
                name: "menu",
                type: "list",
                choices: [
                    "Balance Inquiry",
                    "Cash Withdraw",
                    "Cash Deposit",
                    "Transfer",
                    "Utility Bill",
                    "Exit",
                ],
                message: "Please select Your Transaction Type",
            },
        ]);
        switch (options.menu) {
            case "Balance Inquiry":
                console.log(chalk.green(`Your current Balance is ${balance}`));
                break;
            case "Cash Withdraw":
                balance = await cashWithdraw(balance);
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                break;
            case "Transfer":
                balance = await tranfer(balance);
                break;
            case "Utility Bill":
                balance = await Utility(balance);
                break;
            case "Exit":
                anotherTran = "No";
                break;
        }
        if (options.menu !== "Exit") {
            console.log(chalk.yellow(`Your transaction is successful and new balance is ${balance}`));
            var anotherTran = await anotherTransaction();
        }
        if (anotherTran == "No") {
            console.log("Thank You for using our Services");
        }
    } while (anotherTran != "No");
}
export default mainScreen;
