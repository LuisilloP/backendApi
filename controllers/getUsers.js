const Usuario = require("../model/usuario");

const getUser = async (req, res) => {
  const { usuarioId } = req.params;
  if (usuarioId.length === 24) {
    Usuario.findById(usuarioId).then((usuario) => {
      console.log(usuario);
      if (!usuario) {
        return res.json({ mensaje: "usuario no resgistrado" });
      } else {
        const { id, password, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "Id incorrecta" });
  }
};
module.exports = getUser;
