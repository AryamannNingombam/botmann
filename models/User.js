const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    points: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    birthday: {
        type: Date,
        required: false,
    },
})

UserSchema.methods.IncrementPoints = async () => {
    const user = this;
    user.points + 5;
    await user.save();
    return;
}

module.exports =  mongoose.model("User",UserSchema);