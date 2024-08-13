import mysql from "mysql"

// configuraçao do banco 



export const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alguma coisa",
    database: "alguma coisa",
})