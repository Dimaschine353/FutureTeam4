//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!

//import axios, {AxiosResponse, AxiosError} from 'axios';

//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!                 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
//Deklaration Sections
let sectStart: HTMLElement;
let sectProf: HTMLElement;
let sectDet: HTMLElement;
let sectUeber: HTMLElement;
let sectServ: HTMLElement;
let sectWar: HTMLElement;
let sectCheck: HTMLElement;
let sectReg: HTMLElement;
let sectLog: HTMLElement;
let sectKont: HTMLElement;
let sectImpr: HTMLElement;
//Deklaration Nav Leiste
let navHome: HTMLElement;
let navLogin: HTMLElement;
let navWarenkorb: HTMLElement;
let navUeber: HTMLElement;
let navService: HTMLElement;
let navKontakt: HTMLElement;
//Deklaration Footer
let impressum: HTMLElement;
//Deklaration Startseite/Landingpage
let startNakiri: HTMLElement;
let startSantoku: HTMLElement;
let startSujihinki: HTMLElement;
let startIMGFlipper: HTMLImageElement;
//Deklaration Forms
let feedbackReg: HTMLElement;
let feedbackProfU: HTMLElement;
let feedbackLogin: HTMLElement;
let feedbackNachricht: HTMLElement;
let formRegistrieren: HTMLFormElement;
let formLogin: HTMLFormElement;
let formProfilDatenBearbeiten: HTMLFormElement;
let formKontakt: HTMLFormElement;
//Deklaration globale Variablen
let eingeloggterBenutzer:String;
//Registrieren
let regVorname: HTMLInputElement;
let regNachname: HTMLInputElement;
let regEmail: HTMLInputElement;
let regPasswort: HTMLInputElement;
let zumLoginBtn: HTMLElement;
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
let zumRegistrieren: HTMLElement;
//Nachricht
let nachrichtVName: HTMLInputElement;
let nachrichtNName: HTMLInputElement;
let nachrichtEmail: HTMLInputElement;
let nachrichtBetreff: HTMLInputElement;
let nachrichtEin: HTMLInputElement;
let nachrichtBtnA: HTMLInputElement;
let tabelleNachrichten: HTMLElement;
//Listener
document.addEventListener("DOMContentLoaded",()=>{

    //Funktionen die direkt ausgeführt werden sollen

    //Initialisierung Sect
    sectStart = document.querySelector("#sectStart");
    sectProf = document.querySelector("#sectProf");
    sectDet = document.querySelector("#sectDet");
    sectUeber = document.querySelector("#sectUeber");
    sectServ = document.querySelector("#sectServ");
    sectWar = document.querySelector("#sectWar");
    sectCheck = document.querySelector("#sectCheck");
    sectReg = document.querySelector("#sectReg");
    sectLog = document.querySelector("#sectLog");
    sectKont = document.querySelector("#sectKont");
    sectImpr = document.querySelector("#sectImpr")
    //Startcontent Einstellung
    sectProf.classList.add("d-none");
    //sectDet.classList.add("d-none");
    sectWar.classList.add("d-none");
    sectCheck.classList.add("d-none");
    sectReg.classList.add("d-none");
    sectLog.classList.add("d-none");
    sectUeber.classList.add("d-none");
    sectKont.classList.add("d-none");
    sectServ.classList.add("d-none");
    sectImpr.classList.add("d-none");
    //Initialisierung Nav Leiste
    navHome = document.querySelector("#navHome");
    navHome.addEventListener("click",zurueckNachhause);
    navLogin = document.querySelector("#navLogin");
    navLogin.addEventListener("click",zumLogin);
    navWarenkorb = document.querySelector("#navWarenkorb");
    navWarenkorb.addEventListener("click",zumWarenkorb);
    navService = document.querySelector("#navService");
    navService.addEventListener("click",zumService);
    navUeber = document.querySelector("#navUeber");
    navUeber.addEventListener("click",zuUeber);
    navKontakt = document.querySelector("#navKontakt");
    navKontakt.addEventListener("click",zumKontakt);
    //Initialisierung Footer
    impressum = document.querySelector("#zumImpressum");
    impressum.addEventListener("click",zumImpr);
    //Initialisierung Forms
    feedbackLogin = document.querySelector("#feedbackLogin");
    feedbackReg = document.querySelector("#feedbackRegistrieren");
    feedbackProfU = document.querySelector("#feedbackProfildatenBearbeiten");
    feedbackNachricht = document.querySelector("#feedbackNachricht");
    formRegistrieren = document.querySelector("#formRegistrieren");
    formLogin = document.querySelector("#formLogin");
    formProfilDatenBearbeiten = document.querySelector("#formProfildatenBearbeiten");
    formKontakt = document.querySelector("#formKontakt");
    //Initialisierung globaler Variablen
    eingeloggterBenutzer = "";
    //Registrierung
    regVorname = document.querySelector("#formRegistrieren [name='regVorname']");
    regNachname = document.querySelector("#formRegistrieren [name='regNachname']");
    regEmail = document.querySelector("#formRegistrieren [name='regE-mail']");
    regPasswort = document.querySelector("#formRegistrieren [name='regPasswort']");
    zumLoginBtn = document.querySelector("#zumLogIn");
    zumLoginBtn.addEventListener("click",zumLogin);
    document.querySelector("#formRegistrieren").addEventListener("submit",benutzerHinzufuegen);
    //Login Feld
    loginName = document.querySelector("#formLogin [name='loginName']");
    loginPasswort = document.querySelector("#formLogin [name='loginPasswort']");
    zumRegistrieren = document.querySelector("#zumRegistrieren");
    zumRegistrieren.addEventListener("click",zumReg);
    formLogin.addEventListener("submit", login);
    //Profil
    profilNachname = document.querySelector("#profilNachname");
    profilVorname = document.querySelector("#profilVorname");
    profilUBtnB = document.querySelector("#profilUBtnB");
    profilUBtnB.addEventListener("click",benutzerBearbeitenStart);
    profilUBtnA = document.querySelector("#profilUBtnA");
    profilUBtnA.addEventListener("click",benutzerAendern);
    logoutBtn = document.querySelector("#profilUBtnLogout");
    logoutBtn.addEventListener("click", logout);
    profilUBtnL = document.querySelector("#profilUBtnL");
    profilUBtnL.addEventListener("click",benutzerLoeschen);
    //Nachricht
    tabelleNachrichten = document.querySelector("#tabelleNachrichten");
    nachrichtVName = document.querySelector("#nachrichtVName");
    nachrichtNName = document.querySelector("#nachrichtNName");
    nachrichtEmail = document.querySelector("#nachrichtEmail");
    nachrichtBetreff = document.querySelector("#nachrichtBetreff");
    nachrichtEin = document.querySelector("#nachrichtEin");
    nachrichtBtnA = document.querySelector("#nachrichtBtnA");
    nachrichtBtnA.addEventListener("click",nachrichtHinzufuegen);
    nachrichtBtnA.addEventListener("click", nachrichtHinzufuegen);
    tabelleNachrichten.addEventListener("click",(event:Event)=>{
        let target: HTMLElement = event.target as HTMLElement;
        target = target.closest("button");
        if(target.matches(".delete")){
            nachrichtLoeschen(target);
        }
    });
    //Startseite/Landingpage
    startNakiri = document.querySelector("#startNakiri");
    startSantoku = document.querySelector("#startSantoku");
    startSujihinki = document.querySelector("#startSujihinki");
    startIMGFlipper = document.querySelector("#produktBildFlipper");
    //Startseite/Landingpage FotoFlipper
    startNakiri.addEventListener('mouseover', (event) => {
        event.preventDefault();
        startIMGFlipper.src = "/cMe/images/Messer1.png"
    });
    startSantoku.addEventListener('mouseover', (event) => {
        event.preventDefault();
        startIMGFlipper.src = "/cMe/images/Messer2.png"
    });
    startSujihinki.addEventListener('mouseover', (event) => {
        event.preventDefault();
        startIMGFlipper.src = "/cMe/images/Messer1.png"
    });
});
//Funktionen Benutzer
function benutzerHinzufuegen(event:Event){
    event.preventDefault();
    const vName: string = regVorname.value;
    const nName: string = regNachname.value;
    const email: string = regEmail.value;
    const passwort: string = regPasswort.value;
    axios.post("/benutzer", {
                  vName: vName,
                  nName: nName,
                  email: email,
                  passwort: passwort
              }).then((res: AxiosResponse)=>{
                      formRegistrieren.reset();
                      sectReg.classList.add("d-none");
                      sectLog.classList.remove("d-none");
                      feedbackLogin.innerText = "Benutzer erfolgreich registriert. Bitte loggen Sie sich ein.";
                      setTimeout(feedbackLoginLoeschen,3000);

              }).catch((err: AxiosError)=>{
                  if(err!==null){
                      feedbackReg.innerText = "Die e-mail ist bereits vergeben.";
                      setTimeout(feedbackRegLoeschen,2000);
                  }

              });
          }
function benutzerLoeschen(event:Event){
    event.preventDefault();
    axios.delete("/benutzer/"+eingeloggterBenutzer)
        .then((res: AxiosResponse)=>{
            alert("Benutzer "+eingeloggterBenutzer+" wurde gelöscht.")
            eingeloggterBenutzer = "";
            navigieren();
            sectStart.classList.remove("d-none");
            /*
            sectDet.classList.add("d-none");
            sectUeber.classList.add("d-none");
            sectServ.classList.add("d-none");
            sectWar.classList.add("d-none");
            sectCheck.classList.add("d-none");
            sectCheck.classList.add("d-none");
            sectReg.classList.add("d-none");
            sectLog.classList.add("d-none");
            sectProf.classList.add("d-none");
            sectImpr.classList.add("d-none");
            */
        }).catch((err: AxiosError)=>{
            if(err!==null){
                feedbackProfU.innerText="Löschen nicht möglich."
                setTimeout(feedbackProfULoeschen,2000);
            }
    });



}
function benutzerBearbeitenStart(event: Event){
event.preventDefault();

    //formProfilDatenBearbeiten.classList.remove("d-none");
    profilVorname.removeAttribute("readonly");
    profilNachname.removeAttribute("readonly");
    profilUBtnA.classList.remove("d-none");
    profilUBtnB.classList.add("d-none");

}
function benutzerAendern(event:Event){
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
        profilUBtnB.classList.remove("d-none");
        profilUBtnA.classList.add("d-none");
        setTimeout(feedbackProfULoeschen,1000);


    })

}
function benutzerAuslesen(eingeloggterBenutzer:String){

    //const email = eingeloggterBenutzer;
    axios.get("/benutzer/"+eingeloggterBenutzer)
        .then((res:AxiosResponse)=>{
            const benutzer = res.data.benutzer;
            profilVorname.value = benutzer.vName;
            profilNachname.value = benutzer.nName;
        });
}
//Funktionen Nachrichten
function renderNachrichtenListe(){
    console.log("bin in der renderNachrichten");
    const email: string = eingeloggterBenutzer.toString();
    console.log(email+" in der renderNachrichten")
    tabelleNachrichten.innerHTML = "";
    axios.get("/nachricht/"+email)
        .then((res: AxiosResponse)=>{
            for(const n of res.data){
                console.log(res.data);
                const tr: HTMLElement = document.createElement("tr");
                tr.innerHTML =`
                    <td>${n.betreff}</td>
                    <td>${n.nachricht}</td>
                <td>
                <button class="btn btn-primary delete" data-betreff="${n.betreff}">Löschen</button>
                </td>
                `;
                tabelleNachrichten.append(tr);
            }
        });
}
function nachrichtHinzufuegen(event:Event){
    event.preventDefault();
    const vName: string = nachrichtVName.value;
    const nName: string = nachrichtNName.value;
    const email: string = nachrichtEmail.value;
    const betreff: string = nachrichtBetreff.value;
    const nachricht: string = nachrichtEin.value.toString();
    axios.post("/nachricht",{
        vName: vName,
        nName: nName,
        email: email,
        betreff: betreff,
        nachricht: nachricht
    }).then((res:AxiosResponse)=>{
        //Forms einfügen um diese resetten zu können??
        formKontakt.reset();
            feedbackNachricht.innerText="Ihre Nachricht wurde gesendet.";
            setTimeout(feedbackNachrichtLoeschen,1000);

    }).catch((err: AxiosError)=>{
        if(err!==null){
            feedbackNachricht.innerText="Nachricht kann nicht gesendet werden.";
            setTimeout(feedbackNachrichtLoeschen,1000);

        }
    });
}
function nachrichtLoeschen(target:HTMLElement){
    const email: string = eingeloggterBenutzer.toString();
    const betreff: string = target.dataset.betreff;
    axios.delete("/nachricht/"+betreff+"/"+email)
        .then((res:AxiosResponse)=>{
          renderNachrichtenListe();
        }).catch((err:AxiosError)=>{

            if(err!==null){
                feedbackProfU.innerText = "Löschen nicht möglich."
                setTimeout(feedbackNachrichtLoeschen,2000);
            }

    });
}
//Login 'n out Funkntionen
function login(event:Event){
            event.preventDefault();
            const data: FormData = new FormData(formLogin);
                axios.post("/login", {
                loginName: data.get("loginName"),
                loginPasswort: data.get("loginPasswort")
            })
                .then((res: AxiosResponse) => {

                        eingeloggterBenutzer = data.get("loginName").toString();
                        formLogin.reset();
                        sectLog.classList.add("d-none");
                        sectProf.classList.remove("d-none");
                        feedbackLogin.innerText = "Der Benutzer wurde erfolgreich eingeloggt."
                        setTimeout(feedbackLoginLoeschen,2000);
                        console.log("Anmeldung erfolgreich bruh");
                        benutzerAuslesen(eingeloggterBenutzer);
                        renderNachrichtenListe();


                })
                .catch((err: AxiosError)=>{
                    if(err.response.status == 404){
                        feedbackLogin.innerText = "E-Mail, oder Passwort falsch."
                        setTimeout(feedbackLoginLoeschen,2000);
                        console.log("Anmeldung nicht erfolgreich if vom .catch");
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
            eingeloggterBenutzer="";
            navigieren();
            sectStart.classList.remove("d-none");
            /*
            sectProf.classList.add("d-none");
            sectDet.classList.add("d-none");
            sectUeber.classList.add("d-none");
            sectServ.classList.add("d-none");
            sectWar.classList.add("d-none");
            sectCheck.classList.add("d-none");
            sectReg.classList.add("d-none");
            sectLog.classList.add("d-none");
            sectKont.classList.add("d-none");
            sectImpr.classList.add("d-none");
            */
            alert("Sie wurden ausgeloggt :o")

        });
}
//Timeout funktionen
function feedbackProfULoeschen(){feedbackProfU.innerText="";}
function feedbackRegLoeschen(){feedbackReg.innerText="";}
function feedbackLoginLoeschen(){feedbackLogin.innerText="";}
function feedbackNachrichtLoeschen(){feedbackNachricht.innerText="";}
//Navleisten Funktionen
function zurueckNachhause(event:Event){
    event.preventDefault();
    navigieren();
    sectStart.classList.remove("d-none");
    /*
    sectProf.classList.add("d-none");
    sectDet.classList.add("d-none");
    sectUeber.classList.add("d-none");
    sectServ.classList.add("d-none");
    sectWar.classList.add("d-none");
    sectCheck.classList.add("d-none");
    sectReg.classList.add("d-none");
    sectLog.classList.add("d-none");
    sectKont.classList.add("d-none");
    sectImpr.classList.add("d-none");
    */
}
function zumLogin (event:Event){
    event.preventDefault();
    if(eingeloggterBenutzer!==""){
        //benutzerAuslesen(eingeloggterBenutzer);
        navigieren();
        renderNachrichtenListe();
        sectProf.classList.remove("d-none");
        /*
        sectStart.classList.add("d-none");
        sectLog.classList.add("d-none");
        sectDet.classList.add("d-none");
        sectUeber.classList.add("d-none");
        sectWar.classList.add("d-none");
        sectCheck.classList.add("d-none");
        sectReg.classList.add("d-none");
        sectKont.classList.add("d-none");
        sectImpr.classList.add("d-none");
        */
    }else{
        navigieren();
        sectLog.classList.remove("d-none");
        /*
        sectStart.classList.add("d-none");
        sectProf.classList.add("d-none");
        sectDet.classList.add("d-none");
        sectUeber.classList.add("d-none");
        sectWar.classList.add("d-none");
        sectCheck.classList.add("d-none");
        sectReg.classList.add("d-none");
        sectKont.classList.add("d-none");
        sectImpr.classList.add("d-none");
        */
    }


}
function zumWarenkorb (event:Event){
    event.preventDefault();
    navigieren();
    sectWar.classList.remove("d-none");
    /*
    sectProf.classList.add("d-none");
    sectDet.classList.add("d-none");
    sectUeber.classList.add("d-none");
    sectCheck.classList.add("d-none");
    sectReg.classList.add("d-none");
    sectLog.classList.add("d-none");
    sectKont.classList.add("d-none");
    sectStart.classList.add("d-none");
    sectImpr.classList.add("d-none");
    */
    }
function zumService (event:Event){
    event.preventDefault();
    navigieren();
    sectServ.classList.remove("d-none");
        /*
        sectProf.classList.add("d-none");
        sectDet.classList.add("d-none");
        sectUeber.classList.add("d-none");
        sectWar.classList.add("d-none");
        sectCheck.classList.add("d-none");
        sectReg.classList.add("d-none");
        sectLog.classList.add("d-none");
        sectKont.classList.add("d-none");
        sectStart.classList.add("d-none");
        sectImpr.classList.add("d-none");
        */
    }
function zuUeber(event:Event){
    event.preventDefault();
    navigieren();
    sectUeber.classList.remove("d-none");
    /*
        sectProf.classList.add("d-none");
        sectDet.classList.add("d-none");
        sectServ.classList.add("d-none");
        sectWar.classList.add("d-none");
        sectCheck.classList.add("d-none");
        sectReg.classList.add("d-none");
        sectLog.classList.add("d-none");
        sectKont.classList.add("d-none");
        sectStart.classList.add("d-none");
        sectImpr.classList.add("d-none");
        */

    }
function zumKontakt(event:Event){
    event.preventDefault();
    navigieren();
    sectKont.classList.remove("d-none");
        /*
        sectProf.classList.add("d-none");
        sectDet.classList.add("d-none");
        sectUeber.classList.add("d-none");
        sectServ.classList.add("d-none");
        sectWar.classList.add("d-none");
        sectCheck.classList.add("d-none");
        sectReg.classList.add("d-none");
        sectLog.classList.add("d-none");
        sectStart.classList.add("d-none");
        sectImpr.classList.add("d-none");
        */
    }
function zumReg(event:Event){
    event.preventDefault();
    navigieren()
    sectReg.classList.remove("d-none");
    /*
    sectProf.classList.add("d-none");
    sectDet.classList.add("d-none");
    sectUeber.classList.add("d-none");
    sectServ.classList.add("d-none");
    sectWar.classList.add("d-none");
    sectCheck.classList.add("d-none");
    sectLog.classList.add("d-none");
    sectStart.classList.add("d-none");
    sectImpr.classList.add("d-none");
    */

}
function zumImpr(event:Event){
    event.preventDefault();

    sectImpr.classList.remove("d-none");
    /*
    sectProf.classList.add("d-none");
    sectDet.classList.add("d-none");
    sectUeber.classList.add("d-none");
    sectServ.classList.add("d-none");
    sectWar.classList.add("d-none");
    sectCheck.classList.add("d-none");
    sectLog.classList.add("d-none");
    sectStart.classList.add("d-none");
    */
}
function navigieren(){
    sectStart.classList.add("d-none");
    sectProf.classList.add("d-none");
    sectDet.classList.add("d-none");
    sectUeber.classList.add("d-none");
    sectServ.classList.add("d-none");
    sectWar.classList.add("d-none");
    sectCheck.classList.add("d-none");
    sectReg.classList.add("d-none");
    sectLog.classList.add("d-none");
    sectKont.classList.add("d-none");
    sectImpr.classList.add("d-none");
}
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    