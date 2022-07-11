//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!

//import axios, {AxiosResponse, AxiosError} from 'axios';

//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!                 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
//Deklaration Sections

let sectStart: HTMLElement;
let sectProf: HTMLElement;
let sectDet: HTMLElement;
let sectÜber: HTMLElement;
let sectServ: HTMLElement;
let sectWar: HTMLElement;
let sectCheck: HTMLElement;
let sectReg: HTMLElement;
let sectLog: HTMLElement;
let sectKont: HTMLElement;
                    
                    
//Deklaration Nav Leiste
let navLogin: HTMLElement;
let navHome: HTMLElement;

//Deklaration Forms
let feedbackReg: HTMLElement;
let feedbackProfU: HTMLElement
let formRegistrieren: HTMLFormElement;
let formLogin: HTMLFormElement;
let formLogout: HTMLFormElement;
let formProfilDatenBearbeiten: HTMLFormElement;

//Deklaration Variablen

//Deklaration globale Variablen und Funktionen
let eingeloggterBenutzer:String;

//Registrieren
let regVorname: HTMLInputElement;
let regNachname: HTMLInputElement;
let regEmail: HTMLInputElement;
let regPasswort: HTMLInputElement;
//Profil User
let profilVorname: HTMLInputElement;
let profilNachname: HTMLInputElement;
let profilUBtnB: HTMLInputElement;
let profilUBtnA: HTMLInputElement;
let profilUBtnL: HTMLInputElement;
//Login
let loginName: HTMLInputElement;
let loginPasswort: HTMLInputElement;
let logoutBtn: HTMLInputElement;

document.addEventListener("DOMContentLoaded",()=>{
    //initialisierung Sect
    sectStart = document.querySelector("#sectStart");
    sectProf = document.querySelector("#sectProf");
    sectDet = document.querySelector("#sectDet");
    sectÜber = document.querySelector("#sectÜber");
    sectServ = document.querySelector("#sectServ");
    sectWar = document.querySelector("#sectWar");
    sectCheck = document.querySelector("#sectCheck");
    sectReg = document.querySelector("#sectReg");
    sectLog = document.querySelector("#sectLog");
    sectKont = document.querySelector("#sectKont");
    //Startcontent Einstellung
    sectProf.classList.add("d-none");
    sectDet.classList.add("d-none");
    sectWar.classList.add("d-none");
    sectCheck.classList.add("d-none");
    sectReg.classList.add("d-none");
    sectLog.classList.add("d-none");
    sectÜber.classList.add("d-none");
    sectKont.classList.add("d-none");
    sectServ.classList.add("d-none");
    //Initialisierung Nav Leiste
    navLogin = document.querySelector("#navLogin");
    navLogin.addEventListener("click",zumLogin);
    navHome = document.querySelector("#navHome");
    navHome.addEventListener("click",zurückNachhause);

    //Initialisierung Forms
    feedbackReg = document.querySelector("#feedbackRegistrieren");
    feedbackProfU = document.querySelector("#feedbackProfildatenBearbeiten");
    formRegistrieren = document.querySelector("#formRegistrieren");
    formLogin = document.querySelector("#formLogin");
    logoutBtn = document.querySelector("#logoutBtn");
    formLogout = document.querySelector("#formLogout");
    formProfilDatenBearbeiten = document.querySelector("#formProfildatenBearbeiten");
    //Initialisierung Variablen

    //Initialisierung globaler Variablen
    eingeloggterBenutzer = "";

    //Registrierung
    regVorname = document.querySelector("#formRegistrieren [name='regVorname']");
    regNachname = document.querySelector("#formRegistrieren [name='regNachname']");
    regEmail = document.querySelector("#formRegistrieren [name='regE-mail']");
    regPasswort = document.querySelector("#formRegistrieren [name='regPasswort']");
    document.querySelector("#formRegistrieren").addEventListener("submit",benutzerHinzufügen);

    //Login Feld
    loginName = document.querySelector("#formLogin [name='loginName']");
    loginPasswort = document.querySelector("#formLogin [name='loginPasswort']");

    formLogin.addEventListener("submit", login);


    //logoutBtn.addEventListener("click", logout);

    //Profil
    profilNachname = document.querySelector("#profilNachname");
    profilVorname = document.querySelector("#profilVorname");


    profilUBtnB = document.querySelector("#profilUBtnB");
    profilUBtnB.addEventListener("click",benutzerBearbeitenStart);
    profilUBtnA = document.querySelector("#profilUBtnA");
    profilUBtnA.addEventListener("click",benutzerÄndern);

    profilUBtnL = document.querySelector("#profilUBtnL");
    profilUBtnL.addEventListener("click",benutzerLöschen);
});


//Funktionen

//Funktionen Benutzer
function benutzerHinzufügen(event:Event){
                
              event.preventDefault();
              
              const vName: string = regVorname.value;
              const nName: string = regNachname.value;
              const email: string = regEmail.value;
              const passwort: string = regPasswort.value;
              
              console.log(vName);
              
              axios.post("/benutzer", {
                  vName: vName,
                  nName: nName,
                  email: email,
                  passwort: passwort
              }).then((res: AxiosResponse)=>{
                  formRegistrieren.reset();
                  //||bessere Alternative suchen
                  feedbackReg.innerText = "Benutzer erfolgreich registriert";
                  setTimeout(feedbackRegLöschen,1000);
              }).catch((error: AxiosError)=>{
                  
              });
          }
function benutzerLöschen(event:Event){
    event.preventDefault();

    const email: String = eingeloggterBenutzer;

    axios.delete("/benutzer/"+email)
        .then((res: AxiosResponse)=>{
            console.log("Ihr Account wurde erfolgreich gelöscht");

            sectStart.classList.remove("d-none");
            sectDet.classList.remove("d-none");
            sectÜber.classList.remove("d-none");
            sectServ.classList.remove("d-none");
            sectWar.classList.remove("d-none");
            sectCheck.classList.remove("d-none");
            sectCheck.classList.remove("d-none");
            sectReg.classList.remove("d-none");
            sectLog.classList.remove("d-none");
            sectProf.classList.remove("d-none");

            sectStart.classList.add("d-block");
            sectDet.classList.add("d-block");
            sectÜber.classList.add("d-block");
            sectServ.classList.add("d-block");
            sectWar.classList.add("d-block");
            sectCheck.classList.add("d-block");
            sectCheck.classList.add("d-block");
            sectReg.classList.add("d-block");
            sectLog.classList.add("d-block");
            sectKont.classList.add("d-block");
        }).catch((err: AxiosError)=>{

    });



}
function benutzerBearbeitenStart(event: Event){
event.preventDefault();
    console.log("bin in der startEdit");

    formProfilDatenBearbeiten.classList.remove("d-none");



    axios.get("/benutzer/" + eingeloggterBenutzer)
        .then((res:AxiosResponse)=>{
            const benutzer = res.data.benutzer;
            profilVorname.value = benutzer.vName;
            profilNachname.value = benutzer.nName;
            //formProfilDatenBearbeiten.dataset.email = benutzer.email;
            profilUBtnA.classList.remove("d-none");
            profilUBtnB.classList.add("d-block");
            profilUBtnL.classList.remove("d-none");


            }
        )

}
function benutzerÄndern(event:Event){
    event.preventDefault();

    const vName = profilVorname.value;
    const nName = profilNachname.value;
    const email = eingeloggterBenutzer;

    axios.put("/benutzer/"+email,{
        vName: vName,
        nName: nName,
        email: email
    }).then((res:AxiosResponse)=>{

        profilNachname.setAttribute("readonly","true");
        profilVorname.setAttribute("readonly","true");
        feedbackProfU.innerText = "Nutzerdaten erfolgreich geupdated.";
        setTimeout(feedbackProfULöschen,1000);


    })

}
function benutzerAuslesen(event:Event){
    event.preventDefault();
}
//Login 'n out Funkntionen
function login(event:Event){
            event.preventDefault();
            const data: FormData = new FormData(formLogin);
            const email: string = data.get("loginName").toString();


            console.log(email + " vom formLogin");
            axios.post("/login", {
                loginName: data.get("loginName"),
                loginPasswort: data.get("loginPasswort")
            })
                .then((res: AxiosResponse) => {
                    sectLog.classList.add("d-none");
                    sectProf.classList.remove("d-none");

                    eingeloggterBenutzer = data.get("loginName").toString();
                    console.log(eingeloggterBenutzer+ " wurde gespeichert");
                    formLogin.reset();

                    console.log("Anmeldung erfolgreich bruh");


                })
                .catch((err: AxiosError)=>{
                    if(err.response.status = 404){
                        console.log("Anmeldung nicht erfolgreich if vom .catch");
                        console.log(loginName);
                        console.log(loginPasswort);
                    }else{
                        console.log("Anmeldung nicht erfolgreich else vom .catch");
                    }
                })
        }
function logout(event:Event){
    event.preventDefault();
    axios.post("/logout")
        .then(()=>{
            console.log("habe eine response vom Server erhalten");
            //hier soll alles rein was nachm logout passiert
        });
}
//Timeout funktionen
function feedbackProfULöschen(){feedbackProfU.innerText="";}
function feedbackRegLöschen(){feedbackReg.innerText="";}
//Navleisten Funktionen
function zurückNachhause(event:Event){
    event.preventDefault();
    sectStart.classList.remove("d-none");
    sectProf.classList.add("d-none");
    sectDet.classList.add("d-none");
    sectÜber.classList.add("d-none");
    sectServ.classList.add("d-none");
    sectWar.classList.add("d-none");
    sectCheck.classList.add("d-none");
    sectReg.classList.add("d-none");
    sectLog.classList.add("d-none");
    sectKont.classList.add("d-none");
}
function zumLogin (event:Event){
    event.preventDefault();
  sectStart.classList.add("d-none");
  sectLog.classList.remove("d-none");
}
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    