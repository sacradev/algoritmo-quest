const WORLD_4 = {
    id: 4,
    title: "Decisão SE/SENÃO",
    letter: "O",
    bossProva: 15,
    bossAprova: 11,
    intro: {
        title: "⚖️ Decisão SE/SENÃO",
        description: "Programas nem sempre seguem um único caminho. Com <strong>SE/SENÃO</strong> o código toma decisões baseadas em condições — testando se algo é verdadeiro ou falso para escolher o que executar.",
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
FIM SE</pre>`
        },

        // BANK 1 — SE simples (sensor piscina e variações)
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "O sensor da piscina mede a temperatura e decide se liga o aquecedor.",
                    code: `SE temperatura &lt; 25 ENTÃO\n    ligar aquecedor\nFIM SE`,
                    question: "O sensor mede 22°C. O que o sistema faz?",
                    options: ["Liga o aquecedor", "Exibe 'Temperatura Ideal'", "Desliga o sensor", "Não faz nada"],
                    correct: 0,
                    hints: ["22 é menor que 25?", "Se a condição é verdadeira, o bloco executa."],
                    successMessage: "Correto! 22 < 25 → condição verdadeira → o bloco executa."
                },
                {
                    type: "multiple",
                    context: "O sensor da piscina mede a temperatura e decide se liga o aquecedor.",
                    code: `SE temperatura &lt; 25 ENTÃO\n    ligar aquecedor\nFIM SE`,
                    question: "O sensor mede 28°C. O que o sistema faz?",
                    options: ["Não faz nada — o bloco é ignorado", "Liga o aquecedor", "Desliga o sensor", "Exibe erro"],
                    correct: 0,
                    hints: ["28 é menor que 25?", "Se a condição é falsa, o que acontece com o bloco?"],
                    successMessage: "Correto! 28 < 25 é falso → o bloco é ignorado, nada acontece."
                },
                {
                    type: "multiple",
                    context: "Sistema de alerta de velocidade.",
                    code: `SE velocidade > 80 ENTÃO\n    emitir alerta\nFIM SE`,
                    question: "velocidade = 95. O que acontece?",
                    options: ["Emite o alerta", "Não faz nada", "Reduz a velocidade", "Exibe erro"],
                    correct: 0,
                    hints: ["95 é maior que 80?", "A condição é verdadeira — o bloco executa."],
                    successMessage: "Correto! 95 > 80 → condição verdadeira → alerta emitido."
                },
                {
                    type: "multiple",
                    context: "Sistema de alerta de velocidade.",
                    code: `SE velocidade > 80 ENTÃO\n    emitir alerta\nFIM SE`,
                    question: "velocidade = 60. O que acontece?",
                    options: ["Nada — o bloco é ignorado", "Emite o alerta", "Reduz a velocidade", "Exibe 'Velocidade OK'"],
                    correct: 0,
                    hints: ["60 é maior que 80?", "Condição falsa em SE simples — o que executa?"],
                    successMessage: "Correto! 60 > 80 é falso → bloco ignorado → programa continua normalmente."
                }
            ]
        },

        // BANK 2 — Condição falsa
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "Entendendo o SE simples — quando a condição não é satisfeita.",
                    question: "O que acontece se a condição do SE for FALSA?",
                    options: ["O bloco é ignorado e o programa continua", "O programa para completamente", "O bloco executa assim mesmo", "Gera um erro"],
                    correct: 0,
                    hints: ["SE simples não tem SENÃO.", "O programa não para — o que ele faz com o bloco?"],
                    successMessage: "Correto! Quando a condição é falsa, o bloco do SE é ignorado e o programa segue normalmente."
                },
                {
                    type: "multiple",
                    context: "Analise o código com atenção.",
                    code: `SE saldo > 0 ENTÃO\n    escrever("Saldo disponível")\nFIM SE\nescrever("Consulta encerrada")`,
                    question: "saldo = 0. O que é exibido?",
                    options: ["Apenas 'Consulta encerrada'", "Apenas 'Saldo disponível'", "As duas mensagens", "Nada"],
                    correct: 0,
                    hints: ["0 > 0 é verdadeiro ou falso?", "O escrever fora do SE sempre executa."],
                    successMessage: "Correto! saldo=0 → condição falsa → pula o SE. O escrever de fora sempre executa."
                },
                {
                    type: "multiple",
                    context: "Analise o código com atenção.",
                    code: `SE idade >= 18 ENTÃO\n    escrever("Maior de idade")\nFIM SE\nescrever("Verificação concluída")`,
                    question: "idade = 15. O que é exibido?",
                    options: ["Apenas 'Verificação concluída'", "Apenas 'Maior de idade'", "As duas mensagens", "Nada"],
                    correct: 0,
                    hints: ["15 >= 18?", "O que está fora do bloco SE sempre executa."],
                    successMessage: "Correto! 15 >= 18 é falso → SE ignorado. 'Verificação concluída' sempre exibe."
                },
                {
                    type: "multiple",
                    context: "Quantos caminhos um SE simples pode ter?",
                    question: "Um SE simples (sem SENÃO) tem quantos caminhos possíveis?",
                    options: ["1 — o bloco executa ou é ignorado", "2 — verdadeiro e falso", "3 — verdadeiro, falso e erro", "Depende da condição"],
                    correct: 0,
                    hints: ["SE simples só tem o bloco do SE, sem alternativa.", "O programa ignora ou executa — um único caminho opcional."],
                    successMessage: "Correto! SE simples tem apenas o caminho verdadeiro — quando falso, simplesmente pula."
                }
            ]
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
FIM SE</pre>`
        },

        // BANK 3 — SE/SENÃO (cancela e variações)
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "A cancela do estacionamento verifica se o motorista tem cartão de acesso.",
                    code: `SE temCartao == verdadeiro ENTÃO\n    abrir cancela\nSENÃO\n    emitir alerta\n    manter cancela fechada\nFIM SE`,
                    question: "O motorista NÃO tem cartão. Qual é a saída?",
                    options: ["Emitir alerta e manter fechada", "Abrir a cancela", "Não fazer nada", "Pedir senha"],
                    correct: 0,
                    hints: ["temCartao é falso.", "Falso → vai para qual bloco?"],
                    successMessage: "Correto! Sem cartão → condição falsa → executa o bloco SENÃO."
                },
                {
                    type: "multiple",
                    context: "Sistema de temperatura com dois caminhos.",
                    code: `SE temp > 37.5 ENTÃO\n    escrever("Febre")\nSENÃO\n    escrever("Normal")\nFIM SE`,
                    question: "temp = 36.8. Qual é a saída?",
                    options: ["Normal", "Febre", "As duas mensagens", "Nada"],
                    correct: 0,
                    hints: ["36.8 > 37.5?", "Falso → qual bloco executa?"],
                    successMessage: "Correto! 36.8 > 37.5 é falso → SENÃO executa → 'Normal'."
                },
                {
                    type: "multiple",
                    context: "Sistema de desconto em loja.",
                    code: `SE compra >= 100 ENTÃO\n    escrever("Desconto aplicado")\nSENÃO\n    escrever("Sem desconto")\nFIM SE`,
                    question: "compra = 100. Qual é a saída?",
                    options: ["Desconto aplicado", "Sem desconto", "As duas mensagens", "Nada"],
                    correct: 0,
                    hints: ["100 >= 100?", ">= inclui o valor exato."],
                    successMessage: "Correto! 100 >= 100 é verdadeiro → SE executa → 'Desconto aplicado'."
                },
                {
                    type: "multiple",
                    context: "Com SE/SENÃO, quantos caminhos são executados?",
                    question: "Num SE/SENÃO, se a condição for verdadeira, o que acontece com o bloco SENÃO?",
                    options: ["É ignorado — apenas o SE executa", "Executa depois do SE", "Executa junto com o SE", "Gera erro"],
                    correct: 0,
                    hints: ["SE/SENÃO sempre executa exatamente um dos dois blocos.", "Nunca os dois ao mesmo tempo."],
                    successMessage: "Correto! SE/SENÃO é exclusivo — verdadeiro executa o SE e ignora o SENÃO."
                }
            ]
        },

        // BANK 4 — Login
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "Sistema de login com verificação de senha.",
                    question: "Qual estrutura representa corretamente o sistema de login?",
                    options: [
                        "SE senha == '1234' ENTÃO → 'Acesso Permitido' SENÃO → 'Senha Incorreta'",
                        "SE senha == '1234' ENTÃO → 'Senha Incorreta' SENÃO → 'Acesso Permitido'",
                        "SE senha != '1234' ENTÃO → 'Acesso Permitido'",
                        "SE senha ENTÃO → '1234'"
                    ],
                    correct: 0,
                    hints: ["Condição verdadeira = senha correta.", "Atenção à ordem dos blocos SE e SENÃO."],
                    successMessage: "Correto! Senha correta → SE executa. Senha errada → SENÃO executa."
                },
                {
                    type: "multiple",
                    context: "Sistema de login.",
                    code: `SE senha == '1234' ENTÃO\n    escrever("Acesso Permitido")\nSENÃO\n    escrever("Senha Incorreta")\nFIM SE`,
                    question: "senha = 'abcd'. Qual é a saída?",
                    options: ["Senha Incorreta", "Acesso Permitido", "As duas mensagens", "Nada"],
                    correct: 0,
                    hints: ["'abcd' == '1234'?", "Falso → qual bloco executa?"],
                    successMessage: "Correto! 'abcd' != '1234' → condição falsa → SENÃO → 'Senha Incorreta'."
                },
                {
                    type: "multiple",
                    context: "Sistema de login.",
                    code: `SE usuario == 'admin' E senha == '1234' ENTÃO\n    escrever("Acesso liberado")\nSENÃO\n    escrever("Credenciais inválidas")\nFIM SE`,
                    question: "usuario = 'admin', senha = '0000'. Qual é a saída?",
                    options: ["Credenciais inválidas", "Acesso liberado", "As duas", "Erro"],
                    correct: 0,
                    hints: ["O E exige que ambas as condições sejam verdadeiras.", "A senha está correta?"],
                    successMessage: "Correto! usuario ok, mas senha errada → E falha → 'Credenciais inválidas'."
                },
                {
                    type: "multiple",
                    context: "Sistema de acesso por nível.",
                    code: `SE nivel >= 3 ENTÃO\n    escrever("Acesso permitido")\nSENÃO\n    escrever("Acesso negado")\nFIM SE`,
                    question: "nivel = 3. Qual é a saída?",
                    options: ["Acesso permitido", "Acesso negado", "As duas", "Nada"],
                    correct: 0,
                    hints: ["3 >= 3?", ">= inclui o valor exato."],
                    successMessage: "Correto! 3 >= 3 é verdadeiro → SE executa → 'Acesso permitido'."
                }
            ]
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
FIM SE</pre>`
        },

        // BANK 5 — Maior entre dois
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "Comparando dois números para encontrar o maior.",
                    code: `SE a > b ENTÃO\n    escrever("Maior: ", a)\nSENÃO SE b > a ENTÃO\n    escrever("Maior: ", b)\nSENÃO\n    escrever("São iguais")\nFIM SE`,
                    question: "a = 8, b = 12. Qual é a saída?",
                    options: ["Maior: 12", "Maior: 8", "São iguais", "Erro"],
                    correct: 0,
                    hints: ["8 > 12?", "Se o primeiro SE falhou, o que é testado a seguir?"],
                    successMessage: "Correto! 8 > 12 falso → SENÃO SE: 12 > 8 verdadeiro → exibe b=12."
                },
                {
                    type: "multiple",
                    context: "Comparando dois números para encontrar o maior.",
                    code: `SE a > b ENTÃO\n    escrever("Maior: ", a)\nSENÃO SE b > a ENTÃO\n    escrever("Maior: ", b)\nSENÃO\n    escrever("São iguais")\nFIM SE`,
                    question: "a = 5, b = 5. Qual é a saída?",
                    options: ["São iguais", "Maior: 5", "Maior: 5 (duas vezes)", "Erro"],
                    correct: 0,
                    hints: ["5 > 5?", "Se ambos os SEs falharem, qual bloco executa?"],
                    successMessage: "Correto! 5 > 5 falso, 5 > 5 falso → cai no SENÃO final: 'São iguais'."
                },
                {
                    type: "multiple",
                    context: "Comparando dois números para encontrar o maior.",
                    code: `SE a > b ENTÃO\n    escrever("Maior: ", a)\nSENÃO SE b > a ENTÃO\n    escrever("Maior: ", b)\nSENÃO\n    escrever("São iguais")\nFIM SE`,
                    question: "a = 15, b = 3. Qual é a saída?",
                    options: ["Maior: 15", "Maior: 3", "São iguais", "Erro"],
                    correct: 0,
                    hints: ["15 > 3?", "Se o primeiro SE for verdadeiro, os outros são testados?"],
                    successMessage: "Correto! 15 > 3 verdadeiro → executa o primeiro bloco imediatamente."
                },
                {
                    type: "multiple",
                    context: "Sobre encadeamento de condições.",
                    question: "Num SENÃO SE, quando o primeiro SE for verdadeiro, o que acontece com os blocos seguintes?",
                    options: ["São todos ignorados", "São todos testados", "O último SENÃO executa também", "Gera erro"],
                    correct: 0,
                    hints: ["O programa executa o primeiro bloco verdadeiro e então...", "Há alguma razão para continuar testando?"],
                    successMessage: "Correto! Assim que encontra a primeira condição verdadeira, executa aquele bloco e ignora o resto."
                }
            ]
        },

        // BANK 6 — Média (SENÃO SE)
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "Calculando a situação do aluno pela média final.",
                    code: `SE media >= 7 ENTÃO\n    escrever("Aprovado")\nSENÃO SE media >= 5 ENTÃO\n    escrever("Recuperação")\nSENÃO\n    escrever("Reprovado")\nFIM SE`,
                    question: "media = 6. Qual é a saída?",
                    options: ["Recuperação", "Aprovado", "Reprovado", "Erro"],
                    correct: 0,
                    hints: ["6 >= 7?", "Se o primeiro falhou, qual é o próximo teste?"],
                    successMessage: "Correto! 6 >= 7 falso → 6 >= 5 verdadeiro → 'Recuperação'."
                },
                {
                    type: "multiple",
                    context: "Calculando a situação do aluno pela média final.",
                    code: `SE media >= 7 ENTÃO\n    escrever("Aprovado")\nSENÃO SE media >= 5 ENTÃO\n    escrever("Recuperação")\nSENÃO\n    escrever("Reprovado")\nFIM SE`,
                    question: "media = 7. Qual é a saída?",
                    options: ["Aprovado", "Recuperação", "Reprovado", "Erro"],
                    correct: 0,
                    hints: ["7 >= 7?", ">= inclui o valor exato."],
                    successMessage: "Correto! 7 >= 7 verdadeiro → entra no primeiro bloco → 'Aprovado'."
                },
                {
                    type: "multiple",
                    context: "Calculando a situação do aluno pela média final.",
                    code: `SE media >= 7 ENTÃO\n    escrever("Aprovado")\nSENÃO SE media >= 5 ENTÃO\n    escrever("Recuperação")\nSENÃO\n    escrever("Reprovado")\nFIM SE`,
                    question: "media = 4.5. Qual é a saída?",
                    options: ["Reprovado", "Aprovado", "Recuperação", "Erro"],
                    correct: 0,
                    hints: ["4.5 >= 7?", "4.5 >= 5?", "Se todos os SEs falharam, o que executa?"],
                    successMessage: "Correto! 4.5 não atinge 7 nem 5 → cai no SENÃO final → 'Reprovado'."
                },
                {
                    type: "multiple",
                    context: "Classificação de produto por peso.",
                    code: `SE peso >= 10 ENTÃO\n    escrever("Pesado")\nSENÃO SE peso >= 5 ENTÃO\n    escrever("Médio")\nSENÃO\n    escrever("Leve")\nFIM SE`,
                    question: "peso = 5. Qual é a saída?",
                    options: ["Médio", "Pesado", "Leve", "Erro"],
                    correct: 0,
                    hints: ["5 >= 10?", "5 >= 5?"],
                    successMessage: "Correto! 5 >= 10 falso → 5 >= 5 verdadeiro → 'Médio'."
                }
            ]
        },

        // ========== DARK SIDE ==========

        // BANK 7 — Combustível
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Alerta de combustível com duas condições combinadas.",
                    code: `SE combustivel < 10 E distancia > 20 ENTÃO\n    escrever("Parada Obrigatória")\nFIM SE`,
                    question: "combustivel = 8, distancia = 25. O alerta é emitido?",
                    options: ["Sim — ambas condições são verdadeiras", "Não — combustível não está abaixo de 10", "Não — distância não é maior que 20", "Sim — basta uma ser verdadeira"],
                    correct: 0,
                    hints: ["Avalie cada condição separadamente.", "O E exige que todas sejam verdadeiras."],
                    successMessage: "Correto! 8 < 10 e 25 > 20 — ambas verdadeiras → alerta emitido."
                },
                {
                    type: "multiple",
                    context: "Alerta de combustível com duas condições combinadas.",
                    code: `SE combustivel < 10 E distancia > 20 ENTÃO\n    escrever("Parada Obrigatória")\nFIM SE`,
                    question: "combustivel = 15, distancia = 30. O alerta é emitido?",
                    options: ["Não — combustível não está abaixo de 10", "Sim — distância é maior que 20", "Sim — ambas verdadeiras", "Não — nenhuma é verdadeira"],
                    correct: 0,
                    hints: ["Avalie a primeira condição: 15 < 10?", "O que o E faz quando a primeira já é falsa?"],
                    successMessage: "Correto! 15 < 10 é falso → o E falha imediatamente → sem alerta."
                },
                {
                    type: "multiple",
                    context: "Alerta de combustível com duas condições combinadas.",
                    code: `SE combustivel < 10 E distancia > 20 ENTÃO\n    escrever("Parada Obrigatória")\nFIM SE`,
                    question: "combustivel = 5, distancia = 15. O alerta é emitido?",
                    options: ["Não — distância não supera 20", "Sim — combustível está baixo", "Sim — ambas verdadeiras", "Não — nenhuma é verdadeira"],
                    correct: 0,
                    hints: ["Avalie cada condição: 5 < 10? E 15 > 20?", "O E exige que TODAS sejam verdadeiras."],
                    successMessage: "Correto! 5 < 10 verdadeiro, mas 15 > 20 falso → E falha → sem alerta."
                },
                {
                    type: "multiple",
                    context: "Sistema de segurança com duas condições.",
                    code: `SE tentativas > 3 E contaSuspensa == falso ENTÃO\n    escrever("Bloqueando conta")\nFIM SE`,
                    question: "tentativas = 4, contaSuspensa = falso. O que acontece?",
                    options: ["Bloqueia a conta", "Não faz nada", "Suspende sem bloquear", "Erro"],
                    correct: 0,
                    hints: ["4 > 3?", "contaSuspensa == falso?", "E com ambas verdadeiras..."],
                    successMessage: "Correto! Ambas verdadeiras → bloco executa → conta bloqueada."
                }
            ]
        },

        // BANK 8 — Par ou ímpar
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Verificando se um número é par ou ímpar.",
                    code: `SE numero % 2 == 0 ENTÃO\n    escrever("Par")\nSENÃO\n    escrever("Ímpar")\nFIM SE`,
                    question: "numero = 7. Qual é a saída?",
                    options: ["Ímpar", "Par", "Erro", "Nada"],
                    correct: 0,
                    hints: ["Qual é o resto de 7 dividido por 2?", "Esse resto é igual a 0?"],
                    successMessage: "Correto! 7 % 2 = 1, não é zero → condição falsa → SENÃO → 'Ímpar'."
                },
                {
                    type: "multiple",
                    context: "Verificando se um número é par ou ímpar.",
                    code: `SE numero % 2 == 0 ENTÃO\n    escrever("Par")\nSENÃO\n    escrever("Ímpar")\nFIM SE`,
                    question: "numero = 12. Qual é a saída?",
                    options: ["Par", "Ímpar", "Erro", "Nada"],
                    correct: 0,
                    hints: ["Qual é o resto de 12 dividido por 2?", "Esse resto é igual a 0?"],
                    successMessage: "Correto! 12 % 2 = 0 → condição verdadeira → SE → 'Par'."
                },
                {
                    type: "multiple",
                    context: "Verificando se um número é par ou ímpar.",
                    code: `SE numero % 2 == 0 ENTÃO\n    escrever("Par")\nSENÃO\n    escrever("Ímpar")\nFIM SE`,
                    question: "numero = 0. Qual é a saída?",
                    options: ["Par", "Ímpar", "Erro", "Nada"],
                    correct: 0,
                    hints: ["Qual é o resto de 0 dividido por 2?", "0 é considerado par na matemática?"],
                    successMessage: "Correto! 0 % 2 = 0 → condição verdadeira → 'Par'. Zero é par."
                },
                {
                    type: "multiple",
                    context: "Sistema de semáforo por número de veículos.",
                    code: `SE veiculos % 2 == 0 ENTÃO\n    escrever("Fluxo par")\nSENÃO\n    escrever("Fluxo ímpar")\nFIM SE`,
                    question: "veiculos = 9. Qual é a saída?",
                    options: ["Fluxo ímpar", "Fluxo par", "Erro", "Nada"],
                    correct: 0,
                    hints: ["Qual é o resto de 9 dividido por 2?", "Esse resto é igual a 0?"],
                    successMessage: "Correto! 9 % 2 = 1, não é zero → SENÃO → 'Fluxo ímpar'."
                }
            ]
        },

        // WRITE 1 — sensor piscina (fixo)
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
            hints: ["SE [condição] ENTÃO", "A variável é temperatura, o operador é <, o valor é 25."],
            successMessage: "Correto! Estrutura SE simples."
        },

        // BANK 9 — SE aninhado aplicado
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Cancela com verificação de saldo — SE aninhado.",
                    code: `SE temCartao ENTÃO\n    SE saldo > 0 ENTÃO\n        escrever("Acesso liberado")\n    SENÃO\n        escrever("Saldo insuficiente")\n    FIM SE\nSENÃO\n    escrever("Cartão inválido")\nFIM SE`,
                    question: "temCartao = verdadeiro, saldo = 0. Qual é a saída?",
                    options: ["Saldo insuficiente", "Acesso liberado", "Cartão inválido", "Nada"],
                    correct: 0,
                    hints: ["temCartao é verdadeiro — entra no SE externo.", "Dentro dele: saldo > 0? 0 > 0?"],
                    successMessage: "Correto! Entra no SE externo → saldo=0 não passa na condição interna → 'Saldo insuficiente'."
                },
                {
                    type: "multiple",
                    context: "Cancela com verificação de saldo — SE aninhado.",
                    code: `SE temCartao ENTÃO\n    SE saldo > 0 ENTÃO\n        escrever("Acesso liberado")\n    SENÃO\n        escrever("Saldo insuficiente")\n    FIM SE\nSENÃO\n    escrever("Cartão inválido")\nFIM SE`,
                    question: "temCartao = falso, saldo = 100. Qual é a saída?",
                    options: ["Cartão inválido", "Acesso liberado", "Saldo insuficiente", "Nada"],
                    correct: 0,
                    hints: ["temCartao é falso — entra no SE externo ou no SENÃO?", "O SE interno é sequer testado?"],
                    successMessage: "Correto! temCartao falso → vai direto para o SENÃO externo → 'Cartão inválido'."
                },
                {
                    type: "multiple",
                    context: "Cancela com verificação de saldo — SE aninhado.",
                    code: `SE temCartao ENTÃO\n    SE saldo > 0 ENTÃO\n        escrever("Acesso liberado")\n    SENÃO\n        escrever("Saldo insuficiente")\n    FIM SE\nSENÃO\n    escrever("Cartão inválido")\nFIM SE`,
                    question: "temCartao = verdadeiro, saldo = 50. Qual é a saída?",
                    options: ["Acesso liberado", "Saldo insuficiente", "Cartão inválido", "Nada"],
                    correct: 0,
                    hints: ["temCartao verdadeiro → entra no SE externo.", "50 > 0?"],
                    successMessage: "Correto! temCartao ok → entra. saldo=50 > 0 verdadeiro → 'Acesso liberado'."
                },
                {
                    type: "multiple",
                    context: "Sobre SE aninhado.",
                    question: "Quantos FIM SE são necessários para dois SEs aninhados?",
                    options: ["2 — um para cada SE", "1 — compartilham o mesmo", "3 — um extra de segurança", "Nenhum"],
                    correct: 0,
                    hints: ["Cada SE precisa ser fechado.", "Aninhado significa um dentro do outro — quantos SEs há?"],
                    successMessage: "Correto! Cada SE precisa de exatamente um FIM SE — dois SEs, dois FIM SE."
                }
            ]
        },

        // WRITE 2 — login (fixo)
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
            hints: ["Comparação usa ==", "Texto vai entre aspas simples."],
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

        // BANK 10 — Par e positivo (M3+M4)
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Combinando operadores de M3 com SE/SENÃO de M4.",
                    code: `SE numero > 0 E numero % 2 == 0 ENTÃO\n    escrever("Par positivo")\nSENÃO SE numero % 2 == 0 ENTÃO\n    escrever("Par negativo")\nSENÃO\n    escrever("Ímpar")\nFIM SE`,
                    question: "numero = -4. Qual é a saída?",
                    options: ["Par negativo", "Par positivo", "Ímpar", "Erro"],
                    correct: 0,
                    hints: ["-4 > 0?", "Se o primeiro SE falhou, qual é o próximo teste?"],
                    successMessage: "Correto! -4 não é positivo → primeiro SE falha. -4 % 2 == 0 verdadeiro → 'Par negativo'."
                },
                {
                    type: "multiple",
                    context: "Combinando operadores de M3 com SE/SENÃO de M4.",
                    code: `SE numero > 0 E numero % 2 == 0 ENTÃO\n    escrever("Par positivo")\nSENÃO SE numero % 2 == 0 ENTÃO\n    escrever("Par negativo")\nSENÃO\n    escrever("Ímpar")\nFIM SE`,
                    question: "numero = 6. Qual é a saída?",
                    options: ["Par positivo", "Par negativo", "Ímpar", "Erro"],
                    correct: 0,
                    hints: ["6 > 0?", "6 % 2 == 0?", "Ambas condições do primeiro SE são verdadeiras?"],
                    successMessage: "Correto! 6 > 0 e 6 % 2 == 0 — ambas verdadeiras → 'Par positivo'."
                },
                {
                    type: "multiple",
                    context: "Combinando operadores de M3 com SE/SENÃO de M4.",
                    code: `SE numero > 0 E numero % 2 == 0 ENTÃO\n    escrever("Par positivo")\nSENÃO SE numero % 2 == 0 ENTÃO\n    escrever("Par negativo")\nSENÃO\n    escrever("Ímpar")\nFIM SE`,
                    question: "numero = 7. Qual é a saída?",
                    options: ["Ímpar", "Par positivo", "Par negativo", "Erro"],
                    correct: 0,
                    hints: ["7 > 0 E 7 % 2 == 0?", "7 % 2 == 0?", "Se nenhum SE for verdadeiro..."],
                    successMessage: "Correto! 7 % 2 = 1, nenhuma condição de par é verdadeira → cai no SENÃO → 'Ímpar'."
                },
                {
                    type: "multiple",
                    context: "Combinando operadores de M3 com SE/SENÃO de M4.",
                    code: `SE numero > 0 E numero % 2 == 0 ENTÃO\n    escrever("Par positivo")\nSENÃO SE numero % 2 == 0 ENTÃO\n    escrever("Par negativo")\nSENÃO\n    escrever("Ímpar")\nFIM SE`,
                    question: "numero = -3. Qual é a saída?",
                    options: ["Ímpar", "Par positivo", "Par negativo", "Erro"],
                    correct: 0,
                    hints: ["-3 > 0?", "-3 % 2 == 0? Qual é o resto de -3 por 2?"],
                    successMessage: "Correto! -3 não é positivo e -3 % 2 != 0 → nenhum SE pega → 'Ímpar'."
                }
            ]
        },

        // WRITE 3 — SENÃO SE recuperação (fixo)
        {
            type: "write", zone: "dark",
            context: "Notas com pesos 3, 2 e 4. Se a média for menor que 7 mas maior ou igual a 5, o aluno vai para recuperação.",
            question: "Escreva o SENÃO SE para recuperação.",
            prompt: "Use o formato: <code>SENÃO SE ... ENTÃO</code>",
            answers: [
                "SENÃO SE media >= 5 ENTÃO",
                "senão se media >= 5 então",
                "SENÃO SE media>=5 ENTÃO",
                "senão se media>=5 então"
            ],
            hints: ["SENÃO SE [condição] ENTÃO", "A condição é media >= 5."],
            successMessage: "Correto! Encadeamento de condições."
        },

        // WRITE 4 — maior entre dois (fixo)
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
            hints: ["Compare a com b usando >."],
            successMessage: "Correto! Comparação entre duas variáveis."
        },

        // WRITE 5 — semáforo (fixo)
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
            hints: ["SENÃO SE [condição] ENTÃO", "Texto entre aspas simples."],
            successMessage: "Correto! SENÃO SE com comparação de texto."
        },

    ],

    bossQuestions: [
        { id: 1, question: "combustivel=5, distancia=15. O alerta é emitido?", code: `SE combustivel < 10 E distancia > 20 ENTÃO\n    escrever("Parada Obrigatória")\nFIM SE`, options: ["Não — distância não é maior que 20", "Sim — ambas verdadeiras", "Sim — combustível está baixo", "Não — combustível não está baixo"], correct: 0, explanation: "5 < 10? Sim. 15 > 20? Não. E exige as duas." },
        { id: 2, question: "nota = 4.5. Qual é a saída?", code: `SE nota >= 7 ENTÃO\n    escrever("Aprovado")\nSENÃO SE nota >= 5 ENTÃO\n    escrever("Recuperação")\nSENÃO\n    escrever("Reprovado")\nFIM SE`, options: ["Reprovado", "Aprovado", "Recuperação", "Erro"], correct: 0, explanation: "4.5 >= 7? Não. 4.5 >= 5? Não. Cai no SENÃO final." },
        { id: 3, question: "Qual estrutura usar quando há exatamente DOIS caminhos possíveis?", options: ["SE/SENÃO", "SE simples", "SENÃO SE", "SE aninhado"], correct: 0, explanation: "Dois caminhos = SE/SENÃO. Um caminho = SE simples." },
        { id: 4, question: "temCartao=falso, saldo=100. Qual é a saída?", code: `SE temCartao ENTÃO\n    SE saldo > 0 ENTÃO\n        escrever("Acesso liberado")\n    SENÃO\n        escrever("Saldo insuficiente")\n    FIM SE\nSENÃO\n    escrever("Cartão inválido")\nFIM SE`, options: ["Cartão inválido", "Acesso liberado", "Saldo insuficiente", "Nada"], correct: 0, explanation: "temCartao é falso — vai direto pro SENÃO externo." },
        { id: 5, question: "numero = 0. O que o código exibe?", code: `SE numero > 0 ENTÃO\n    escrever("Positivo")\nSENÃO SE numero < 0 ENTÃO\n    escrever("Negativo")\nSENÃO\n    escrever("Zero")\nFIM SE`, options: ["Zero", "Positivo", "Negativo", "Nada"], correct: 0, explanation: "0 > 0? Não. 0 < 0? Não. Cai no SENÃO final." },
        { id: 6, question: "Qual é a diferença entre SE simples e SE/SENÃO?", options: ["SE simples pode não executar nada; SE/SENÃO sempre executa um caminho", "São iguais", "SE simples é mais rápido", "SE/SENÃO só funciona com números"], correct: 0, explanation: "SE simples: pode ignorar tudo. SE/SENÃO: sempre um caminho." },
        { id: 7, question: "senha = 'abc'. Qual é a saída?", code: `SE senha == '1234' ENTÃO\n    escrever("Acesso Permitido")\nSENÃO\n    escrever("Senha Incorreta")\nFIM SE`, options: ["Senha Incorreta", "Acesso Permitido", "Nada", "Erro"], correct: 0, explanation: "'abc' != '1234'. Vai pro SENÃO." },
        { id: 8, question: "a=5, b=5. Qual é a saída?", code: `SE a > b ENTÃO\n    escrever("Maior: ", a)\nSENÃO SE b > a ENTÃO\n    escrever("Maior: ", b)\nSENÃO\n    escrever("São iguais")\nFIM SE`, options: ["São iguais", "Maior: 5", "Maior: 5 duas vezes", "Erro"], correct: 0, explanation: "5 > 5? Não. 5 > 5? Não. Cai no SENÃO: São iguais." },
        { id: 9, question: "Quantos FIM SE são necessários para três SEs aninhados?", options: ["3", "1", "2", "0"], correct: 0, explanation: "Cada SE precisa de exatamente um FIM SE." },
        { id: 10, question: "temperatura=30. O que acontece?", code: `SE temperatura < 25 ENTÃO\n    escrever("Ligar aquecedor")\nFIM SE\nescrever("Verificação concluída")`, options: ["Exibe só 'Verificação concluída'", "Exibe as duas mensagens", "Exibe só 'Ligar aquecedor'", "Não exibe nada"], correct: 0, explanation: "30 < 25? Não — pula o SE. O escrever fora do SE sempre executa." },
        { id: 11, question: "media=6.5. Qual é a saída? (corte 7, recuperação em 5)", options: ["Recuperação", "Aprovado", "Reprovado", "Erro"], correct: 0, explanation: "6.5 >= 7? Não. 6.5 >= 5? Sim. Recuperação." },
        { id: 12, question: "vip=falso, compra=600. Desconto é aplicado?", code: `SE vip == verdadeiro OU compra > 500 ENTÃO\n    escrever("Desconto aplicado")\nSENÃO\n    escrever("Sem desconto")\nFIM SE`, options: ["Sim — compra > 500 é verdadeiro", "Não — vip é falso", "Não — as duas são falsas", "Sim — vip é verdadeiro"], correct: 0, explanation: "OU precisa de apenas uma verdadeira. compra=600 > 500? Sim." },
        { id: 13, question: "Qual erro está neste código: SE x > 0 / escrever('Positivo') / FIM SE", options: ["Falta ENTÃO após a condição", "Falta SENÃO", "FIM SE está errado", "escrever está errado"], correct: 0, explanation: "A sintaxe correta é: SE condição ENTÃO." },
        { id: 14, question: "numero = -4. Qual é a saída?", code: `SE numero > 0 E numero % 2 == 0 ENTÃO\n    escrever("Par positivo")\nSENÃO SE numero % 2 == 0 ENTÃO\n    escrever("Par negativo")\nSENÃO\n    escrever("Ímpar")\nFIM SE`, options: ["Par negativo", "Par positivo", "Ímpar", "Erro"], correct: 0, explanation: "-4 > 0? Não. -4 % 2 == 0? Sim. Par negativo." },
        { id: 15, question: "temCartao=verdadeiro, saldo=50. Qual é a saída?", code: `SE temCartao ENTÃO\n    SE saldo > 0 ENTÃO\n        escrever("Acesso liberado")\n    SENÃO\n        escrever("Saldo insuficiente")\n    FIM SE\nSENÃO\n    escrever("Cartão inválido")\nFIM SE`, options: ["Acesso liberado", "Saldo insuficiente", "Cartão inválido", "Nada"], correct: 0, explanation: "temCartao verdadeiro → entra. saldo=50 > 0? Sim → Acesso liberado." }
    ]
};
