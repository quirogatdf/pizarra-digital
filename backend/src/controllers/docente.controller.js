const { Docentes } = require('../database/sync');

class DocentesController {
  /* Crear docente */
  static async add(req, res) {
    const { dni, apellido, nombre, fecha_nacimiento } = req.body;
    try {
      let user = await Docentes.create(req.body);
      res.status(200).json({ message: `El docente se ha creado con exito!` })
      

    } catch (error) {
      res.status(500).json({ message: `Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador.`, error: `${error}` })
    }
  }

  /* Modificar docente */
  static async update(req, res) {
    const id = parseInt(req.params.id);
    // const { dni, nombre, apellido } = req.body;
    try {
      const docente = await Docentes.findOne({
        where: { id: id }
      });
      if (docente !== null) {
        await Docentes.update(req.body, {
          where: { id: docente.id }
        });
        res.status(200).json({ Message: 'Okey' })
      } else {
        res.status(404).json({ error: 'Not Found Id' })
      }
    } catch (err) {
      res.status(500).json({ error: "Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador." })
    }
  };

  /* Listar docente por Id */
  static async getById(req, res) {
    const id = parseInt(req.params.id);
    try {
      const docente = await Docentes.findOne({
        where: { id: id }
      });
      res.status(200).json(docente)

    } catch (err) {
      res.status(500).json({ error: "Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador." })
    }
  };

  /* Mostrar todos los docentes */
  static async getAll(req, res) {
    try {
      const docentes = await Docentes.findAll({
      });
      res.status(200).json(docentes)
    } catch (err) {
      res.status(500).json({ error: "Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador." })
    }
  };

  /* Eliminar docente */
  static async delete(req, res) {
    const id = parseInt(req.params.id);
    console.log(id);
    try {
      await Docentes.destroy({
        where: {
          id: id
        }
      })
      res.status(200).json({message:"El usuario se borro correctamente"})
    } catch (err) {
      res.status(500).json({ message: "Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador." ,error: err})
    }
  }

}

module.exports = DocentesController;