/*
pyramid_generic.js

L'affichage de nos pyramides utilise le caractères *.
info: en javascript un unique caractère est aussi une string.

Trouver un moyen pour qu'en ne modifiant qu'une seule variable dans le script on puisse utiliser le caractère que l'on souhaite pour l'affichage.
Implémenter cela dans un fichier pyramid_generic.js
indice: ce caractère doit être dans une variable.
On pourra obtenir avec une seule modification du fichier un affichage tel que:

A              A
AA            AA
AAA          AAA
AAAA        AAAA
AAAAA      AAAAA
AAAAAA    AAAAAA
AAAAAAA  AAAAAAA
AAAAAAAAAAAAAAAA
ou bien:
V              V
VV            VV
VVV          VVV
VVVV        VVVV
VVVVV      VVVVV
VVVVVV    VVVVVV
VVVVVVV  VVVVVVV
VVVVVVVVVVVVVVVV

*/

// La solution attendue

let c = "*";
console.log(`${c}              ${c}`);
console.log(`${c}${c}            ${c}${c}`);
console.log(`${c}${c}${c}          ${c}${c}${c}`);
console.log(`${c}${c}${c}${c}        ${c}${c}${c}${c}`);
console.log(`${c}${c}${c}${c}${c}      ${c}${c}${c}${c}${c}`);
console.log(`${c}${c}${c}${c}${c}${c}    ${c}${c}${c}${c}${c}${c}`);
console.log(`${c}${c}${c}${c}${c}${c}${c}  ${c}${c}${c}${c}${c}${c}${c}`);
console.log(`${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}`);

let d = "A";
console.log(`${d}              ${d}`);
console.log(`${d}${d}            ${d}${d}`);
console.log(`${d}${d}${d}          ${d}${d}${d}`);
console.log(`${d}${d}${d}${d}        ${d}${d}${d}${d}`);
console.log(`${d}${d}${d}${d}${d}      ${d}${d}${d}${d}${d}`);
console.log(`${d}${d}${d}${d}${d}${d}    ${d}${d}${d}${d}${d}${d}`);
console.log(`${d}${d}${d}${d}${d}${d}${d}  ${d}${d}${d}${d}${d}${d}${d}`);
console.log(`${d}${d}${d}${d}${d}${d}${d}${d}${d}${d}${d}${d}${d}${d}${d}${d}`);

let e = "V";
console.log(`${e}              ${e}`);
console.log(`${e}${e}            ${e}${e}`);
console.log(`${e}${e}${e}          ${e}${e}${e}`);
console.log(`${e}${e}${e}${e}        ${e}${e}${e}${e}`);
console.log(`${e}${e}${e}${e}${e}      ${e}${e}${e}${e}${e}`);
console.log(`${e}${e}${e}${e}${e}${e}    ${e}${e}${e}${e}${e}${e}`);
console.log(`${e}${e}${e}${e}${e}${e}${e}  ${e}${e}${e}${e}${e}${e}${e}`);
console.log(`${e}${e}${e}${e}${e}${e}${e}${e}${e}${e}${e}${e}${e}${e}${e}${e}`);
