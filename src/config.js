const mysql = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'coderhouse',
    password: 'coderhouse',
    database: 'coderhouse'
  }
}
const sqlite3 = {
  client: 'sqlite3',
  connection: { filename: './database/db.sqlite3' },
  useNullAsDefault: true
}

export { mysql, sqlite3 }