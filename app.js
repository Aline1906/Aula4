const livros = require("./database")

const input = require('readline-sync')

livros.sort((l1,l2) => {
    if(l1.paginas < l2.paginas) return -1
    if(l1.paginas > l2.paginas) return 0
});

const entrada = require('readline-sync')

const livrosPorCategoria = entrada.question("Deseja encontrar os livros por categoria? (S/N)")

if(livrosPorCategoria.toLocaleUpperCase()== 'S'){
    console.log("As categorias disponiveis sao: Romance e Fantasia")
    
    const qualLivro = entrada.question("Os livros disponiveis sao:")
    const categoria = livros.filter( livro => livro.categoria == qualLivro)

    console.table(categoria)
} 
const livrosJaLidos = entrada.question("Deseja encontrar livros recomendados? (S/N)")

if(livrosJaLidos.toLocaleUpperCase() == "S"){


    const qualJaLido = entrada.question("Esses sao os livros:")
    const recomenda = livros.filter(recomendacao => recomendacao.recomenda == true)

    console.table(recomenda)
    
}
const livrosNaoLidos = entrada.question("Deseja encontrar livros na Wish List? (S/N)")

if(livrosNaoLidos.toLocaleUpperCase() == "S"){


    const naoLido = entrada.question("Pode mostrar todos os livros")
    const leu = livros.filter( naoLeu => naoLeu.leu == false)

    console.table(leu)


} else{
    console.log(" Esses são todos os livros")
    
    console.table(livros)
}