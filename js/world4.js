const WORLD_4 = {
    id: 4,
    title: "Decisão SE/SENÃO",
    letter: "O",
    bossProva: 15,
    bossAprova: 11,
    intro: {
        title: "⚖️ Decisão SE/SENÃO",
        description: "Programas nem sempre seguem um único caminho. Com <strong>SE/SENÃO</strong> o código toma decisões baseadas em condições — como o exercício da piscina, da cancela e do login que você fez em sala!",
        example: `// SE simples:
SE temperatura < 25 ENTÃO
    ligar aquecedor
FIM SE

// SE/SENÃO:
SE temCartao ENTÃO
    abrir cancela
SENÃO
    emitir alerta
FIM SE`
    },
    stages: [

        // ========== LIGHT SIDE ==========

        // CARD 1 — SE simples
        {
            type: "card", zone: "light",
            title: "O que é uma decisão?",
            content: `<p>Um programa nem sempre executa tudo em sequência. Às vezes ele precisa <strong>tomar uma decisão</strong> baseada em uma condição.</p>
                <p>SE a condição for <strong>verdadeira</strong> → o bloco executa.<br>
                SE for <strong>falsa</strong> → é ignorado e o programa continua.</p>
                <pre class="code-block">SE temperatura &lt; 25 ENTÃO
    ligar aquecedor
FIM SE</pre>
                <p>Esse é o exercício da piscina que você fez em sala!</p>`
        },

        // BASE 1 — Sensor da piscina
        {
            type: "multiple", zone: "light",
            context: "O sensor da piscina mede a temperatura e decide se liga o aquecedor.",
            code: `SE temperatura &lt; 25 ENTÃO
    ligar aquecedor
FIM SE`,
            question: "O sensor mede 22°C. O que o sistema faz?",
            options: [
                "Liga o aquecedor",
                "Exibe 'Temperatura Ideal'",
                "Desliga o sensor",
                "Não faz nada"
            ],
            correct: 0,
            hints: ["22 é menor que 25?", "A condição é verdadeira", "O bloco dentro do SE executa"]
        },

        // BASE 2 — Condição falsa
        {
            type: "multiple", zone: "light",
            context: "Entendendo o SE simples — quando a condição não é satisfeita.",
            question: "O que acontece se a condição do SE for FALSA?",
            options: [
                "O bloco é ignorado e o programa continua",
                "O programa para completamente",
                "O bloco executa assim mesmo",
                "Gera um erro"
            ],
            correct: 0,
            hints: ["SE simples não tem SENÃO", "Falso = pula o bloco", "O programa não para — apenas ignora"]
        },

        // CARD 2 — SE/SENÃO
        {
            type: "card", zone: "light",
            title: "SE/SENÃO — dois caminhos",
            content: `<p>Quando há duas possibilidades, usamos <strong>SE/SENÃO</strong>. Sempre <strong>um dos dois caminhos</strong> será executado — nunca os dois.</p>
                <pre class="code-block">SE temCartao == verdadeiro ENTÃO
    abrir cancela
SENÃO
    emitir alerta
    manter cancela fechada
FIM SE</pre>
                <p>Esse é o exercício da cancela do estacionamento!</p>`
        },

        // BASE 3 — Cancela
        {
            type: "multiple", zone: "light",
            context: "A cancela do estacionamento verifica se o motorista tem cartão de acesso.",
            code: `SE temCartao == verdadeiro ENTÃO
    abrir cancela
SENÃO
    emitir alerta
    manter cancela fechada
FIM SE`,
            question: "O motorista NÃO tem cartão. Qual é a saída?",
            options: [
                "Emitir alerta e manter fechada",
                "Abrir a cancela",
                "Não fazer nada",
                "Pedir senha"
            ],
            correct: 0,
            hints: ["temCartao é falso", "Vai para o SENÃO", "Executa os dois comandos do SENÃO"]
        },

        // BASE 4 — Login
        {
            type: "multiple", zone: "light",
            context: "Sistema de login — exercício 6 do professor.",
            question: "Qual estrutura representa corretamente o sistema de login?",
            options: [
                "SE senha == '1234' ENTÃO → 'Acesso Permitido' SENÃO → 'Senha Incorreta'",
                "SE senha == '1234' ENTÃO → 'Senha Incorreta' SENÃO → 'Acesso Permitido'",
                "SE senha != '1234' ENTÃO → 'Acesso Permitido'",
                "SE senha ENTÃO → '1234'"
            ],
            correct: 0,
            hints: ["Condição verdadeira = senha correta = acesso", "SENÃO = senha errada", "Atenção à ordem dos blocos"]
        },

        // CARD 3 — SENÃO SE
        {
            type: "card", zone: "light",
            title: "SENÃO SE — mais de dois caminhos",
            content: `<p>Quando há <strong>três ou mais</strong> possibilidades, encadeamos condições. O programa testa em ordem — a primeira verdadeira ganha.</p>
                <pre class="code-block">SE nota >= 7 ENTÃO
    escrever("Aprovado")
SENÃO SE nota >= 5 ENTÃO
    escrever("Recuperação")
SENÃO
    escrever("Reprovado")
FIM SE</pre>
                <p>Esse é o exercício 11 do professor — média com aprovação!</p>`
        },

        // BASE 5 — Maior entre dois
        {
            type: "multiple", zone: "light",
            context: "Encontrando o maior entre dois números — exercício 9 do professor.",
            code: `SE a > b ENTÃO
    escrever("Maior: ", a)
SENÃO SE b > a ENTÃO
    escrever("Maior: ", b)
SENÃO
    escrever("São iguais")
FIM SE`,
            question: "a = 8, b = 12. Qual é a saída?",
            options: [
                "Maior: 12",
                "Maior: 8",
                "São iguais",
                "Erro"
            ],
            correct: 0,
            hints: ["8 > 12? Não", "SENÃO SE: 12 > 8? Sim", "Executa escrever com b"]
        },

        // BASE 6 — Média
        {
            type: "multiple", zone: "light",
            context: "Calculando aprovação pela média — exercício 11 do professor.",
            code: `SE media >= 7 ENTÃO
    escrever("Aprovado")
SENÃO SE media >= 5 ENTÃO
    escrever("Recuperação")
SENÃO
    escrever("Reprovado")
FIM SE`,
            question: "media = 6. Qual é a saída?",
            options: [
                "Recuperação",
                "Aprovado",
                "Reprovado",
                "Erro"
            ],
            correct: 0,
            hints: ["6 >= 7? Não", "6 >= 5? Sim — entra no SENÃO SE", "Recuperação"]
        },

        // ========== DARK SIDE ==========

        // BASE 7 — Combustível
        {
            type: "multiple", zone: "dark",
            context: "Alerta de combustível — exercício 8 do professor. Duas condições com E.",
            code: `SE combustivel < 10 E distancia > 20 ENTÃO
    escrever("Parada Obrigatória")
FIM SE`,
            question: "combustivel = 8, distancia = 25. O alerta é emitido?",
            options: [
                "Sim — ambas condições são verdadeiras",
                "Não — combustível não está abaixo de 10",
                "Não — distância não é maior que 20",
                "Sim — basta uma ser verdadeira"
            ],
            correct: 0,
            hints: ["8 < 10? Sim", "25 > 20? Sim", "E exige as duas — ambas verdadeiras"]
        },

        // BASE 8 — Par ou ímpar
        {
            type: "multiple", zone: "dark",
            context: "Verificando se um número é par ou ímpar — exercício 10 do professor.",
            code: `SE numero % 2 == 0 ENTÃO
    escrever("Par")
SENÃO
    escrever("Ímpar")
FIM SE`,
            question: "numero = 7. Qual é a saída?",
            options: [
                "Ímpar",
                "Par",
                "Erro",
                "Nada"
            ],
            correct: 0,
            hints: ["7 % 2 = 1", "1 == 0? Não", "Vai pro SENÃO: Ímpar"]
        },

        // BASE 9 — Write: sensor piscina
        {
            type: "write", zone: "dark",
            context: "O sensor mede a temperatura. Se for menor que 25, ligue o aquecedor.",
            question: "Escreva a linha da condição.",
            prompt: "Use o formato: <code>SE ... ENTÃO</code>",
            answers: [
                "SE temperatura < 25 ENTÃO",
                "se temperatura < 25 então",
                "SE temperatura<25 ENTÃO",
                "se temperatura<25 então"
            ],
            hints: ["SE [condição] ENTÃO", "A condição é temperatura < 25"],
            successMessage: "Correto! Estrutura SE simples."
        },

        // BASE 10 — Combustível invertido
        {
            type: "multiple", zone: "dark",
            context: "Alerta de combustível — testando quando uma condição falha.",
            code: `SE combustivel < 10 E distancia > 20 ENTÃO
    escrever("Parada Obrigatória")
FIM SE`,
            question: "combustivel = 15, distancia = 30. O alerta é emitido?",
            options: [
                "Não — combustível não está abaixo de 10",
                "Sim — distância é maior que 20",
                "Sim — ambas verdadeiras",
                "Não — nenhuma é verdadeira"
            ],
            correct: 0,
            hints: ["15 < 10? Não — primeira já falhou", "E exige as duas", "Basta uma ser falsa"]
        },

        // BASE 11 — Write: login
        {
            type: "write", zone: "dark",
            context: "Sistema de login. Se a senha for igual a '1234', exiba 'Acesso Permitido'.",
            question: "Escreva a linha da condição.",
            prompt: "Use o formato: <code>SE ... ENTÃO</code>",
            answers: [
                "SE senha == '1234' ENTÃO",
                "se senha == '1234' então",
                "SE senha=='1234' ENTÃO",
                "se senha=='1234' então"
            ],
            hints: ["Comparação usa ==", "Texto vai entre aspas"],
            successMessage: "Correto! Comparação com string."
        },

        // CARD 4 — SE aninhado
        {
            type: "card", zone: "dark",
            title: "SE aninhado",
            content: `<p>Um SE pode estar <strong>dentro de outro SE</strong>. O SE interno só é testado se o externo for verdadeiro.</p>
                <pre class="code-block">SE temCartao ENTÃO
    SE saldo > 0 ENTÃO
        liberar acesso
    SENÃO
        escrever("Saldo insuficiente")
    FIM SE
SENÃO
    escrever("Cartão inválido")
FIM SE</pre>
                <p>Cada SE tem seu próprio <strong>FIM SE</strong>.</p>`
        },

        // BASE 12 — SE aninhado aplicado
        {
            type: "multiple", zone: "dark",
            context: "Cancela com verificação de saldo — SE aninhado.",
            code: `SE temCartao ENTÃO
    SE saldo > 0 ENTÃO
        escrever("Acesso liberado")
    SENÃO
        escrever("Saldo insuficiente")
    FIM SE
SENÃO
    escrever("Cartão inválido")
FIM SE`,
            question: "temCartao = verdadeiro, saldo = 0. Qual é a saída?",
            options: [
                "Saldo insuficiente",
                "Acesso liberado",
                "Cartão inválido",
                "Nada"
            ],
            correct: 0,
            hints: ["temCartao é verdadeiro — entra no SE externo", "saldo > 0? 0 > 0? Não", "Cai no SENÃO interno"]
        },

        // BASE 13 — Write: SENÃO SE recuperação
        {
            type: "write", zone: "dark",
            context: "Notas com pesos 3, 2 e 4. Se menor que 7 mas maior ou igual a 5, o aluno vai para recuperação.",
            question: "Escreva o SENÃO SE para recuperação.",
            prompt: "Use o formato: <code>SENÃO SE ... ENTÃO</code>",
            answers: [
                "SENÃO SE media >= 5 ENTÃO",
                "senão se media >= 5 então",
                "SENÃO SE media>=5 ENTÃO",
                "senão se media>=5 então"
            ],
            hints: ["SENÃO SE [condição] ENTÃO", "A condição é media >= 5"],
            successMessage: "Correto! Encadeamento de condições."
        },

        // BASE 14 — Par e positivo (M3+M4)
        {
            type: "multiple", zone: "dark",
            context: "Combinando operadores de M3 com SE/SENÃO de M4.",
            code: `SE numero > 0 E numero % 2 == 0 ENTÃO
    escrever("Par positivo")
SENÃO SE numero % 2 == 0 ENTÃO
    escrever("Par negativo")
SENÃO
    escrever("Ímpar")
FIM SE`,
            question: "numero = -4. Qual é a saída?",
            options: [
                "Par negativo",
                "Par positivo",
                "Ímpar",
                "Erro"
            ],
            correct: 0,
            hints: ["-4 > 0? Não — primeira falhou", "-4 % 2 == 0? Sim — entra no SENÃO SE", "Par negativo"]
        },

        // BASE 15 — Write: maior entre dois
        {
            type: "write", zone: "dark",
            context: "Leia dois números a e b. Verifique qual é o maior.",
            question: "Escreva a condição para verificar se a é maior que b.",
            prompt: "Use o formato: <code>SE ... ENTÃO</code>",
            answers: [
                "SE a > b ENTÃO",
                "se a > b então",
                "SE a>b ENTÃO",
                "se a>b então"
            ],
            hints: ["Compare a com b usando >"],
            successMessage: "Correto! Comparação entre duas variáveis."
        },

        // BASE 16 — Write: semáforo
        {
            type: "write", zone: "dark",
            context: "Semáforo inteligente. Após verificar o estado verde, escreva a condição para amarelo.",
            question: "Escreva o SENÃO SE para o estado amarelo.",
            prompt: "Use o formato: <code>SENÃO SE ... ENTÃO</code>",
            answers: [
                "SENÃO SE cor == 'amarelo' ENTÃO",
                "senão se cor == 'amarelo' então",
                "SENÃO SE cor=='amarelo' ENTÃO",
                "senão se cor=='amarelo' então"
            ],
            hints: ["SENÃO SE cor == 'amarelo' ENTÃO", "Texto entre aspas"],
            successMessage: "Correto! SENÃO SE com comparação de texto."
        },

    ],

    bossQuestions: [
        {
            id: 1,
            question: "combustivel=5, distancia=15. O alerta é emitido?",
            code: `SE combustivel < 10 E distancia > 20 ENTÃO
    escrever("Parada Obrigatória")
FIM SE`,
            options: ["Não — distância não é maior que 20", "Sim — ambas verdadeiras", "Sim — combustível está baixo", "Não — combustível não está baixo"],
            correct: 0,
            explanation: "5 < 10? Sim. 15 > 20? Não. E exige as duas."
        },
        {
            id: 2,
            question: "nota = 4.5. Qual é a saída?",
            code: `SE nota >= 7 ENTÃO
    escrever("Aprovado")
SENÃO SE nota >= 5 ENTÃO
    escrever("Recuperação")
SENÃO
    escrever("Reprovado")
FIM SE`,
            options: ["Reprovado", "Aprovado", "Recuperação", "Erro"],
            correct: 0,
            explanation: "4.5 >= 7? Não. 4.5 >= 5? Não. Cai no SENÃO final."
        },
        {
            id: 3,
            question: "Qual estrutura usar quando há exatamente DOIS caminhos possíveis?",
            options: ["SE/SENÃO", "SE simples", "SENÃO SE", "SE aninhado"],
            correct: 0,
            explanation: "Dois caminhos = SE/SENÃO. Um caminho = SE simples."
        },
        {
            id: 4,
            question: "temCartao=falso, saldo=100. Qual é a saída?",
            code: `SE temCartao ENTÃO
    SE saldo > 0 ENTÃO
        escrever("Acesso liberado")
    SENÃO
        escrever("Saldo insuficiente")
    FIM SE
SENÃO
    escrever("Cartão inválido")
FIM SE`,
            options: ["Cartão inválido", "Acesso liberado", "Saldo insuficiente", "Nada"],
            correct: 0,
            explanation: "temCartao é falso — vai direto pro SENÃO externo."
        },
        {
            id: 5,
            question: "numero = 0. O que o código exibe?",
            code: `SE numero > 0 ENTÃO
    escrever("Positivo")
SENÃO SE numero < 0 ENTÃO
    escrever("Negativo")
SENÃO
    escrever("Zero")
FIM SE`,
            options: ["Zero", "Positivo", "Negativo", "Nada"],
            correct: 0,
            explanation: "0 > 0? Não. 0 < 0? Não. Cai no SENÃO final."
        },
        {
            id: 6,
            question: "Qual é a diferença entre SE simples e SE/SENÃO?",
            options: ["SE simples pode não executar nada; SE/SENÃO sempre executa um caminho", "São iguais", "SE simples é mais rápido", "SE/SENÃO só funciona com números"],
            correct: 0,
            explanation: "SE simples: pode ignorar tudo. SE/SENÃO: sempre um caminho."
        },
        {
            id: 7,
            question: "senha = 'abc'. Qual é a saída?",
            code: `SE senha == '1234' ENTÃO
    escrever("Acesso Permitido")
SENÃO
    escrever("Senha Incorreta")
FIM SE`,
            options: ["Senha Incorreta", "Acesso Permitido", "Nada", "Erro"],
            correct: 0,
            explanation: "'abc' != '1234'. Vai pro SENÃO."
        },
        {
            id: 8,
            question: "a=5, b=5. Qual é a saída?",
            code: `SE a > b ENTÃO
    escrever("Maior: ", a)
SENÃO SE b > a ENTÃO
    escrever("Maior: ", b)
SENÃO
    escrever("São iguais")
FIM SE`,
            options: ["São iguais", "Maior: 5", "Maior: 5 duas vezes", "Erro"],
            correct: 0,
            explanation: "5 > 5? Não. 5 > 5? Não. Cai no SENÃO: São iguais."
        },
        {
            id: 9,
            question: "Quantos FIM SE são necessários para três SE aninhados?",
            options: ["3", "1", "2", "0"],
            correct: 0,
            explanation: "Cada SE precisa de exatamente um FIM SE."
        },
        {
            id: 10,
            question: "temperatura=30. O que acontece?",
            code: `SE temperatura < 25 ENTÃO
    escrever("Ligar aquecedor")
FIM SE
escrever("Verificação concluída")`,
            options: ["Exibe só 'Verificação concluída'", "Exibe as duas mensagens", "Exibe só 'Ligar aquecedor'", "Não exibe nada"],
            correct: 0,
            explanation: "30 < 25? Não — pula o SE. O escrever fora do SE sempre executa."
        },
        {
            id: 11,
            question: "media=6.5. Qual é a saída? (corte 7, recuperação em 5)",
            options: ["Recuperação", "Aprovado", "Reprovado", "Erro"],
            correct: 0,
            explanation: "6.5 >= 7? Não. 6.5 >= 5? Sim. Recuperação."
        },
        {
            id: 12,
            question: "vip=falso, compra=600. Desconto é aplicado?",
            code: `SE vip == verdadeiro OU compra > 500 ENTÃO
    escrever("Desconto aplicado")
SENÃO
    escrever("Sem desconto")
FIM SE`,
            options: ["Sim — compra > 500 é verdadeiro", "Não — vip é falso", "Não — as duas são falsas", "Sim — vip é verdadeiro"],
            correct: 0,
            explanation: "OU precisa de apenas uma verdadeira. compra=600 > 500? Sim."
        },
        {
            id: 13,
            question: "Qual erro está neste código: SE x > 0 / escrever('Positivo') / FIM SE",
            options: ["Falta ENTÃO após a condição", "Falta SENÃO", "FIM SE está errado", "escrever está errado"],
            correct: 0,
            explanation: "A sintaxe correta é: SE condição ENTÃO."
        },
        {
            id: 14,
            question: "numero = -4. Qual é a saída?",
            code: `SE numero > 0 E numero % 2 == 0 ENTÃO
    escrever("Par positivo")
SENÃO SE numero % 2 == 0 ENTÃO
    escrever("Par negativo")
SENÃO
    escrever("Ímpar")
FIM SE`,
            options: ["Par negativo", "Par positivo", "Ímpar", "Erro"],
            correct: 0,
            explanation: "-4 > 0? Não. -4 % 2 == 0? Sim. Par negativo."
        },
        {
            id: 15,
            question: "temCartao=verdadeiro, saldo=50. Qual é a saída?",
            code: `SE temCartao ENTÃO
    SE saldo > 0 ENTÃO
        escrever("Acesso liberado")
    SENÃO
        escrever("Saldo insuficiente")
    FIM SE
SENÃO
    escrever("Cartão inválido")
FIM SE`,
            options: ["Acesso liberado", "Saldo insuficiente", "Cartão inválido", "Nada"],
            correct: 0,
            explanation: "temCartao verdadeiro → entra. saldo=50 > 0? Sim → Acesso liberado."
        }
    ]
};
