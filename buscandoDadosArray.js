/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
            {
                title: "Do Mil ao Milhão",
                author: "Thiago Nigro",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// Número de categorias
const totalCategories = booksByCategory.length
console.log(`TOTAL DE CATEGORIA: ${totalCategories}.`)
console.log("-------------------------------------------------------------------")


// Número de livros em cada categoria
for(let category of booksByCategory) {
    console.log(`TOTAL DE LIVROS DA CATEGORIA: ${category.category}.`)
    console.log('-> ' + category.books.length + ' LIVROS!')
}
console.log("-------------------------------------------------------------------")


// Número de autores
function contAuthors() {
    let contAuthor = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(contAuthor.indexOf(book.author) == -1) {
                contAuthor.push(book.author)
            }
        }
    }
    console.log(`TOTAL DE AUTORES: ${contAuthor.length}`)
}

contAuthors()
console.log("-------------------------------------------------------------------")


// Mostrar livros do autor Auguto Cury
function booksOfAuthurAugustoCury() {
    for(let category of booksByCategory) {
        for(let author of category.books) {
            if(author.author == "Augusto Cury"){
                console.log(`LIVRO: ${author.title}, DO AUTOR: ${author.author}`)
            }
        }
    }
}

booksOfAuthurAugustoCury()
console.log("-------------------------------------------------------------------")


// Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
function bookOfAuthor(specificAuthor) {
    let booksAuthor = []
    
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === specificAuthor){
                booksAuthor.push(book.title)
            }
        }
    }
    console.log(`O LIVRO: ${specificAuthor} DO AUTOR: ${booksAuthor.join(", ")}`)
}

bookOfAuthor("T. Harv Eker")
console.log("")