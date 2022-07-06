//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!

//import axios, {AxiosResponse, AxiosError} from 'axios';

//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!                 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    

//Deklaration Forms

let formRegistrieren: HTMLFormElement;
let formLogin: HTMLFormElement;

//Deklaration Variablen
//Registrieren
let regVorname: HTMLInputElement;
let regNachname: HTMLInputElement;
let regEmail: HTMLInputElement;
let regPasswort: HTMLInputElement;
//Login
let logName: HTMLInputElement;
let logPasswort: HTMLInputElement;



document.addEventListener("DOMContentLoaded",()=>{

    //Initialisierung Forms
    formRegistrieren = document.querySelector("#formRegistrieren");
    formLogin = document.querySelector("#formLogin");
    //Initialisierung Variablen

    //Registrierung
    regVorname = document.querySelector("#formRegistrieren [name='regVorname']");
    regNachname = document.querySelector("#formRegistrieren [name='regNachname']");
    regEmail = document.querySelector("#formRegistrieren [name='regE-mail']");
    regPasswort = document.querySelector("#formRegistrieren [name='regPasswort']");
    document.querySelector("#formRegistrieren").addEventListener("submit",benutzerHinzufügen);

});


//Funktionen
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
                  
                  //später Display einstellungen
              }).catch((error: AxiosError)=>{
                  
              });
          }

          function benutzerLoeschen(event: Event){

          }
 ///
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    