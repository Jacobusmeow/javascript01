//alert("hello world");
let nachricht = "hallo welt";
//alert(nachricht);
nachricht = "neuer Text";
//alert(nachricht);
console.log(nachricht)
//farbe definieren
const linkColor ="#ff0000";
//varibalename darf nicht mit einer zahl beginnen, aber enthalten, typisch auf englisch, keine bindestriche. let als einleitung für eine variable muss nur beim ersten mal angeben werden.
let eine_variable = "testx";
console.log("Variable: eine_variable: ", eine_variable);
//zeichen-datentyp
let highScore = 75994;
console.log("Highscore ist: ", highScore / 20);
let meineNachricht = "test1";
console.log(meineNachricht);
meineNachricht = "test2"
console.log(meineNachricht);
meineNachricht = `Ein mehr
und 
ein 
ganz 
langer Textund aus`;
//für zeilenumbrüche braucht man das einfach Anführungszeichen 
console.log(meineNachricht);
let fullName = "Jeffrey `the Dude`Lebowsky";
console.log(fullName); 
let isOver18 = true;
console.log("über18?", isOver18);
let age = 17;
console.log("age über 18", age > 18);
//mehrere Datentypen zusammenfassen
let zahlenliste = [2, 11, 24, 33];
console.log(zahlenliste);
let namensListe = [ "Jane", "John", "Jacob"];
console.log(namensListe[0]);
//länge ausgeben
console.log(namensListe.length);
console.log("Anzahl der Namen: ", namensListe.length);
//datentyp objekt, darin können mehrere variablen gespeichert werden
let Benutzer = {
    vorname: "Jane",
    nachname: "Doe",
    alter: 28
};
console.log("Benutzer: ", Benutzer);
console.log("Benutzer Alter: ", Benutzer.alter);
//liste erweitern:
Benutzer.bestzeit = 200;
Benutzer["bestzeit ever"] = 100; 
console.log(Benutzer);
//neuer Befehl promt eröffent ein Dialogfenster
// let alter = prompt("wie alt bist du?");
// console.log("Du bist", alter, "Jahre alt");
// //überprüfung der eingabe, ob über/unter 18 ergebnis true oder false
// console.log("über 18?", alter > 18);
// //bedingung erstellen - if ist ein sehr wichtiges sytnax-objekt
// if (alter > 18) {
//     console.log("du darfst hinein");
// } else {
//     console.log("noch nicht 18...");
// }
//schleife zur wiederholung bestimmter ..? nach gängigen regeln nennt man die "i" i++ fügt einen hinzu <=10 schleife läuft bis 10! und nicht nur bis 9
for (let i=0; i<=10; i++) {
console.log("Wert von i:", i);
}
//jetzt lernen wir was eine funktion ist. sammeln von funktionen die man immer wieder mal braucht
function showAge(birthYear){
    //rechnung einbauen - neue variable erzeugen
    let age = 2018 - birthYear;
    console.log("Du bist ", age, "Jahre alt");
}
//funktion aufrufen 
showAge(1964);
showAge(1991);
showAge(1999);
showAge(2017);
//noch eine funktion - zurück zu der stelle wo ausgegeben worden ist
function calcAge(birthYear) {
    return 2018 - birthYear;
}
console.log("Du bist", calcAge(1999), "Jahre");
console.log("und du", calcAge(1991), ".");
