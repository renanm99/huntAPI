const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const Token = mongoose.model("Token");

module.exports = {
  async validarToken(req, res) {
    const token = await Token.findOne({
      token: req.params.idtoken,
      isAvailable: true
    });
    if (token === null) {
      res.send({ token: "", email: "", isAvailable: false });
    } else {
      res.send(token);
    }
  },
  async enviarToken(req, res) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      //auth: { user: "@gmail.com", pass: "" }
    });

    var mailOptions = {
      from: "",
      to: "",
      subject: "Aqui está seu email",
      text: ""
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.send({response:"0",messageId:"0"});
      } else {
        res.send({response:info.response,messageId:info.messageId});
        //salvar no banco
      }
    });
  },
};
