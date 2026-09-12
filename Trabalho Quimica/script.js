document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.botao-tema');
    const container = document.querySelector('.container');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const tema = botao.dataset.tema;

            container.dataset.tema = tema;

            botoes.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');
        });
    });
});

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

document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.botao-tema');
    const container = document.getElementById('painel-principal');

    function atualizarLegenda(chaveTema) {
    const dados = dadosModos[chaveTema];
    if (!dados) return;

    document.getElementById('titulo-modo-legenda').innerText = dados.nome;

    Object.keys(dados.cores).forEach(familia => {
        const box = document.getElementById(`box-${familia}`);
        const txt = document.getElementById(`txt-${familia}`);

        if (box && txt) {
            const info = dados.cores[familia];
            
            // Limpa estilos prévios
            box.style.background = '';
            box.style.backgroundColor = '';
            box.style.backgroundImage = '';
            box.style.backgroundSize = '';

            if (info.bg.includes('gradient')) {
                // Aplica a cor de fundo base, caso exista (ex: semimetais e gases nobres)
                if (info.bgColor) {
                    box.style.backgroundColor = info.bgColor;
                }
                box.style.backgroundImage = info.bg;
                
                // Aplica o tamanho exato do padrão se houver
                if (info.size) {
                    box.style.backgroundSize = info.size;
                }
            } else {
                box.style.backgroundColor = info.bg;
            }
            
            txt.innerText = info.txt;
        }
    });
}

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const tema = botao.getAttribute('data-tema');

            if (container) {
                container.setAttribute('data-tema', tema);
            }

            botoes.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');

            atualizarLegenda(tema);
        });
    });
    
    atualizarLegenda('padrao');
});
