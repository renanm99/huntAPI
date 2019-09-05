const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const Token = mongoose.model("Token");

const GerarToken = () => {
    var token = "";
    while (token.length < 6) {
      if (token.length < 3) {
        token += Math.floor(Math.random() * 10);
      } else {
        token += String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      }
    }
    return token;
};

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
    const tokenGerado = GerarToken();
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.HUNT_EMAIL, pass: process.env.HUNT_EMAIL_PASS }
    });

    var mailOptions = {
      from: process.env.HUNT_EMAIL,
      to: req.body.email,
      subject: "StickerIO - Código de acesso",
      text: "Olá, "+req.body.name+". Aqui está seu código de acesso: "+tokenGerado
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.send({ response: "0", messageId: "0" });
      } else {
        console.log(info);
        res.send({ response: info.response, messageId: info.messageId });
        //salvar no banco
      }
    });
    const token = await Token.findOne({ email: req.body.email });
    if (token === null) {
      Token.create({
        token: tokenGerado,
        email: req.body.email,
        isAvailable: true
      });
    }
  },
  async tokens(req, res) {
    const token = await Token.find();
    res.send(token);
  }
};
