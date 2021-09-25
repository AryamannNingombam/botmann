const ReminderModel = require('../models/Reminder');


exports.SetReminder = (str,message)=>{
    const splitted = str.split(',');
    console.log(splitted);
    message.reply(toString(splitted));
}


