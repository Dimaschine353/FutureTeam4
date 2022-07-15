//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!

//import axios, {AxiosResponse, AxiosError} from 'axios';

//JEDES MAL VOR DEM TEST AUSKOMMENTIEREN !!!!!!!!!!!!!!                 
















































































//Deklaration Sections






let sectStart: HTMLElement;
let sectProf: HTMLElement;
let sectProfA: HTMLHtmlElement
let sectDet: HTMLElement;
let sectDetSantoku: HTMLElement;
let sectDetSujihiki: HTMLElement;
let sectUeber: HTMLElement;
let sectServ: HTMLElement;
let sectWar: HTMLElement;
let sectCheck: HTMLElement;
let sectReg: HTMLElement;
let sectLog: HTMLElement;
let sectKont: HTMLElement;
let sectAGB: HTMLElement;
let sectDS: HTMLElement;
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
let footKont: HTMLElement;
let footFAQ: HTMLElement;
let footDatenschutz: HTMLElement;
//Deklaration Startseite/Landingpage
let startNakiri: HTMLElement;
let startSantoku: HTMLElement;
let startSujihinki: HTMLElement;
let startIMGFlipper: HTMLImageElement;
let startHandgefertigte: HTMLElement;
//Deklaration Forms
let feedbackReg: HTMLElement;
let feedbackProfU: HTMLElement;
let feedbackProfA: HTMLElement;
let feedbackLogin: HTMLElement;
let feedbackNachricht: HTMLElement;
let formRegistrieren: HTMLFormElement;
let formLogin: HTMLFormElement;
let formProfilDatenBearbeiten: HTMLFormElement;
let formProfilDatenBearbeitenAnbieter: HTMLElement;
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
let logoutBtn: HTMLInputElement;
let tabelleNachrichten: HTMLElement;
//Profil Anbieter
let profilVornameA: HTMLInputElement;
let profilNachnameA: HTMLInputElement;
let profilABtnB: HTMLInputElement;
let profilABtnA: HTMLInputElement;
let profilABtnL: HTMLInputElement;
let logoutBtnA: HTMLHtmlElement;
let tabelleNachrichtenAnbieter: HTMLElement;
//Login
let loginName: HTMLInputElement;
let loginPasswort: HTMLInputElement;

let zumRegistrieren: HTMLElement;
//Nachricht
let nachrichtVName: HTMLInputElement;
let nachrichtNName: HTMLInputElement;
let nachrichtEmail: HTMLInputElement;
let nachrichtBetreff: HTMLInputElement;
let nachrichtEin: HTMLInputElement;
let nachrichtBtnA: HTMLInputElement;
let nachrichtEdit: HTMLInputElement;
//Listener
document.addEventListener("DOMContentLoaded",()=>{

    //Funktionen die direkt ausgeführt werden sollen
    binIchNochDrin();
    //Initialisierung Sect
    sectStart = document.querySelector("#sectStart");
    sectProf = document.querySelector("#sectProf");
    sectProfA = document.querySelector("#sectProfA");
    sectDet = document.querySelector("#sectDet");
    sectDetSantoku = document.querySelector("#sectDetSantoku");
    sectDetSujihiki = document.querySelector("#sectDetSujihiki");
    sectUeber = document.querySelector("#sectUeber");
    sectServ = document.querySelector("#sectServ");
    sectWar = document.querySelector("#sectWar");
    sectCheck = document.querySelector("#sectCheck");
    sectReg = document.querySelector("#sectReg");
    sectLog = document.querySelector("#sectLog");
    sectKont = document.querySelector("#sectKont");
    sectAGB = document.querySelector("#sectAGB");
    sectDS = document.querySelector("#sectDS");
    sectImpr = document.querySelector("#sectImpr");
    //Startcontent Einstellung

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








    //Initialisierung Zur Detailseite
    startNakiri = document.querySelector("#startNakiri");
    startNakiri.addEventListener("click",zurDet);

    startSantoku = document.querySelector("#startSantoku");
    startSantoku.addEventListener("click", zurDetSantoku);

    startSujihinki = document.querySelector("#startSujihinki");
    startSujihinki.addEventListener("click", zurDetSujihiki);



    //Initialisierung Footer
    impressum = document.querySelector("#zumImpressum");
    impressum.addEventListener("click",zumImpr);
    footKont = document.querySelector("#footKont");
    footKont.addEventListener("click",zumKontakt);
    footFAQ = document.querySelector("#footFAQ");
    footFAQ.addEventListener("click",zumService);
    footDatenschutz = document.querySelector("#footDatenschutz");
    footDatenschutz.addEventListener("click",zumDatenschutz);
    //Initialisierung Forms
    feedbackLogin = document.querySelector("#feedbackLogin");
    feedbackReg = document.querySelector("#feedbackRegistrieren");
    feedbackProfU = document.querySelector("#feedbackProfildatenBearbeiten");
    feedbackProfA = document.querySelector("#feedbackProfildatenBearbeitenA");
    feedbackNachricht = document.querySelector("#feedbackNachricht");
    formRegistrieren = document.querySelector("#formRegistrieren");
    formLogin = document.querySelector("#formLogin");
    formProfilDatenBearbeiten = document.querySelector("#formProfildatenBearbeiten");
    formProfilDatenBearbeitenAnbieter = document.querySelector("#feedbackProfildatenBearbeitenA");
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
    //Profil User
    profilNachname = document.querySelector("#profilNachname");
    profilVorname = document.querySelector("#profilVorname");
    profilUBtnB = document.querySelector("#profilUBtnB");
    profilUBtnB.addEventListener("click",benutzerBearbeitenStart);
    profilUBtnA = document.querySelector("#profilUBtnA");
    profilUBtnA.addEventListener("click",benutzerAendern);
    logoutBtn = document.querySelector("#profilUBtnLogout");
    logoutBtn.addEventListener("click", logout);
    logoutBtnA = document.querySelector("#profilUBtnLogout");
    logoutBtnA.addEventListener("click",logout);
    profilUBtnL = document.querySelector("#profilUBtnL");
    profilUBtnL.addEventListener("click",benutzerLoeschen);
    //Profil Anbieter
    profilNachnameA = document.querySelector("#profilNachnameA");
    profilVornameA = document.querySelector("#profilVornameA");
    profilABtnB = document.querySelector("#profilABtnB");
    profilABtnB.addEventListener("click",benutzerBearbeitenStart);
    profilABtnA = document.querySelector("#profilABtnA");
    profilABtnA.addEventListener("click",benutzerAendern);
    logoutBtnA = document.querySelector("#profilABtnLogout");
    logoutBtnA.addEventListener("click", logout);
    profilABtnL = document.querySelector("#profilABtnL");
    profilABtnL.addEventListener("click",benutzerLoeschen);
    //Nachricht
    tabelleNachrichten = document.querySelector("#tabelleNachrichten")
    tabelleNachrichtenAnbieter = document.querySelector("#tabelleNachrichtenAnbieter");
    nachrichtVName = document.querySelector("#nachrichtVName");
    nachrichtNName = document.querySelector("#nachrichtNName");
    nachrichtEmail = document.querySelector("#nachrichtEmail");
    nachrichtBetreff = document.querySelector("#nachrichtBetreff");
    nachrichtEin = document.querySelector("#nachrichtEin");
    nachrichtBtnA = document.querySelector("#nachrichtBtnA");
    nachrichtBtnA.addEventListener("click",nachrichtHinzufuegen);
    nachrichtEdit = document.querySelector("#profilNachrichtBearbeiten");


    tabelleNachrichten.addEventListener("click",(event:Event)=>{
        let target: HTMLElement = event.target as HTMLElement;
        target = target.closest("button");
        if(target.matches(".delete")){
            nachrichtLoeschen(target);
        }else if(target.matches(".edit")){
            nachrichtBearbeitenStart(target);
        }else if(target.matches(".absenden")){
            nachrichtBearbeitenAbsenden(target);
        }
    });
    tabelleNachrichtenAnbieter.addEventListener("click",(event:Event)=>{
        let target: HTMLElement = event.target as HTMLElement;
        target = target.closest("button");
        if(target.matches(".delete")){
            antwortLoeschen(target);
        }else if(target.matches(".edit")){
            nachrichtBeantwortenStart(target);
        }else if(target.matches(".absenden")){
            nachrichtBeantwortenAbsenden(target);
        }
    });
    //Startseite/Landingpage
    startNakiri = document.querySelector("#startNakiri");
    startSantoku = document.querySelector("#startSantoku");
    startSujihinki = document.querySelector("#startSujihinki");
    startIMGFlipper = document.querySelector("#produktBildFlipper");
    startHandgefertigte = document.querySelector("#startHandgefertigte");
    //Startseite/Landingpage FotoFlipper
    startNakiri.addEventListener('mouseover', (event) => {
        event.preventDefault();
        startIMGFlipper.src = "/cMe/images/Messer1.png"
        startIMGFlipper.src = "/cMe/images/NakiriMusashi5Edit.jpg"
    });
    startSantoku.addEventListener('mouseover', (event) => {
        event.preventDefault();
        startIMGFlipper.src = "/cMe/images/Messer2.png"
        startIMGFlipper.src = "/cMe/images/SantokuKenshinEdit.jpg"
    });
    startSujihinki.addEventListener('mouseover', (event) => {
        event.preventDefault();
        startIMGFlipper.src = "/cMe/images/Messer1.png"
        startIMGFlipper.src = "/cMe/images/SujihikiMasakoEdit.jpg"
    });
    startHandgefertigte.addEventListener('mouseover', () => {
        startIMGFlipper.src = "/cMe/images/MesserGruppenPhotoEditFinal.png"
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

        }).catch((err: AxiosError)=>{
        if(err!==null){
            feedbackProfU.innerText="Löschen nicht möglich."
            setTimeout(feedbackProfULoeschen,2000);
        }
    });



}
function benutzerBearbeitenStart(event: Event){
    event.preventDefault();
        profilVorname.removeAttribute("readonly");
        profilNachname.removeAttribute("readonly");
        profilVornameA.removeAttribute("readonly");
        profilNachnameA.removeAttribute("readonly");
        profilUBtnA.classList.remove("d-none");
        profilUBtnB.classList.add("d-none");
        profilABtnA.classList.remove("d-none");
        profilABtnB.classList.add("d-none");



}
function benutzerAendern(event:Event){
    event.preventDefault();
    if(eingeloggterBenutzer=="anbieter@boss.com"){
        const vName = profilVornameA.value
        const nName = profilNachnameA.value;
        const email = eingeloggterBenutzer;
        axios.put("/benutzer/"+email,{
            vName: vName,
            nName: nName,
            email: email
        }).then((res:AxiosResponse)=>{
            profilNachnameA.setAttribute("readonly","true");
            profilVornameA.setAttribute("readonly","true");
            feedbackProfA.innerText = "Nutzerdaten erfolgreich geupdated.";
            profilUBtnB.classList.remove("d-none");
            profilUBtnA.classList.add("d-none");
            setTimeout(feedbackProfALoeschen,2000);


        });

    }else{
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
            setTimeout(feedbackProfULoeschen,2000);


        });
    }


}
function benutzerAuslesen(eingeloggterBenutzer:String){

    //const email = eingeloggterBenutzer;
    axios.get("/benutzer/"+eingeloggterBenutzer)
        .then((res:AxiosResponse)=>{

                const benutzer = res.data.benutzer;
                profilVornameA.value = benutzer.vName;
                profilNachnameA.value = benutzer.nName;
                profilVorname.value = benutzer.vName;
                profilNachname.value = benutzer.nName;
                nachrichtVName.value = benutzer.vName;
                nachrichtNName.value = benutzer.nName;
//

        });
}
//Funktionen Nachrichten
function renderNachrichtenListe(){
    //console.log("bin in der renderNachrichten");
    const email: string = eingeloggterBenutzer.toString();
    //console.log(email+" in der renderNachrichten")
    tabelleNachrichten.innerHTML = "";
    axios.get("/nachricht/"+email)
        .then((res: AxiosResponse)=>{
            for(const n of res.data){
                //console.log(res.data);
                const tr: HTMLElement = document.createElement("tr");
                tr.innerHTML =`
                    <td>${n.betreff}</td>
                    <td>${n.nachricht}</td>
                <td>
                <button class="btn btn-primary delete" data-nId="${n.nId}">Löschen</button>
                <button class="btn btn-primary edit" data-nachricht="${n.nachricht}">Bearbeiten</button>
                <button class="btn btn-primary absenden d-none" data-nId="${n.nId}" >Absenden</button>
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

    if (vName == null || vName.trim() == "" || nName == null || nName.trim() == "" || email == null || email.trim() == "" || betreff == null || betreff.trim() == "" || nachricht == null || nachricht.trim() == ""){
        alert("Die Felder dürfen nicht leer sein oder nur Leertasten enthalten!");
    }else{
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
            setTimeout(feedbackNachrichtLoeschen,2000);

        }).catch((err: AxiosError)=>{
            if(err!==null){
                feedbackNachricht.innerText="Nachricht kann nicht gesendet werden.";
                setTimeout(feedbackNachrichtLoeschen,2000);

            }
        });
    }


}
function nachrichtLoeschen(target:HTMLElement){
    //const email: string = eingeloggterBenutzer.toString();
    //const betreff: string = target.dataset.betreff;
    const nId = target.dataset.nid;
    axios.delete("/nachricht/"+nId)
        .then((res:AxiosResponse)=>{
            renderNachrichtenListe();
        }).catch((err:AxiosError)=>{

        if(err!==null){
            feedbackProfU.innerText = "Löschen nicht möglich."
            setTimeout(feedbackNachrichtLoeschen,2000);
        }

    });
}
function nachrichtBearbeitenStart(target: HTMLElement){
    const nachricht: string = target.dataset.nachricht;

    nachrichtEdit.classList.remove("d-none");
    nachrichtEdit.value = nachricht.toString();
    target.nextElementSibling.classList.remove("d-none");

}
function nachrichtBearbeitenAbsenden(target: HTMLElement){
    nachrichtEdit.classList.add("d-none");
    const nId = target.dataset.nid;
    const nachricht = nachrichtEdit.value;


    //console.log(nId+" nId");

    axios.put("/nachricht/" + nId,
        {
            nachricht: nachricht
        })
        .then((res: AxiosResponse)=>{
            console.log("nachricht erfolgreich bearbeitet");
            renderNachrichtenListe();
        }).catch((err: AxiosResponse) =>{
        console.log("error die nId stimmt nicht überein");
    })


}
//Funktionen Anbieter
function renderAlleleleleNachrichtern(){
    const email: string =eingeloggterBenutzer.toString();
    tabelleNachrichtenAnbieter.innerHTML="";
    axios.get("/nachrichten/"+email)
        .then((res: AxiosResponse)=>{
            for(const n of res.data){
                const tr: HTMLElement = document.createElement("tr");
                tr.innerHTML =`
                    <td>${n.betreff}</td>
                    <td>${n.nachricht}</td>
                <td>
                <button class="btn btn-primary delete" data-nId="${n.nId}">Löschen</button>
                <button class="btn btn-primary edit" data-nachricht="${n.nachricht}">Bearbeiten</button>
                <button class="btn btn-primary absenden d-none" data-nId="${n.nId}" >Absenden</button>
                </td>
                `;
             tabelleNachrichtenAnbieter.append(tr);

            }
        });

}
function antwortLoeschen(target:HTMLElement){

}
function nachrichtBeantwortenStart(target:HTMLElement){

}
function nachrichtBeantwortenAbsenden(target:HTMLElement){

}
//Login 'n out Funktionen
function login(event:Event){
    event.preventDefault();
    const data: FormData = new FormData(formLogin);
    eingeloggterBenutzer = data.get("loginName").toString();


    axios.post("/login", {
        loginName: data.get("loginName"),
        loginPasswort: data.get("loginPasswort")

    })
        .then((res: AxiosResponse) => {
            formLogin.reset();
            if(eingeloggterBenutzer=="anbieter@boss.com"){
                sectLog.classList.add("d-none");
                sectProfA.classList.remove("d-none");
                feedbackLogin.innerText = "Der Benutzer wurde erfolgreich eingeloggt."
                setTimeout(feedbackLoginLoeschen,2000);
                //benutzerAuslesen(eingeloggterBenutzer);
                renderAlleleleleNachrichtern();
            }else{
                sectLog.classList.add("d-none");
                sectProf.classList.remove("d-none");
                feedbackLogin.innerText = "Der Benutzer wurde erfolgreich eingeloggt."
                setTimeout(feedbackLoginLoeschen,2000);
                //console.log("Anmeldung erfolgreich bruh");

                //benutzerAuslesen(eingeloggterBenutzer);
                renderNachrichtenListe();
            }



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

    //readonlyNachricht
    if (eingeloggterBenutzer !== ""){
        nachrichtEmail.value = eingeloggterBenutzer.valueOf();

        nachrichtNName.setAttribute("readonly","true");
        nachrichtVName.setAttribute("readonly", "true");
        nachrichtEmail.setAttribute("readonly", "true");

    }else{
        console.log("fehler oder so diggi");
    }



}
function logout(event:Event){
    event.preventDefault();
    axios.post("/logout")
        .then(()=>{
            //le.log("habe eine response vom Server erhalten");
            eingeloggterBenutzer="";
            navigieren();
            sectStart.classList.remove("d-none");
            alert("Sie wurden ausgeloggt :o");
            formKontakt.reset();
            nachrichtNName.removeAttribute("readonly");
            nachrichtVName.removeAttribute("readonly");
            nachrichtEmail.removeAttribute("readonly");


        });
}
//Timeout funktionen
function feedbackProfULoeschen(){feedbackProfU.innerText="";}
function feedbackProfALoeschen(){feedbackProfA.innerText="";}
function feedbackRegLoeschen(){feedbackReg.innerText="";}
function feedbackLoginLoeschen(){feedbackLogin.innerText="";}
function feedbackNachrichtLoeschen(){feedbackNachricht.innerText="";}
//Navleisten Funktionen
function zurueckNachhause(event:Event){
    event.preventDefault();
    navigieren();
    sectStart.classList.remove("d-none");

}
function zumLogin (event:Event){
    event.preventDefault();
    if(eingeloggterBenutzer==""){
        navigieren();
        sectLog.classList.remove("d-none");

    }else if(eingeloggterBenutzer=="anbieter@boss.com"){
        navigieren();
        benutzerAuslesen(eingeloggterBenutzer);
        renderAlleleleleNachrichtern();
        sectProfA.classList.remove("d-none");
    }else{
        navigieren();
        benutzerAuslesen(eingeloggterBenutzer);
        renderNachrichtenListe();
        sectProf.classList.remove("d-none");

    }


}
function zumWarenkorb (event:Event){
    event.preventDefault();
    navigieren();
    sectWar.classList.remove("d-none");

}
function zumService (event:Event){
    event.preventDefault();
    navigieren();
    sectServ.classList.remove("d-none");

}
function zuUeber(event:Event){
    event.preventDefault();
    navigieren();
    sectUeber.classList.remove("d-none");


}
function zumKontakt(event:Event){
    event.preventDefault();
    navigieren();
    sectKont.classList.remove("d-none");

}
function zumReg(event:Event){
    event.preventDefault();
    navigieren()
    sectReg.classList.remove("d-none");


}
function zumImpr(event:Event){
    event.preventDefault();
    navigieren();
    sectImpr.classList.remove("d-none");

}
function navigieren(){
    sectStart.classList.add("d-none");
    sectProf.classList.add("d-none");
    sectProfA.classList.add("d-none");
    sectDet.classList.add("d-none");
    sectDetSantoku.classList.add("d-none");
    sectDetSujihiki.classList.add("d-none");
    sectUeber.classList.add("d-none");
    sectServ.classList.add("d-none");
    sectWar.classList.add("d-none");
    sectCheck.classList.add("d-none");
    sectReg.classList.add("d-none");
    sectLog.classList.add("d-none");
    sectKont.classList.add("d-none");
    sectAGB.classList.add("d-none");
    sectDS.classList.add("d-none");
    sectImpr.classList.add("d-none");
}
function zurDet(event:Event){
    event.preventDefault();
    navigieren();
    sectDet.classList.remove("d-none");
    window.scrollTo(0, 0);

}
function zurDetSantoku(event: Event){
    event.preventDefault();
    navigieren();
    sectDetSantoku.classList.remove("d-none");
    window.scrollTo(0, 0);
}
function zurDetSujihiki(event: Event){
    event.preventDefault();
    navigieren();
    sectDetSujihiki.classList.remove("d-none");
    window.scrollTo(0, 0);
}
function zumDatenschutz(event:Event){
    event.preventDefault();
    navigieren()
    sectDS.classList.remove("d-none");
}
function binIchNochDrin(){
    axios.get("/binIchNochDrin?")
        .then((res:AxiosResponse)=>{
            //const benutzer = res.data;
            eingeloggterBenutzer = res.data.email;
            //console.log(res.data);
            //console.log("eingeloggter Benutzer: "+eingeloggterBenutzer+" im Reload der binIchDrin")
        });
}

















































































































                    
                    