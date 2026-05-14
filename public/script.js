const viagens = [

    {
        id: 1,
        autor: "Maria Viagens",
        local: "Reykjavík, Islândia",
        data: "5 dias atrás",
        titulo: "❄️ Caçando auroras e explorando vulcões na Islândia",
        descricao: "Passei 5 dias explorando paisagens que parecem de outro planeta! Entre cachoeiras gigantes, campos de lava e geysers ativos, o ponto alto foi ver a aurora boreal dançando no céu.",
        imagem: "../images/maria_viagem.jpg",
        avatar: "../images/maria_avatar.jpg",
        curtidas: "15k",
        comentarios: "400",
        visualizacoes: "20k"
    },
    {
        id: 2,
        autor: "Marcelo Aventuras",
        local: "Tóquio, Japão",
        data: "7 dias atrás",
        titulo: "🌃 Explorando as luzes e a cultura de Tóquio",
        descricao: "Tóquio mistura tradição e tecnologia de forma impressionante. Marcelo visitou bairros famosos como Shibuya e Akihabara, experimentou comidas típicas incríveis e conheceu templos históricos.",
        imagem: "../images/marcelo_viagem.png",
        avatar: "../images/marcelo_avatar.png",
        curtidas: "754k",
        comentarios: "25.7k",
        visualizacoes: "1.7M"
    }
];

const postsContainer = document.getElementById("posts-container");
if(postsContainer){
    viagens.forEach(viagem => {
        postsContainer.innerHTML += `

        <article class="featured-post">
            <div class="post-image">
                <img src="${viagem.imagem}" alt="Viagem">
            </div>
            
            <div class="post-content">
                
                <div class="post-header d-flex align-items-center gap-3">
                    <img src="${viagem.avatar}" class="avatar">
                    <div>
                        <h2>${viagem.autor}</h2>
                        <span class="date">
                            ${viagem.data} | ${viagem.local}
                        </span>
                    </div>
                </div>
                
                <h3>${viagem.titulo}</h3>
                
                <p>
                    ${viagem.descricao}
                </p>

                <div class="post-footer d-flex justify-content-between align-items-center mt-4">
                    <div class="post-stats d-flex gap-4">
                        <span>❤️ ${viagem.curtidas}</span>
                        <span>💬 ${viagem.comentarios}</span>
                        <span>👁️ ${viagem.visualizacoes}</span>
                    </div>
                    <a href="detalhes.html?id=${viagem.id}" class="btn post-btn">
                    Ler relato completo
                    </a>
                </div>

            </div>
        </article>

        `;
    });
}

const detalhesContainer = document.getElementById("detalhes-container");
if(detalhesContainer){
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");
    const viagem = viagens.find(v => v.id == id);
    if(viagem){
        detalhesContainer.innerHTML = `

        <article class="featured-post detalhes-post">
            <div class="galeria-container">
                <img 
                    src="${viagem.imagem}" 
                    alt="Viagem"
                    id="imagem-principal"
                    class="imagem-detalhes"
                >

                <div class="galeria-botoes">
                    <button class="btn galeria-btn">
                        ◀
                    </button>
                    <button class="btn galeria-btn">
                        ▶
                    </button>
                </div>
            </div>

            <div class="post-content detalhes-content">
                <div class="post-header d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div class="d-flex align-items-center gap-3">
                        <img src="${viagem.avatar}" class="avatar">
                        <div>
                            <h2>${viagem.autor}</h2>
                            <span class="date">
                                ${viagem.data} | ${viagem.local}
                            </span>
                        </div>
                    </div>
                    <button class="btn seguir-btn">
                        + Seguir
                    </button>
                </div>

                <h1 class="titulo-detalhes">
                    ${viagem.titulo}
                </h1>

                <p class="texto-detalhes">
                    ${viagem.descricao}
                    <br><br>
                    Durante a viagem, diversas experiências marcaram o percurso. Entre paisagens urbanas iluminadas, culturas diferentes e novas descobertas, cada momento trouxe uma sensação única de exploração e liberdade.
                    <br><br>
                    Além dos pontos turísticos famosos, o contato com moradores locais, a culinária típica e os pequenos detalhes das ruas fizeram toda a diferença.
                </p>

                <div class="post-footer d-flex justify-content-between align-items-center mt-5 flex-wrap gap-3">
                    <div class="post-stats d-flex gap-4">
                        <span>❤️ ${viagem.curtidas}</span>
                        <span>💬 ${viagem.comentarios}</span>
                        <span>👁️ ${viagem.visualizacoes}</span>
                    </div>
                    <a href="index.html" class="btn post-btn">
                        ← Voltar
                    </a>
                </div>

                <div class="comentarios-container">
                    <h3>Comentários</h3>
                    <textarea 
                        class="form-control comentario-input"
                        placeholder="Compartilhe sua opinião sobre essa viagem...">      
                    </textarea>
                    <button class="btn post-btn mt-3">
                        Publicar comentário
                    </button>
                </div>

            </div>
        </article>

        `;
    }
}