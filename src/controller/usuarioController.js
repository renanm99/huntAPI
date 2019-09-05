const mongoose = require("mongoose");
const User = mongoose.model("Users");

module.exports = {
    async userCreate(req, res) {
        const user = await User.create(req.body);
        res.send(user);
    },
    async EnviarCod(req, res) {},
    async GetUser(req, res) {
        const a = await User.findById(req.params.id);
        res.send(a);
    },
    ////////// controles
    async users(req,res){
        const user = await User.find();
        res.send(user);
    }
};
