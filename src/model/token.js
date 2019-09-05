const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
    {
        token: { type: String, required: true, default: "" },
        email: { type: String, required: true, default: "" },
        isAvailable: {
            type: Boolean,
            default: false
        },
        createdAt: { type: Date, default: Date.now }
    },
    { collection: "Token" }
);

mongoose.model("Token", tokenSchema);
