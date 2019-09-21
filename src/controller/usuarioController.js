const mongoose = require("mongoose");
const User = mongoose.model("Users");
const Log = mongoose.model("Logs");

module.exports = {
    async userCreate(req, res) {
        const user = await User.create(req.body,(err,res)=>{
            if(err){
                Log.create({
                    type:"error",
                    collectionTable:"user",
                    message:"usuário "+req.body.user+" não pôde ser criado.",
                    logDH:Date.now()
                });
            }else{
                Log.create({
                    type:"sucess",
                    collectionTable:"user",
                    message:"usuário "+req.body.user+" criado com sucesso.",
                    logDH:Date.now()
                });
            }
        });
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
