import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String, required: true }, // Correct type declaration
    username: { type: String, required: true, unique: true }, // Correct type declaration
    name: { type: String, required: true }, // Correct type declaration
    image: { type: String }, // Optional field, no `required`
    bio: { type: String }, // Optional field, no `required`
    threads: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "thread" // Reference to the 'thread' model
        },
    ],
    onboarded: {
        type: Boolean,
        default: false, // Default value for the field
    },
    communities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "community", // Reference to the 'community' model
        },
    ],
});

// Define the model, preventing re-declaration if it already exists
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
