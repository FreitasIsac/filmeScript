var divFilme = document.querySelector(".res")

var filmes = [
    "Harry Potter",
    "Vingadores",
    "OSenhor dos Anéis",
    "A Hora do Pesadelo",
    "Amhtville",
]

for(var inicio = 0; inicio < filmes.length; 
    inicio++){
    divFilme.innerHTML += `<p>${filmes[inicio]}</p>`
}


