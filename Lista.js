// Antigamente 
var listaAntiga = Array();

// Novo 
let lista = [];
console.log(lista);

// Adicionando um item
lista.push('carvão');
lista.push('Carne')
lista.push('cerveja sem alcool');
lista.push(10);
console.log(lista);


// Todo array começa com zero
console.log(lista[0]);

// O pop sempre remove o ultimo item da lista
console.log(lista.pop());

// Remover item em posição especifica
// 1º Parametro - Começa
// 2º Parametro - Deletar itens
// 3º parametro - Adiciona itens
console.log(lista.splice(1,0));

// Adicionar item em posição especifica
console.log(lista.splice(0,0,'elemento'));

// Filtrando informações
console.log('Utilizando filter');
console.log(lista.filter(e => e === 'Carne'));

// Buscando informções com Find 
console.log('Utilizando Find');
console.log(lista.find(v => v === 'Carne'));

//Verificar tamanho da lista
console.log('Tamanho da lista');
console.log(lista.lenght)

console.log(lista)


let numeros = [1,2,3,4,5,6,7,8,9,10]
const resultado = numeros.map(Math.sqrt)
console.log('Utilizando raiz quadrada')
console.log(resultado)