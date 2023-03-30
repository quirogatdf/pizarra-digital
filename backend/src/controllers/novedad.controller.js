
const { Novedades, Docentes } = require('../database/sync');

class NovedadesController {

  /* Crear Novedad */
  static async add(req, res) {
    try {
      let novedad = await Novedades.create(req.body);
      res.status(200).json({ message: `La novedad se generó con exito!` })
    } catch (error) {
      res.status(500).json({ message: `Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador.`, error: `${error}` })
    }
  }

  /* Mostrar todos los docentes */
  static async getAll(req, res) {
    const novedades = await Novedades.findAll({
      include: Docentes
    })
    res.status(200).json(novedades);
    //} catch (err) {
    //res.status(500).json({ 
    //error:err
    // error: "Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador." 

    //}
  };

  static async getById(req, res) {
    const id = parseInt(req.params.id)
    try {
      const novedad = await Novedades.findOne({
        where: { id: id }
      });
      res.status(200).json(novedad)

    } catch (err) {
      res.status(500).json({
        error: "Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador."
      })
    }
  }

  static async update(req, res) {
    const id = parseInt(req.params.id);
    try {
      const novedad = await Novedades.findOne({
        where: { id: id }
      });
      if (novedad !== null) {
        await Novedades.update(req.body, {
          where: { id: novedad.id }
        });
        res.status(200).json({ Message: 'La novedad fue actualizada con éxito' })
      } else {
        res.status(404).json({ Message: 'Not Found Id' })
      }
    } catch (err) {
      res.status(500).json({ error: "Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador." })
    }
  }
  
  /* Eliminar docente */
  static async delete(req, res) {
    const id = parseInt(req.params.id);
    console.log(id);
    try {
      await Novedades.destroy({
        where: {
          id: id
        }
      })
      res.status(200).json({message:"La novedad se borro correctamente"})
    } catch (err) {
      res.status(500).json({ message: "Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador." ,error: err})
    }
  }
}

module.exports = NovedadesController;