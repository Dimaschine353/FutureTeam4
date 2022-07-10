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

                    

//Deklaration Forms
let feedbackReg: HTMLElement;
let formRegistrieren: HTMLFormElement;
let formLogin: HTMLFormElement;
let formLogout: HTMLFormElement;
let formProfilDatenBearbeiten: HTMLFormElement;

//Deklaration Variablen

//Deklaration globale Variablen
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


    //Initialisierung Nav Leiste



    //Initialisierung Forms
    feedbackReg = document.querySelector("#feedbackRegistrieren");
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
                  feedbackReg.innerText = "Benutzer erfolgreich eingeloggt";
              }).catch((error: AxiosError)=>{
                  
              });
          }

function benutzerAuslesen(event:Event){
    event.preventDefault();
}
function benutzerLöschen(event:Event){
    event.preventDefault();
}
function benutzerBearbeitenStart(eingeloggterBenutzer){

    console.log("bin in der startEdit");

    formProfilDatenBearbeiten.classList.remove("d-none");
    profilVorname.removeAttribute("readonly");
    profilNachname.removeAttribute("readonly");
   const email: string = eingeloggterBenutzer;

    axios.get("/benutzer/" + email)
        .then((res:AxiosResponse)=>{
            const benutzer = res.data.benutzer;
            profilVorname = benutzer.vName;
            profilNachname = benutzer.nName;
            formProfilDatenBearbeiten.dataset.email = benutzer.email;


            }
        )

}
function benutzerÄndern(event:Event){
    event.preventDefault();

    const vName = profilVorname.value;
    const nName = profilNachname.value;
    const email: string = formProfilDatenBearbeiten.dataset.email;

    axios.put("/benutzer/"+email,{
        vName: vName,
        nName: nName,
        email: email
    }).then((res:AxiosResponse)=>{

        profilNachname.setAttribute("readonly","true");
        profilVorname.setAttribute("readonly","true");

    })

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
                    //formLogin.reset();

                    sectStart.classList.remove("d-block");
                    sectDet.classList.remove("d-block");
                    sectÜber.classList.remove("d-block");
                    sectServ.classList.remove("d-block");
                    sectWar.classList.remove("d-block");
                    sectCheck.classList.remove("d-block");
                    sectCheck.classList.remove("d-block");
                    sectReg.classList.remove("d-block");
                    sectLog.classList.remove("d-block");

                    formLogout.classList.remove("d-none");
                    formLogout.classList.add("d-block");

                    sectStart.classList.add("d-none");
                    sectDet.classList.add("d-none");
                    sectÜber.classList.add("d-none");
                    sectServ.classList.add("d-none");
                    sectWar.classList.add("d-none");
                    sectCheck.classList.add("d-none");
                    sectCheck.classList.add("d-none");
                    sectReg.classList.add("d-none");
                    sectLog.classList.add("d-none");
                    sectKont.classList.add("d-none");

                    eingeloggterBenutzer = loginName.value;

                    console.log(eingeloggterBenutzer);
                    console.log("Anmeldung erfolgreich bruh");
                    console.log(eingeloggterBenutzer);


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

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    