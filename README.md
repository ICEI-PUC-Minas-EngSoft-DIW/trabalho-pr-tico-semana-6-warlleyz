# Trabalho Prático - Semana 6

Nessa atividade, como sempre, vamos evoluir o que foi feito na semana anterior. Fique atento para fazer o projeto da semana anterior e dar sequência nessa jornada.

No trabalho dessa semana vamos alterar o projeto para que a responsividade da home-page seja feita, agora, com o framework Bootstrap.

**IMPORTANTE 1:** Você deve alterar apenas os arquivos **`README.md`**, **`index.html`** e **`styles.css`**, podendo incluir outros arquivos como imagens na pasta **`images`**, caso necessário. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Warlley Silva Baião Braga
- Matricula: 928126
- Proposta de projeto escolhida:  Lugares e Experiências
- Breve descrição sobre seu projeto: Site para as pessoas postarem relatos de suas viagens

## Print da Home-Page
<<  [HOME-PAGE](images/print_homepage.png) >>

## Print da Pagina Detalhes
<<  [PAGINA_DETALHES](images/print_paginadetalhes.png) >>

## Dados JSON
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