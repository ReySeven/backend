import mysql from 'mysql2/promise.js'

const pool = mysql.createpool({
    host: '127.0.0.1',
    user: 'root',
    password: "",
    database: 'librarydb'
})

export default pool;