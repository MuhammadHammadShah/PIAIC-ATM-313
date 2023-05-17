import inquirer from "inquirer";
import users from "./users.js";
import mainScreen from "./mainScreen.js";
async function login() {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: Number,
            message: "Please enter the correct Account number",
        },
        {
            name: "pin",
            type: "password",
            message: "Enter Your Correct pin Code",
        },
    ]);
    let user = users.find((x) => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);
    if (typeof user != "undefined") {
        console.log("Logged in");
        console.log(`Welcome ${user.name}`);
        mainScreen(user.accountBalance);
    }
    else {
        console.log("You enter invalid pin or accountNumber");
    }
}
export default login();
