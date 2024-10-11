// 4.1.- Quins valors s'escriuran a la consola després d'executar aquest codi?
let a = 25;
let b = 15 + a; //40
let c = b * 2;//80
console.log(a, b, c);

// 4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi?
a = 10; //10
b = 20; //20
c = 5; //5
a = a + 3; //13
b = b + 4 - a; //11
c = a + b + c;//29
a = a + c;//42
b = 4;
c = c + 3 - b + 2;//30
console.log(a, b, c);// 42,4,30

// 4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi?

a = 5; //5
b = 18; //18
c = 15; //15
d = 22; //22
a = a + 10; //15
console.log(a);//15

b = b + 5 - c; //18 + 5 - 15 = 8
c = c + 4 + b; //15 + 4 + 8 = 27
d = d + b + a; //45
a = a + 1;//16
b = b + c;//35
c = b + c;//35
d = b + b;//70

console.log(a,b,c,d);//16,35,35,70

//4.4.- Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
//sobre paper i desprès prova a l’ordinador.
let a = 10
let b = 20
let c = 5
a = a + 3 // Fixat en aquesta instrucció. //13
// Quin valor tenia la variable a abans
// d’executar-se la instrucció?
// I desprès?
console.log(a);//13
b = b + 4 – a//11
console.log(b);//11
c = a + b + c//29
console.log(c);//29
a = a + c//42
console.log(a);//42
b = 4
console.log(b);//4
c = c + 3 - b + 2
console.log(c);//30

//4.5. - Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
//sobre paper i desprès prova a l’ordinador.
let a = 5;
let b = 18;
let c = 15;
let d = 22;
a = a + 10; //15
b = b + 5 - c;//8
c = c + 4 + b;//27
d = d + b + a;//45
console.log(a,b,c,d);//15,8,27,45
a = a + 1;//16
b = b + c;//35
c = b + c;//62
d = b + b;//70
console.log(a,b,c,d);//16,35,62,70