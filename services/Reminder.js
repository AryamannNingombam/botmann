const ReminderModel = require('../models/Reminder');
const UserModel = require('../models/User');


exports.SaveReminderForUser = async (username, title, description, date, message) => {
    const check = await UserModel.find({
        username
    });
    //user doesnt exist;
    try {
        if (!check || check.length === 0) {
            const result = await UserModel.create({
                username
            });
            check.push(result);
        }

        ReminderModel.create({
                title,
                description,
                deadline: date,
                user: check[0]
            })
            .then(newReminder => {
                console.log("New reminder added!");
            })
            .catch(err => {
                console.log("ERROR");
                console.log(err);

            })
        message.reply("New reminder set!");
    } catch (err) {
        console.log("ERROR");
        console.log(err);
        message.reply("Error adding reminder, please check your format!");
    }



}