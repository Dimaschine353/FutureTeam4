//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!

//import axios, {AxiosResponse, AxiosError} from 'axios';

//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!                 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    

//Deklaration Forms
let feedbackReg:HTMLElement;
let formRegistrieren: HTMLFormElement;
let formLogin: HTMLFormElement;

//Deklaration Variablen

//Registrieren
let regVorname: HTMLInputElement;
let regNachname: HTMLInputElement;
let regEmail: HTMLInputElement;
let regPasswort: HTMLInputElement;
//Login

let loginName: HTMLInputElement;
let loginPasswort: HTMLInputElement;


document.addEventListener("DOMContentLoaded",()=>{

    //Initialisierung Forms
    feedbackReg = document.querySelector("#feedbackRegistrieren");
    formRegistrieren = document.querySelector("#formRegistrieren");
    formLogin = document.querySelector("#formLogin");
    //Initialisierung Variablen

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
                    console.log("Anmeldung erfolgreich bruh");
                    formLogin.reset();

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

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    