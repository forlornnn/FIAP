// Comentario normal

/*
Comentario de multiplas linhas
Comentario de multiplas linhas
Comentario de multiplas linhas
Comentario de multiplas linhas
Comentario de multiplas linhas
*/

// USANDO O CONSOLE
console.log('Testando o console');
console.log("Usando o console");

// Criando Variaveis

let nomeUsuario = 'Felipe Souza'
let logado = true;
let salarioUsuario = 5000;
let emailUsuario = 'felipesouzapro@gmail.com'
const DATA_NASCIMENTO = '30/11/07';

// Mostrando no Console

console.log(nomeUsuario);
console.log(salarioUsuario);
console.log(emailUsuario);
console.log(DATA_NASCIMENTO);

// typeof

console.log(typeof nomeUsuario, nomeUsuario);
console.log(typeof logado, logado);
console.log(typeof salarioUsuario, salarioUsuario);
console.log(typeof DATA_NASCIMENTO, DATA_NASCIMENTO);

// mostrando concatenação básica

let nome = 'Felipe';
let profissao = 'proplayer';
let logado1 = true;

// não fazer a concatenação assim:
// console.log('Nome '+nome+' Profissão '+profissao);

console.log(`Nome: ${nome} - Profissão: ${profissao} - Logado: ${logado} - qualquer coisa aqui! ${10 + 10}`);

const resultado = `Nome: ${nome} - Profissão: ${profissao}`
console.log(resultado);
console.log(resultado);
console.log(resultado);

// alerta para o usuario
// alert('Ola Usuario');

// confirmação de operação
// confirm('Deseja finalizar a operação?')

// pedir informações para o usuario
// prompt('Digite qualquer valor: ')
const primeiroValor = Number(prompt('Digite o primeiro valor: '));
const segundoValor = Number(prompt('Digite o segundo valor: '));
const resultado1 = primeiroValor + segundoValor
// mostrando o resultado - não esquecer de colocar o "Number" para que não seja lido como string
alert(`${primeiroValor} + ${segundoValor} = ${resultado1}`);

// Operadores Aritmeticos
console.log('Operadores Aritméticos');

const primeiroNumero = 100;
const segundoNumero = 20;
console.log(`Primeiro Valor: ${primeiroNumero}`);
console.log(`Segundo Valor: ${segundoNumero}`);
let resultado2 = 0;

// soma

resultado2 = primeiroNumero + segundoNumero
console.log(`${primeiroNumero} + ${segundoNumero} = ${resultado2}`);
// subtração

resultado2 = primeiroNumero - segundoNumero
console.log(`${primeiroNumero} - ${segundoNumero} = ${resultado2}`);
// multiplicação

resultado2 = primeiroNumero * segundoNumero
console.log(`${primeiroNumero} * ${segundoNumero} = ${resultado2}`);
// divisão

resultado2 = primeiroNumero / segundoNumero
console.log(`${primeiroNumero} / ${segundoNumero} = ${resultado2}`);

// modulo - ele da como resultado o resto da divisão

resultado2 = primeiroNumero % segundoNumero
console.log(`${primeiroNumero} % ${segundoNumero} = ${resultado2}`);

// potência

resultado2 = primeiroNumero ** segundoNumero
console.log(`${primeiroNumero} ** ${segundoNumero} = ${resultado2}`);

// Operadores Relacionais - smepre boolean

console.log('Operadores Relacionais');
console.log(`Primeiro Numero: ${primeiroNumero}`);
console.log(`Segundo Numero: ${segundoNumero}`);

//  maior que
resultado2 = primeiroNumero > segundoNumero
console.log(`${primeiroNumero} > ${segundoNumero} = ${resultado2}`);

//  maior ou igual a
resultado2 = primeiroNumero >= segundoNumero
console.log(`${primeiroNumero} >= ${segundoNumero} = ${resultado2}`);

//  menor que
resultado2 = primeiroNumero < segundoNumero
console.log(`${primeiroNumero} < ${segundoNumero} = ${resultado2}`);

//  menor ou igual
resultado2 = primeiroNumero <= segundoNumero
console.log(`${primeiroNumero} <= ${segundoNumero} = ${resultado2}`);

//  igualdade CORRETO É USAR ===
resultado2 = primeiroNumero === segundoNumero
console.log(`${primeiroNumero} === ${segundoNumero} = ${resultado2}`);

//  desigualdade
resultado2 = primeiroNumero != segundoNumero
console.log(`${primeiroNumero} != ${segundoNumero} = ${resultado2}`);

// Operadores Logicos 
console.log('Operadores Logicos');

console.log(`Primeiro Numero: ${primeiroNumero}`);
console.log(`Segundo Numero: ${segundoNumero}`);

// Operador OU(||) = TRUE BASTA UMA RESPOSTA VERDADEIRA
resultado2 = (primeiroNumero > segundoNumero) || (segundoNumero > 5)
console.log(resultado2);

// Operador E(&&) = TODAS AS RESPOSTAS DEVEM SER VERDADEIRAS
resultado2 = (primeiroNumero > segundoNumero) && (segundoNumero > 5)
console.log(resultado2);

// Operador NÃO(!) = NEGAÇÃO DAS RESPOSTAS 
resultado2 = !((primeiroNumero > segundoNumero) && (segundoNumero > 5))
console.log(resultado2);

// Operadores de Incremento e Decremento
console.log('Operadores de Incremento e Decremento');

let numero1 = 100
let numero2 = 200
console.log(`Primeiro Numero: ${numero1}`);
console.log(`Segundo Numero: ${numero2}`);

// incremento
numero1++;

// decremento
numero2--;

console.log(`Primeiro Numero: ${numero1}`);
console.log(`Segundo Numero: ${numero2}`);

numero1++;
numero1++;
numero1++;
numero1++;
console.log(`Primeiro Numero: ${numero1}`);

// Operadores de Atribuição
console.log('Operadores de Atribuição');
console.log(`Valor = ${numero1}`);

// soma
numero1 += 5;
// mesma coisa que numero1 = numero1 + 5, porem escrito de forma mais compacta e entendivel
console.log(`Valor = ${numero1}`);

/*MESMA COISA PARA: subtração, multiplicação, divisão e modulo  */

// OBJETO STRING

const minhaString = 'Javascript é uma linguagem foda'
console.log(minhaString);
console.log(minhaString[3]);

// tamanho da string
console.log(minhaString.length);

// maiusculas
console.log(minhaString.toUpperCase);

// minusculas
console.log(minhaString.toLowerCase);

// charAt() - mesma coisa que usar o []
console.log(minhaString.charAt(10));

// verificar se ele encontra valor
console.log(minhaString.indexOf('é'));

const string1 = 'abc'
const string2 = 'def'
const string3 = 'xyz'

// concatenar strings

console.log(string1.concat(string2).concat(string3));
let todasStrings = (string1.concat(string2).concat(string3));
console.log(todasStrings);

console.log(minhaString);

// substituir UM caractere

console.log(minhaString.replace('a', '@'));

// substituir todos os caracteres buscados de uma vez

console.log(minhaString.replaceAll('a', '7'));

// pegando uma parte da string

console.log(minhaString.substring(5, 20))

// criando uma nova string - com uma parte de outra string

let novaString = minhaString.slice(5, 20)
console.log(novaString);

// converter em string
console.log(typeof minhaString);
console.log(minhaString.split(''));

// retirar espaços no inicio e no fim da string
// usar quando pedir informaçoes para o usuario
let novaString2 = '         oiiii tem espaços no inicio e no fim                !   '
console.log(novaString2);
console.log(novaString2.trim());

// buscar algo na string - retorna: true / false

console.log(minhaString.includes('foda'))

// procurar do inicio

console.log(minhaString.startsWith('JavaS'))
console.log(minhaString.startsWith('Javas'))

// procurar do fim

console.log(minhaString.endsWith('JavaS'))
console.log(minhaString.endsWith('foda'))

// OBJETO MATH 
console.log('Objeto MATH');
const numeroMath = 60.30;
console.log(numeroMath);

// arredondar para o proximo inteiro
console.log(Math.ceil(numeroMath));

// arredondar para o proprio inteiro
console.log(Math.floor(numeroMath));

// caso decimal seja menor que 50 - DEIXAR NO PROPRIO INTEIRO
// caso decimal seja maior que 50 - PROXIMO INTEIRO
console.log(Math.round(numeroMath));
console.log(Math.round(60.60));

// maior numero em uma lista de numero
console.log(Math.max(10, 12, 14, 16, 18, 20, 22, 24, 700));

// menor numero em uma lista
console.log(Math.min(10, 12, 14, 16, 18, 20, 22, 24, 700));

// potencia calculo
console.log(2 ** 8);
console.log(Math.pow(2, 8));

// sorteia um numero aleatorio entre 0 e 1
console.log(Math.random());

// raiz quadrada 
console.log(Math.sqrt(16));
console.log(Math.sqrt(23));

// raiz cubica 
console.log(Math.cbrt(9));
console.log(Math.cbrt(27));

// MATH RANDOM
// numero entre 0 e 999
const numeroSorteado1 = Math.floor(Math.random() * 1000)
const numeroSorteado2 = Math.floor(Math.random() * 100)
const numeroSorteado3 = Math.floor(Math.random() * 999999)

console.log(numeroSorteado1);
console.log(numeroSorteado2);
console.log(numeroSorteado3);

// OBJETO DATE
// iniciando o metodo Construtor
let dataAtual = new Date();
console.log(dataAtual)

// pegando partes da data
// milisegundos
console.log(dataAtual.getTime());

// dia da semana - domingo = dia 0, segunda = dia 1...
console.log(dataAtual.getDay());

// dia do mes
console.log(dataAtual.getDate());

// mes atual - sempre começa em 0, ou seja, janeiro = 0
console.log(dataAtual.getMonth() + 1);

// ano
console.log(dataAtual.getFullYear());

// hora
console.log(dataAtual.getHours());

// minutos
console.log(dataAtual.getMinutes());

// segundos
console.log(dataAtual.getSeconds());

// alterar o ano
dataAtual.setFullYear(2025)
console.log(`Ano Atual: ${dataAtual.getFullYear()}`);

// alterando o mes
dataAtual.setMonth(4)
console.log(`Mês Atual: ${dataAtual.getMonth()}`);

// alterando o dia 
dataAtual.setDate(27)
console.log(`Dia Autal: ${dataAtual.getDay()}`);

// alterando a hora
dataAtual.setHours(18)
console.log(`Hora atual: ${dataAtual.getHours()}`);


dataAtual = new Date();
console.log(dataAtual)

// colocando o padrao de data Brasil
const dataPadraoBrasil = new Intl.DateTimeFormat('pt-BR').format(dataAtual)
console.log(dataPadraoBrasil);

// formato personalizado - podemos fazer com dara e hora tambem
const dataPersonalizada = new Intl.DateTimeFormat(('pt-BR'), {
    day: "2-digit",
    month: "long",
    year: "numeric"
}).format(dataAtual)
console.log(dataPersonalizada)

// if / else

let preco = 9000;
let desconto = 0;
let valorFinal = 0;

if (preco <= 1000) {
    desconto = 5;
} else if (preco <= 3000) {
    desconto = 15;
} else if (preco <= 5000) {
    desconto = 30;
} else if (preco <= 8000) {
    desconto = 40;
} else {
    desconto = 45;
}
// calculando o valor do desconto
let valorDesconto = (preco * desconto) / 100
// calculando o valor final = preco - valor do desconto
valorFinal = (preco - valorDesconto)
console.log(`Preço do produto: R$${preco}, conseguiu um desconto de ${desconto}%, abatendo R$${valorDesconto} do valor total, totalizando R$${valorFinal} a pagar!`);

// SWITCH CASE
// sortear um numero para a exibição de um produto
const codigo = Math.ceil(Math.random() * 6);
let produto;
let categoria;
let preco1;

// estrutura switch
switch (codigo) {
    case 1:
        produto = 'Notebook';
        categoria = 'Informática';
        preco1 = 8500.12;
        break;
    case 2:
        produto = 'Tablet';
        categoria = 'Informática';
        preco1 = 3800.93;
        break;
    case 3:
        produto = 'Videogame';
        categoria = 'Entretenimento';
        preco1 = 3500.46;
        break;
    case 4:
        produto = 'Smartphone';
        categoria = 'Telefonia';
        preco1 = 5230.89;
        break;
    case 5:
        produto = 'Teclado + Mouse';
        categoria = 'Acessórios';
        preco1 = 215.99;
        break;
    default:
        produto = 'Drone';
        categoria = 'Tecnologia';
        preco1 = 9123.45;
}

// exibição das informações
console.log('===== INFORMAÇÕES DO PRODUTO =====');
console.log(`Código do produto: ${codigo}`);
console.log(`Nome: ${produto}`);
console.log(`Categoria: ${categoria}`);
console.log(`Preço: R$ ${preco}`);

// Laço for (estrutura de repetição)
console.log('Laço for');
let totalSoma
let numerosSorteados
// criar um loop - sortear 100 numeros e somar
for (let i = 0; i <= 99; i++) {
    // sorteando os numeros
    numerosSorteados = Math.ceil(Math.random() * 100);
    // somando numeros sorteados
    numerosSorteados += totalSoma
    // exibir numeros sorteados
    console.log(numerosSorteados);
}
// exibição da soma
console.log(`Total da somatoria de numeros: ${totalSoma}`)

// LAÇO WHILE
// sortear 10 numeros pares
let totalSorteios = 0;
console.log('===== NÚMEROS PARES SORTEADOS =====');
// loop para gerar 10 números válidos
for (let i = 1; i <= 10; i++) {
    let numero = Math.floor(Math.random() * 100);
    totalSorteios++;
    // enquanto o número for ímpar, continua sorteando
    while (numero % 2 !== 0) {
        numero = Math.floor(Math.random() * 100);
        totalSorteios++;
    }
    console.log(`Número ${i}: ${numero}`);
}
console.log(`Total de sorteios realizados: ${totalSorteios}`);

// FUNCTION DECLARATION
console.log('FUNCTION DECLARATION');

function exibirMensagem() {
    // corpo da mensagem
    console.log(`Ola vc acessou nossa pagina!`);
    console.log(`Nova linha da função`);
    let resultado3 = 20 + 20 
    console.log(`O resultado é: ${resultado3}`);
    console.log('=======================');
    console.log('=======================');
    
    
}
exibirMensagem()
exibirMensagem()

function calcularTotal(preco = 0, quantidade = 0){
    const total1 = (preco * quantidade)
    console.log(`Total da compra: R$ ${total1}`);    
}
calcularTotal(50, 2);
calcularTotal(100, 30);
calcularTotal(100);

function calcularFrete(valorDeCompra = 0){
    if(valorDeCompra >=200){
        return 0;
    } return 20
}
let frete = calcularFrete(150);
console.log(`Valor do frete: ${frete}`);
// FUNCTIONS EXPRESSION
console.log('FUNCTION EXPRESSION');
const calcularDesconto = function (preco, porcentagem) {
    const desconto = preco * (porcentagem / 100);
    return desconto;
};
console.log(`Desconto aplicado: R$ ${calcularDesconto(200, 10)}`);
console.log(`Desconto aplicado: R$ ${calcularDesconto(5000, 30)}`);
// Arrow Function
console.log('ARROW FUNCTION');
const calcularParcelas = (valor, parcelas) => {
    return valor / parcelas;
};
console.log(`Valor da parcela: R$ ${calcularParcelas(300, 2)}`);
console.log(`Valor da parcela: R$ ${calcularParcelas(1800, 4)}`);
// Functions callback
console.log('FUNCTION CALLBACK');
const calcularTotal = (valor, operacao) => {
    const resultado = operacao(valor);
    return resultado;
};
const aplicarDesconto = (valor) => {
    return valor * 0.9;
};
const aplicarMulta = (valor) => {
    return valor * 1.1;
};
const valor = 2580;
console.log(`Valor original: R$ ${valor}`);
console.log(`Com desconto: R$ ${calcularTotal(valor, aplicarDesconto)}`);
console.log(`Com multa: R$ ${calcularTotal(valor, aplicarMulta)}`);
