const mongoose = require("mongoose");
const Log = mongoose.model("Logs");

module.exports = {
    async logCreate(req, res) {
        const log = await Log.create(req.body);
        res.send(user);
    },
    ////////// controles
    async logs(req,res){
        const logs = await Log.find();
        res.send(logs);
    }
};
