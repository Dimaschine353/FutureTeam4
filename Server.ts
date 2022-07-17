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
    constructor(vName:string, nName:string, email:string) {
        this.vName = vName;
        this.nName = nName;
        this.email = email;
    }
}
/*
class Nachricht{
    vName: string;
    nName: string;
    email: string;
    betreff: string;
    nachricht: string;
    constructor(vName:string, nName:string, email:string,betreff:string, nachricht:string) {
        this.vName = vName;
        this.nName = nName;
        this.email = email;
        this.betreff = betreff;
        this.nachricht = nachricht;
    }
}*/
//Verbindung zu DB//
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
app.get("/binIchNochDrin?",binIchNochDrin);
//Routen Benutzer
app.post("/benutzer",postBenutzer);
app.get("/benutzer/:email",checkLogin,getBenutzer);
app.delete("/benutzer/:email",checkLogin,deleteBenutzer);
app.put("/benutzer/:email",checkLogin,putBenutzer);
//Routen Nachricht
app.get("/nachricht/:email",checkLogin,getAlleNachrichten);
app.get("/nachrichten/:email",checkLogin,getAlleleleleNachrichten);
app.post("/nachricht",postNachricht);
app.delete("/nachricht/:nId",deleteNachricht);
app.put("/nachricht/:nId", putNachrichten);
//Routen Antwort

//Login 'n out Funktionen
function login(req: express.Request, res: express.Response): void {
    //Selektiert "nichts", aber unter der Bedingung, dass Name und Passwort stimmen
    query("SELECT uId FROM benutzer WHERE email = ? AND passwort = ?",
        [req.body.loginName, req.body.loginPasswort])
        .then((results: any) => {
            //Wenn Eintrag vorhanden ist wird der Loginname zum Sessionnamen
            if (results.length===1) {
                req.session.uid = results[0].uId;
                //console.log(req.session.uid+ " in der LoginFkt");
                req.session.uname = req.body.loginName
                res.sendStatus(200);
                //console.log("User wurde eingeloggt");
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
function logout(req: express.Request, res: express.Response): void {
    //console.log("bin in der Logout Fkt")
    req.session.destroy(()=>{
        res.clearCookie("connect.sid");
        res.sendStatus(200);
    });
}
function checkLogin(req: express.Request, res:express.Response, next: express.NextFunction): void{
    if(req.session.uname !== undefined){
        next();
        //console.log("Der User ist eingeloggt und berechtigt");
    }else{
        console.log("User ist nicht eingelogt");
        res.status(401);
    }
}
function binIchNochDrin(req:express.Request, res: express.Response){
    const email: string = req.session.uname;
    //console.log(email+" im Anfang der binIchDrin")
    //const userID: string = req.session.uid;
    const sql = "SELECT * FROM benutzer WHERE email=?;";
    const param = [email];
    if(email){
        connection.query(
            sql,
            param,
            (err:MysqlError | null, results:any)=>{
                res.status(200);
                res.json(results[0]);
                //console.log(results[0]);
                //console.log(results);
            }
        );


    }
}
//Funktionen Benutzer
function postBenutzer(req: express.Request, res: express.Response):void {
    const vName: string = req.body.vName;
    const nName: string = req.body.nName;
    const email: string = req.body.email;
    const passwort: string = req.body.passwort;

    const param = [vName,nName,email,passwort];
    const param2 = [email];

    let sql = "INSERT INTO benutzer(vName, nName, email, passwort) VALUES(?,?,?,?)";
    let sql2 = "SELECT * FROM benutzer WHERE email =?;";
    if(email===undefined || vName===undefined || nName===undefined || passwort===undefined){
        console.log("Einer der Werte fehlt");//STATUS EINFÜGEN
    }else{
        connection.query(
            sql2,
            param2,
            (err: MysqlError | null, result: any)=>{
                if(err!==null){
                    res.status(400).send("SQL Fehler");
                }else if(result.length==1){
                    res.status(400).send("Benutzer existiert bereits");
                }else{
                    connection.query(
                        sql,
                        param,
                        (err: MysqlError | null, result: any) => {

                            if(err!==null){
                                res.status(400).send("SQL Fehler");
                            }else{
                                res.status(201).send({result});
                            }
                        });
                }
            }
        )
    }
}
function getBenutzer(req: express.Request, res: express.Response):void{
    const email: string = req.session.uname;
    //const email: string = req.params.email;
    const param = [email];
    const sql = "SELECT * FROM benutzer WHERE email =?;";
    //console.log(email+ " inder getBenutzerServer");
    if(email === undefined){
        console.log("email fehlt");
    }else if(email){
        //console.log("bin in der elseIF von der getBenutzer Server");
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

                )

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
        );
        console.log("Sie haben Ihren Account erfolgreich gelöscht");
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
//Funktionen Nachricht
function postNachricht(req: express.Request, res:express.Response):void{
    const vName: string = req.body.vName;
    const nName: string = req.body.nName;
    const email: string = req.body.email;
    const betreff: string = req.body.betreff;
    const nachricht: string = req.body.nachricht;
    const uId: number = req.session.uid;
    const param = [vName,nName,email,betreff,nachricht,uId];
    const sql = "INSERT INTO nachrichten (vName, nName, email, betreff, nachricht,uId) VALUES(?,?,?,?,?,?)";
    if(vName===undefined || nName===undefined || email===undefined || betreff===undefined || nachricht===undefined){
          res.status(400).send("Einer der Parameter fehlt");
    }else{
        connection.query(
            sql,
            param,
            (err:MysqlError | null, result:any) => {
                if(err!==null){
                    res.status(500).send("SQL Fehler")
                }else{
                    res.status(201).send({result});
                }
            }
        );
    }
}
function deleteNachricht(req: express.Request, res:express.Response):void{
    //console.log("bin in der delete Nachricht im Server");
    //const betreff: string = req.params.betreff;
    //const email: string = req.params.email;
    const nId: string = req.params.nId;
    //const email: string = req.session.uname;
    //console.log(betreff+" in der delete Nachricht Server");
    //console.log(email + " inder delete Nachricht Server");
    //
    const param = [nId];
    console.log(nId+" in der delete Server");
    console.log(param+" param in der Delete Server")
    const sql = "DELETE FROM nachrichten WHERE nId=?;";
    if(nId==undefined){
        res.status(400);
        res.send("Falsche Nachrichten ID");
        console.log("die nId fehlt");
    }else{
        connection.query(
            sql,
            param,
            (err:mysql.MysqlError| null, results: any)=>{
                res.status(200);
                res.send("Nachricht gelöscht");
                console.log("nachricht wurde gelöscht ");
            }
        )
    }

}
function getAlleNachrichten(req:express.Request, res:express.Response):void{
    //const email = req.params.email;
    const uId: number = req.session.uid;
    //console.log(uId+" in der getAll nachrichten")
    //console.log(email+" in der Server getAllNachrichten Fkt");
    const param = [uId];
    //console.log(param+"(parameter) in der Server getAllNachrichten Fkt");
    const sql = "SELECT * FROM nachrichten WHERE uId=?;";
    if(uId!==undefined){
        connection.query(
            sql,
            param,
            (err:MysqlError | null, results: any) => {
                res.send(results);
                //console.log("das ergebnis der getAllNachrichten"+results);
            }
        )
    }
}
function getAlleleleleNachrichten(req:express.Request, res:express.Response):void{
    //console.log("Bin in der getAllelelele Nachrichten")
    const param =[];
    const sql = "SELECT * FROM nachrichten;";
    connection.query(
        sql,
        param,
        (err:MysqlError | null, results:any)=>{
            res.send(results);
        }
    )
}
function putNachrichten(req: express.Request, res: express.Response): void {
    const nachricht: string = req.body.nachricht;
    const nId: string = req.params.nId;
    const param = [nachricht, nId];
    let sql = "UPDATE nachrichten SET nachricht = ? WHERE nId = ?;";
    if(nachricht === undefined){
        res.status(400);
        res.send("Der Inhalt Ihrer Nachricht ist leer");
    }else if(nachricht){
        connection.query(
            sql,
            param,
            (err:MysqlError | null, results: any) => {

            });
        //console.log(nId);
        res.status(200);
        res.send("Nachricht aktualisiert");
    }else{
        res.status(400);
        res.send("Es gibt keine Nachricht mit dieser Nachricht ID: " + nId);
    }
}
//Funktionen Antworten
app.post("/antwort",postAntwort);
function postAntwort(req:express.Request, res:express.Response){
    const nId = req.body.nId;
    console.log(nId+" in der postAntwort");
    const antwort = req.body.antwort;
    console.log(antwort+" in der postAntwort");
    /*
    const param = [vName,nName,email,betreff,nachricht,uId];
    const sql = "INSERT INTO nachrichten (vName, nName, email, betreff, nachricht,uId) VALUES(?,?,?,?,?,?)";
    */
    let sql = "INSERT INTO antworten (nId, antwort) VALUES(?,?)";
    console.log(sql +" :SQL Abfrage in der postAntwort");
    const param = [antwort,nId];
    console.log(param+" Parameter in der postAntwort");
    /*
        if(vName===undefined || nName===undefined || email===undefined || betreff===undefined || nachricht===undefined){
          res.status(400).send("Einer der Parameter fehlt");
    }else{
        connection.query(
            sql,
            param,
            (err:MysqlError | null, result:any) => {
                if(err!==null){
                    res.status(500).send("SQL Fehler")
                }else{
                    res.status(201).send({result});
                }
            }
        );
    }
    */
    if(antwort===undefined || nId===undefined){
        //||ist es zu viel diese Info an den Client zu schicken?
        res.status(400).send("einer der Werte fehlt");
    }else{
        connection.query(
           sql,
            param,
            (err:MysqlError | null, result:any) => {
                if(err!==null){
                    res.status(500).send("Fehler in der Datenbank");
                }else{
                    res.status(201).send("nachricht mit der ID: "+nId+" wurde beantwortet");
                }

        });
    }
}































































































