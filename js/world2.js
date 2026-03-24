const WORLD_2 = {
    id: 2,
    title: "Entrada e Saída",
    letter: "L",
    icon: "🌍",
    bossProva: 15,
    bossAprova: 11,
    intro: {
        title: "📺 Entrada e Saída de Dados",
        description: "Programas precisam <strong>receber dados</strong> do usuário (entrada) e <strong>mostrar resultados</strong> (saída). São os comandos mais básicos de interação!",
        example: `// SAÍDA - Mostrar informações:
escrever("Olá, Mundo!")
escrever("O resultado é: " + valor)

// ENTRADA - Receber do usuário:
nome ← ler()
idade ← ler()

// Combinando:
escrever("Bem-vindo, " + nome + "!")`
    },

    stages: [

        // ========== LIGHT SIDE ==========

        // CASA 1 — escrever() básico
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "O comando <code>escrever()</code> exibe informações na tela para o usuário.",
                    code: `escrever("Bem-vindo ao sistema!")`,
                    question: "O que aparece na tela ao executar este código?",
                    options: ["Bem-vindo ao sistema!", "escrever(Bem-vindo ao sistema!)", "Nada, há um erro", '"Bem-vindo ao sistema!"'],
                    correct: 0,
                    hints: ["O comando escrever() MOSTRA o que está entre parênteses.", "As aspas delimitam o texto, mas não aparecem na saída."],
                    successMessage: "Correto! O comando <code>escrever()</code> exibe o conteúdo entre aspas na tela, sem as aspas."
                },
                {
                    type: "multiple",
                    context: "O comando <code>escrever()</code> exibe informações na tela.",
                    code: `escrever("Olá, mundo!")`,
                    question: "O que é exibido na tela?",
                    options: ["Olá, mundo!", '"Olá, mundo!"', "escrever(Olá, mundo!)", "Nada"],
                    correct: 0,
                    hints: ["As aspas marcam o início e o fim do texto, mas não aparecem na saída."],
                    successMessage: "Correto! As aspas delimitam o texto — elas não fazem parte da saída."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `escrever("123")`,
                    question: "O que é exibido na tela?",
                    options: ["123", '"123"', "escrever(123)", "Erro: número entre aspas"],
                    correct: 0,
                    hints: ["As aspas só delimitam — não aparecem na saída."],
                    successMessage: "Correto! Mesmo sendo número dentro de aspas, as aspas não aparecem na tela."
                },
                {
                    type: "multiple",
                    context: "Compare os dois comandos:",
                    code: `escrever("resultado")\nescrever(resultado)`,
                    question: "Qual a diferença entre as duas linhas?",
                    options: [
                        "A primeira exibe a palavra 'resultado'; a segunda exibe o valor da variável resultado",
                        "São idênticas",
                        "A primeira dá erro; a segunda funciona",
                        "A segunda exibe a palavra 'resultado'"
                    ],
                    correct: 0,
                    hints: ["Com aspas = texto literal. Sem aspas = variável."],
                    successMessage: "Correto! Aspas = texto fixo. Sem aspas = valor da variável."
                }
            ]
        },

        // CASA 2 — escrever() com variáveis
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "fill",
                    context: "Podemos mostrar o valor de variáveis usando <code>escrever()</code>.",
                    template: `nome ← "Carlos"\nidade ← 25\n\n{0}(nome)\n{1}(idade)`,
                    blanks: [
                        { id: 0, placeholder: "comando", hint: "Qual comando mostra dados na tela?" },
                        { id: 1, placeholder: "comando", hint: "O mesmo comando serve para qualquer tipo de dado." }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim().toLowerCase() === "escrever", hint: "Qual comando mostra dados na tela?" },
                        { correct: answers[1].trim().toLowerCase() === "escrever", hint: "O mesmo comando serve para qualquer tipo de dado." }
                    ],
                    successMessage: "Excelente! <code>escrever()</code> funciona com qualquer tipo: texto, número, booleano..."
                },
                {
                    type: "fill",
                    context: "Complete o comando para exibir os valores na tela:",
                    template: `preco ← 49.90\n\n{0}("Preço do produto:")\n{1}(preco)`,
                    blanks: [
                        { id: 0, placeholder: "comando", hint: "Qual comando exibe texto na tela?" },
                        { id: 1, placeholder: "comando", hint: "Mesmo comando para exibir variáveis." }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim().toLowerCase() === "escrever", hint: "Qual comando exibe texto na tela?" },
                        { correct: answers[1].trim().toLowerCase() === "escrever", hint: "Mesmo comando para exibir variáveis." }
                    ],
                    successMessage: "Correto! <code>escrever()</code> serve tanto para texto fixo quanto para variáveis."
                },
                {
                    type: "fill",
                    context: "Complete o comando correto em cada linha:",
                    template: `ativo ← verdadeiro\nnome ← "João"\n\n{0}(ativo)\n{1}(nome)`,
                    blanks: [
                        { id: 0, placeholder: "comando", hint: "Qual comando exibe dados na tela?" },
                        { id: 1, placeholder: "comando", hint: "O mesmo comando para qualquer tipo." }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim().toLowerCase() === "escrever", hint: "Qual comando exibe dados na tela?" },
                        { correct: answers[1].trim().toLowerCase() === "escrever", hint: "O mesmo comando para qualquer tipo." }
                    ],
                    successMessage: "Ótimo! <code>escrever()</code> funciona com Booleano, String, Inteiro, Real — qualquer tipo."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `cidade ← "Recife"\nescrever(cidade)`,
                    question: "O que é exibido na tela?",
                    options: ["cidade", "Recife", '"Recife"', "Erro"],
                    correct: 1,
                    hints: ["escrever(variavel) exibe o valor armazenado, não o nome da variável."],
                    successMessage: "Correto! Sem aspas dentro do escrever(), é exibido o valor da variável."
                }
            ]
        },

        // CASA 3 — ler() básico
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "O comando <code>ler()</code> pausa o programa e espera o usuário digitar algo.",
                    code: `escrever("Digite seu nome:")\nnome ← ler()\nescrever("Olá!")`,
                    question: "O que acontece quando o programa chega na linha <code>nome ← ler()</code>?",
                    options: ["Mostra 'nome' na tela", "O programa para e espera o usuário digitar", "Cria uma variável vazia", "Dá erro porque não tem valor"],
                    correct: 1,
                    hints: ["ler() é um comando de ENTRADA de dados.", "O programa precisa RECEBER algo do usuário."],
                    successMessage: "Perfeito! <code>ler()</code> pausa a execução e aguarda a entrada do usuário."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `escrever("Digite sua idade:")\nidade ← ler()`,
                    question: "Depois de executar as duas linhas, o que aconteceu?",
                    options: [
                        "A variável 'idade' ficou vazia",
                        "A variável 'idade' recebeu o valor digitado pelo usuário",
                        "O programa exibiu a idade na tela",
                        "Dá erro pois idade ainda não foi definida"
                    ],
                    correct: 1,
                    hints: ["ler() captura o que o usuário digita e armazena na variável."],
                    successMessage: "Correto! Após ler(), a variável contém o valor que o usuário digitou."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `n1 ← ler()\nn2 ← ler()\nn3 ← ler()`,
                    question: "Quantas vezes o programa para esperando o usuário digitar?",
                    options: ["1 vez", "2 vezes", "3 vezes", "Nenhuma"],
                    correct: 2,
                    hints: ["Cada ler() é uma pausa para entrada."],
                    successMessage: "Correto! Cada <code>ler()</code> é uma parada para o usuário digitar."
                },
                {
                    type: "multiple",
                    context: "Qual é a função do <code>ler()</code>?",
                    code: `escrever("Qual seu nome?")\nnome ← ler()`,
                    question: "Por que o <code>escrever()</code> vem ANTES do <code>ler()</code>?",
                    options: [
                        "É obrigatório por regra de sintaxe",
                        "Para informar ao usuário o que deve digitar",
                        "Para inicializar a variável nome",
                        "Não faz diferença a ordem"
                    ],
                    correct: 1,
                    hints: ["Sem o escrever antes, o usuário vê uma tela em branco e não sabe o que digitar."],
                    successMessage: "Correto! O escrever antes do ler é chamado de <strong>prompt</strong> — ele orienta o usuário."
                }
            ]
        },

        // CASA 4 — drag (fixo)
        {
            type: "drag", zone: "light",
            context: "Um programa deve pedir o nome do usuário e depois exibir uma saudação.",
            question: "Organize as linhas na ordem correta:",
            items: [
                { text: 'escrever("Qual seu nome?")', correctPosition: 0 },
                { text: 'nome ← ler()', correctPosition: 1 },
                { text: 'escrever("Olá, " + nome)', correctPosition: 2 }
            ],
            hints: [
                "Primeiro perguntamos, depois recebemos a resposta.",
                "Só podemos usar a variável DEPOIS de receber o valor."
            ],
            successMessage: "Isso! A ordem lógica: perguntar → ler → usar o valor."
        },

        // CASA 5 — concatenação
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "fill",
                    context: "Concatenação junta textos e variáveis usando o operador <code>+</code>.",
                    template: `nome ← "Ana"\nidade ← 20\n\nescrever("Nome: " {0} nome)\nescrever("Idade: " {1} idade {2} " anos")`,
                    blanks: [
                        { id: 0, placeholder: "?", hint: "Qual operador junta textos?" },
                        { id: 1, placeholder: "?", hint: "O mesmo operador!" },
                        { id: 2, placeholder: "?", hint: "Continua juntando..." }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim() === "+", hint: "Qual operador junta textos?" },
                        { correct: answers[1].trim() === "+", hint: "O mesmo operador!" },
                        { correct: answers[2].trim() === "+", hint: "Continua juntando..." }
                    ],
                    successMessage: 'Perfeito! O operador <code>+</code> concatena (junta) textos e variáveis.\n\nSaída: "Nome: Ana" e "Idade: 20 anos"'
                },
                {
                    type: "fill",
                    context: "Complete os operadores de concatenação:",
                    template: `produto ← "Notebook"\npreco ← 2500\n\nescrever("Produto: " {0} produto)\nescrever("Preço: R$ " {1} preco)`,
                    blanks: [
                        { id: 0, placeholder: "?", hint: "Qual operador une texto com variável?" },
                        { id: 1, placeholder: "?", hint: "O mesmo operador." }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim() === "+", hint: "Qual operador une texto com variável?" },
                        { correct: answers[1].trim() === "+", hint: "O mesmo operador." }
                    ],
                    successMessage: "Correto! O + junta texto fixo com o valor de variáveis."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `cidade ← "Recife"\nestado ← "PE"\nescrever(cidade + " - " + estado)`,
                    question: "O que é exibido na tela?",
                    options: ["Recife - PE", "cidade - estado", "Recife + - + PE", "Erro"],
                    correct: 0,
                    hints: ["O + une os valores das variáveis com o texto ' - ' no meio."],
                    successMessage: "Correto! A concatenação substitui as variáveis pelos seus valores."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `nome ← "Lucas"\nidade ← 22\nescrever("Usuário: " + nome + ", " + idade + " anos")`,
                    question: "O que é exibido?",
                    options: ["Usuário: Lucas, 22 anos", "Usuário: nome, idade anos", "Usuário: + Lucas + , + 22 + anos", "Erro de concatenação"],
                    correct: 0,
                    hints: ["Cada + une a peça anterior com a próxima."],
                    successMessage: "Exato! A cadeia de + monta a mensagem substituindo cada variável pelo seu valor."
                }
            ]
        },

        // CASA 6 — entrada + cálculo
        {
            type: "bank", zone: "light",
            questions: [
                {
                    type: "multiple",
                    context: "Programas frequentemente leem dados, processam e mostram resultados.",
                    code: `escrever("Digite um número:")\nnumero ← ler()\ndobro ← numero * 2\nescrever("O dobro é: " + dobro)`,
                    question: "Se o usuário digitar <strong>7</strong>, o que será exibido no final?",
                    options: ["O dobro é: 7", "O dobro é: 14", "O dobro é: dobro", "O dobro é: numero * 2"],
                    correct: 1,
                    hints: ["A variável 'numero' recebe 7.", "dobro = 7 * 2 = ?"],
                    successMessage: "Exato! O programa lê 7, calcula 7 * 2 = 14, e exibe o resultado.\n\n⚡ <strong>Dark Side desbloqueado!</strong>"
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `escrever("Digite sua idade:")\nidade ← ler()\nanoNasc ← 2025 - idade\nescrever("Você nasceu em: " + anoNasc)`,
                    question: "Se o usuário digitar <strong>20</strong>, o que é exibido?",
                    options: ["Você nasceu em: 2005", "Você nasceu em: 20", "Você nasceu em: anoNasc", "Você nasceu em: 2025 - 20"],
                    correct: 0,
                    hints: ["anoNasc = 2025 - 20 = ?"],
                    successMessage: "Correto! O programa calcula 2025 - 20 = 2005 e exibe o resultado.\n\n⚡ <strong>Dark Side desbloqueado!</strong>"
                },
                {
                    type: "multiple",
                    context: "Analise o fluxo do programa:",
                    code: `escrever("Nota 1:")\nn1 ← ler()\nescrever("Nota 2:")\nn2 ← ler()\nmedia ← (n1 + n2) / 2\nescrever("Média: " + media)`,
                    question: "Com n1 = <strong>8</strong> e n2 = <strong>6</strong>, o que é exibido?",
                    options: ["Média: 7", "Média: 14", "Média: 7.0", "Média: (8 + 6) / 2"],
                    correct: 0,
                    hints: ["(8 + 6) / 2 = ?"],
                    successMessage: "Correto! (8 + 6) / 2 = 7.\n\n⚡ <strong>Dark Side desbloqueado!</strong>"
                },
                {
                    type: "multiple",
                    context: "Analise o programa:",
                    code: `escrever("Valor do produto:")\nvalor ← ler()\ndescontoPerc ← 0.10\ndesconto ← valor * descontoPerc\nfinal ← valor - desconto\nescrever("Preço final: " + final)`,
                    question: "Se o usuário digitar <strong>100</strong>, o que é exibido?",
                    options: ["Preço final: 90", "Preço final: 10", "Preço final: 100", "Preço final: 0.10"],
                    correct: 0,
                    hints: ["desconto = 100 * 0.10 = 10. final = 100 - 10 = ?"],
                    successMessage: "Correto! 10% de 100 = 10 de desconto. 100 - 10 = 90.\n\n⚡ <strong>Dark Side desbloqueado!</strong>"
                }
            ]
        },

        // ========== DARK SIDE ==========

        // CASA 7 — múltiplas entradas
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "fill",
                    context: "Sistema de cadastro com múltiplas entradas. Complete os comandos de leitura:",
                    template: `escrever("=== CADASTRO ===")\n\nescrever("Nome:")\nnome ← {0}\n\nescrever("Idade:")\nidade ← {1}\n\nescrever("Cidade:")\ncidade ← {2}\n\nescrever("Cadastro: " + nome + ", " + idade + " anos, " + cidade)`,
                    blanks: [
                        { id: 0, placeholder: "?", hint: "Qual comando recebe dados do usuário?" },
                        { id: 1, placeholder: "?", hint: "O mesmo comando para qualquer tipo." },
                        { id: 2, placeholder: "?", hint: "Não esqueça os parênteses." }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim().toLowerCase() === "ler()", hint: "Qual comando recebe dados do usuário?" },
                        { correct: answers[1].trim().toLowerCase() === "ler()", hint: "O mesmo comando para qualquer tipo." },
                        { correct: answers[2].trim().toLowerCase() === "ler()", hint: "Não esqueça os parênteses." }
                    ],
                    successMessage: "Correto! Cada entrada usa <code>ler()</code> para receber dados do usuário."
                },
                {
                    type: "fill",
                    context: "Sistema de login. Complete os comandos de leitura:",
                    template: `escrever("=== LOGIN ===")\n\nescrever("Usuário:")\nusuario ← {0}\n\nescrever("Senha:")\nsenha ← {1}\n\nescrever("Bem-vindo, " + usuario)`,
                    blanks: [
                        { id: 0, placeholder: "?", hint: "Qual comando captura dados digitados?" },
                        { id: 1, placeholder: "?", hint: "O mesmo comando." }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim().toLowerCase() === "ler()", hint: "Qual comando captura dados digitados?" },
                        { correct: answers[1].trim().toLowerCase() === "ler()", hint: "O mesmo comando." }
                    ],
                    successMessage: "Correto! Cada campo lido usa <code>ler()</code>."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `escrever("Nome:")\nnome ← ler()\nescrever("Sobrenome:")\nsobrenome ← ler()\nescrever("Nome completo: " + nome + " " + sobrenome)`,
                    question: "Quantas vezes o programa para esperando entrada?",
                    options: ["1", "2", "3", "4"],
                    correct: 1,
                    hints: ["Conte os comandos ler()."],
                    successMessage: "Correto! Dois ler() = duas pausas para o usuário digitar."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `escrever("Produto:")\np ← ler()\nescrever("Quantidade:")\nq ← ler()\nescrever("Preço unitário:")\nv ← ler()\ntotal ← q * v\nescrever(p + ": " + q + " x R$ " + v + " = R$ " + total)`,
                    question: "Quantas entradas o usuário fornece?",
                    options: ["1", "2", "3", "4"],
                    correct: 2,
                    hints: ["Conte os comandos ler()."],
                    successMessage: "Correto! Três ler(): produto, quantidade e preço unitário."
                }
            ]
        },

        // CASA 8 — entrada + tipos
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Analise o código com atenção:",
                    code: `escrever("Digite o preço:")\npreco ← ler()\n\nescrever("Digite a quantidade:")\nqtd ← ler()\n\ntotal ← preco * qtd\nescrever("Total: " + total)`,
                    question: "Se o usuário digitar preço = <strong>10.50</strong> e quantidade = <strong>3</strong>, qual o total?",
                    options: ["10.503", "31.50", "13.50", "Erro: não pode multiplicar"],
                    correct: 1,
                    hints: ["Multiplique 10.50 por 3."],
                    successMessage: "Correto! 10.50 * 3 = 31.50. O ler() captura o valor e a multiplicação funciona normalmente."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `escrever("Velocidade (km/h):")\nvel ← ler()\nescrever("Tempo (h):")\ntempo ← ler()\ndist ← vel * tempo\nescrever("Distância: " + dist + " km")`,
                    question: "Velocidade = <strong>80</strong>, Tempo = <strong>2.5</strong>. O que é exibido?",
                    options: ["Distância: 200 km", "Distância: 82.5 km", "Distância: 160 km", "Distância: 32 km"],
                    correct: 0,
                    hints: ["dist = 80 * 2.5 = ?"],
                    successMessage: "Correto! 80 * 2.5 = 200 km."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `escrever("Salário bruto:")\nsalario ← ler()\ndescontoINSS ← salario * 0.11\nliquido ← salario - descontoINSS\nescrever("Salário líquido: R$ " + liquido)`,
                    question: "Se o salário for <strong>2000</strong>, qual o líquido exibido?",
                    options: ["R$ 1780", "R$ 220", "R$ 2000", "R$ 1890"],
                    correct: 0,
                    hints: ["INSS = 2000 * 0.11 = 220. Líquido = 2000 - 220 = ?"],
                    successMessage: "Correto! 2000 - 220 = 1780."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `escrever("Base (m):")\nbase ← ler()\nescrever("Altura (m):")\naltura ← ler()\narea ← (base * altura) / 2\nescrever("Área do triângulo: " + area + " m²")`,
                    question: "Base = <strong>6</strong>, Altura = <strong>4</strong>. O que é exibido?",
                    options: ["Área do triângulo: 12 m²", "Área do triângulo: 24 m²", "Área do triângulo: 10 m²", "Área do triângulo: 6 m²"],
                    correct: 0,
                    hints: ["Área = (base * altura) / 2 = (6 * 4) / 2 = ?"],
                    successMessage: "Correto! (6 * 4) / 2 = 12 m²."
                }
            ]
        },

        // CASA 9 — formatação de saída
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Observe a construção da mensagem de saída:",
                    code: `produto ← "Notebook"\npreco ← 2500\nparcelas ← 10\nvalorParcela ← preco / parcelas\n\nescrever(produto + " - R$ " + preco + " ou " + parcelas + "x de R$ " + valorParcela)`,
                    question: "Qual será a saída exata?",
                    options: [
                        "Notebook - R$ 2500 ou 10x de R$ 250",
                        "produto - R$ preco ou parcelasx de R$ valorParcela",
                        "Notebook - R$ 2500 ou 10x de R$ valorParcela",
                        "Erro de concatenação"
                    ],
                    correct: 0,
                    hints: ["Variáveis são substituídas por seus valores."],
                    successMessage: "Exato! Variáveis são substituídas por seus valores na concatenação."
                },
                {
                    type: "multiple",
                    context: "Analise a saída:",
                    code: `nome ← "Maria"\ncidade ← "Salvador"\nuf ← "BA"\nescrever(nome + " mora em " + cidade + "/" + uf)`,
                    question: "O que é exibido?",
                    options: ["Maria mora em Salvador/BA", "nome mora em cidade/uf", "Maria + mora em + Salvador/BA", "Erro"],
                    correct: 0,
                    hints: ["Cada variável é substituída pelo seu valor."],
                    successMessage: "Correto! A concatenação substitui cada variável pelo valor que ela guarda."
                },
                {
                    type: "multiple",
                    context: "Analise a saída:",
                    code: `a ← 5\nb ← 3\nescrever("Soma: " + (a + b))\nescrever("Produto: " + (a * b))`,
                    question: "Quais as duas linhas exibidas?",
                    options: ["Soma: 8 / Produto: 15", "Soma: a + b / Produto: a * b", "Soma: 5 + 3 / Produto: 5 * 3", "Erro"],
                    correct: 0,
                    hints: ["Os parênteses fazem o cálculo antes da concatenação."],
                    successMessage: "Correto! Os parênteses garantem que o cálculo ocorre antes de juntar com o texto."
                },
                {
                    type: "multiple",
                    context: "Analise a saída com atenção:",
                    code: `x ← 10\nescrever("O valor é " + x + " reais")\nescrever("Dobro: " + x * 2)`,
                    question: "Quais as duas linhas exibidas?",
                    options: [
                        "O valor é 10 reais / Dobro: 20",
                        "O valor é x reais / Dobro: x * 2",
                        "O valor é 10 reais / Dobro: 102",
                        "Erro de concatenação"
                    ],
                    correct: 0,
                    hints: ["Na segunda linha, * tem prioridade sobre o + de concatenação."],
                    successMessage: "Correto! A multiplicação tem prioridade, então x * 2 = 20 antes da concatenação."
                }
            ]
        },

        // CASA 10 — mistura com M1 (tipos)
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Identificando tipos de dados na entrada:",
                    code: `escrever("Nome do produto:")\nnome ← ler()\n\nescrever("Preço:")\npreco ← ler()\n\nescrever("Quantidade em estoque:")\nqtd ← ler()\n\nescrever("Disponível para venda?")\ndisponivel ← ler()`,
                    question: "Quais TIPOS de dados o usuário deveria digitar para cada variável?",
                    options: [
                        "String, Real, Inteiro, Booleano",
                        "String, String, String, String",
                        "Inteiro, Real, Inteiro, Booleano",
                        "Todos são String até converter"
                    ],
                    correct: 0,
                    hints: ["Pense no que cada variável representa semanticamente."],
                    successMessage: "Correto! Cada variável espera um tipo específico:\n\n• nome → String\n• preco → Real\n• qtd → Inteiro\n• disponivel → Booleano"
                },
                {
                    type: "multiple",
                    context: "Analise as variáveis lidas:",
                    code: `escrever("Matrícula:")\nmatricula ← ler()\n\nescrever("Nome:")\nnomeAluno ← ler()\n\nescrever("Nota final:")\nnota ← ler()\n\nescrever("Aprovado?")\naprovado ← ler()`,
                    question: "Quais os tipos esperados em ordem?",
                    options: [
                        "Inteiro, String, Real, Booleano",
                        "String, String, String, String",
                        "Inteiro, String, Inteiro, String",
                        "Real, String, Real, Inteiro"
                    ],
                    correct: 0,
                    hints: ["Matrícula é número sem decimal. Nota pode ter decimal. Aprovado é sim/não."],
                    successMessage: "Correto! Matrícula → Inteiro, Nome → String, Nota → Real, Aprovado → Booleano."
                },
                {
                    type: "multiple",
                    context: "Analise as variáveis:",
                    code: `escrever("Temperatura (°C):")\ntemp ← ler()\n\nescrever("Umidade (%):")\numidade ← ler()\n\nescrever("Chuva prevista?")\nchuva ← ler()`,
                    question: "Quais os tipos esperados em ordem?",
                    options: [
                        "Real, Inteiro, Booleano",
                        "String, String, String",
                        "Inteiro, Inteiro, String",
                        "Real, Real, String"
                    ],
                    correct: 0,
                    hints: ["Temperatura como 36.5 tem decimal. Umidade em % é inteiro. Chuva é sim/não."],
                    successMessage: "Correto! Temperatura → Real, Umidade → Inteiro, Chuva → Booleano."
                },
                {
                    type: "multiple",
                    context: "Analise os dados do sistema:",
                    code: `escrever("Código do produto:")\ncod ← ler()\n\nescrever("Peso (kg):")\npeso ← ler()\n\nescrever("Frágil?")\nfragil ← ler()`,
                    question: "Quais os tipos esperados para cod, peso e fragil?",
                    options: [
                        "Inteiro, Real, Booleano",
                        "String, Real, Booleano",
                        "String, String, String",
                        "Inteiro, Inteiro, String"
                    ],
                    correct: 0,
                    hints: ["Código pode ser só número. Peso tem decimal. Frágil é verdadeiro/falso."],
                    successMessage: "Correto! Código → Inteiro, Peso → Real, Frágil → Booleano."
                }
            ]
        },

        // CASA 11 — drag (fixo)
        {
            type: "drag", zone: "dark",
            context: "Sistema de cálculo de média escolar. Monte o algoritmo completo:",
            question: "Organize na ordem correta (ler 3 notas, calcular média, exibir):",
            items: [
                { text: 'escrever("Digite a nota 1:")', correctPosition: 0 },
                { text: 'n1 ← ler()', correctPosition: 1 },
                { text: 'escrever("Digite a nota 2:")', correctPosition: 2 },
                { text: 'n2 ← ler()', correctPosition: 3 },
                { text: 'escrever("Digite a nota 3:")', correctPosition: 4 },
                { text: 'n3 ← ler()', correctPosition: 5 },
                { text: 'media ← (n1 + n2 + n3) / 3', correctPosition: 6 },
                { text: 'escrever("Média: " + media)', correctPosition: 7 }
            ],
            hints: [],
            successMessage: "Perfeito! Sequência correta: pedir cada nota → ler → calcular → exibir."
        },

        // CASA 12 — fill com cálculo (IMC e variações)
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "fill",
                    context: "Calculadora de IMC (Índice de Massa Corporal). Complete os operadores:",
                    template: `escrever("=== CALCULADORA IMC ===")\n\nescrever("Peso (kg):")\npeso ← ler()\n\nescrever("Altura (m):")\naltura ← ler()\n\nimc ← peso / (altura {0} altura)\n\nescrever("Seu IMC é: " {1} imc)`,
                    blanks: [
                        { id: 0, placeholder: "?", hint: "Como calculamos altura ao quadrado?" },
                        { id: 1, placeholder: "?", hint: "Qual operador junta texto com variável?" }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim() === "*", hint: "Como calculamos altura ao quadrado?" },
                        { correct: answers[1].trim() === "+", hint: "Qual operador junta texto com variável?" }
                    ],
                    successMessage: "Correto! IMC = peso / (altura * altura). Fórmula clássica!"
                },
                {
                    type: "fill",
                    context: "Calculadora de salário líquido. Complete os operadores:",
                    template: `escrever("Salário bruto:")\nsalario ← ler()\n\ndescontoINSS ← salario {0} 0.11\nliquido ← salario {1} descontoINSS\n\nescrever("Salário líquido: R$ " {2} liquido)`,
                    blanks: [
                        { id: 0, placeholder: "?", hint: "Desconto é uma porcentagem multiplicada." },
                        { id: 1, placeholder: "?", hint: "Líquido = bruto menos desconto." },
                        { id: 2, placeholder: "?", hint: "Qual operador junta texto com número?" }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim() === "*", hint: "Desconto é uma porcentagem multiplicada." },
                        { correct: answers[1].trim() === "-", hint: "Líquido = bruto menos desconto." },
                        { correct: answers[2].trim() === "+", hint: "Qual operador junta texto com número?" }
                    ],
                    successMessage: "Correto! Desconto = salario * 0.11. Líquido = salario - desconto."
                },
                {
                    type: "fill",
                    context: "Calculadora de área de retângulo. Complete os operadores:",
                    template: `escrever("Largura (m):")\nlargura ← ler()\n\nescrever("Comprimento (m):")\ncomprimento ← ler()\n\narea ← largura {0} comprimento\n\nescrever("Área: " {1} area {2} " m²")`,
                    blanks: [
                        { id: 0, placeholder: "?", hint: "Área = largura vezes comprimento." },
                        { id: 1, placeholder: "?", hint: "Qual operador concatena?" },
                        { id: 2, placeholder: "?", hint: "Continua concatenando." }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim() === "*", hint: "Área = largura vezes comprimento." },
                        { correct: answers[1].trim() === "+", hint: "Qual operador concatena?" },
                        { correct: answers[2].trim() === "+", hint: "Continua concatenando." }
                    ],
                    successMessage: "Correto! Área = largura * comprimento."
                },
                {
                    type: "fill",
                    context: "Calculadora de velocidade média. Complete os operadores:",
                    template: `escrever("Distância (km):")\ndist ← ler()\n\nescrever("Tempo (h):")\ntempo ← ler()\n\nvel ← dist {0} tempo\n\nescrever("Velocidade média: " {1} vel {2} " km/h")`,
                    blanks: [
                        { id: 0, placeholder: "?", hint: "Velocidade = distância dividida pelo tempo." },
                        { id: 1, placeholder: "?", hint: "Qual operador concatena?" },
                        { id: 2, placeholder: "?", hint: "Continua concatenando." }
                    ],
                    validate: (answers) => [
                        { correct: answers[0].trim() === "/", hint: "Velocidade = distância dividida pelo tempo." },
                        { correct: answers[1].trim() === "+", hint: "Qual operador concatena?" },
                        { correct: answers[2].trim() === "+", hint: "Continua concatenando." }
                    ],
                    successMessage: "Correto! vel = dist / tempo. Fórmula da velocidade média."
                }
            ]
        },

        // CASA 13 — pegadinha de tipos
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Cuidado com os tipos de dados!",
                    code: `escrever("Digite sua idade:")\nidade ← ler()\n\nescrever("Digite quantos anos quer somar:")\nsoma ← ler()\n\nresultado ← idade + soma\nescrever("Idade futura: " + resultado)`,
                    question: 'Se o usuário digitar idade = <strong>"20"</strong> (como texto) e soma = <strong>"5"</strong> (como texto), qual o resultado?',
                    options: ["25", '"205"', "Erro de tipo", "20 + 5"],
                    correct: 1,
                    hints: ["Se ambos forem texto, o + concatena ao invés de somar."],
                    successMessage: 'Pegadinha! Se ambos forem TEXTO, o + CONCATENA.\n\n"20" + "5" = "205", não 25!'
                },
                {
                    type: "multiple",
                    context: "Analise o problema:",
                    code: `n1 ← "8"\nn2 ← "2"\nescrever(n1 + n2)`,
                    question: "O que é exibido?",
                    options: ["10", '"82"', "Erro de tipo", "8 + 2"],
                    correct: 1,
                    hints: ["n1 e n2 têm aspas. Qual é o tipo delas?"],
                    successMessage: 'Correto! "8" e "2" são Strings. String + String concatena: "82".'
                },
                {
                    type: "multiple",
                    context: "Analise o problema:",
                    code: `nota1 ← 9\nnota2 ← "7"\nmedia ← (nota1 + nota2) / 2`,
                    question: "O que acontece ao calcular a média?",
                    options: ["media recebe 8", "media recebe 4.5", "Erro: tipos incompatíveis", "media recebe 97"],
                    correct: 2,
                    hints: ["nota2 tem aspas. Qual é o tipo dela? Pode somar com nota1?"],
                    successMessage: "Correto! nota2 é String. Somar Inteiro + String causa erro de tipos."
                },
                {
                    type: "multiple",
                    context: "Analise o código:",
                    code: `preco ← "50"\nquantidade ← 3\ntotal ← preco * quantidade`,
                    question: "O que acontece?",
                    options: ["total recebe 150", "total recebe 503", "Erro: tipos incompatíveis", "total recebe 0"],
                    correct: 2,
                    hints: ["preco está entre aspas. É String ou número?"],
                    successMessage: "Correto! 'preco' é String por causa das aspas. String * Inteiro causa erro."
                }
            ]
        },

        // CASA 14 — problema completo
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Sistema completo de compra:",
                    code: `escrever("Produto:")\nproduto ← ler()\n\nescrever("Preço unitário:")\npreco ← ler()\n\nescrever("Quantidade:")\nqtd ← ler()\n\nsubtotal ← preco * qtd\ndesconto ← subtotal * 0.10\ntotal ← subtotal - desconto\n\nescrever("Subtotal: R$ " + subtotal)\nescrever("Desconto (10%): R$ " + desconto)\nescrever("Total: R$ " + total)`,
                    question: "Produto: 'Caneta', Preço: 2.50, Quantidade: 4. Qual o TOTAL final?",
                    options: ["R$ 10.00", "R$ 9.00", "R$ 1.00", "R$ 11.00"],
                    correct: 1,
                    hints: ["Subtotal = 2.50 × 4. Desconto = 10% do subtotal. Total = subtotal - desconto."],
                    successMessage: "Correto!\n\n• Subtotal: 2.50 × 4 = 10.00\n• Desconto: 10.00 × 0.10 = 1.00\n• Total: 10.00 - 1.00 = 9.00"
                },
                {
                    type: "multiple",
                    context: "Sistema de notas:",
                    code: `escrever("Nota 1:")\nn1 ← ler()\nescrever("Nota 2:")\nn2 ← ler()\nescrever("Nota 3:")\nn3 ← ler()\n\nmedia ← (n1 + n2 + n3) / 3\nbonus ← media * 0.05\nmediaFinal ← media + bonus\n\nescrever("Média: " + media)\nescrever("Bônus (5%): " + bonus)\nescrever("Média final: " + mediaFinal)`,
                    question: "Notas: 8, 7, 9. Qual a MÉDIA FINAL com bônus?",
                    options: ["8.4", "8.0", "0.4", "24.0"],
                    correct: 0,
                    hints: ["Média = (8+7+9)/3 = 8. Bônus = 8 * 0.05 = 0.4. Final = 8 + 0.4."],
                    successMessage: "Correto! Média = 8.0. Bônus = 0.4. Média final = 8.4."
                },
                {
                    type: "multiple",
                    context: "Sistema de gorjeta:",
                    code: `escrever("Valor da conta:")\nconta ← ler()\n\ngorjeta10 ← conta * 0.10\ngorjeta15 ← conta * 0.15\n\nescrever("Gorjeta 10%: R$ " + gorjeta10)\nescrever("Gorjeta 15%: R$ " + gorjeta15)\nescrever("Total com 10%: R$ " + (conta + gorjeta10))`,
                    question: "Conta = <strong>80.00</strong>. Qual o total com 10% de gorjeta?",
                    options: ["R$ 88.00", "R$ 80.00", "R$ 8.00", "R$ 92.00"],
                    correct: 0,
                    hints: ["gorjeta10 = 80 * 0.10 = 8. Total = 80 + 8 = ?"],
                    successMessage: "Correto! 80 + 8 = R$ 88.00."
                },
                {
                    type: "multiple",
                    context: "Sistema de conversão:",
                    code: `escrever("Valor em dólares:")\ndolares ← ler()\ncotacao ← 5.20\nreais ← dolares * cotacao\ntaxa ← reais * 0.02\ntotal ← reais + taxa\n\nescrever("Reais: R$ " + reais)\nescrever("Taxa IOF (2%): R$ " + taxa)\nescrever("Total: R$ " + total)`,
                    question: "Dólares = <strong>100</strong>. Qual o TOTAL pago?",
                    options: ["R$ 530.40", "R$ 520.00", "R$ 10.40", "R$ 510.40"],
                    correct: 0,
                    hints: ["reais = 100 * 5.20 = 520. taxa = 520 * 0.02 = 10.40. Total = 520 + 10.40."],
                    successMessage: "Correto! 520 + 10.40 = R$ 530.40."
                }
            ]
        },

        // CASA 15 — desafio final
        {
            type: "bank", zone: "dark",
            questions: [
                {
                    type: "multiple",
                    context: "Aplicando programação em eletrônica! Lei de Ohm e Potência:",
                    code: `escrever("=== CALCULADORA ELÉTRICA ===")\n\nescrever("Tensão (V):")\ntensao ← ler()\n\nescrever("Resistência (Ω):")\nresistencia ← ler()\n\ncorrente ← tensao / resistencia\npotencia ← tensao * corrente\npotencia2 ← resistencia * (corrente * corrente)\n\nescrever("I = " + corrente + " A")\nescrever("P = V×I = " + potencia + " W")\nescrever("P = R×I² = " + potencia2 + " W")`,
                    question: "Com tensão = <strong>12V</strong> e resistência = <strong>4Ω</strong>, quais os valores corretos?",
                    options: ["I = 3A, P = 36W, P = 36W", "I = 48A, P = 576W, P = 576W", "I = 3A, P = 12W, P = 4W", "Erro: não pode calcular dois P"],
                    correct: 0,
                    hints: ["I = V/R = 12/4. P = V×I. P = R×I²."],
                    successMessage: "Excelente!\n\n• I = V/R = 12/4 = 3A\n• P = V×I = 12×3 = 36W\n• P = R×I² = 4×9 = 36W\n\nAs duas fórmulas de potência dão o mesmo resultado! 👑 <strong>Boss desbloqueado!</strong>"
                },
                {
                    type: "multiple",
                    context: "Lei de Ohm aplicada:",
                    code: `escrever("Tensão (V):")\ntensao ← ler()\nescrever("Resistência (Ω):")\nresistencia ← ler()\ncorrente ← tensao / resistencia\nescrever("Corrente: " + corrente + " A")`,
                    question: "Tensão = <strong>24V</strong>, Resistência = <strong>6Ω</strong>. Qual a corrente exibida?",
                    options: ["4 A", "144 A", "0.25 A", "18 A"],
                    correct: 0,
                    hints: ["I = V/R = 24/6 = ?"],
                    successMessage: "Correto! I = 24/6 = 4A. 👑 <strong>Boss desbloqueado!</strong>"
                },
                {
                    type: "multiple",
                    context: "Potência elétrica:",
                    code: `escrever("Tensão (V):")\nv ← ler()\nescrever("Corrente (A):")\ni ← ler()\npotencia ← v * i\nescrever("Potência: " + potencia + " W")`,
                    question: "V = <strong>220V</strong>, I = <strong>5A</strong>. Qual a potência exibida? (P = V × I)",
                    options: ["44 W", "1100 W", "225 W", "215 W"],
                    correct: 1,
                    hints: ["P = V × I = 220 × 5 = ?"],
                    successMessage: "Correto! P = 220 × 5 = 1100W. Equivale a um chuveiro elétrico típico! 👑 <strong>Boss desbloqueado!</strong>"
                },
                {
                    type: "multiple",
                    context: "Conversão de temperatura:",
                    code: `escrever("Temperatura em Celsius:")\ncelsius ← ler()\nfahrenheit ← (celsius * 9/5) + 32\nkelvin ← celsius + 273.15\nescrever(celsius + "°C equivale a:")\nescrever(fahrenheit + "°F")\nescrever(kelvin + "K")`,
                    question: "Usuário digita <strong>100</strong>°C. Quais os valores exibidos?",
                    options: ["100°C, 212°F, 373.15K", "100°C, 132°F, 373K", "100°C, 180°F, 373.15K", "100°C, 212°F, 100K"],
                    correct: 0,
                    hints: ["F = (100×9/5)+32. K = 100+273.15."],
                    successMessage: "Excelente! F = 212°F. K = 373.15K. Conversões clássicas! 👑 <strong>Boss desbloqueado!</strong>"
                }
            ]
        }
    ],

    bossQuestions: [
        { id: 1, question: "O que faz o comando <code>escrever()</code>?", options: ["Lê dados do usuário", "Exibe informações na tela", "Cria uma variável", "Apaga a tela"], correct: 1, explanation: "escrever() é o comando de SAÍDA — exibe dados para o usuário." },
        { id: 2, question: "O que faz o comando <code>ler()</code>?", options: ["Exibe texto na tela", "Calcula expressões", "Aguarda entrada do usuário", "Reinicia o programa"], correct: 2, explanation: "ler() é o comando de ENTRADA — pausa e espera o usuário digitar." },
        { id: 3, code: "escrever(\"Ola\")<br>escrever(\"Mundo\")", question: "Quantas linhas são exibidas na tela?", options: ["1", "2", "0", "Erro"], correct: 1, explanation: "Cada escrever() gera uma linha de saída separada." },
        { id: 4, code: "nome ← ler()<br>escrever(nome)", question: "Se o usuário digitar 'João', o que é exibido?", options: ["nome", "ler()", "João", "Erro"], correct: 2, explanation: "A variável armazena o valor digitado e escrever() exibe esse valor." },
        { id: 5, question: "Qual a ordem correta para pedir e mostrar um dado?", options: ["ler() → escrever(prompt) → escrever(result)", "escrever(prompt) → ler() → escrever(result)", "ler() → ler() → escrever()", "escrever() → escrever() → ler()"], correct: 1, explanation: "Primeiro mostra o que pede (prompt), depois lê, depois exibe o resultado." },
        { id: 6, code: "escrever(\"Valor: \" + 42)", question: "O que aparece na tela?", options: ["Valor: + 42", "Valor: 42", "escrever(Valor: 42)", "\"Valor: \" + 42"], correct: 1, explanation: "O + concatena o texto com o número, exibindo 'Valor: 42'." },
        { id: 7, code: "x ← 10<br>escrever(\"x vale: \" + x)", question: "Saída correta:", options: ["x vale: x", "x vale: 10", "\"x vale: \" + x", "Erro de tipos"], correct: 1, explanation: "A variável x é substituída por seu valor (10) na concatenação." },
        { id: 8, question: "Qual código exibe 'Olá, Maria!'?", options: ["escrever(Olá, Maria!)", "escrever(\"Olá, \" + nome) com nome='Maria'", "ler(\"Olá, Maria!\")", "nome ← \"Maria\""], correct: 1, explanation: "Concatenamos o texto fixo com o valor da variável nome." },
        { id: 9, code: "a ← ler()<br>b ← ler()<br>escrever(a + b)", question: "Se usuário digitar 5 e 3 como NÚMEROS, qual a saída?", options: ["53", "8", "5 + 3", "Erro"], correct: 1, explanation: "Se forem números, + realiza soma aritmética: 5+3=8." },
        { id: 10, code: "escrever(\"Nome:\")<br>nome ← ler()<br>escrever(\"Cidade:\")<br>cidade ← ler()<br>escrever(nome + \" de \" + cidade)", question: "Quantas vezes o programa para esperando entrada?", options: ["1", "2", "3", "0"], correct: 1, explanation: "Há dois comandos ler(), então o programa para 2 vezes." },
        { id: 11, question: "Para exibir o valor de uma variável <code>total</code>, usamos:", options: ["ler(total)", "escrever(total)", "total(escrever)", "print total"], correct: 1, explanation: "escrever(variavel) exibe o valor armazenado na variável." },
        { id: 12, code: "preco ← 50<br>qtd ← 3<br>total ← preco * qtd<br>escrever(\"Total: R$ \" + total)", question: "Qual a saída?", options: ["Total: R$ preco * qtd", "Total: R$ 150", "Total: R$ 50 * 3", "Erro"], correct: 1, explanation: "total recebe 50*3=150, e escrever() exibe o valor calculado." },
        { id: 13, code: "escrever(\"A\")<br>escrever(\"B\")<br>escrever(\"C\")", question: "Qual a saída?", options: ["ABC em uma linha", "A B C com espaços", "A, depois B, depois C em linhas separadas", "Erro"], correct: 2, explanation: "Cada escrever() exibe em uma nova linha." },
        { id: 14, question: "O que é 'concatenação'?", options: ["Dividir um texto", "Juntar textos/valores com +", "Converter tipos de dados", "Apagar variáveis"], correct: 1, explanation: "Concatenar = unir textos e valores usando o operador +." },
        { id: 15, code: "nome ← \"Ana\"<br>idade ← 30<br>escrever(\"Nome: \" + nome + \", Idade: \" + idade)", question: "Saída correta:", options: ["Nome: nome, Idade: idade", "Nome: + nome + Idade: + idade", "Nome: Ana, Idade: 30", "Erro de concatenação"], correct: 2, explanation: "Variáveis são substituídas pelos seus valores na concatenação." },
        { id: 16, code: "escrever(\"Digite sua idade:\")<br>idade ← ler()<br>escrever(\"Daqui a 10 anos: \" + (idade + 10))", question: "Se usuário digitar 25, qual a saída?", options: ["Daqui a 10 anos: 2510", "Daqui a 10 anos: 35", "Daqui a 10 anos: idade + 10", "Erro"], correct: 1, explanation: "Os parênteses garantem que 25+10=35 seja calculado antes da concatenação." },
        { id: 17, question: "Qual a diferença entre <code>escrever(x)</code> e <code>escrever(\"x\")</code>?", options: ["Nenhuma diferença", "O primeiro mostra o valor de x; o segundo mostra a letra x", "O primeiro dá erro; o segundo funciona", "Ambos mostram a letra x"], correct: 1, explanation: "Sem aspas = valor da variável. Com aspas = texto literal 'x'." },
        { id: 18, code: "a ← ler()<br>b ← ler()<br>c ← ler()<br>escrever(\"Soma: \" + (a + b + c))", question: "Quantas entradas o programa precisa?", options: ["1", "2", "3", "4"], correct: 2, explanation: "Três comandos ler() = três entradas do usuário." },
        { id: 19, code: "produto ← \"Caneta\"<br>preco ← 2.50<br>escrever(produto + \" - R$ \" + preco)", question: "Saída:", options: ["produto - R$ preco", "Caneta - R$ 2.50", "Caneta R$ 2.50", "Erro: tipos diferentes"], correct: 1, explanation: "Concatenação funciona misturando String e número." },
        { id: 20, question: "Um programa lê nome e sobrenome separados. Como exibir nome completo?", options: ["escrever(nome sobrenome)", "escrever(nome + sobrenome)", "escrever(nome + \" \" + sobrenome)", "escrever(\"nome + sobrenome\")"], correct: 2, explanation: "Precisamos adicionar um espaço entre os valores: nome + \" \" + sobrenome." },
        { id: 21, code: "x ← \"5\"<br>y ← \"3\"<br>escrever(x + y)", question: "Saída (x e y são TEXTO):", options: ["8", "53", "5 + 3", "Erro"], correct: 1, explanation: "Texto + Texto = concatenação. \"5\" + \"3\" = \"53\", não 8!" },
        { id: 22, question: "Para exibir apenas uma linha vazia, usamos:", options: ['escrever("")', 'escrever(" ")', "ler()", "escrever()"], correct: 0, explanation: "escrever(\"\"): exibe uma linha vazia, pulando uma linha." },
        { id: 23, code: "escrever(\"=== SISTEMA ===\")<br>escrever(\"Usuário:\")<br>usuario ← ler()<br>escrever(\"Bem-vindo, \" + usuario + \"!\")", question: "Quantas saídas (escrever) o programa tem?", options: ["1", "2", "3", "4"], correct: 2, explanation: "Três escrever(): cabeçalho, prompt, e mensagem de boas-vindas." },
        { id: 24, code: "n1 ← ler()<br>n2 ← ler()<br>media ← (n1 + n2) / 2<br>escrever(\"Média: \" + media)", question: "Este código calcula a média de quantos números?", options: ["1", "2", "3", "Indeterminado"], correct: 1, explanation: "Dois ler() coletam dois números; a fórmula calcula a média dos dois." },
        { id: 25, question: "Qual opção é INCORRETA para exibir texto?", options: ['escrever("Olá!")', "escrever('Olá!')", "escrever(Olá!)", "Todas corretas"], correct: 2, explanation: "Sem aspas, o programa tenta interpretar 'Olá!' como variável/comando — erro!" },
        { id: 26, code: "escrever(\"Nota 1:\")<br>n1 ← ler()<br>escrever(\"Nota 2:\")<br>n2 ← ler()<br>escrever(\"Nota 3:\")<br>n3 ← ler()<br>media ← (n1 + n2 + n3) / 3<br>escrever(\"Média: \" + media)<br>escrever(\"Situação: \" + aprovado)", question: "O código acima tem um PROBLEMA. Qual é?", options: ["Não é possível calcular média de 3 notas", "A variável 'aprovado' é usada sem ser definida antes", "Faltam aspas no escrever da média", "A fórmula da média está errada"], correct: 1, explanation: "A variável 'aprovado' é usada no escrever() mas nunca foi declarada ou calculada — erro clássico de variável indefinida." },
        { id: 27, question: "Qual a finalidade do 'prompt' (escrever antes do ler)?", options: ["É obrigatório para ler() funcionar", "Informar ao usuário o que deve digitar", "Converter o tipo do dado lido", "Validar a entrada do usuário"], correct: 1, explanation: "O prompt orienta o usuário sobre o que digitar — boa prática essencial." },
        { id: 28, code: "escrever(\"Produto:\")<br>p ← ler()<br>escrever(\"Qtd:\")<br>q ← ler()<br>escrever(\"Preço:\")<br>v ← ler()<br>total ← q * v<br>escrever(p + \": \" + q + \" x R$ \" + v + \" = R$ \" + total)", question: "Quantas entradas o usuário fornece?", options: ["1", "2", "3", "4"], correct: 2, explanation: "Três comandos ler(): produto, quantidade e preço." },
        { id: 29, code: "a ← 5<br>b ← 3<br>escrever(\"Soma: \" + (a + b))<br>escrever(\"Produto: \" + (a * b))<br>escrever(\"Divisão: \" + (a / b))", question: "Quantas linhas são exibidas?", options: ["1", "2", "3", "6"], correct: 2, explanation: "Três comandos escrever() = três linhas de saída." },
        { id: 30, code: "escrever(\"Nome:\")<br>nome ← ler()<br>escrever(\"Idade:\")<br>idade ← ler()<br>anoNasc ← 2025 - idade<br>escrever(nome + \" nasceu por volta de \" + anoNasc)", question: "Se usuário digitar 'Carlos' e 20, qual a saída?", options: ["Carlos nasceu por volta de 2005", "nome nasceu por volta de anoNasc", "Carlos nasceu por volta de 20", "Erro: idade começa em 0"], correct: 0, explanation: "2025 - 20 = 2005. Saída: 'Carlos nasceu por volta de 2005'." },
        { id: 31, code: "escrever(\"Tensão (V):\")<br>tensao ← ler()<br>escrever(\"Resistência (Ω):\")<br>resistencia ← ler()<br>corrente ← tensao / resistencia<br>escrever(\"Corrente: \" + corrente + \" A\")", question: "Tensão = 24V, Resistência = 6Ω. Qual a corrente exibida? (Lei de Ohm: I = V/R)", options: ["4 A", "144 A", "0.25 A", "18 A"], correct: 0, explanation: "I = V/R = 24/6 = 4A. Lei de Ohm aplicada diretamente." },
        { id: 32, code: "escrever(\"Tensão (V):\")<br>v ← ler()<br>escrever(\"Corrente (A):\")<br>i ← ler()<br>potencia ← v * i<br>escrever(\"Potência: \" + potencia + \" W\")", question: "V = 220V, I = 5A. Qual a potência? (P = V × I)", options: ["44 W", "1100 W", "225 W", "215 W"], correct: 1, explanation: "P = V × I = 220 × 5 = 1100W. Equivale a um chuveiro elétrico típico!" },
        { id: 33, code: "escrever(\"Resistência (Ω):\")<br>r ← ler()<br>escrever(\"Corrente (A):\")<br>i ← ler()<br>potencia ← r * (i * i)<br>tensao ← r * i<br>escrever(\"V = \" + tensao + \" V\")<br>escrever(\"P = \" + potencia + \" W\")", question: "R = 10Ω, I = 2A. Quais os valores exibidos? (V = R×I e P = R×I²)", options: ["V = 20V, P = 40W", "V = 12V, P = 22W", "V = 20V, P = 20W", "V = 5V, P = 40W"], correct: 0, explanation: "V = R×I = 10×2 = 20V. P = R×I² = 10×4 = 40W." },
        { id: 34, code: "escrever(\"Potência (W):\")<br>p ← ler()<br>escrever(\"Tensão (V):\")<br>v ← ler()<br>corrente ← p / v<br>resistencia ← v / corrente<br>escrever(\"I = \" + corrente + \" A\")<br>escrever(\"R = \" + resistencia + \" Ω\")", question: "P = 60W, V = 120V. Quais os valores exibidos?", options: ["I = 0.5A, R = 240Ω", "I = 2A, R = 60Ω", "I = 0.5A, R = 60Ω", "I = 7200A, R = 120Ω"], correct: 0, explanation: "I = P/V = 60/120 = 0.5A. R = V/I = 120/0.5 = 240Ω. Lei de Ohm invertida!" },
        { id: 35, code: "escrever(\"Temperatura em Celsius:\")<br>celsius ← ler()<br>fahrenheit ← (celsius * 9/5) + 32<br>kelvin ← celsius + 273.15<br>escrever(celsius + \"°C equivale a:\")<br>escrever(fahrenheit + \"°F\")<br>escrever(kelvin + \"K\")", question: "Usuário digita <strong>100</strong>°C. Quais os valores exibidos?", options: ["100°C, 212°F, 373.15K", "100°C, 132°F, 373K", "100°C, 180°F, 373.15K", "100°C, 212°F, 100K"], correct: 0, explanation: "F = (100×9/5)+32 = 212°F. K = 100+273.15 = 373.15K. Conversões clássicas!" }
    ]

};
