const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");

const register = async (req, res) => {
  const { nombre, correo, password } = req.body;
  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) return res.json({ mensaje: "ya existe usuario" });
    else if (!nombre || !correo || !password)
      return res.json({ mensaje: "Faltan datos" });
    else {
      bcrypt.hash(password, 10, (error, passwordHash) => {
        if (error) {
          res.json({ error });
        } else {
          const nuevoUsuario = new Usuario({
            nombre,
            correo,
            password: passwordHash,
          });

          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "usuario creado exitantemente", usuario });
            })
            .catch((err) => console.error(error));
        }
      });
    }
  });
};
module.exports = register;
