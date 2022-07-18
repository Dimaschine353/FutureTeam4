import * as express from 'express';
import * as session from "express-session";
import * as mysql from "mysql";
import {MysqlError} from "mysql";
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
app.get("/nachricht",checkLogin,getAlleNachrichten);
app.get("/nachrichten",checkLogin,getAlleleleleNachrichten);
app.post("/nachricht",postNachricht);
app.delete("/nachricht/:nId",deleteNachricht);
app.put("/nachricht/:nId", putNachrichten);
//Routen Antwort
app.post("/antwort",postAntwort);
//Login 'n out Funktionen
function login(req: express.Request, res: express.Response): void {
       query("SELECT uId FROM benutzer WHERE email = ? AND passwort = ?",
        [req.body.loginName, req.body.loginPasswort])
        .then((results: any) => {
            //Wenn Eintrag vorhanden ist wird der Loginname zum Sessionnamen
            if (results.length===1) {
                req.session.uid = results[0].uId;
                req.session.uname = req.body.loginName
                res.sendStatus(200);
            }else{
                res.sendStatus(404);
            }
            })
        .catch((err: mysql.MysqlError) => {
           res.sendStatus(500);
           console.log("Fehler in der Datenbank");
        });
}
function logout(req: express.Request, res: express.Response): void {
     req.session.destroy(()=>{
        res.clearCookie("connect.sid");
        res.sendStatus(200);
    });
}
function checkLogin(req: express.Request, res:express.Response, next: express.NextFunction): void{
    if(req.session.uname !== undefined){
        next();
     }else{
        console.log("User ist nicht eingelogt");
        res.status(401);
    }
}
function binIchNochDrin(req:express.Request, res: express.Response){
    const email: string = req.session.uname;
    const sql = "SELECT * FROM benutzer WHERE email=?;";
    const param = [email];
    if(email){
        connection.query(
            sql,
            param,
            (err:MysqlError | null, results:any)=>{
                res.status(200);
                res.json(results[0]);
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
        res.status(400);
        console.log("Einer der Werte fehlt");
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
    const param = [email];
    const sql = "SELECT * FROM benutzer WHERE email =?;";
    if(email === undefined){
        console.log("email fehlt");
    }else if(email){
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
    const nId: string = req.params.nId;
    const param = [nId];
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
    const uId: number = req.session.uid;
    const param = [uId];
    const sql = "SELECT nachrichten.nachricht ,antworten.antwort ,nachrichten.nId  FROM nachrichten LEFT JOIN antworten ON nachrichten.nId = antworten.nId WHERE uId=?;";
        if(uId!==undefined){
        connection.query(
            sql,
            param,
            (err:MysqlError | null, results: any) => {
                res.send(results);
                console.log("Das ergebnis der getAllNachrichten"+JSON.stringify(results));
            }
        )
    }
}
function getAlleleleleNachrichten(req:express.Request, res:express.Response):void{
    console.log("Bin in der getAllelelele Nachrichten")
    const param =[];
    const sql = "SELECT nachrichten.nachricht ,nachrichten.betreff ,antworten.antwort ,nachrichten.nId  FROM nachrichten LEFT JOIN antworten ON nachrichten.nId = antworten.nId";
    connection.query(
        sql,
        param,
        (err:MysqlError | null, results:any)=>{
            res.send(results);
            console.log("das Ergebnis der getAlleleleleNAchrichten"+JSON.stringify(results));
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
        res.status(200);
        res.send("Nachricht aktualisiert");
    }else{
        res.status(400);
        res.send("Es gibt keine Nachricht mit dieser Nachricht ID: " + nId);
    }
}
//Funktionen Antworten
function postAntwort(req:express.Request, res:express.Response){
    const nId = req.body.nId;
    console.log(nId+" in der postAntwort");
    const antwort = req.body.antwort;
    console.log(antwort+" in der postAntwort");
    let sql = "INSERT INTO antworten (nId, antwort) VALUES(?,?)";
    console.log(sql +" :SQL Abfrage in der postAntwort");
    const param = [nId,antwort];
    console.log(param+" Parameter in der postAntwort");
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
                    res.status(201).send("nachricht mit der ID: "+ nId + " wurde beantwortet");
                    console.log("nachricht mit der ID: "+nId+" wurde beantwortet");
                }

        });
    }
}































































































