/*
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
let star = "A";
const stars = `${star}`;

console.log(stars);

let star1 = "*              *";
let star2 = "**            **";
let star3 = "***          ***";
let star4 = "****        ****";
let star5 = "*****      *****";
let star6 = "******    ******";
let star7 = "*******  *******";
let star8 = "****************";
