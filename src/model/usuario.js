const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
    {
        user: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    },
    { collection: "Users" }
);

mongoose.model("Users", usuarioSchema);
