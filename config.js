const env = process.env;

const config = {
    db: {
        host: env.DB_HOST || 'localhost',
        port: env.DB_PORT || '5432',
        user: env.DB_USER || 'samnoon',
        password: env.DB_PASSWORD || 'admin',
        database: env.DB_NAME || 'posgres',
    },
    listPerPage: env.LIST_PER_PAGE || 10,
}
module.exports = config;