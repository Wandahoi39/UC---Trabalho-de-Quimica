// ============================================================
// TABELA PERIÓDICA ACESSÍVEL
// TEMAS + LEGENDA + LEITURA POR VOZ + TECLADO + ARIA
// ============================================================

const dadosModos = {
    padrao: {
        nome: "Visão: Cores Normais",
        cores: {
            alcalino: { bg: "#fdae61", txt: "Laranja" },
            "alcalino-terreo": { bg: "#fee08b", txt: "Amarelo" },
            transicao: { bg: "#74add1", txt: "Azul" },
            lantanideo: { bg: "#f1b6da", txt: "Rosa Claro" },
            actinideo: { bg: "#d01c8b", txt: "Magenta" },
            "pos-transicao": { bg: "#abd9e9", txt: "Azul Claro" },
            semimetal: { bg: "#80cbc4", txt: "Verde Água" },
            "nao-metal": { bg: "#a6d96a", txt: "Verde Claro" },
            halogenio: { bg: "#f46d43", txt: "Laranja Escuro" },
            "gas-nobre": { bg: "#c2a5cf", txt: "Roxo Claro" }
        }
    },

    tema1: {
        nome: "Visão: Protanopia",
        cores: {
            alcalino: { bg: "#0072B2", txt: "Azul Escuro" },
            "alcalino-terreo": { bg: "#E69F00", txt: "Laranja" },
            transicao: { bg: "#785EF0", txt: "Roxo" },
            lantanideo: { bg: "#003366", txt: "Azul Marinho" },
            actinideo: { bg: "#004D40", txt: "Verde Escuro" },
            "pos-transicao": { bg: "#F0E442", txt: "Amarelo" },
            semimetal: { bg: "#B39DDB", txt: "Lilás" },
            "nao-metal": { bg: "#FFF2AE", txt: "Amarelo Claro" },
            halogenio: { bg: "#4A4A4A", txt: "Cinza Escuro" },
            "gas-nobre": { bg: "#56B4E9", txt: "Azul Claro" }
        }
    },

    tema2: {
        nome: "Visão: Deuteranopia",
        cores: {
            alcalino: { bg: "#56B4E9", txt: "Azul Claro" },
            "alcalino-terreo": { bg: "#E69F00", txt: "Laranja" },
            transicao: { bg: "#DC267F", txt: "Rosa Escuro" },
            lantanideo: { bg: "#FFB000", txt: "Amarelo Ouro" },
            actinideo: { bg: "#D8BFD8", txt: "Lilás Claro" },
            "pos-transicao": { bg: "#FFC107", txt: "Amarelo" },
            semimetal: { bg: "#648FFF", txt: "Azul" },
            "nao-metal": { bg: "#33B5E5", txt: "Ciano" },
            halogenio: { bg: "#581C87", txt: "Roxo Escuro" },
            "gas-nobre": { bg: "#0072B2", txt: "Azul Escuro" }
        }
    },

    tema3: {
        nome: "Visão: Tritanopia",
        cores: {
            alcalino: { bg: "#D55E00", txt: "Vermelho / Laranja" },
            "alcalino-terreo": { bg: "#CC702C", txt: "Marrom Claro" },
            transicao: { bg: "#8C564B", txt: "Marrom" },
            lantanideo: { bg: "#800000", txt: "Vinho" },
            actinideo: { bg: "#C0504D", txt: "Vermelho Suave" },
            "pos-transicao": { bg: "#E0E0E0", txt: "Cinza Claro" },
            semimetal: { bg: "#FA8072", txt: "Salmão" },
            "nao-metal": { bg: "#556B2F", txt: "Verde Oliva" },
            halogenio: { bg: "#F7B6D2", txt: "Rosa Claro" },
            "gas-nobre": { bg: "#2CA02C", txt: "Verde" }
        }
    },

    tema4: {
        nome: "Visão: Acromatopsia (Monocromático / Padrões)",
        cores: {
            alcalino: {
                bg: "repeating-linear-gradient(45deg, #FFFFFF 0px, #FFFFFF 5px, #555555 5px, #555555 7px)",
                txt: "Listras Diagonais Direita"
            },

            "alcalino-terreo": {
                bg: "repeating-linear-gradient(-45deg, #E5E7EB 0px, #E5E7EB 5px, #555555 5px, #555555 7px)",
                txt: "Listras Diagonais Esquerda"
            },

            transicao: {
                bg: "radial-gradient(#333333 1px, transparent 1px)",
                txt: "Pontilhado Fino",
                bgColor: "#9CA3AF",
                size: "6px 6px"
            },

            lantanideo: {
                bg: "repeating-linear-gradient(90deg, #374151 0px, #374151 4px, #888888 4px, #888888 6px)",
                txt: "Listras Verticais"
            },

            actinideo: {
                bg: "repeating-linear-gradient(0deg, #111827 0px, #111827 4px, #777777 4px, #777777 6px)",
                txt: "Listras Horizontais Escuras"
            },

            "pos-transicao": {
                bg: "repeating-linear-gradient(45deg, #E5E7EB 0px, #E5E7EB 5px, #FFFFFF 5px, #FFFFFF 10px)",
                txt: "Listras Diagonais Claras"
            },

            semimetal: {
                bg: "radial-gradient(#333333 15%, transparent 16%)",
                txt: "Pontilhado Médio",
                bgColor: "#BFC3C8",
                size: "7px 7px"
            },

            "nao-metal": {
                bg: "repeating-linear-gradient(0deg, #D1D5DB 0px, #D1D5DB 4px, #FFFFFF 4px, #FFFFFF 8px)",
                txt: "Listras Horizontais Claras"
            },

            halogenio: {
                bg: "repeating-linear-gradient(45deg, #1F2937 0px, #1F2937 5px, #777777 5px, #777777 7px)",
                txt: "Listras Diagonais Escuras"
            },

            "gas-nobre": {
                bg: "linear-gradient(#555555 1px, transparent 1px), linear-gradient(90deg, #555555 1px, transparent 1px)",
                txt: "Quadriculado",
                bgColor: "#D1D5DB",
                size: "8px 8px"
            }
        }
    }
};


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    const botoes = document.querySelectorAll(".botao-tema");
    const elementos = document.querySelectorAll(".elemento");
    const container = document.getElementById("painel-principal");

    let vozAtiva = false;


    // ========================================================
    // CRIA CONTROLES DE VOZ AUTOMATICAMENTE
    // ========================================================

    const painelVoz = document.createElement("div");

    painelVoz.className = "controles-acessibilidade";

    painelVoz.setAttribute("role", "region");
    painelVoz.setAttribute(
        "aria-label",
        "Controles de acessibilidade e leitura por voz"
    );

    painelVoz.style.margin = "15px 0";
    painelVoz.style.padding = "15px";
    painelVoz.style.textAlign = "center";

    painelVoz.innerHTML = `
        <button
            id="btn-voz"
            type="button"
            aria-pressed="false"
        >
            🔊 Ativar leitura por voz
        </button>

        <button
            id="btn-parar-voz"
            type="button"
        >
            ⏹️ Parar leitura
        </button>

        <span
            id="status-voz"
            role="status"
            aria-live="polite"
            style="margin-left: 10px;"
        >
            Leitura por voz desativada.
        </span>
    `;

    const primeiroElemento = document.querySelector(".container");

    if (primeiroElemento) {
        primeiroElemento.parentNode.insertBefore(
            painelVoz,
            primeiroElemento
        );
    }


    // ========================================================
    // ELEMENTOS DOS CONTROLES
    // ========================================================

    const btnVoz = document.getElementById("btn-voz");
    const btnPararVoz = document.getElementById("btn-parar-voz");
    const statusVoz = document.getElementById("status-voz");


    // ========================================================
    // ATUALIZAR LEGENDA
    // ========================================================

    function atualizarLegenda(chaveTema) {

        const dados = dadosModos[chaveTema];

        if (!dados) {
            return;
        }

        const titulo = document.getElementById(
            "titulo-modo-legenda"
        );

        if (titulo) {
            titulo.innerText = dados.nome;
        }


        Object.keys(dados.cores).forEach(function (familia) {

            const box = document.getElementById(
                "box-" + familia
            );

            const txt = document.getElementById(
                "txt-" + familia
            );

            if (!box || !txt) {
                return;
            }

            const info = dados.cores[familia];


            box.style.background = "";
            box.style.backgroundColor = "";
            box.style.backgroundImage = "";
            box.style.backgroundSize = "";


            if (info.bg.includes("gradient")) {

                if (info.bgColor) {
                    box.style.backgroundColor =
                        info.bgColor;
                }

                box.style.backgroundImage =
                    info.bg;

                if (info.size) {
                    box.style.backgroundSize =
                        info.size;
                }

            } else {

                box.style.backgroundColor =
                    info.bg;
            }


            txt.innerText = info.txt;
        });
    }


    // ========================================================
    // IDENTIFICAR CATEGORIA
    // ========================================================

    function obterCategoria(elemento) {

        const classes = elemento.classList;


        if (classes.contains("metal-alcalino")) {
            return "metal alcalino";
        }

        if (classes.contains("metal-alcalino-terreo")) {
            return "metal alcalino-terroso";
        }

        if (classes.contains("metal-transicao")) {
            return "metal de transição";
        }

        if (classes.contains("metal-pos-transicao")) {
            return "metal pós-transição";
        }

        if (classes.contains("lantanideo")) {
            return "lantanídeo";
        }

        if (classes.contains("actinideo")) {
            return "actinídeo";
        }

        if (classes.contains("semimetal")) {
            return "semimetal";
        }

        if (classes.contains("nao-metal")) {
            return "não metal";
        }

        if (classes.contains("halogenio")) {
            return "halogênio";
        }

        if (classes.contains("gas-nobre")) {
            return "gás nobre";
        }

        return "categoria não identificada";
    }


    // ========================================================
    // FUNÇÃO PARA FALAR
    // ========================================================

    function falar(texto) {

        if (!("speechSynthesis" in window)) {

            if (statusVoz) {
                statusVoz.innerText =
                    "Seu navegador não suporta leitura por voz.";
            }

            return;
        }


        if (!vozAtiva) {
            return;
        }


        window.speechSynthesis.cancel();


        const mensagem =
            new SpeechSynthesisUtterance(texto);


        mensagem.lang = "pt-BR";
        mensagem.rate = 0.9;
        mensagem.pitch = 1;
        mensagem.volume = 1;


        window.speechSynthesis.speak(mensagem);
    }


    // ========================================================
    // LER ELEMENTO
    // ========================================================

    function lerElemento(elemento) {

        if (!elemento) {
            return;
        }


        const numeroElemento =
            elemento.querySelector(".numero");

        const simboloElemento =
            elemento.querySelector(".simbolo");

        const nomeElemento =
            elemento.querySelector(".nome");


        const numero =
            numeroElemento
                ? numeroElemento.innerText.trim()
                : "";

        const simbolo =
            simboloElemento
                ? simboloElemento.innerText.trim()
                : "";

        const nome =
            nomeElemento
                ? nomeElemento.innerText.trim()
                : "";


        const categoria =
            obterCategoria(elemento);


        const texto =
            nome +
            ". Símbolo " +
            simbolo +
            ". Número atômico " +
            numero +
            ". Categoria: " +
            categoria +
            ".";


        falar(texto);
    }


    // ========================================================
    // PREPARAR OS 118 ELEMENTOS
    // ========================================================

    elementos.forEach(function (elemento, indice) {

        const numero =
            elemento.querySelector(".numero");

        const simbolo =
            elemento.querySelector(".simbolo");

        const nome =
            elemento.querySelector(".nome");


        const numeroTexto =
            numero
                ? numero.innerText.trim()
                : "";

        const simboloTexto =
            simbolo
                ? simbolo.innerText.trim()
                : "";

        const nomeTexto =
            nome
                ? nome.innerText.trim()
                : "";


        const categoria =
            obterCategoria(elemento);


        // Navegação pelo TAB
        elemento.setAttribute(
            "tabindex",
            "0"
        );


        // Acessibilidade
        elemento.setAttribute(
            "role",
            "button"
        );


        elemento.setAttribute(
            "aria-label",
            nomeTexto +
            ". Símbolo " +
            simboloTexto +
            ". Número atômico " +
            numeroTexto +
            ". Categoria: " +
            categoria
        );


        elemento.setAttribute(
            "data-indice",
            indice + 1
        );


        // ====================================================
        // CLIQUE
        // ====================================================

        elemento.addEventListener(
            "click",
            function () {

                if (!vozAtiva) {

                    vozAtiva = true;

                    btnVoz.classList.add("ativo");

                    btnVoz.setAttribute(
                        "aria-pressed",
                        "true"
                    );

                    statusVoz.innerText =
                        "Leitura por voz ativada.";
                }


                lerElemento(elemento);
            }
        );


        // ====================================================
        // TECLADO
        // ====================================================

        elemento.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();


                    if (!vozAtiva) {

                        vozAtiva = true;

                        btnVoz.classList.add("ativo");

                        btnVoz.setAttribute(
                            "aria-pressed",
                            "true"
                        );

                        statusVoz.innerText =
                            "Leitura por voz ativada.";
                    }


                    lerElemento(elemento);
                }
            }
        );


        // ====================================================
        // FOCO
        // ====================================================

        elemento.addEventListener(
            "focus",
            function () {

                elemento.classList.add(
                    "foco-acessibilidade"
                );
            }
        );


        elemento.addEventListener(
            "blur",
            function () {

                elemento.classList.remove(
                    "foco-acessibilidade"
                );
            }
        );

    });


    // ========================================================
    // BOTÃO ATIVAR VOZ
    // ========================================================

    btnVoz.addEventListener(
        "click",
        function () {

            if (!("speechSynthesis" in window)) {

                statusVoz.innerText =
                    "Seu navegador não suporta leitura por voz.";

                return;
            }


            vozAtiva = true;


            btnVoz.classList.add("ativo");


            btnVoz.setAttribute(
                "aria-pressed",
                "true"
            );


            statusVoz.innerText =
                "Leitura por voz ativada. Use TAB para navegar pela tabela.";


            window.speechSynthesis.cancel();


            const mensagem =
                new SpeechSynthesisUtterance(
                    "Leitura por voz ativada. Use a tecla Tab para navegar pelos elementos da tabela periódica. Pressione Enter ou Espaço para ouvir as informações do elemento."
                );


            mensagem.lang = "pt-BR";
            mensagem.rate = 0.9;


            window.speechSynthesis.speak(
                mensagem
            );
        }
    );


    // ========================================================
    // BOTÃO PARAR
    // ========================================================

    btnPararVoz.addEventListener(
        "click",
        function () {

            window.speechSynthesis.cancel();


            vozAtiva = false;


            btnVoz.classList.remove(
                "ativo"
            );


            btnVoz.setAttribute(
                "aria-pressed",
                "false"
            );


            statusVoz.innerText =
                "Leitura por voz desativada.";
        }
    );


    // ========================================================
    // BOTÕES DOS TEMAS
    // ========================================================

    botoes.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const tema =
                    botao.getAttribute(
                        "data-tema"
                    );


                if (container) {

                    container.setAttribute(
                        "data-tema",
                        tema
                    );
                }


                botoes.forEach(
                    function (b) {

                        b.classList.remove(
                            "ativo"
                        );

                        b.setAttribute(
                            "aria-pressed",
                            "false"
                        );
                    }
                );


                botao.classList.add(
                    "ativo"
                );


                botao.setAttribute(
                    "aria-pressed",
                    "true"
                );


                atualizarLegenda(
                    tema
                );


                if (
                    vozAtiva &&
                    dadosModos[tema]
                ) {

                    falar(
                        dadosModos[tema].nome
                    );
                }
            }
        );
    });


    // ========================================================
    // ESTADO INICIAL DOS BOTÕES
    // ========================================================

    botoes.forEach(function (botao) {

        botao.setAttribute(
            "aria-pressed",
            botao.classList.contains("ativo")
                ? "true"
                : "false"
        );
    });


    // ========================================================
    // LEGENDA INICIAL
    // ========================================================

    atualizarLegenda("padrao");


    // ========================================================
    // VERIFICAR SUPORTE
    // ========================================================

    if (!("speechSynthesis" in window)) {

        btnVoz.disabled = true;

        btnVoz.innerText =
            "🔇 Voz não suportada neste navegador";

        statusVoz.innerText =
            "Seu navegador não suporta leitura por voz.";
    }

});