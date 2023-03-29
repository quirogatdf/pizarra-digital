module.exports = (sequelize, type) => {
    return sequelize.define('novedades', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_inicio: type.DATE,
        fecha_fin: type.DATE,
        observaciones: type.STRING(150),
    },
        {
            sequelize,
            timestamps: false,
            raw: false,
        }
    )
}
