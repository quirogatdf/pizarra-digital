require ('dotenv').config();

module.exports = {
    DB: {
        USERNAME: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DATABASE: process.env.DB_NAME,
        HOST: process.env.DB_HOST,
        DIALECT: process.env.DB_DIALECT
    },
    SERVER: {
        PORT: process.env.SERVER_PORT || 3000
    },
    // jwt : {
    //     key: process.env.PRIVATE_KEY,
    //     expires_time: process.env.EXPIRES_TIME
    // },
    // REDIS : {
    //     HOST : process.env.REDIS_HOST,
    //     PORT : process.env.REDIS_PORT
    // }
}
