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
    }


})

ReminderSchema.methods.toggleDone = async () => {
    this.done = !this.done;
    await this.save();
    return;
}




export default mongoose.model("Reminder", ReminderSchema);