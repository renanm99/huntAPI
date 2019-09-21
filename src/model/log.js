const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
    {
        type: { type: String, required: true, default: "" },
        collectionTable: { type: String, required: true, default: "" },
        message: { type: String, required: true, default: "" },
        createdAt: { type: Date, default: Date.now }
    },
    { collection: "Logs" }
);

mongoose.model("Logs", logSchema);
