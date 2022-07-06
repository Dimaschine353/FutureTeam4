import * as express from 'express';
import * as session from "express-session";
import * as mysql from "mysql";
import {MysqlError} from "mysql";

//Klassen und Konstruktoren


//Verbindung zu DB
//nameEinfügen
const connection: mysql.Connection = mysql.createConnection({
    database:"nameEinfügen"  ,
    host: "localhost",
    user: "root"
});

//Initialisiert Verbindung
connection.connect((err) => {
    if (err === null) {
        console.log("Bin in der Datenbank Habibi hmdl");
    } else {
        console.log("Datenbankfehler: " + err);
    }
});

 

