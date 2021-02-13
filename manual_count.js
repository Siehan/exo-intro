/*
Créez un script manual_count.js
En ne vous servant que de console.log, écrivez un programme qui affiche les nombres de 0 à 20

L'affichage à l'exécution du script devra ressembler à ça :

0
1
2
3
4
....
18
19
20
*/

//manual counter

console.log("0");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
console.log("11");
console.log("12");
console.log("13");
console.log("14");
console.log("15");
console.log("16");
console.log("17");
console.log("18");
console.log("19");
console.log("20");

//a counter with a loop

for (let counter = 0; counter <= 20; counter += 1) {
  console.log(counter);
}

//another counter with a loop

for (let i = 0; i <= 20; ++i) {
  console.log(i);
}
