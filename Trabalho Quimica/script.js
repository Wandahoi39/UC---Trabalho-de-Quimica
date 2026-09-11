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
            alcalino: { bg: "#FFFFFF", txt: "Branco" },
            "alcalino-terreo": { bg: "#E5E7EB", txt: "Cinza Muito Claro" },
            transicao: { bg: "#9CA3AF", txt: "Cinza Médio" },
            lantanideo: { bg: "#374151", txt: "Cinza Grafite" },
            actinideo: { bg: "#111827", txt: "Preto Quase Puro" },
            "pos-transicao": { bg: "repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 5px, #ffffff 5px, #ffffff 10px)", txt: "Listras Diagonais" },
            semimetal: { bg: "radial-gradient(#6b7280 15%, transparent 16%)", txt: "Pontilhado" },
            "nao-metal": { bg: "repeating-linear-gradient(0deg, #d1d5db, #d1d5db 4px, #ffffff 4px, #ffffff 8px)", txt: "Listras Horizontais" },
            halogenio: { bg: "#1F2937", txt: "Cinza Escuro" },
            "gas-nobre": { bg: "linear-gradient(90deg, #9ca3af 1px, transparent 1px), linear-gradient(#9ca3af 1px, transparent 1px)", txt: "Quadriculado" }
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
                if (info.bg.includes('gradient')) {
                    box.style.background = info.bg;
                    box.style.backgroundSize = familia === 'semimetal' ? '6px 6px' : (familia === 'gas-nobre' ? '8px 8px' : 'auto');
                } else {
                    box.style.background = '';
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
