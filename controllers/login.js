const Usuario = require("../model/usuario");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { correo, password } = req.body;
  Usuario.findOne({ correo }).then((usuario) => {
    if (!usuario) return res.json({ mensaje: "no se encuentra usuario" });
    bcrypt.compare(password, usuario.password).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre } = usuario;
        res.json({ mensaje: "Loggeo Correcto", usuario: { id, nombre } });
      } else {
        return res.json({ mensaje: "contraseña incorrecta" });
      }
    });
  });
};
module.exports = login;
