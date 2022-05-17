//Array - video - (dicionario do programador) JS //

//array unidimencional - vetor //

let diasDaSemana = [

'Segunda-Feira',
'Terça-feira',
'Quarta-feira',
'Quinta-feira',
'Sábado',
'Domingo'

];


//array multidimencional ou matrix //


let usuarios = [
['Clark', 'Kent', 'Planeta Diário'],
['Gabriel', 'Fróes', 'Código Fonte'],
['Peter', 'Parker', 'Clarim Diário'],
['Vanessa', 'Weber', 'Código Fonte']

];

console.log(diasDaSemana[2]); // Quarta-Feira
console.log(usuarios[1][2]); // Código Fonte // o indice começa sempre no 0 salvo algumas exções em relação a outros programas //

//Uma pilha é uma coleção ordenada de itens baseados no principio L.I.F.O. (Last In First Out) o ultimo elemento a entrar na pilha é o primeiro a sair//



// exemplo de pilha //

class Pilha {

constructor() {
	this.elementos = [];
}

push(elemento) {
	this.elementos.push(elemento);

}

pop () {
	this.elementos.pop();
}

}


const pilha = new Pilha();
pilha.push(1); // [1]
pilha.push(2); // [1,2]
pilha.push(3); // [1,2,3]
pilha.push(4); // [1,2,3,4]
pilha.push(5); // [1,2,3,4,5]

pilha.pop(); // [1,2,3,4]
pilha.pop(); // [1,2,3]
pilha.pop(); // [1,2]
pilha.pop(); // [1]
pilha.pop(); // []


//FILA//

class Fila {

	constructor() {
	this.elementos = [];
}

	enqueue(elemento) {
	this.elementos.push(elemento);

}

dequeue() {
	this.elementos.shift();
}

}


const filaDeAtendimento = new Fila();
fila.enqueue('Vanessa');
fila.enqueue('Gabriel');
fila.enqueue('Lucas');

fila.dequeue(); // Vanessa foi atendida e removida da fila
fila.dequeue(); // Gabriel foi atendido e removiso da fila
fila.dequeue(); // Lucas foi atendido e removido da fila
// a flia foi zerada




//ARVORE//

class Arvore{

	constructor() {
	this.nos = {}
}

inserir(arvore, valor) {
	if (arvore.valor) {
	if (valor > arvore.valor) {
	this.inserir(arvore.direita, valor)
} else {
	this.inserir(arvore.esquerda, valor)
} 

} else {
	this.inserir(arvore.esquerda, valor)

} else {
	arvore.valor = valor
	arvore.direita = {}
	arvore.esquerda = {}
	}
 }



// const novaArvore = new Arvore ();
// novaArvore.inserir(novaArvore.nos, 23);
// novaArvore.inserir(novaArvore.nos, 12);
// novaArvore.inserir(novaArvore.nos, 4);
// novaArvore.inserir(novaArvore.nos, 18);
// novaArvore.inserir(novaArvore.nos, 1);
// novaArvore.inserir(novaArvore.nos, 27);
// novaArvore.inserir(novaArvore.nos, 25);

