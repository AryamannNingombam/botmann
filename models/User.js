const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
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
        required: true,
    },
})

UserSchema.methods.incrementPoints = async () => {
    const user = this;
    user.points + 5;
    await user.save();
    return;
}

export default mongoose.model("User",UserSchema);