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
        // ========== LIGHT SIDE (Casas 1-6) ==========

        // CASA 1 - escrever() básico
        {
            type: "multiple",
            zone: "light",
            context: "O comando <code>escrever()</code> exibe informações na tela para o usuário.",
            code: `escrever("Bem-vindo ao sistema!")`,
            question: "O que aparece na tela ao executar este código?",
            options: [
                "Bem-vindo ao sistema!",
                "escrever(Bem-vindo ao sistema!)",
                "Nada, há um erro",
                '"Bem-vindo ao sistema!"'
            ],
            correct: 0,
            hints: [
                "O comando escrever() MOSTRA o que está entre parênteses.",
                "As aspas delimitam o texto, mas não aparecem na saída."
            ],
            successMessage: "Correto! O comando <code>escrever()</code> exibe o conteúdo entre aspas na tela, sem as aspas."
        },

        // CASA 2 - escrever() com variáveis
        {
            type: "fill",
            zone: "light",
            context: "Podemos mostrar o valor de variáveis usando <code>escrever()</code>.",
            template: `nome ← "Carlos"
idade ← 25

{0}(nome)
{1}(idade)`,
            blanks: [
                { id: 0, placeholder: "comando", hint: "Qual comando mostra dados na tela?" },
                { id: 1, placeholder: "comando", hint: "O mesmo comando serve para qualquer tipo de dado." }
            ],
            validate: function(answers) {
                const results = [];
                results.push({ 
                    correct: answers[0].trim().toLowerCase() === "escrever", 
                    hint: "Qual comando mostra dados na tela?" 
                });
                results.push({ 
                    correct: answers[1].trim().toLowerCase() === "escrever", 
                    hint: "O mesmo comando serve para qualquer tipo de dado." 
                });
                return results;
            },
            successMessage: "Excelente! <code>escrever()</code> funciona com qualquer tipo: texto, número, booleano..."
        },

        // CASA 3 - ler() básico
        {
            type: "multiple",
            zone: "light",
            context: "O comando <code>ler()</code> pausa o programa e espera o usuário digitar algo.",
            code: `escrever("Digite seu nome:")
nome ← ler()
escrever("Olá!")`,
            question: "O que acontece quando o programa chega na linha <code>nome ← ler()</code>?",
            options: [
                "Mostra 'nome' na tela",
                "O programa para e espera o usuário digitar",
                "Cria uma variável vazia",
                "Dá erro porque não tem valor"
            ],
            correct: 1,
            hints: [
                "ler() é um comando de ENTRADA de dados.",
                "O programa precisa RECEBER algo do usuário."
            ],
            successMessage: "Perfeito! <code>ler()</code> pausa a execução e aguarda a entrada do usuário."
        },

        // CASA 4 - Entrada + variável
        {
            type: "drag",
            zone: "light",
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

        // CASA 5 - Concatenação
        {
            type: "fill",
            zone: "light",
            context: "Concatenação junta textos e variáveis usando o operador <code>+</code>.",
            template: `nome ← "Ana"
idade ← 20

escrever("Nome: " {0} nome)
escrever("Idade: " {1} idade {2} " anos")`,
            blanks: [
                { id: 0, placeholder: "?", hint: "Qual operador junta textos?" },
                { id: 1, placeholder: "?", hint: "O mesmo operador!" },
                { id: 2, placeholder: "?", hint: "Continua juntando..." }
            ],
            validate: function(answers) {
                const results = [];
                results.push({ correct: answers[0].trim() === "+", hint: "Qual operador junta textos?" });
                results.push({ correct: answers[1].trim() === "+", hint: "O mesmo operador!" });
                results.push({ correct: answers[2].trim() === "+", hint: "Continua juntando..." });
                return results;
            },
            successMessage: "Perfeito! O operador <code>+</code> concatena (junta) textos e variáveis.\n\nSaída: \"Nome: Ana\" e \"Idade: 20 anos\""
        },

        // CASA 6 - Entrada + cálculo básico
        {
            type: "multiple",
            zone: "light",
            context: "Programas frequentemente leem dados, processam e mostram resultados.",
            code: `escrever("Digite um número:")
numero ← ler()
dobro ← numero * 2
escrever("O dobro é: " + dobro)`,
            question: "Se o usuário digitar <strong>7</strong>, o que será exibido no final?",
            options: [
                "O dobro é: 7",
                "O dobro é: 14",
                "O dobro é: dobro",
                "O dobro é: numero * 2"
            ],
            correct: 1,
            hints: [
                "A variável 'numero' recebe 7.",
                "dobro = 7 * 2 = ?"
            ],
            successMessage: "Exato! O programa lê 7, calcula 7 * 2 = 14, e exibe o resultado.\n\n⚡ <strong>Dark Side desbloqueado!</strong>"
        },

        // ========== DARK SIDE (Casas 7-15) ==========

        // CASA 7 - Múltiplas entradas
        {
            type: "fill",
            zone: "dark",
            context: "Sistema de cadastro com múltiplas entradas:",
            template: `escrever("=== CADASTRO ===")

escrever("Nome:")
nome ← {0}

escrever("Idade:")
idade ← {1}

escrever("Cidade:")
cidade ← {2}

escrever("Cadastro: " + nome + ", " + idade + " anos, " + cidade)`,
            blanks: [
                { id: 0, placeholder: "?", hint: "Incorreto." },
                { id: 1, placeholder: "?", hint: "Incorreto." },
                { id: 2, placeholder: "?", hint: "Incorreto." }
            ],
            validate: function(answers) {
                const results = [];
                results.push({ correct: answers[0].trim().toLowerCase() === "ler()", hint: "Incorreto." });
                results.push({ correct: answers[1].trim().toLowerCase() === "ler()", hint: "Incorreto." });
                results.push({ correct: answers[2].trim().toLowerCase() === "ler()", hint: "Incorreto." });
                return results;
            },
            successMessage: "Correto! Cada entrada usa <code>ler()</code> para receber dados do usuário."
        },

        // CASA 8 - Entrada + tipos diferentes
        {
            type: "multiple",
            zone: "dark",
            context: "Analise o código com atenção:",
            code: `escrever("Digite o preço:")
preco ← ler()

escrever("Digite a quantidade:")
qtd ← ler()

total ← preco * qtd
escrever("Total: " + total)`,
            question: "Se o usuário digitar preço = <strong>10.50</strong> e quantidade = <strong>3</strong>, qual o total?",
            options: [
                "10.503",
                "31.50",
                "13.50",
                "Erro: não pode multiplicar"
            ],
            correct: 1,
            hints: [],
            successMessage: "Correto! 10.50 * 3 = 31.50. O ler() captura o valor e a multiplicação funciona normalmente."
        },

        // CASA 9 - Formatação de saída
        {
            type: "multiple",
            zone: "dark",
            context: "Observe a construção da mensagem de saída:",
            code: `produto ← "Notebook"
preco ← 2500
parcelas ← 10
valorParcela ← preco / parcelas

escrever(produto + " - R$ " + preco + " ou " + parcelas + "x de R$ " + valorParcela)`,
            question: "Qual será a saída exata?",
            options: [
                "Notebook - R$ 2500 ou 10x de R$ 250",
                "produto - R$ preco ou parcelasx de R$ valorParcela",
                "Notebook - R$ 2500 ou 10x de R$ valorParcela",
                "Erro de concatenação"
            ],
            correct: 0,
            hints: [],
            successMessage: "Exato! Variáveis são substituídas por seus valores na concatenação."
        },

        // CASA 10 - Mistura com Mundo 1 (tipos)
        {
            type: "multiple",
            zone: "dark",
            context: "Identificando tipos de dados na entrada:",
            code: `escrever("Nome do produto:")
nome ← ler()

escrever("Preço:")
preco ← ler()

escrever("Quantidade em estoque:")
qtd ← ler()

escrever("Disponível para venda?")
disponivel ← ler()`,
            question: "Quais TIPOS de dados o usuário deveria digitar para cada variável?",
            options: [
                "String, Real, Inteiro, Booleano",
                "String, String, String, String",
                "Inteiro, Real, Inteiro, Booleano",
                "Todos são String até converter"
            ],
            correct: 0,
            hints: [],
            successMessage: "Correto! Cada variável espera um tipo específico:\n\n• nome → String\n• preco → Real\n• qtd → Inteiro\n• disponivel → Booleano"
        },

        // CASA 11 - Contexto real (estilo professor)
        {
            type: "drag",
            zone: "dark",
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

        // CASA 12 - Sequência de operações
        {
            type: "fill",
            zone: "dark",
            context: "Calculadora de IMC (Índice de Massa Corporal):",
            template: `escrever("=== CALCULADORA IMC ===")

escrever("Peso (kg):")
peso ← ler()

escrever("Altura (m):")
altura ← ler()

imc ← peso / (altura {0} altura)

escrever("Seu IMC é: " {1} imc)`,
            blanks: [
                { id: 0, placeholder: "?", hint: "Incorreto." },
                { id: 1, placeholder: "?", hint: "Incorreto." }
            ],
            validate: function(answers) {
                const results = [];
                results.push({ correct: answers[0].trim() === "*", hint: "Incorreto." });
                results.push({ correct: answers[1].trim() === "+", hint: "Incorreto." });
                return results;
            },
            successMessage: "Correto! IMC = peso / (altura * altura). Fórmula clássica!"
        },

        // CASA 13 - Pegadinha de tipos
        {
            type: "multiple",
            zone: "dark",
            context: "Cuidado com os tipos de dados!",
            code: `escrever("Digite sua idade:")
idade ← ler()

escrever("Digite quantos anos quer somar:")
soma ← ler()

resultado ← idade + soma
escrever("Idade futura: " + resultado)`,
            question: "Se o usuário digitar idade = <strong>\"20\"</strong> (como texto) e soma = <strong>\"5\"</strong> (como texto), qual o resultado?",
            options: [
                "25",
                "\"205\"",
                "Erro de tipo",
                "20 + 5"
            ],
            correct: 1,
            hints: [],
            successMessage: "Pegadinha! Se ambos forem TEXTO, o + CONCATENA ao invés de somar.\n\n\"20\" + \"5\" = \"205\", não 25!"
        },

        // CASA 14 - Problema completo
        {
            type: "multiple",
            zone: "dark",
            context: "Sistema completo de compra:",
            code: `escrever("Produto:")
produto ← ler()

escrever("Preço unitário:")
preco ← ler()

escrever("Quantidade:")
qtd ← ler()

subtotal ← preco * qtd
desconto ← subtotal * 0.10
total ← subtotal - desconto

escrever("Subtotal: R$ " + subtotal)
escrever("Desconto (10%): R$ " + desconto)
escrever("Total: R$ " + total)`,
            question: "Produto: \"Caneta\", Preço: 2.50, Quantidade: 4. Qual o TOTAL final?",
            options: [
                "R$ 10.00",
                "R$ 9.00",
                "R$ 1.00",
                "R$ 11.00"
            ],
            correct: 1,
            hints: [],
            successMessage: "Correto!\n\n• Subtotal: 2.50 × 4 = 10.00\n• Desconto: 10.00 × 0.10 = 1.00\n• Total: 10.00 - 1.00 = 9.00"
        },

        // CASA 15 - Desafio final: Eletrônica aplicada
        {
            type: "multiple",
            zone: "dark",
            context: "Aplicando programação em eletrônica! Lei de Ohm e Potência:",
            code: `escrever("=== CALCULADORA ELÉTRICA ===")

escrever("Tensão (V):")
tensao ← ler()

escrever("Resistência (Ω):")
resistencia ← ler()

corrente ← tensao / resistencia
potencia ← tensao * corrente
potencia2 ← resistencia * (corrente * corrente)

escrever("I = " + corrente + " A")
escrever("P = V×I = " + potencia + " W")
escrever("P = R×I² = " + potencia2 + " W")`,
            question: "Com tensão = <strong>12V</strong> e resistência = <strong>4Ω</strong>, quais os valores corretos?",
            options: [
                "I = 3A, P = 36W, P = 36W",
                "I = 48A, P = 576W, P = 576W",
                "I = 3A, P = 12W, P = 4W",
                "Erro: não pode calcular dois P"
            ],
            correct: 0,
            hints: [],
            successMessage: "Excelente!\n\n• I = V/R = 12/4 = 3A\n• P = V×I = 12×3 = 36W\n• P = R×I² = 4×9 = 36W\n\nAs duas fórmulas de potência dão o mesmo resultado! 👑 <strong>Boss desbloqueado!</strong>"
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