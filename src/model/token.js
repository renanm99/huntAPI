const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
    {
        token: { type: String, required: true, default: "" },
        email: { type: String, required: true, default: "" },
        isAvailable: {
            type: Boolean,
            require: true,
            default: false
        },
        createdAt: { type: Date, required: true, default: Date.now }
    },
    { collection: "Token" }
);

mongoose.model("Token", tokenSchema);
