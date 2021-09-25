const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReminderSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
        default: false,
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    }


})

ReminderSchema.methods.toggleDone = async () => {
    let user = this;
    user.done = !user.done;
    await user.save();
    return;
}


module.exports = mongoose.model("Reminder", ReminderSchema);