import mysql from "mysql";


export const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'yourdb',
  });