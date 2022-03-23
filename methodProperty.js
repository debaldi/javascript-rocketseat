// Variaveis para Exemplos
let string = "Qual quer Coisa"
let numberI = 5972
let numberF = 597.50
let numberS = "597.50"
let vetor = ['array', 'vetor', 123, 'HTML', 597.53]

/*
PROPERTY - propriedade
    string.length           ->      Quantidade de Catacteres
    vetor.length            ->      Tamanho do Array


METHODS - Metodos
    vetor.sort()            ->      Ordem Crenscente Array    
    string.toUpperCase()    ->      Tudo em MAIUSCULO
    string.toLowerCase()    ->      Tudo em minusculo
    numberF.toFixed()       ->      Casas Decimais - Ex: numberF.toFixed(2)
    string.replace("","")   ->      Troca os valores - Ex: string.replace("Valor" , "NovoValor")
    string.split("")        ->      Transforma uma string em uma lista - Ex: string.split("") - string.split("separador", limite)
    vetor.join("")          ->      Junta os Elementos de um Array - Ex: vetor.join("-")
    string.include("")      ->      Verifica se em a palavra no texto - Ex: string.include("que")
    Array.from(string)      ->      Transformando uma string em um Elemento


MANIPULANDO ARRAY
    vetor.push("")          ->      Adicionando um item no fim
    vetor.unshift("")       ->      Adicionando um item no começo
    vetor.pop()             ->      Removendo um item do fim
    vetor.shift()           ->      Removendo um item do começo
    vetor.slice()           ->      Pegando alguns elementos do Array - Ex: vetor.slice(inicio-0, pegaQuantos-1)
    vetor.splice()          ->      Removendo um ou mais itens do Array - Ex: vetor.splice(inicio-0, retiraQuantos-1)
    vetor.indexOf("")       ->      Buscando por elemento na string ou no Array, caso retorne -1, elemento não encontrado.
                                    Ex: string.indexOf("s") / vetor.indexOf(123)


COCONVERSÃO DE DADOS
    Number(string)              ->      Converte para Números Inteiros ou Float
    let n = parseInt(String)    ->      Converte String para Números Inteiros
    let n = parseInt(Float)     ->      Converte Float para Números Inteiros
    
    let n = parseFloat(String)  ->      Converte String para Números Float
    let n = parseFloat(Inteiro) ->      Converte Inteiro para Números Float

    let n = toString(Inteiro)   ->      Converte Inteiro para String
    let n = toString(Float)     ->      Converte Float para String  

    let n = String(Inteiro)     ->      Converte Inteiro para String
    let n = String(Float)       ->      Converte Inteiro para String

CONVERTENDO PARA MOEDAS
    n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
*/
