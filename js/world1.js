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
                // CASA 1
                {
                    type: "fill", zone: "light",
                    context: "Você está criando um sistema de cadastro. Complete o código com os TIPOS CORRETOS:",
                    template: `// Cadastro de Cliente

nome ← {0}
idade ← {1}
clienteVIP ← {2}`,
                    blanks: [
                        { id: 0, placeholder: "???", hint: "Como representamos texto em programação?" },
                        { id: 1, placeholder: "???", hint: "Idade é um número. Precisa de aspas?" },
                        { id: 2, placeholder: "???", hint: "VIP ou não - quantos estados possíveis?" }
                    ],
                    validate: function(answers) {
                        const results = [];
                        results.push({ correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Como representamos texto em programação?" });
                        results.push({ correct: /^\d+$/.test(answers[1].trim()), hint: "Idade é um número. Precisa de aspas?" });
                        results.push({ correct: ["verdadeiro", "falso", "true", "false"].includes(answers[2].trim().toLowerCase()), hint: "VIP ou não - quantos estados possíveis?" });
                        return results;
                    },
                    successMessage: "Excelente! Tipos básicos:\n\n• <strong>String</strong>: entre aspas\n• <strong>Inteiro</strong>: número sem decimal\n• <strong>Booleano</strong>: verdadeiro/falso"
                },
                // CASA 2
                {
                    type: "multiple", zone: "light",
                    context: "Analise CADA LINHA e acompanhe os valores:",
                    code: `a ← 5      // Linha 1
b ← a      // Linha 2
a ← 10     // Linha 3`,
                    question: "Após executar as 3 linhas, qual é o valor de <strong>b</strong>?",
                    options: ["5", "10", "15", "Indefinido"],
                    correct: 0,
                    hints: ["Acompanhe linha por linha.", "Na linha 2, qual era o valor de 'a'?", "Alterar 'a' depois afeta 'b'?"],
                    successMessage: "Perfeito! Quando <code>b ← a</code> executou, 'a' valia 5. Mudar 'a' depois não afeta 'b'."
                },
                // CASA 3
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
                // CASA 4
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
                // CASA 5
                {
                    type: "fill", zone: "light",
                    context: "Sistema de academia. Preencha com valores válidos para cada <strong>tipo especificado</strong>:",
                    template: `// Ficha do Aluno

nomeAluno ← {0}     
idade ← {1}         
pesoKg ← {2}        
alturaM ← {3}       
ativo ← {4}         `,
                    blanks: [
                        { id: 0, placeholder: "String", hint: "Como o computador diferencia texto de comando?" },
                        { id: 1, placeholder: "Inteiro", hint: "Faz sentido ter 25 anos e meio?" },
                        { id: 2, placeholder: "Real", hint: "Peso pode variar em gramas. Inteiro suporta?" },
                        { id: 3, placeholder: "Real", hint: "1 metro e 75cm... como representar?" },
                        { id: 4, placeholder: "Booleano", hint: "Ativo ou não - quantos estados?" }
                    ],
                    validate: function(answers) {
                        const results = [];
                        results.push({ correct: /^["'].*["']$/.test(answers[0].trim()) && answers[0].trim().length > 2, hint: "Como o computador diferencia texto de comando?" });
                        results.push({ correct: /^\d+$/.test(answers[1].trim()), hint: "Faz sentido ter 25 anos e meio?" });
                        results.push({ correct: /^\d+\.\d+$/.test(answers[2].trim()), hint: "Peso pode variar em gramas. Inteiro suporta?" });
                        results.push({ correct: /^\d+\.\d+$/.test(answers[3].trim()), hint: "1 metro e 75cm... como representar?" });
                        results.push({ correct: ["verdadeiro", "falso", "true", "false"].includes(answers[4].trim().toLowerCase()), hint: "Ativo ou não - quantos estados?" });
                        return results;
                    },
                    successMessage: "Excelente! Você domina os tipos básicos!\n\n⚡ <strong>Dark Side desbloqueado!</strong>"
                },
                // CASA 6 - DARK SIDE
                {
                    type: "multiple", zone: "dark",
                    context: "Analise com ATENÇÃO:",
                    code: `x ← "100"
y ← 50
resultado ← x + y`,
                    question: "O que acontece na terceira linha?",
                    options: ["resultado recebe 150", "resultado recebe \"10050\"", "Erro: tipos incompatíveis", "resultado recebe \"150\""],
                    correct: 2,
                    hints: [],
                    successMessage: "Correto! Não é possível somar String + Inteiro diretamente."
                },
                // CASA 7
                {
                    type: "fill", zone: "dark",
                    context: "Sistema de carrinho de compras. O programa soma 3 produtos. Complete:",
                    template: `total ← {0}

preco1 ← 29.90
total ← total + preco1

preco2 ← 15.50
total ← total + preco2`,
                    blanks: [{ id: 0, placeholder: "???", hint: "Incorreto." }],
                    validate: function(answers) {
                        const ans = answers[0].trim();
                        return [{ correct: ans === "0" || ans === "0.0" || ans === "0.00", hint: "Incorreto." }];
                    },
                    successMessage: "Correto! Acumuladores devem iniciar em <strong>0</strong>."
                },
                // CASA 8
                {
                    type: "multiple", zone: "dark",
                    context: "Quantos TIPOS DIFERENTES existem neste código?",
                    code: `produto ← "Notebook"
preco ← 2499.90
quantidade ← 3
emEstoque ← verdadeiro
codigo ← "NB-001"
desconto ← 0.15`,
                    question: "Total de tipos DIFERENTES utilizados:",
                    options: ["2 tipos", "3 tipos", "4 tipos", "6 tipos"],
                    correct: 2,
                    hints: [],
                    successMessage: "Correto! 4 tipos:\n\n• String: produto, codigo\n• Real: preco, desconto\n• Inteiro: quantidade\n• Booleano: emEstoque"
                },
                // CASA 9
                {
                    type: "multiple", zone: "dark",
                    context: "Um programador júnior escreveu este código. Há um PROBLEMA:",
                    code: `idade1 ← "25"
idade2 ← 30
idade3 ← 28

soma ← idade1 + idade2 + idade3
media ← soma / 3`,
                    question: "Qual é o problema?",
                    options: ["Falta declarar 'soma'", "idade1 está como texto", "Não pode dividir por 3", "Falta 'media'"],
                    correct: 1,
                    hints: [],
                    successMessage: "Exato! idade1 tem ASPAS, tornando-a String. Erro na soma!"
                },
                // CASA 10
                {
                    type: "multiple", zone: "dark",
                    context: "Algoritmo clássico de TROCA de valores:",
                    code: `a ← 7
b ← 3

temp ← a
a ← b
b ← temp`,
                    question: "Quais os valores de 'a' e 'b' ao final?",
                    options: ["a = 7, b = 3", "a = 3, b = 7", "a = 3, b = 3", "a = 7, b = 7"],
                    correct: 1,
                    hints: [],
                    successMessage: "Perfeito! Variável 'temp' guarda o valor original.\n\n👑 <strong>Boss desbloqueado!</strong>"
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