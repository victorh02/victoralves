// Repetir
const abc = 'abc';
console.log(abc.repeat(2));

// Replace
let frase = 'Hoje o dia está bonito!';
console.log('Utilizando Replace');
console.log(frase
    .replace('dia','noite')
    .replace('bonito','bonita')
    .replace(' o ',' a '))

// Caractere no final da frase
console.log('Utilizando endsWith');
console.log(frase.endsWith('o!'));

// Caracter no inicio da frase 
console.log('Utilizando startsWith');
console.log(frase.startsWith('o!'));

// Convertendo para minusculo
let fraseM = 'HOJE O DIA ESTÁ BONITO!';
Console.LOG('Utilizando toLowerCase')
Console.log(fraseM.toLowerCase());

// Convertendo para maiusculo
Console.log('Utilizando toUpperCase')
console.log(frase.toUpperCase())