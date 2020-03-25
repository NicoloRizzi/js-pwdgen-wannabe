// LEGENDA DELLE VARIABILI
var userName;
var userSurname;
var userColor;
var userPwd;

// 1) CHIEDERE ALL'UTENTE IL SUO NOME E MEMORIZZARLO

userName = prompt('Inserisci il tuo nome');
//console.log(userName);

// 2) CHIEDERE IL SUO COGNOME E MEMORIZZARLO

userSurname = prompt('Inserisci il tuo cognome');
//console.log(userSurname);

// 3) CHIEDERE IL SUO COLORE PREFERITO E MEMORIZZARLO

userColor = prompt ('Inserisci il tuo colore preferito');
//console.log(userColor);

// 4) PRINT NELLA PAGINA DELLE INFORMAZIONI RACCOLTE

userPwd = userName + ' ' + userSurname + ' ' + userColor + ' ' + '20';
console.log(userPwd);
document.getElementById('risultato').innerHTML = userPwd;