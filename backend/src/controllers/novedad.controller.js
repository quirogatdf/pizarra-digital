
const { Novedades, Docentes } = require('../database/sync');

class NovedadesController {
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
    console.log(req.params.id)
    try {
      const novedad = await Novedades.findOne({
        where: { id: id }
      });
      res.status(200).json(novedad)
      
    } catch (err) {
      res.status(500).json({ 
        errro:err
        // error: "Algo salió mal. Vuelva a intentarlo o póngase en contacto con un administrador." 
      })
    }
  }
}

module.exports = NovedadesController;