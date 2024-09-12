function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (/^\s*$/.test(campoPesquisa)) {
        section.innerHTML = "<p>Nada foi encontrado.<p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();


    let resultados = "";

    let titulo = "";

    let descricao = "";

    let tags = "";

    let img = "";

    let alt = "";



    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.titulo.toLowerCase();
        tags = dado.tags.toLowerCase();
        img = dado.img;
        alt = dado.alt;
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
                <div class="item-resultado">
                    <div>
                        <img src="${dado.img}" alt="${dado.alt}" class="logo">
                    </div>

                    <div class="conteudo">
                        <h2>${dado.titulo}</h2>

                        <p class="descricao-meta">${dado.descricao}</p>
            
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>
                    
                </div>
            `;
        };
    };

    if (!resultados) {
        resultados = "<p>Nada foi encontrado, tente digitar um nome de um time.<p>"
    };


    section.innerHTML = resultados;
};

document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        pesquisar(); 
    }
});