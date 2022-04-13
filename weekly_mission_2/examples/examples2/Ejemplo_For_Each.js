const listadenumeros = [1,2,3,4];
console.log("imprimiendo elementos de una lista");
listadenumeros.forEach(num=> console.log(num));


///// suma de numeros de la lista

let sum=0;

const numeros=[1,2,3,4];
console.log("esta es una suma de elementos de una lista ");
numeros.forEach(num => sum += num);
console.log(sum);


//+= es adicion 

const paises = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log("Ejemplo 5: Imprimiendo la lista de países en mayúsculas")
paises.forEach((element) => console.log(element.toUpperCase()))

///toUpperCase cambia  a todo a mayusculas


/// element se refiere a los elementos (Strings)  por otro lado sum es para valores numericos.
// for Each retorna la lista. 

