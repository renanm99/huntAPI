const mongoose = require("mongoose");
const Token = mongoose.model("Token");

module.exports = {
    async validarToken(req, res) {
        const token = await Token.findOne({
            token: req.params.idtoken,
            isAvailable: true
        });
        if(token === null){
            res.send({token:"",email:"",isAvailable:false});
        }
        res.send(token);
    }
};
