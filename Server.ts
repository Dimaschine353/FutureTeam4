import * as express from 'express';
import * as session from "express-session";
import * as mysql from "mysql";
import {MysqlError} from "mysql";
//Klassen und Konstruktoren
//wird für Ben"R" gebraucht
class Benutzer{
    vName: string;
    nName: string;
    email: string;
    passwort: string;

    constructor(vName:string, nName:string, email:string, passwort:string) {
        this.vName = vName;
        this.nName = nName;
        this.email = email;
        this.passwort = passwort;


    }
}
//kRez
class Nachricht{
    vName: string;
    nName: string;
    email: string;
    inhalt: string;

    constructor(vName:string, nName:string, email:string, inhalt:string) {
        this.vName = vName;
        this.nName = nName;
        this.email = email;
        this.inhalt = inhalt;
    }
}
//Verbindung zu DB
const connection: mysql.Connection = mysql.createConnection({
    database:"luxknives"  ,
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
// Ein Wrapper von Manuel Groh, um die MySQL-Query als Promise (then/catch Syntax) zu nutzen
function query(sql: string, param: any[] = []): Promise<any> {
    return new Promise<any>((resolve: any, reject: any) => {
        connection.query(sql, param, (err: mysql.MysqlError | null, results: any) => {
            if (err === null) {
                resolve(results);
            } else {
                reject(err);
            }
        });
    });
}
const app: express.Express = express();
app.listen(8080);
//notwendige übergabeparameter für JSON und URLencoded
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Implementierung Session
app.use(session({
    cookie: {
        maxAge: 60 * 60 * 1000,
        sameSite: true
    },
    secret: Math.random().toString(),
    resave: false,
    saveUninitialized: false,
}));
// __dirname+"/Name des Ordners der umgeleitet wird"
app.use("/cMe",express.static(__dirname+"/Public" ));
//Sendet .html
app.get("/",(req: express.Request, res: express.Response)=>{
    res.status(200);
    res.sendFile( __dirname + "/Public/index.html");
});
//Routen Login
app.post("/login",login);
app.post("/logout",logout);
//Routen Benutzer
app.post("/benutzer",postBenutzer);
app.get("/benutzer/:email",checkLogin,getBenutzer);

//TODO! app.delete route mit checklogin wieder aktivieren, sobald checkLogin funktioniert
app.delete("/benutzer/:email",checkLogin,deleteBenutzer);
//eine 2te app.delete ohne "checklogin" für Testing zwecke
//app.delete("/benutzer/:email", deleteBenutzer);
app.put("/benutzer/:email",checkLogin,putBenutzer);

///Alle Log- in 'n - out funktionen

//Funktion Login zugriff auf DB MUSS GETESTET WERDEN
function login(req: express.Request, res: express.Response): void {
    //Selektiert "nichts", aber unter der Bedingung, dass Name und Passwort stimmen
    query("SELECT NULL FROM benutzer WHERE email = ? AND passwort = ?",
        [req.body.loginName, req.body.loginPasswort])
        .then((results: any) => {
            //Wenn Eintrag vorhanden ist wird der Loginname zum Sessionnamen
            if (results.length===1) {
                req.session.uname = req.body.loginName
                res.sendStatus(200);
                console.log("wurde eingeloggt");
            }else{
                //Wenn keine Übereinstimmung erfolgt ist sende Fehlercode
                res.sendStatus(404);
            }
            })
        .catch((err: mysql.MysqlError) => {
           //Leere Ergebnisse (siehe 404) sind kein Fehler; Login nur nicht möglich da keine Überstimmung mit DB. Fehler sind DB-Probleme
           res.sendStatus(500);
           console.log(err);
        });
}
//Funktion Logout beendet Session MUSS GETESTET WERDEN
function logout(req: express.Request, res: express.Response): void {
    console.log("bin in der Logout Fkt")
    req.session.destroy(()=>{
        res.clearCookie("connect.sid");
        res.sendStatus(200);
    });
}
//Funktion checkLogin prüft über den Sessionnamen ob und welcher Benutzer eingeloggt ist und gewährt dementsprechend Zugriff auf Routen
function checkLogin(req: express.Request, res:express.Response, next: express.NextFunction): void{
    if(req.session.uname !== undefined){
        next();
        console.log("Der User ist eingeloggt und berechtigt");
    }else{
        console.log("User ist nciht eingelogt");
        res.status(401);
    }

}
//Funktionen Benutzer
function postBenutzer(req: express.Request, res: express.Response):void {

    const vName: string = req.body.vName;
    const nName: string = req.body.nName;
    const email: string = req.body.email;
    const passwort: string = req.body.passwort;

    const param = [vName,nName,email,passwort];
    let sql = "INSERT INTO benutzer(vName, nName, email, passwort) VALUES(?,?,?,?)";

    if(email===undefined || vName===undefined || nName===undefined || passwort===undefined){
        console.log("Einer der Werte fehlt");
    }else if (email && vName && nName && passwort){
        connection.query(
            sql,
            param,
            (err: MysqlError | null, result: any) => {
                res.status(201).send({result});
            });
    }else{
        res.status(400);
        res.send("diesen Benutzer gibt es bereits");
    }
}
//||MUSS GETESTET WERDEN!!
function getBenutzer(req: express.Request, res: express.Response):void{

    const email: string = req.session.uname;
    const param = [email];
    const sql = "SELECT * FROM benutzer WHERE email =?;";
    console.log(email+ " inder getBenutzerServer");
    if(email === undefined){
        console.log("email fehlt");
    }else if(email){
        console.log("bin in der elseIF von der getBenutzer Server");
        connection.query
        (
            sql,
            param,
            (err:mysql.MysqlError | null, results: any)=>
            {
                const benutzer : Benutzer = new Benutzer(
                    results[0].vName,
                    results[0].nName,
                    results[0].email,
                    results[0].passwort
                )
                console.log(benutzer);
                res.status(200).send
                ({
                    benutzer
                });

            }
        )
    }

}


function deleteBenutzer(req: express.Request, res:express.Response):void{
    const email: string = req.session.uname;
    const param = [email];
    const sql = "DELETE FROM benutzer WHERE email =?;";


    /*console.log("bin in der deleteBenutzer drin");
    //TODO! email von session uname ziehen, sobald checkLogin fixed ist
    //const email: string =  req.params.email.toString();
    const email: string = req.session.uname;


     */

    if(email === undefined){
        res.status(400);
        res.send("Die E-Mail-Adresse fehlt");
    }else if(email){
        connection.query(
            sql,
            param,
            (err: mysql.MysqlError | null, result: any) => {
                res.status(200);
                res.send("Ihr Account wurde erfolgreich gelöscht");
            }
        )
    }
}

function putBenutzer(req: express.Request, res:express.Response):void{

    const email: string = req.session.uname;
    const vName: string = req.body.vName;
    const nName: string = req.body.nName;

    const param = [vName,nName,email];
    let sql = "UPDATE benutzer SET vName=?,nName=? WHERE email=?;";

    if(email===undefined || vName===undefined || nName===undefined){
        res.status(400);
        res.send("undefinierte werte");

    }else if(vName&&nName&&email){
        connection.query(
            sql,
            param,
            (err: MysqlError | null, result: any)=>{

            }
        );
        res.status(200);
        res.send("benutzer geupdated");
    }else{
        res.status(400);
        res.send("benutzer nicht gefunden");
    }

}



