const {
    SaveReminderForUser
} = require("../services/Reminder");


exports.SetReminder = async (str, message) => {
    const [random, title, description, date] = str.split(',');
    console.log(message.author);

    try {
        const [year, month, day, hour, minute] = date.split(' ');
        const test = new Date(year, month, day, hour, minute);

        await SaveReminderForUser(message.author.username, title, description, test, message);

    } catch (err) {
        console.log("ERROR");
        console.log(err);
        message.reply("Wrong format!");
    }

}