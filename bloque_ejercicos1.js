// 4.1.- Quins valors s'escriuran a la consola després d'executar aquest codi?
// let a = prompt("Pon el primer valor");
// let b = 15 + a; 
// let c = b * 2;
// console.log(a, b, c);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi?
// a = 10; //10
// b = 20; //20
// c = 5; //5
// a = a + 3; //13
// b = b + 4 - a; //11
// c = a + b + c;//29
// a = a + c;//42
// b = 4;
// c = c + 3 - b + 2;//30
// console.log(a, b, c);// 42,4,30

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // 4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi?

// a = 5; //5
// b = 18; //18
// c = 15; //15
// d = 22; //22
// a = a + 10; //15
// console.log(a);//15

// b = b + 5 - c; //18 + 5 - 15 = 8
// c = c + 4 + b; //15 + 4 + 8 = 27
// d = d + b + a; //45
// a = a + 1;//16
// b = b + c;//35
// c = b + c;//35
// d = b + b;//70
// console.log(a,b,c,d);//16,35,35,70

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //4.4.- Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
// //sobre paper i desprès prova a l’ordinador.
// let a = 10
// let b = 20
// let c = 5
// a = a + 3 // Fixat en aquesta instrucció. //13
// // Quin valor tenia la variable a abans
// // d’executar-se la instrucció?
// // I desprès?
// console.log(a);//13
// b = b + 4 – a//11
// console.log(b);//11
// c = a + b + c//29
// console.log(c);//29
// a = a + c//42
// console.log(a);//42
// b = 4
// console.log(b);//4
// c = c + 3 - b + 2
// console.log(c);//30

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //4.5. - Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
// //sobre paper i desprès prova a l’ordinador.
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10; //15
// b = b + 5 - c;//8
// c = c + 4 + b;//27
// d = d + b + a;//45
// console.log(a,b,c,d);//15,8,27,45
// a = a + 1;//16
// b = b + c;//35
// c = b + c;//62
// d = b + b;//70
// console.log(a,b,c,d);//16,35,62,70

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el
//número llegit és negatiu” si el número és més petit que zero.
//  let a= prompt ("Introduce un numero y te dira si es negativo o positivo")

//  if (a<0){
//     console.log("El numero es negativo")}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell.
   
// let a=prompt ("Introduce un numero y sabras si es par o impar")

// if(a%2==0){
// console.log("PAR")    
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
// és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if 
// per cada cas.
// let a=prompt ("Introduce un numero y sabras si es par o impar")

// if(a%2==0){
// console.log("PAR")    
// }
// if(a%2==1){
// console.log("IMPAR")    
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
// gran que el segon i l’altre per comprovar si el segon número és més gran que el primer

// let a=prompt("Introduce un numero")
// let b=prompt("Introduce un numero")
// let a1=parseInt(a)
// let b1=parseInt(b)
// if(a1>=b1){
//     console.log(a1)}
// else{
//     console.log(b1)}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola
// el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels
// números és el més gran.

// let a=parseInt(prompt("Introduce un numero"))
// let b=parseInt(prompt("Introduce un numero"))
// let c=parseInt(prompt("Introduce un numero"))

// if(a>=b && a>=c){
//     console.log(a)
// }
// if(b>=a && b>=c){
//     console.log(b)
// }
// if(c>=a && c>=b){
//     console.log(c)
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes,
// entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 

// let a = parseInt(prompt("Introduce un numero de mes"))

// if (a==1){console.log("Enero")}
// if (a==2){console.log("Febrero")}
// if (a==3){console.log("Marzo")}
// if (a==4){console.log("Abril")}
// if (a==5){console.log("Mayo")}
// if (a==6){console.log("Junio")}
// if (a==7){console.log("Julio")}
// if (a==8){console.log("Agosto")}
// if (a==9){console.log("Septiembre")}
// if (a==10){console.log("Octubre")}
// if (a==11){console.log("Noviembre")}
// if (a==12){console.log("Diciembre")}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 13.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el resultat de restar al nombre més gran el nombre més petit.
// let a=parseInt(prompt("Introduce un numero"))
// let b=parseInt(prompt("Introduce otro numero"))
// let resul
// if(a>=b){
//     resul=a-b
//     console.log(resul)
// }
// else{
//     resul=b-a
//     document.write(resul)
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el
// número llegit és positiu” en cas contrari.

// let a = parseInt(prompt("Introduce el numero"))

// if(a>=0){console.log ("El numero es positiu")}
// else {document.write ("El numero es negatiu")}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la
// consola els tres números ordenats. 

// let a=parseInt(prompt("Introduce un numero"))
// let b=parseInt(prompt("Introduce un numero"))
// let c=parseInt(prompt("Introduce un numero"))

// if (a>=b && a>=c){
    
//     if (b>=c){ 
        
//         console.log(a)
//         console.log(b)
//         console.log(c)}
//     if (c>b){

//         console.log(a)
//         console.log(c)
//         console.log(b)}
//     }
    
// if (b>=c && b>=a){
    
//     if (c>=a){ 
            
//         console.log(b)
//         console.log(c)
//         console.log(a)}
//     if (a>c){
    
//         console.log(b)
//         console.log(a)
//         console.log(c)}
//         }

//  if (c>=a && c>=b){
    
//     if (a>=b){ 
                    
//         console.log(c)
//         console.log(a)
//         console.log(b)}
//     if (b>a){
            
//         console.log(c)
//         console.log(b)
//         console.log(a)}
//         }
 
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona
// pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el
// valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir
// si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25
           
// let a=prompt("Escribe SI tienes o si NO tienes carnet de conducir ")  
//   if(a=="SI"){  
//      let b=parseFloat(prompt("Que has dado en el control de alcholemia pon los decimales con punto"))
//         if(b>=0.25){document.write("No puedes conducir porque superas la tasa permitida")}
//         else{document.write("Si puedes conducir ya que tienes carnet y estas por debajo de 0.25 en el test de alcholemia")}
//         }
    
//   if(a=="NO"){document.write("No esta permitida tu ciruclacion ya que no tienes carnet de conducir")}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una
// quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
// En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que
// el cost total és de 30€ donat que el transport és gratis.
// En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que
// consistirà en l’introduït més 4.95€ en concepte de cost d’enviament

// let a=parseFloat(prompt("Introduce el precio de tu pedido:"))

// if (a>=30){
//     document.write("El precio total a pagar es "), document.write(a),document.write("€")
// }
// if(a>=0 && a<30){
//     document.write("El precio total a pagar es "), document.write(a+4.95),document.write("€")
// }
  
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
// posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”
// Si totes les dades són correctes, escriurà el preu final

// let resul=0;
// let cont=0;
// console.log("Bienvenido, escoge tu tipo de helado y su sabor, vamos alla:");
// let base=prompt('Escoge si quieres cono "c" o tarrina "t" ');
// if(base=="c" || base =="t"){
//     if(base=="c"){
//         resul = resul+3.45;
//     }
//     else {
//         resul = resul+3.95;
//     }
//     cont++
// }
// else{
//     console.log("ERROR!! Datos mal introducidos")}


// if(cont==1){
//     console.log("ES LA HORA DE ESCOGER EL SABOR!!")
//     console.log("Vainilla,Xocolata,Turró,Menta,Oreo,Crema,Gerds,Ametlles")
//     let sabor= prompt("Escoje el sabor!!")
//     if (sabor=="Vainilla" || sabor=="Xocolota"||sabor=="Turró"||sabor=="Menta"||sabor=="Oreo"||sabor=="Crema"||sabor=="Gerds"||sabor=="Ametlles"){
//        if(sabor=="Turró"||sabor=="Menta"||sabor=="Oreo"){
//         resul = resul+0.5;

//        }
//        if(sabor=="Crema"||sabor=="Gerds"||sabor=="Ametlles"){
//         resul = resul+1;

//        }
//        cont++
//     }
//     else{console.log("ERROR!! Datos mal introducidos")}
// }

// if(cont==2){
//     console.log("El precio final es de" + resul + "€")}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número
// de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.

// let mes=parseInt(prompt("Escribe el nombre de un mes"))

// switch (mes){

//     case 1: document.write("Enero")
//             break
//     case 2: document.write("Febrero")
//             break
//     case 3: document.write("Marzo")
//             break
//     case 4: document.write("Abril")
//             break
//     case 5: document.write("Mayo")
//             break
//     case 6: document.write("Junio")
//             break
//     case 7: document.write("Julio")
//             break
//     case 8: document.write("Agosto")
//             break
//     case 9: document.write("Septiembre")
//             break
//     case 10: document.write("Octubre")
//             break
//     case 11: document.write("Noviembre")
//             break
//    case 12: document.write("Diciembre")
//             break
//     default : document.write("Mes no valido")
// } 

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
// posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”.
// Si totes les dades són correctes, escriurà el preu final.

// let total=0

// let base=prompt("Elige cono o tarrina")

// switch (base){
    
//     case "cono": total=total+3.45
//         break
//     case "tarrina": total=total+3.95
//         break
//     default: document.write("base no valida ")
// }

// let sabor=prompt("Introduce tu sabor")

// switch(sabor){
//     case "Vainilla":
//     case "Xocolata":
//         total=total+0
//         break
//     case "Turró":
//     case"Menta":
//     case "Oreo":
//         total=total+0.5
//         break
//     case "Crema":
//     case"Gerds":
//     case "Ametlles":
//         total=total+1
//         break
//     default:document.write("Sabor no valido")
// }

// document.write(total)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 15.3.- Escriu un programa, que donat una lletra que representa un dia de la setmana (l -
//     dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o
//     festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.


    // let dia =prompt("Escribe una letra que represente el dia de la semana")

    // switch (dia){
      
    //     case "l":
    //     case "m":
    //     case "x":
    //     case "j":
    //     case "d":
    //         document.write("Laborable")
    //         break
    //     case "s":
    //     case "g":
    //         document.write("Festiu")
    //         break
    //     default:
    //         document.write("Dia no valido")

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//     16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el
// text “Estem fent bucles”. 


// for (let i = 0; i < 10; i++) {
//     document.write("Estem fent bucles </br>");
    
//   }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els
// nombres del 5 al 20.


// let i = 0

// for(i=2;i<51;i++){
    
    
//     document.write(i + "</br>")
    
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els
// nombres entre 1 i N.


// let a = parseInt(prompt("Escribe un numero"))
// let b

// for(b=1;b<a+1;b++){
//     document.write(b + "</br>")
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial
// d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N.


// let N = parseInt(prompt("Introduce un numero"))
// let resul=1

//     for(let i=N ;i>1;i--){
//         resul*=i

// }
//  document.write("El resultat es " + resul+ " total")

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M)
// // calculi la suma de tots els números entre N i M (ambdós inclosos).
//  let mayor=parseInt(prompt("Introduce el numero grande"))
//  let menor=parseInt(prompt("Introduce el numero prqueño"))
//  let total=0
//  for(let i=menor; i<mayor+1;i++){
//     total+=i
//  }
//  document.write("El resultat es" + total + ". </br>")
//  document.write("El resultat es" + total + ". </br>")

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números
// parells entre 2 i N.

// let n = parseInt(prompt("Introduce un numero"))
// let total=0
// for( let i=2;i<=n;i+=2) {
   
//     total+=i
//     document.write(total)
// }
// document.write("El resusltat es " + total + ".")
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la
// següent:
// Si N ← 2 i M ← 5
// Sortida per consola:
// 2 22 222 2222 22222
// La suma de la sèrie és:24690 



let n =parseInt(prompt("Introduce el numero"))
let c =parseInt(prompt("Introduce la cantidad de series"))
let nl= n + ""
let nu= n + ""
let total=n
let totala=0

for(let i=0;i<c;i++){
    
    total=total+totala 
    document.write(nl + "___")  // la cadena //  2,
    nl=nu+nl//actualizacion de la cadena //22,
    totala=+nl// pasaamos el nuevo cadena a buero para sumarlo luego al total anterior              
}
    document.write("////" + total )