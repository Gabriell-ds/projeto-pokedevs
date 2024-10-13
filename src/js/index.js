
const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');
console.log(listaSelecaoPokedevs);


listaSelecaoPokedevs.forEach(pokedev =>{
pokedev.addEventListener("click", () => {

    esconderCartaoPokedev();
    
   
    const idPokedecSelecionado = mostrarCartaoPokedevSelecioanado(pokedev);


    desativarPokedevNaListasgem();

    ativarPokedevSelecionadoNaListagem(idPokedecSelecionado);


    })
})

function ativarPokedevSelecionadoNaListagem(idPokedecSelecionado) {
    const idPokedecSelecionadoNaListagem = document.getElementById(idPokedecSelecionado);
    idPokedecSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListasgem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecioanado(pokedev) {
    const idPokedecSelecionado = pokedev.attributes.id.value;
    const idPokedevParaAbrir = "cartao-" + idPokedecSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedecSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
