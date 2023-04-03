const { Users } = require("../database/sync");
const jwt = require('jsonwebtoken');
const { JWT } = require('../config/config');
const SECRET_KEY = JWT.key;

class AuthController {
  /* Login */
  static async loginUser(req, res, next) {
    const userData = {
      username: req.body.username,
      password: req.body.password,
    }
    const result = await Users.findOne({
      where: {
        username: userData.username
      }
    })
    if (result) {
      if (result.password === userData.password) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: result.id }, SECRET_KEY, { expiresIn: expiresIn });
        const dataUser = {
          username: result.username,
          password: result.password,
          accessToken: accessToken,
          expiresIn: expiresIn
        }
        res.status(200).json({login: true, dataUser})
      } else {
        res.status(500).json({ login: false, message: `Contraseña Invalida` })
      }

    } else {
      res.status(500).json({ login: false, message: 'Usuario inválido' })
    }
  }

}
module.exports = AuthController;