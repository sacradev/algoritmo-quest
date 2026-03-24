const WORLD = {
    id: 1,
    title: "Variáveis e Tipos",
    letter: "A",
    bossProva: 10,
    bossAprova: 7,
    intro: {
        title: "📦 O que são Variáveis?",
        description: "Variáveis são <strong>espaços na memória</strong> que guardam informações. Cada variável tem um <strong>nome</strong> e armazena um <strong>tipo específico</strong> de dado.",
        example: `// Tipos de dados principais:

nome ← "Maria"       // String (texto)
idade ← 25           // Inteiro
altura ← 1.75        // Real (decimal)
ativo ← verdadeiro   // Booleano`
    },
    stages: [

        // CASA 1 — fill com banco (4 variações de cadastro)
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "fill",
                    context: "Você está criando um sistema de cadastro. Preencha com VALORES VÁLIDOS para cada tipo:",
                    template: `// Cadastro de Cliente\n\nnome ← {0}\nidade ← {1}\nclienteVIP ← {2}`,
                    blanks: [
                        { id: 0, placeholder: "???", hint: "Como representamos texto em programação?" },
                        { id: 1, placeholder: "???", hint: "Idade é um número. Precisa de aspas?" },
                        { id: 2, placeholder: "???", hint: "VIP ou não — quantos estados possíveis?" }
                    ],
                    validate: function(answers) {
                        return [
                            { correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Como representamos texto em programação?" },
                            { correct: /^\d+$/.test(answers[1].trim()), hint: "Idade é um número. Precisa de aspas?" },
                            { correct: ["verdadeiro", "falso", "true", "false"].includes(answers[2].trim().toLowerCase()), hint: "VIP ou não — quantos estados possíveis?" }
                        ];
                    },
                    successMessage: "Excelente! Tipos básicos:\n\n• <strong>String</strong>: entre aspas\n• <strong>Inteiro</strong>: número sem decimal\n• <strong>Booleano</strong>: verdadeiro/falso"
                },
                {
                    type: "fill",
                    context: "Sistema de loja. Preencha com VALORES VÁLIDOS para cada variável:",
                    template: `// Cadastro de Produto\n\nnomeProduto ← {0}\nquantidade ← {1}\ndisponivel ← {2}`,
                    blanks: [
                        { id: 0, placeholder: "???", hint: "Nome é texto. Como escrevemos texto?" },
                        { id: 1, placeholder: "???", hint: "Quantidade é número inteiro. Precisa de aspas?" },
                        { id: 2, placeholder: "???", hint: "Disponível ou não — dois estados possíveis?" }
                    ],
                    validate: function(answers) {
                        return [
                            { correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Nome é texto. Como escrevemos texto?" },
                            { correct: /^\d+$/.test(answers[1].trim()), hint: "Quantidade é número inteiro. Precisa de aspas?" },
                            { correct: ["verdadeiro", "falso", "true", "false"].includes(answers[2].trim().toLowerCase()), hint: "Disponível ou não — dois estados possíveis?" }
                        ];
                    },
                    successMessage: "Ótimo! String leva aspas, Inteiro não, Booleano é verdadeiro/falso."
                },
                {
                    type: "fill",
                    context: "Sistema escolar. Preencha com VALORES VÁLIDOS para cada variável:",
                    template: `// Cadastro de Aluno\n\nnomeAluno ← {0}\nturma ← {1}\naprovado ← {2}`,
                    blanks: [
                        { id: 0, placeholder: "???", hint: "Nome é texto — como representamos isso?" },
                        { id: 1, placeholder: "???", hint: "Turma é identificada por texto (ex: '3A')" },
                        { id: 2, placeholder: "???", hint: "Aprovado ou não — qual tipo aceita só dois estados?" }
                    ],
                    validate: function(answers) {
                        return [
                            { correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Nome é texto — como representamos isso?" },
                            { correct: /^["'].*["']$/.test(answers[1].trim()) && answers[1].trim().length > 2, hint: "Turma é identificada por texto (ex: '3A')" },
                            { correct: ["verdadeiro", "falso", "true", "false"].includes(answers[2].trim().toLowerCase()), hint: "Aprovado ou não — qual tipo aceita só dois estados?" }
                        ];
                    },
                    successMessage: "Perfeito! Turma também é String pois pode ter letras como '3A'."
                },
                {
                    type: "fill",
                    context: "Sistema de funcionários. Preencha com VALORES VÁLIDOS para cada variável:",
                    template: `// Cadastro de Funcionário\n\nnomeFuncionario ← {0}\nmatricula ← {1}\nativo ← {2}`,
                    blanks: [
                        { id: 0, placeholder: "???", hint: "Nome completo é texto." },
                        { id: 1, placeholder: "???", hint: "Matrícula é um número identificador sem decimal." },
                        { id: 2, placeholder: "???", hint: "Ativo no emprego ou não — quantos estados?" }
                    ],
                    validate: function(answers) {
                        return [
                            { correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Nome completo é texto." },
                            { correct: /^\d+$/.test(answers[1].trim()), hint: "Matrícula é um número identificador sem decimal." },
                            { correct: ["verdadeiro", "falso", "true", "false"].includes(answers[2].trim().toLowerCase()), hint: "Ativo no emprego ou não — quantos estados?" }
                        ];
                    },
                    successMessage: "Excelente! Matrícula é Inteiro — só números, sem aspas."
                }
            ]
        },

        // CASA 2 — rastreamento de atribuição (banco com 4 variações)
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "Analise CADA LINHA e acompanhe os valores:",
                    code: `a ← 5      // Linha 1\nb ← a      // Linha 2\na ← 10     // Linha 3`,
                    question: "Após executar as 3 linhas, qual é o valor de <strong>b</strong>?",
                    options: ["5", "10", "15", "Indefinido"],
                    correct: 0,
                    hints: ["Acompanhe linha por linha.", "Na linha 2, qual era o valor de 'a'?", "Alterar 'a' depois afeta 'b'?"],
                    successMessage: "Perfeito! Quando <code>b ← a</code> executou, 'a' valia 5. Mudar 'a' depois não afeta 'b'."
                },
                {
                    type: "multiple",
                    context: "Acompanhe a execução linha por linha:",
                    code: `x ← 8\ny ← x\nx ← x + 2`,
                    question: "Qual é o valor de <strong>y</strong> ao final?",
                    options: ["8", "10", "2", "Indefinido"],
                    correct: 0,
                    hints: ["Quando y ← x executou, qual era o valor de x?", "Somar 2 em x depois altera y?"],
                    successMessage: "Correto! 'y' recebeu 8 quando foi atribuído. A linha seguinte só altera 'x'."
                },
                {
                    type: "multiple",
                    context: "Leia com atenção:",
                    code: `a ← 3\nb ← 7\na ← b\nb ← 1`,
                    question: "Qual é o valor de <strong>a</strong> ao final?",
                    options: ["7", "3", "1", "10"],
                    correct: 0,
                    hints: ["Na terceira linha, o que 'a' recebe?", "A última linha altera 'b', não 'a'."],
                    successMessage: "Correto! 'a' recebeu o valor de 'b' (que era 7). Depois só 'b' mudou."
                },
                {
                    type: "multiple",
                    context: "Trace a execução:",
                    code: `n ← 10\nm ← n\nn ← 0`,
                    question: "Qual é o valor de <strong>m</strong> ao final?",
                    options: ["10", "0", "Indefinido", "Erro"],
                    correct: 0,
                    hints: ["Quando m ← n executou, n ainda valia 10.", "Zerar n depois não desfaz a cópia."],
                    successMessage: "Exato! 'm' recebeu uma cópia do valor de 'n'. Zerar 'n' depois não apaga 'm'."
                }
            ]
        },

        // CASA 3 — drag (fixo — complexo demais para bancarizar)
        {
            type: "drag", zone: "light",
            context: "Organize as variáveis seguindo a convenção: <strong>String → Numérico → Booleano</strong>",
            question: "Arraste para a ordem correta:",
            items: [
                { text: 'nota ← 4.5', correctPosition: 1 },
                { text: 'aberto ← verdadeiro', correctPosition: 2 },
                { text: 'nome ← "Pizzaria"', correctPosition: 0 }
            ],
            hints: ["Qual tem aspas? Qual é número? Qual é verdadeiro/falso?", "Strings sempre têm aspas."],
            successMessage: "Muito bem! Identificou os tipos:\n\n• <strong>nome</strong> → String\n• <strong>nota</strong> → Numérico\n• <strong>aberto</strong> → Booleano"
        },

        // CASA 4 — match (fixo — complexo demais para bancarizar)
        {
            type: "match", zone: "light",
            context: "Analise os VALORES e identifique seus TIPOS.",
            question: "Conecte cada TIPO com o VALOR correspondente:",
            pairs: [
                { left: "Inteiro", right: "42", id: 0 },
                { left: "Real", right: "3.14", id: 1 },
                { left: "String", right: '"Olá"', id: 2 },
                { left: "Booleano", right: "falso", id: 3 }
            ],
            hints: ["Inteiros não têm decimal...", "Qual tem aspas?"],
            successMessage: "Excelente!\n\n• <strong>Inteiro</strong>: sem decimal\n• <strong>Real</strong>: com decimal\n• <strong>String</strong>: entre aspas\n• <strong>Booleano</strong>: verdadeiro/falso"
        },

        // CASA 5 — fill com banco (4 contextos de preenchimento completo)
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "fill",
                    context: "Sistema de academia. Preencha com valores válidos para cada <strong>tipo especificado</strong>:",
                    template: `// Ficha do Aluno\n\nnomeAluno ← {0}\nidade ← {1}\npesoKg ← {2}\nalturaM ← {3}\nativo ← {4}`,
                    blanks: [
                        { id: 0, placeholder: "String", hint: "Como o computador diferencia texto de comando?" },
                        { id: 1, placeholder: "Inteiro", hint: "Faz sentido ter 25 anos e meio?" },
                        { id: 2, placeholder: "Real", hint: "Peso pode variar em gramas. Inteiro suporta?" },
                        { id: 3, placeholder: "Real", hint: "1 metro e 75cm... como representar?" },
                        { id: 4, placeholder: "Booleano", hint: "Ativo ou não — quantos estados?" }
                    ],
                    validate: function(answers) {
                        return [
                            { correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Como o computador diferencia texto de comando?" },
                            { correct: /^\d+$/.test(answers[1].trim()), hint: "Faz sentido ter 25 anos e meio?" },
                            { correct: /^\d+\.\d+$/.test(answers[2].trim()), hint: "Peso pode variar em gramas. Inteiro suporta?" },
                            { correct: /^\d+\.\d+$/.test(answers[3].trim()), hint: "1 metro e 75cm... como representar?" },
                            { correct: ["verdadeiro", "falso", "true", "false"].includes(answers[4].trim().toLowerCase()), hint: "Ativo ou não — quantos estados?" }
                        ];
                    },
                    successMessage: "Excelente! Você domina os tipos básicos!\n\n⚡ <strong>Dark Side desbloqueado!</strong>"
                },
                {
                    type: "fill",
                    context: "Sistema de veículos. Preencha com valores válidos para cada <strong>tipo especificado</strong>:",
                    template: `// Ficha do Veículo\n\nmodelo ← {0}\nanoFabricacao ← {1}\nconsumoKmL ← {2}\nemplacado ← {3}`,
                    blanks: [
                        { id: 0, placeholder: "String", hint: "Modelo é o nome do carro — texto ou número?" },
                        { id: 1, placeholder: "Inteiro", hint: "Ano de fabricação é número inteiro." },
                        { id: 2, placeholder: "Real", hint: "Consumo como 12.5 km/l — tem decimal?" },
                        { id: 3, placeholder: "Booleano", hint: "Emplacado ou não — dois estados." }
                    ],
                    validate: function(answers) {
                        return [
                            { correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Modelo é o nome do carro — texto ou número?" },
                            { correct: /^\d+$/.test(answers[1].trim()), hint: "Ano de fabricação é número inteiro." },
                            { correct: /^\d+\.\d+$/.test(answers[2].trim()), hint: "Consumo como 12.5 km/l — tem decimal?" },
                            { correct: ["verdadeiro", "falso", "true", "false"].includes(answers[3].trim().toLowerCase()), hint: "Emplacado ou não — dois estados." }
                        ];
                    },
                    successMessage: "Ótimo! Consumo é Real pois tem casas decimais. Modelo é String."
                },
                {
                    type: "fill",
                    context: "Sistema hospitalar. Preencha com valores válidos para cada <strong>tipo especificado</strong>:",
                    template: `// Ficha do Paciente\n\nnomePaciente ← {0}\nidadePaciente ← {1}\ntemperatura ← {2}\ninternado ← {3}`,
                    blanks: [
                        { id: 0, placeholder: "String", hint: "Nome é sempre texto." },
                        { id: 1, placeholder: "Inteiro", hint: "Idade em anos completos — sem decimal." },
                        { id: 2, placeholder: "Real", hint: "Temperatura como 36.5°C — tem decimal?" },
                        { id: 3, placeholder: "Booleano", hint: "Internado ou não — dois estados." }
                    ],
                    validate: function(answers) {
                        return [
                            { correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Nome é sempre texto." },
                            { correct: /^\d+$/.test(answers[1].trim()), hint: "Idade em anos completos — sem decimal." },
                            { correct: /^\d+\.\d+$/.test(answers[2].trim()), hint: "Temperatura como 36.5°C — tem decimal?" },
                            { correct: ["verdadeiro", "falso", "true", "false"].includes(answers[3].trim().toLowerCase()), hint: "Internado ou não — dois estados." }
                        ];
                    },
                    successMessage: "Perfeito! Temperatura é Real — 36 e 36.5 fazem diferença clinicamente!"
                },
                {
                    type: "fill",
                    context: "Sistema de delivery. Preencha com valores válidos para cada <strong>tipo especificado</strong>:",
                    template: `// Pedido de Entrega\n\nclienteNome ← {0}\nnumeroPedido ← {1}\nvalorTotal ← {2}\nentregue ← {3}`,
                    blanks: [
                        { id: 0, placeholder: "String", hint: "Nome do cliente é texto." },
                        { id: 1, placeholder: "Inteiro", hint: "Número do pedido é inteiro — sem casas decimais." },
                        { id: 2, placeholder: "Real", hint: "Valor em reais como 49.90 — tem decimal?" },
                        { id: 3, placeholder: "Booleano", hint: "Entregue ou não — dois estados." }
                    ],
                    validate: function(answers) {
                        return [
                            { correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Nome do cliente é texto." },
                            { correct: /^\d+$/.test(answers[1].trim()), hint: "Número do pedido é inteiro — sem casas decimais." },
                            { correct: /^\d+\.\d+$/.test(answers[2].trim()), hint: "Valor em reais como 49.90 — tem decimal?" },
                            { correct: ["verdadeiro", "falso", "true", "false"].includes(answers[3].trim().toLowerCase()), hint: "Entregue ou não — dois estados." }
                        ];
                    },
                    successMessage: "Excelente! Você domina os tipos básicos!\n\n⚡ <strong>Dark Side desbloqueado!</strong>"
                }
            ]
        },

        // CASA 6 — DARK SIDE: erro de tipo String + Inteiro (banco com 4 variações)
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Analise com ATENÇÃO:",
                    code: `x ← "100"\ny ← 50\nresultado ← x + y`,
                    question: "O que acontece na terceira linha?",
                    options: ["resultado recebe 150", 'resultado recebe "10050"', "Erro: tipos incompatíveis", 'resultado recebe "150"'],
                    correct: 2,
                    hints: ["Observe o tipo de 'x'. Tem aspas?"],
                    successMessage: "Correto! Não é possível somar String + Inteiro diretamente."
                },
                {
                    type: "multiple",
                    context: "Analise com ATENÇÃO:",
                    code: `preco ← "29.90"\nquantidade ← 3\ntotal ← preco * quantidade`,
                    question: "O que acontece ao calcular 'total'?",
                    options: ["total recebe 89.70", "total recebe 29.903", "Erro: tipos incompatíveis", "total recebe 0"],
                    correct: 2,
                    hints: ["'preco' está entre aspas. Qual é o seu tipo?"],
                    successMessage: "Correto! 'preco' é String por causa das aspas. Não se multiplica String por Inteiro."
                },
                {
                    type: "multiple",
                    context: "Analise com ATENÇÃO:",
                    code: `a ← "5"\nb ← "3"\nresultado ← a + b`,
                    question: "O que acontece?",
                    options: ["resultado recebe 8", 'resultado recebe "53"', "Erro: tipos incompatíveis", "resultado recebe 15"],
                    correct: 1,
                    hints: ["Ambos são String. Somar Strings as une (concatena)."],
                    successMessage: "Atenção! Em muitas linguagens somar Strings as <strong>concatena</strong>: '5' + '3' = '53', não 8."
                },
                {
                    type: "multiple",
                    context: "Analise com ATENÇÃO:",
                    code: `nota1 ← 8\nnota2 ← "7"\nmedia ← (nota1 + nota2) / 2`,
                    question: "Qual o problema neste código?",
                    options: ["Não pode dividir por 2", "nota2 é String, não número", "media deveria ser Booleano", "nota1 está errada"],
                    correct: 1,
                    hints: ["Observe cuidadosamente o tipo de nota2."],
                    successMessage: "Correto! 'nota2' tem aspas — é String. A soma com nota1 (Inteiro) causaria erro."
                }
            ]
        },

        // CASA 7 — DARK SIDE: acumuladores (banco com 4 variações)
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "fill",
                    context: "Sistema de carrinho de compras. O programa acumula preços. Complete o valor inicial:",
                    template: `total ← {0}\n\npreco1 ← 29.90\ntotal ← total + preco1\n\npreco2 ← 15.50\ntotal ← total + preco2`,
                    blanks: [{ id: 0, placeholder: "???", hint: "Com qual valor um acumulador deve começar?" }],
                    validate: (answers) => [{ correct: ["0", "0.0", "0.00"].includes(answers[0].trim()), hint: "Acumuladores iniciam com zero para não interferir nas somas." }],
                    successMessage: "Correto! Acumuladores devem iniciar em <strong>0</strong>."
                },
                {
                    type: "fill",
                    context: "Sistema de pontuação. O programa soma os pontos de 3 rodadas. Complete o valor inicial:",
                    template: `pontuacao ← {0}\n\nrodada1 ← 150\npontuacao ← pontuacao + rodada1\n\nrodada2 ← 200\npontuacao ← pontuacao + rodada2`,
                    blanks: [{ id: 0, placeholder: "???", hint: "Com qual valor um acumulador deve começar?" }],
                    validate: (answers) => [{ correct: ["0", "0.0"].includes(answers[0].trim()), hint: "Se começar com outro valor, a soma ficará errada." }],
                    successMessage: "Correto! Iniciando em 0, a soma final será apenas as rodadas."
                },
                {
                    type: "multiple",
                    context: "Analise o erro neste código:",
                    code: `total ← 100\n\npreco1 ← 30.00\ntotal ← total + preco1\n\npreco2 ← 20.00\ntotal ← total + preco2`,
                    question: "Qual o valor INCORRETO de 'total' ao final?",
                    options: ["150.00", "50.00", "100.00", "30.00"],
                    correct: 0,
                    hints: ["Some 100 + 30 + 20. Esse deveria ser o total?"],
                    successMessage: "Correto! Total deveria ser 50.00, mas iniciou em 100. Acumuladores sempre devem iniciar em 0."
                },
                {
                    type: "multiple",
                    context: "Um aluno escreveu este código para somar 3 notas:",
                    code: `soma ← 5\n\nnota1 ← 8\nsoma ← soma + nota1\n\nnota2 ← 7\nsoma ← soma + nota2`,
                    question: "Qual é o problema?",
                    options: ["Não pode somar notas", "soma iniciou com 5 em vez de 0", "nota1 deveria ser String", "Falta uma terceira nota"],
                    correct: 1,
                    hints: ["Acumuladores devem começar em qual valor?"],
                    successMessage: "Correto! Acumulador com valor inicial diferente de 0 contamina o resultado."
                }
            ]
        },

        // CASA 8 — DARK SIDE: contar tipos diferentes (banco com 4 variações)
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Quantos TIPOS DIFERENTES existem neste código?",
                    code: `produto ← "Notebook"\npreco ← 2499.90\nquantidade ← 3\nemEstoque ← verdadeiro\ncodigo ← "NB-001"\ndesconto ← 0.15`,
                    question: "Total de tipos DIFERENTES utilizados:",
                    options: ["2 tipos", "3 tipos", "4 tipos", "6 tipos"],
                    correct: 2,
                    hints: ["Agrupe: quais têm aspas? Quais têm decimal? Qual é inteiro? Qual é verdadeiro/falso?"],
                    successMessage: "Correto! 4 tipos:\n\n• String: produto, codigo\n• Real: preco, desconto\n• Inteiro: quantidade\n• Booleano: emEstoque"
                },
                {
                    type: "multiple",
                    context: "Quantos TIPOS DIFERENTES existem neste código?",
                    code: `cidade ← "São Paulo"\npopulacao ← 12300000\narea ← 1521.11\ncapital ← verdadeiro`,
                    question: "Total de tipos DIFERENTES utilizados:",
                    options: ["1 tipo", "2 tipos", "3 tipos", "4 tipos"],
                    correct: 3,
                    hints: ["Analise um por um: cidade tem aspas, populacao é inteiro, area tem decimal, capital é booleano."],
                    successMessage: "Correto! 4 tipos: String (cidade), Inteiro (populacao), Real (area), Booleano (capital)."
                },
                {
                    type: "multiple",
                    context: "Quantos TIPOS DIFERENTES existem neste código?",
                    code: `a ← 10\nb ← 20\nc ← 30\nd ← 5`,
                    question: "Total de tipos DIFERENTES utilizados:",
                    options: ["1 tipo", "2 tipos", "3 tipos", "4 tipos"],
                    correct: 0,
                    hints: ["Todos são números sem decimal e sem aspas."],
                    successMessage: "Correto! Todos são Inteiros — apenas 1 tipo."
                },
                {
                    type: "multiple",
                    context: "Quantos TIPOS DIFERENTES existem neste código?",
                    code: `nome ← "Ana"\nidade ← 30\naltura ← 1.68`,
                    question: "Total de tipos DIFERENTES utilizados:",
                    options: ["1 tipo", "2 tipos", "3 tipos", "4 tipos"],
                    correct: 2,
                    hints: ["nome tem aspas, idade é inteiro, altura tem decimal."],
                    successMessage: "Correto! 3 tipos: String (nome), Inteiro (idade), Real (altura)."
                }
            ]
        },

        // CASA 9 — DARK SIDE: identificar bug de tipo (banco com 4 variações)
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Um programador júnior escreveu este código. Há um PROBLEMA:",
                    code: `idade1 ← "25"\nidade2 ← 30\nidade3 ← 28\n\nsoma ← idade1 + idade2 + idade3\nmedia ← soma / 3`,
                    question: "Qual é o problema?",
                    options: ["Falta declarar 'soma'", "idade1 está como texto", "Não pode dividir por 3", "Falta 'media'"],
                    correct: 1,
                    hints: ["Observe cuidadosamente idade1."],
                    successMessage: "Exato! idade1 tem ASPAS, tornando-a String. Erro na soma!"
                },
                {
                    type: "multiple",
                    context: "Encontre o BUG neste código:",
                    code: `nota1 ← 9.5\nnota2 ← "8.0"\nnota3 ← 7.5\n\nsoma ← nota1 + nota2 + nota3\nmedia ← soma / 3`,
                    question: "Qual variável tem o tipo errado?",
                    options: ["nota1", "nota2", "nota3", "media"],
                    correct: 1,
                    hints: ["Procure qual nota tem aspas."],
                    successMessage: "Correto! 'nota2' está entre aspas — é String, não número Real."
                },
                {
                    type: "multiple",
                    context: "Encontre o BUG neste código:",
                    code: `salario ← 2000\ndesconto ← "300"\nliquido ← salario - desconto`,
                    question: "O que causou o erro?",
                    options: ["Salário muito baixo", "'desconto' é String", "Não pode subtrair variáveis", "'liquido' não foi declarado antes"],
                    correct: 1,
                    hints: ["Analise o tipo de 'desconto'."],
                    successMessage: "Correto! 'desconto' tem aspas — é String. Não se subtrai String de Inteiro."
                },
                {
                    type: "multiple",
                    context: "Encontre o BUG neste código:",
                    code: `preco ← 50.00\nquantidade ← "4"\ntotal ← preco * quantidade`,
                    question: "Qual é o problema?",
                    options: ["preco deveria ser Inteiro", "'quantidade' é String", "Não pode multiplicar reais", "Falta escrever total"],
                    correct: 1,
                    hints: ["Observe o tipo de 'quantidade'."],
                    successMessage: "Correto! 'quantidade' está entre aspas — é String, não número."
                }
            ]
        },

        // CASA 10 — DARK SIDE: algoritmo de troca (banco com 4 variações)
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Algoritmo clássico de TROCA de valores:",
                    code: `a ← 7\nb ← 3\n\ntemp ← a\na ← b\nb ← temp`,
                    question: "Quais os valores de 'a' e 'b' ao final?",
                    options: ["a = 7, b = 3", "a = 3, b = 7", "a = 3, b = 3", "a = 7, b = 7"],
                    correct: 1,
                    hints: ["'temp' guarda o valor original de 'a'."],
                    successMessage: "Perfeito! Variável 'temp' guarda o valor original.\n\n👑 <strong>Boss desbloqueado!</strong>"
                },
                {
                    type: "multiple",
                    context: "Algoritmo de TROCA. Trace a execução:",
                    code: `x ← 10\ny ← 20\n\ntemp ← x\nx ← y\ny ← temp`,
                    question: "Quais os valores de 'x' e 'y' ao final?",
                    options: ["x = 10, y = 20", "x = 20, y = 10", "x = 20, y = 20", "x = 10, y = 10"],
                    correct: 1,
                    hints: ["Acompanhe: temp ← 10, x ← 20, y ← 10."],
                    successMessage: "Correto! A troca funciona: x agora tem 20 e y tem 10.\n\n👑 <strong>Boss desbloqueado!</strong>"
                },
                {
                    type: "multiple",
                    context: "Por que é necessário usar 'temp' na troca?",
                    code: `// Tentativa ERRADA de troca:\na ← 5\nb ← 9\n\na ← b   // a = 9\nb ← a   // b = ???`,
                    question: "Qual o valor de 'b' ao final desta tentativa errada?",
                    options: ["5", "9", "14", "Erro"],
                    correct: 1,
                    hints: ["Na última linha, qual é o valor de 'a' naquele momento?"],
                    successMessage: "Exato! 'a' já tinha sido sobrescrito com 9. Por isso 'b' também fica 9 — e a troca falha."
                },
                {
                    type: "multiple",
                    context: "Trace o algoritmo de troca:",
                    code: `p ← 100\nq ← 200\n\ntemp ← p\np ← q\nq ← temp`,
                    question: "Qual é o valor de 'q' ao final?",
                    options: ["100", "200", "300", "temp"],
                    correct: 0,
                    hints: ["'temp' guardou o valor original de 'p', que era 100."],
                    successMessage: "Perfeito! 'q' recebeu 'temp', que guardava o valor original de 'p' (100).\n\n👑 <strong>Boss desbloqueado!</strong>"
                }
            ]
        }
    ],
    bossQuestions: [
        { id: 1, question: "Tipo de <code>temperatura ← -5</code>", options: ["String", "Inteiro", "Real", "Booleano"], correct: 1, explanation: "Números negativos sem decimal são Inteiros." },
        { id: 2, question: "Tipo de <code>pi ← 3.14159</code>", options: ["String", "Inteiro", "Real", "Booleano"], correct: 2, explanation: "Números com decimal são Real." },
        { id: 3, question: "Qual contém APENAS Strings?", options: ['nome←"Ana", idade←20', 'cidade←"SP", pais←"BR"', 'cod←123, x←"Y"', 'ativo←true, n←"Z"'], correct: 1, explanation: "Apenas cidade e pais têm aspas." },
        { id: 4, question: "O que é <code>x ← \"42\"</code>?", options: ["Número 42", "Texto \"42\"", "Erro", "Booleano"], correct: 1, explanation: "Aspas transformam em String." },
        { id: 5, code: "a ← 10\nb ← 20\na ← b", question: "Valores finais?", options: ["a=10, b=20", "a=20, b=20", "a=20, b=10", "a=30, b=20"], correct: 1, explanation: "'a' recebe valor de 'b'." },
        { id: 6, question: "Valor INVÁLIDO para Booleano?", options: ["verdadeiro", "falso", "true", '"sim"'], correct: 3, explanation: "\"sim\" é String." },
        { id: 7, code: "x ← 5\ny ← x\nx ← x + 1", question: "Valor de 'y'?", options: ["5", "6", "11", "Erro"], correct: 0, explanation: "'y' copiou 5." },
        { id: 8, question: "Declaração CORRETA para preço?", options: ['p←"19.90"', 'p←19.90', 'p←verdadeiro', 'p←dezenove'], correct: 1, explanation: "Preços são números reais." },
        { id: 9, question: "Tipos em <code>a←1, b←2, c←3</code>?", options: ["1 tipo", "2 tipos", "3 tipos", "Nenhum"], correct: 0, explanation: "Todos Inteiros." },
        { id: 10, code: 'nome←""\nidade←0\nativo←falso', question: "Quantos tipos DIFERENTES?", options: ["1", "2", "3", "4"], correct: 2, explanation: "String, Inteiro, Booleano = 3." },
        { id: 11, question: "Diferença: <code>42</code> vs <code>\"42\"</code>?", options: ["Nenhuma", "42 número, \"42\" texto", "42 texto, \"42\" número", "Ambos números"], correct: 1, explanation: "Aspas definem String." },
        { id: 12, question: "Qual é número REAL?", options: ["100", '"-50"', "7.0", "verdadeiro"], correct: 2, explanation: "7.0 tem decimal." },
        { id: 13, code: "r ← 10 > 5", question: "Tipo de 'r'?", options: ["Inteiro", "Real", "String", "Booleano"], correct: 3, explanation: "Comparações = Booleano." },
        { id: 14, question: "O que faz <code>x ← x + 1</code>?", options: ["Equação", "Incrementa x", "Erro", "Reseta x"], correct: 1, explanation: "x recebe x + 1." },
        { id: 15, code: 'a←"10"\nb←10\nc←a+b', question: "O que acontece?", options: ["c = 20", "c = \"1010\"", "Erro de tipos", "c = \"20\""], correct: 2, explanation: "String + Inteiro = Erro." },
        { id: 16, question: "Nome de variável INVÁLIDO?", options: ["idade1", "minha_var", "2nome", "valorTotal"], correct: 2, explanation: "Não começa com número." },
        { id: 17, code: "s←100.00\ns←150.50", question: "Valor final de 's'?", options: ["100.00", "150.50", "250.50", "Erro"], correct: 1, explanation: "Substituição." },
        { id: 18, question: "Variável para 'usuário logado'?", options: ['l←"sim"', 'l←1', 'l←verdadeiro', 'l←"true"'], correct: 2, explanation: "Estados binários = Booleano." },
        { id: 19, code: "x←7\ny←3\ntemp←x\nx←y\ny←temp", question: "Valores finais?", options: ["x=7,y=3", "x=3,y=7", "x=3,y=3", "x=7,y=7"], correct: 1, explanation: "Algoritmo de troca." },
        { id: 20, code: 't←"A"\nv←99.90\nq←2\nd←true', question: "Quantos tipos?", options: ["2", "3", "4", "5"], correct: 2, explanation: "String, Real, Inteiro, Booleano = 4." }
    ]
};
