const WORLD_3 = {
    id: 3,
    title: "Operadores",
    letter: "G",
    icon: "🪐",
    bossProva: 15,
    bossAprova: 11,
    intro: {
        title: "⚙️ Operadores",
        description: "Operadores são os símbolos que dizem ao computador <strong>o que fazer</strong> com os valores. Aritméticos calculam, relacionais comparam, lógicos combinam condições.",
        example: `// Aritméticos\nresultado ← 10 + 3 * 2   // = 16\n\n// Relacionais\nescrever(idade >= 18)      // verdadeiro ou falso\n\n// Lógicos\nescrever(nota >= 6 E frequencia >= 75)`
    },

    stages: [

        // ========== LIGHT SIDE ==========

        // CARD 1 — Aritméticos
        {
            type: "card", zone: "light",
            title: "⚙️ Operadores Aritméticos",
            content: `<p>Operadores aritméticos dizem ao computador qual conta fazer com os valores.</p>
                <table>
                    <tr><th>Operador</th><th>Operação</th><th>Exemplo</th><th>Resultado</th></tr>
                    <tr><td><code>+</code></td><td>Adição</td><td><code>10 + 3</code></td><td>13</td></tr>
                    <tr><td><code>-</code></td><td>Subtração</td><td><code>10 - 3</code></td><td>7</td></tr>
                    <tr><td><code>*</code></td><td>Multiplicação</td><td><code>10 * 3</code></td><td>30</td></tr>
                    <tr><td><code>/</code></td><td>Divisão</td><td><code>10 / 3</code></td><td>3.33</td></tr>
                    <tr><td><code>%</code></td><td>Módulo</td><td><code>10 % 3</code></td><td>1</td></tr>
                </table>
                <p>Nos próximos níveis você vai usar esses operadores para resolver problemas reais.</p>`
        },

        // BASE 1 — Aritméticos básicos
        {
            type: "bank", zone: "light",
            questions: [
                { type: "multiple", context: "Analise o código e determine a saída:", code: "a ← 10<br>b ← 4<br>resultado ← a + b<br>escrever(resultado)", question: "Qual o valor exibido?", options: ["14","6","40","104"], correct: 0, hints: ["Some os valores de a e b."], successMessage: "Correto! 10 + 4 = 14." },
                { type: "multiple", context: "Analise o código e determine a saída:", code: "a ← 15<br>b ← 6<br>escrever(a - b)", question: "Qual o valor exibido?", options: ["9","21","10","90"], correct: 0, hints: ["Subtraia b de a."], successMessage: "Correto! 15 - 6 = 9." },
                { type: "multiple", context: "Analise o código e determine a saída:", code: "preco ← 25<br>quantidade ← 3<br>total ← preco * quantidade<br>escrever(total)", question: "Qual o valor exibido?", options: ["75","28","22","253"], correct: 0, hints: ["Multiplique preço pela quantidade."], successMessage: "Correto! 25 × 3 = 75." },
                { type: "fill", context: "Complete o operador correto para exibir 5:", code: "a ← 20<br>b ← 4<br>resultado ← a {0} b<br>escrever(resultado) // exibe 5", question: "Qual operador divide a por b?", blanks: [{id:0,placeholder:"?",hint:"Qual operador divide?"}], validate: (a) => [{correct: a[0].trim() === '/'}], successMessage: "Correto! 20 / 4 = 5." }
            ]
        },

        // BASE 2 — Aritméticos com contexto
        {
            type: "bank", zone: "light",
            questions: [
                { type: "fill", context: "Complete o operador para calcular o salário líquido:", code: "salario ← 1500<br>desconto ← 150<br>liquido ← salario {0} desconto<br>escrever(liquido)", question: "Qual operador subtrai o desconto do salário?", blanks: [{id:0,placeholder:"?",hint:"Salário líquido = salário bruto menos desconto"}], validate: (a) => [{correct: a[0].trim() === '-'}], successMessage: "Correto! 1500 - 150 = 1350." },
                { type: "multiple", context: "Analise o código:", code: "km ← 150<br>litros ← 10<br>consumo ← km / litros<br>escrever(consumo)", question: "Qual o valor exibido em consumo?", options: ["15","160","1500","1.5"], correct: 0, hints: ["Divida km por litros."], successMessage: "Correto! 150 ÷ 10 = 15." },
                { type: "multiple", context: "Analise o código:", code: "horas ← 8<br>valor_hora ← 25<br>bonus ← 100<br>pagamento ← horas * valor_hora + bonus<br>escrever(pagamento)", question: "Qual o pagamento calculado?", options: ["300","200","400","900"], correct: 0, hints: ["Multiplicação tem prioridade sobre adição."], successMessage: "Correto! 8×25=200, 200+100=300." },
                { type: "fill", context: "Complete os dois operadores:", code: 'horas ← 8<br>valor_hora ← 25<br>pagamento ← horas {0} valor_hora<br>escrever("Pagamento: R$ " {1} pagamento)', question: "Complete com o operador aritmético e o de concatenação.", blanks: [{id:0,placeholder:"?",hint:"Multiplica horas pelo valor"},{id:1,placeholder:"?",hint:"Une texto com variável"}], validate: (a) => [{correct: a[0].trim()==='*'},{correct: a[1].trim()==='+'}], successMessage: "Correto! * multiplica, + concatena." }
            ]
        },

        // CARD 2 — Módulo
        {
            type: "card", zone: "light",
            title: "🔢 O Módulo — o resto que importa",
            content: `<p>Quando dividimos 7 por 2, o resultado é 3. Mas sobra 1. Esse <strong>resto</strong> é o que <code>%</code> retorna.</p>
                <table>
                    <tr><th>Expressão</th><th>Significado</th><th>Resultado</th></tr>
                    <tr><td><code>7 / 2</code></td><td>Resultado da divisão</td><td>3</td></tr>
                    <tr><td><code>7 % 2</code></td><td>Resto da divisão</td><td>1</td></tr>
                </table>
                <p>Dois usos clássicos:<br>
                • <strong>Verificar número par:</strong> <code>numero % 2 == 0</code><br>
                • <strong>Verificar múltiplo:</strong> <code>numero % 5 == 0</code></p>
                <p><em>Se o resto é zero, a divisão foi exata.</em></p>`
        },

        // BASE 3 — Módulo
        {
            type: "bank", zone: "light",
            questions: [
                { type: "multiple", context: "Analise a expressão:", code: "escrever(10 % 3)", question: "Qual o valor exibido?", options: ["1","3","0","10"], correct: 0, hints: ["10 dividido por 3 é 3 com quanto de resto?"], successMessage: "Correto! 10 ÷ 3 = 3 e sobra 1." },
                { type: "multiple", context: "Analise o código:", code: "numero ← 8<br>escrever(numero % 2)", question: "Qual o valor exibido? O que indica?", options: ["0 — número par","1 — número ímpar","4 — metade","2 — divisível"], correct: 0, hints: ["8 dividido por 2 tem resto?"], successMessage: "Correto! 8 % 2 = 0, número par." },
                { type: "multiple", context: "Analise a expressão:", code: "escrever(7 % 2)", question: "Qual o valor exibido?", options: ["1","0","3","2"], correct: 0, hints: ["7 dividido por 2 é 3 com quanto de resto?"], successMessage: "Correto! 7 % 2 = 1, número ímpar." },
                { type: "fill", context: "Complete o operador para verificar múltiplo:", code: "numero ← 15<br>resultado ← numero {0} 5<br>escrever(resultado) // exibe 0", question: "Qual operador retorna o resto da divisão?", blanks: [{id:0,placeholder:"?",hint:"Qual operador retorna o resto?"}], validate: (a) => [{correct: a[0].trim()==='%'}], successMessage: "Correto! 15 % 5 = 0, múltiplo de 5." }
            ]
        },

        // CARD 3 — Precedência
        {
            type: "card", zone: "light",
            title: "📐 Precedência — a ordem importa",
            content: `<p>O computador não resolve da esquerda pra direita simplesmente — ele segue uma ordem:</p>
                <table>
                    <tr><th>Prioridade</th><th>Operadores</th></tr>
                    <tr><td>1ª</td><td><code>*</code> <code>/</code> <code>%</code></td></tr>
                    <tr><td>2ª</td><td><code>+</code> <code>-</code></td></tr>
                    <tr><td>Sempre ganha</td><td><strong>Parênteses ( )</strong></td></tr>
                </table>
                <p><code>2 + 3 * 4 = 14</code> (não 20!)<br>
                <code>(2 + 3) * 4 = 20</code></p>
                <p><em>Quando tiver dúvida, use parênteses. Código claro vale mais que código esperto.</em></p>`
        },

        // BASE 4 — Precedência
        {
            type: "bank", zone: "light",
            questions: [
                { type: "multiple", context: "Analise a expressão com atenção à precedência:", code: "escrever(2 + 3 * 4)", question: "Qual o valor exibido?", options: ["14","20","24","10"], correct: 0, hints: ["Qual operador tem prioridade, + ou *?"], successMessage: "Correto! 3*4=12, depois 2+12=14." },
                { type: "multiple", context: "Agora com parênteses:", code: "escrever((2 + 3) * 4)", question: "Qual o valor exibido?", options: ["20","14","24","10"], correct: 0, hints: ["Parênteses sempre são resolvidos primeiro."], successMessage: "Correto! (2+3)=5, depois 5*4=20." },
                { type: "multiple", context: "Analise a expressão:", code: "escrever(10 - 4 / 2)", question: "Qual o valor exibido?", options: ["8","3","6","5"], correct: 0, hints: ["Divisão tem prioridade sobre subtração."], successMessage: "Correto! 4/2=2, depois 10-2=8." },
                { type: "multiple", context: "Qual das expressões calcula corretamente total com desconto?", question: "Fórmula: total = (preço × quantidade) - desconto", options: ["(preco * quantidade) - desconto","preco * quantidade - desconto","preco * (quantidade - desconto)","preco + quantidade * desconto"], correct: 0, hints: ["Os parênteses garantem que a multiplicação acontece antes da subtração."], successMessage: "Correto! Parênteses forçam a ordem certa." }
            ]
        },

        // CARD 4 — Relacionais
        {
            type: "card", zone: "light",
            title: "⚖️ Operadores Relacionais",
            content: `<p>Relacionais <strong>comparam</strong> dois valores e sempre retornam <strong>verdadeiro</strong> ou <strong>falso</strong>.</p>
                <table>
                    <tr><th>Operador</th><th>Significado</th><th>Exemplo</th><th>Resultado</th></tr>
                    <tr><td><code>&gt;</code></td><td>maior que</td><td><code>8 &gt; 5</code></td><td>verdadeiro</td></tr>
                    <tr><td><code>&lt;</code></td><td>menor que</td><td><code>8 &lt; 5</code></td><td>falso</td></tr>
                    <tr><td><code>&gt;=</code></td><td>maior ou igual</td><td><code>5 &gt;= 5</code></td><td>verdadeiro</td></tr>
                    <tr><td><code>&lt;=</code></td><td>menor ou igual</td><td><code>4 &lt;= 3</code></td><td>falso</td></tr>
                    <tr><td><code>==</code></td><td>igual a</td><td><code>7 == 7</code></td><td>verdadeiro</td></tr>
                    <tr><td><code>!=</code></td><td>diferente de</td><td><code>7 != 3</code></td><td>verdadeiro</td></tr>
                </table>
                <p>⚠️ <strong>Atenção:</strong> <code>=</code> atribui valor. <code>==</code> compara. São coisas diferentes!</p>`
        },

        // BASE 5 — Relacionais
        {
            type: "bank", zone: "light",
            questions: [
                { type: "multiple", context: "Analise o código:", code: "idade ← 17<br>escrever(idade >= 18)", question: "Qual o valor exibido?", options: ["falso","verdadeiro","17","18"], correct: 0, hints: ["17 é maior ou igual a 18?"], successMessage: "Correto! 17 >= 18 é falso." },
                { type: "multiple", context: "Analise o código:", code: "nota ← 7<br>escrever(nota >= 6)", question: "O aluno está aprovado?", options: ["verdadeiro","falso","7","6"], correct: 0, hints: ["7 é maior ou igual a 6?"], successMessage: "Correto! 7 >= 6 é verdadeiro." },
                { type: "multiple", context: "Analise os dois escrever():", code: "a ← 5<br>b ← 5<br>escrever(a == b)<br>escrever(a != b)", question: "Quais os dois valores exibidos?", options: ["verdadeiro / falso","falso / verdadeiro","verdadeiro / verdadeiro","falso / falso"], correct: 0, hints: ["== verifica igualdade, != verifica diferença."], successMessage: "Correto! 5==5 verdadeiro, 5!=5 falso." },
                { type: "fill", context: "Complete o operador relacional:", code: "temperatura ← 38<br>escrever(temperatura {0} 37) // exibe verdadeiro", question: "Qual operador verifica se a temperatura está ACIMA do normal?", blanks: [{id:0,placeholder:"?",hint:"Maior que"}], validate: (a) => [{correct: a[0].trim()=='>'}], successMessage: "Correto! 38 > 37 é verdadeiro — febre!" }
            ]
        },

        // CARD 5 — Lógicos
        {
            type: "card", zone: "light",
            title: "🔗 Operadores Lógicos",
            content: `<p>Quando uma condição só não basta, os operadores lógicos <strong>combinam</strong> duas ou mais.</p>
                <table>
                    <tr><th>Operador</th><th>Significado</th><th>Resultado</th></tr>
                    <tr><td><code>E</code></td><td>As duas precisam ser verdadeiras</td><td><code>V E F = falso</code></td></tr>
                    <tr><td><code>OU</code></td><td>Basta uma ser verdadeira</td><td><code>V OU F = verdadeiro</code></td></tr>
                    <tr><td><code>NÃO</code></td><td>Inverte o resultado</td><td><code>NÃO V = falso</code></td></tr>
                </table>
                <p>Exemplo real:<br><code>idade >= 18 E temCarteira == verdadeiro</code><br>
                <em>Só libera se as DUAS condições forem atendidas.</em></p>`
        },

        // BASE 6 — Lógicos
        {
            type: "bank", zone: "light",
            questions: [
                { type: "multiple", context: "Analise o código:", code: "idade ← 20<br>temCarteira ← verdadeiro<br>escrever(idade >= 18 E temCarteira == verdadeiro)", question: "Qual o valor exibido?", options: ["verdadeiro","falso","20","erro"], correct: 0, hints: ["E retorna verdadeiro só quando as DUAS condições são verdadeiras."], successMessage: "Correto! Ambas verdadeiras, E retorna verdadeiro." },
                { type: "multiple", context: "Analise o código:", code: "hora ← 8<br>escrever(hora >= 8 E hora <= 18)", question: "O que essa expressão verifica?", options: ["Se hora está entre 8 e 18","Se passou da meia noite","Se é fim de semana","Se é horário de almoço"], correct: 0, hints: ["E combina dois relacionais — que intervalo eles formam juntos?"], successMessage: "Correto! Verdadeiro se hora estiver entre 8 e 18 (inclusive)." },
                { type: "multiple", context: "Analise o código:", code: "diaSemana ← 6<br>escrever(diaSemana == 6 OU diaSemana == 7)", question: "Qual o valor exibido? O que indica?", options: ["verdadeiro — é fim de semana","falso — é dia útil","6 — dia da semana","erro"], correct: 0, hints: ["OU retorna verdadeiro se pelo menos UMA condição for verdadeira."], successMessage: "Correto! dia==6 é verdadeiro, OU retorna verdadeiro." },
                { type: "fill", context: "Complete o operador lógico:", code: "aprovado ← verdadeiro<br>escrever({0} aprovado) // exibe falso", question: "Qual operador INVERTE o valor de aprovado?", blanks: [{id:0,placeholder:"?",hint:"Inverte verdadeiro para falso"}], validate: (a) => [{correct: ['não','nao','NÃO','NAO','!','not','NOT'].includes(a[0].trim())}], successMessage: "Correto! NÃO ou ! invertem o valor." }
            ]
        },

        // ========== DARK SIDE ==========

        // BASE 7 — Mistura aritmético + contexto
        {
            type: "bank", zone: "dark",
            questions: [
                { type: "multiple", context: "Trace a execução:", code: "preco ← 120<br>desconto ← 15<br>frete ← 20<br>total ← preco - desconto + frete<br>escrever(total)", question: "Qual o valor exibido?", options: ["125","155","115","135"], correct: 0, successMessage: "Correto! 120-15=105, 105+20=125." },
                { type: "multiple", context: "Trace a execução:", code: "horas ← 40<br>valor_hora ← 18<br>bonus ← 200<br>salario ← horas * valor_hora + bonus<br>escrever(salario)", question: "Qual o salário calculado?", options: ["920","720","1160","900"], correct: 0, successMessage: "Correto! 40*18=720, 720+200=920." },
                { type: "fill", context: "Complete os dois operadores para calcular área e perímetro:", code: "comprimento ← 8<br>largura ← 5<br>area ← comprimento {0} largura<br>perimetro ← 2 {1} (comprimento + largura)<br>escrever(area)<br>escrever(perimetro)", question: "Complete os operadores.", blanks: [{id:0,placeholder:"?",hint:"Área = comprimento × largura"},{id:1,placeholder:"?",hint:"Perímetro = 2 × (comprimento + largura)"}], validate: (a) => [{correct:a[0].trim()==='*'},{correct:a[1].trim()==='*'}], successMessage: "Correto! Área=40, Perímetro=26." },
                { type: "multiple", context: "Analise o papel dos parênteses:", code: "peso ← 70<br>altura ← 1.75<br>imc ← peso / (altura * altura)<br>escrever(imc)", question: "Por que os parênteses são necessários nesse código?", options: ["Garantir que altura*altura é calculado antes da divisão","Multiplicar peso por altura","São opcionais aqui","Converter para inteiro"], correct: 0, successMessage: "Correto! Sem parênteses a precedência mudaria o resultado." }
            ]
        },

        // BASE 8 — Relacional em expressão completa
        {
            type: "bank", zone: "dark",
            questions: [
                { type: "multiple", context: "Trace a execução:", code: "velocidade ← 80<br>limite ← 60<br>escrever(velocidade > limite)", question: "O motorista está acima do limite?", options: ["verdadeiro","falso","80","20"], correct: 0, successMessage: "Correto! 80 > 60 é verdadeiro." },
                { type: "multiple", context: "Trace a execução:", code: "saldo ← 150<br>compra ← 200<br>escrever(saldo >= compra)", question: "O saldo é suficiente para a compra?", options: ["falso","verdadeiro","150","200"], correct: 0, successMessage: "Correto! 150 >= 200 é falso." },
                { type: "fill", context: "Complete o operador relacional:", code: "meta ← 10000<br>vendas ← 9500<br>bateuMeta ← vendas {0} meta<br>escrever(bateuMeta) // exibe falso", question: "Qual operador verifica se vendas atingiram a meta?", blanks: [{id:0,placeholder:"?",hint:"Maior ou igual"}], validate: (a) => [{correct:a[0].trim()==='>='}], successMessage: "Correto! 9500 >= 10000 é falso." },
                { type: "multiple", context: "Analise os três escrever():", code: "a ← 10<br>b ← 10<br>escrever(a > b)<br>escrever(a >= b)<br>escrever(a == b)", question: "Quais os três valores exibidos?", options: ["falso / verdadeiro / verdadeiro","verdadeiro / verdadeiro / verdadeiro","falso / falso / verdadeiro","verdadeiro / falso / falso"], correct: 0, successMessage: "Correto! > é estrito, >= inclui igual, == compara." }
            ]
        },

        // BASE 9 — Módulo aplicado
        {
            type: "bank", zone: "dark",
            questions: [
                { type: "multiple", context: "Trace a execução:", code: "numero ← 14<br>escrever(numero % 2 == 0)", question: "Qual o valor exibido? O que indica?", options: ["verdadeiro — número par","falso — número ímpar","0 — divisível","2 — resto"], correct: 0, successMessage: "Correto! 14%2=0, 0==0 verdadeiro. Número par." },
                { type: "fill", context: "Complete para verificar se o número é par:", code: "numero ← 9<br>escrever(numero {0} 2 {1} 0) // exibe falso", question: "Complete com módulo e igualdade.", blanks: [{id:0,placeholder:"?",hint:"Resto da divisão"},{id:1,placeholder:"?",hint:"Compara com zero"}], validate: (a) => [{correct:a[0].trim()==='%'},{correct:a[1].trim()==='=='}], successMessage: "Correto! 9%2=1, 1==0 é falso. Ímpar." },
                { type: "multiple", context: "Trace a execução:", code: "minutos ← 135<br>horas ← minutos / 60<br>restante ← minutos % 60<br>escrever(horas)<br>escrever(restante)", question: "Quais os dois valores exibidos?", options: ["2 e 15","2 e 75","3 e 15","2 e 60"], correct: 0, successMessage: "Correto! 135/60=2, 135%60=15. São 2h15min." },
                { type: "multiple", context: "Trace a execução:", code: "numero ← 25<br>escrever(numero % 5 == 0)<br>escrever(numero % 2 == 0)", question: "Quais os dois valores exibidos?", options: ["verdadeiro / falso","falso / verdadeiro","verdadeiro / verdadeiro","falso / falso"], correct: 0, successMessage: "Correto! 25%5=0 verdadeiro (múltiplo de 5), 25%2=1 falso (ímpar)." }
            ]
        },

        // CARD DARK 1 — Respiro
        {
            type: "card", zone: "dark",
            title: "⚠️ Cuidado com = e ==",
            content: `<p>Você passou pela metade. Mas o Dark Side não perdoa descuido.</p>
                <p>Lembra que <code>=</code> e <code>==</code> são diferentes?</p>
                <table>
                    <tr><th>Símbolo</th><th>O que faz</th></tr>
                    <tr><td><code>x = 5</code></td><td>x <strong>recebe</strong> o valor 5</td></tr>
                    <tr><td><code>x == 5</code></td><td>Será que x <strong>é igual</strong> a 5?</td></tr>
                </table>
                <p>Confundir os dois é um dos erros mais comuns — e mais silenciosos. O código roda, mas faz coisa errada.</p>
                <p><em>Fique esperto nos próximos níveis.</em></p>`
        },

        // BASE 10 — Lógico E
        {
            type: "bank", zone: "dark",
            questions: [
                { type: "multiple", context: "Trace a execução:", code: "idade ← 16<br>temAutorizacao ← verdadeiro<br>escrever(idade >= 18 E temAutorizacao)", question: "Qual o valor exibido?", options: ["falso","verdadeiro","16","erro"], correct: 0, successMessage: "Correto! idade>=18 é falso. E com falso sempre retorna falso." },
                { type: "multiple", context: "Trace a execução:", code: "temperatura ← 36<br>umidade ← 80<br>escrever(temperatura > 37 E umidade > 60)", question: "Qual o valor exibido?", options: ["falso","verdadeiro","36","80"], correct: 0, successMessage: "Correto! temperatura>37 é falso. Basta uma condição falsa para E retornar falso." },
                { type: "fill", context: "Complete para aprovar quem tem nota>=6 E frequência>=75:", code: "nota ← 8<br>frequencia ← 75<br>aprovado ← nota {0} 6 {1} frequencia {2} 75<br>escrever(aprovado)", question: "Complete os operadores.", blanks: [{id:0,placeholder:"?",hint:"Maior ou igual"},{id:1,placeholder:"?",hint:"Operador lógico que exige as duas"},{id:2,placeholder:"?",hint:"Maior ou igual"}], validate: (a) => [{correct:a[0].trim()==='>='},{ correct:['e','E'].includes(a[1].trim())},{correct:a[2].trim()==='>='}], successMessage: "Correto! 8>=6 E 75>=75 = verdadeiro." },
                { type: "multiple", context: "Trace a execução:", code: "x ← 15<br>escrever(x > 10 E x < 20)", question: "Qual o valor exibido? O que verifica?", options: ["verdadeiro — x está entre 10 e 20","falso — x está fora do intervalo","15 — valor de x","erro"], correct: 0, successMessage: "Correto! E verifica se x está dentro do intervalo." }
            ]
        },

        // BASE 11 — Lógico OU
        {
            type: "bank", zone: "dark",
            questions: [
                { type: "multiple", context: "Trace a execução:", code: "dia ← 7<br>escrever(dia == 1 OU dia == 7)", question: "Qual o valor exibido? O que indica?", options: ["verdadeiro — é fim de semana","falso — é dia útil","7","erro"], correct: 0, successMessage: "Correto! dia==7 verdadeiro. OU retorna verdadeiro com pelo menos uma." },
                { type: "multiple", context: "Trace a execução:", code: "nota ← 4<br>recuperacao ← verdadeiro<br>escrever(nota >= 6 OU recuperacao == verdadeiro)", question: "O aluno continua no curso?", options: ["verdadeiro","falso","4","erro"], correct: 0, successMessage: "Correto! recuperacao==verdadeiro basta para OU retornar verdadeiro." },
                { type: "fill", context: "Complete o operador lógico:", code: 'produto ← "camisa"<br>escrever(produto == "camisa" {0} produto == "calca")', question: "Qual operador verifica se o produto é camisa OU calça?", blanks: [{id:0,placeholder:"?",hint:"Basta uma condição ser verdadeira"}], validate: (a) => [{correct:['ou','OU'].includes(a[0].trim())}], successMessage: "Correto! OU retorna verdadeiro se qualquer condição for verdadeira." },
                { type: "multiple", context: "Trace a execução:", code: "a ← falso<br>b ← falso<br>escrever(a OU b)", question: "Qual o valor exibido?", options: ["falso","verdadeiro","erro","nulo"], correct: 0, successMessage: "Correto! OU só retorna falso quando AMBAS as condições são falsas." }
            ]
        },

        // BASE 12 — NÃO + combinações
        {
            type: "bank", zone: "dark",
            questions: [
                { type: "multiple", context: "Trace a execução:", code: "logado ← falso<br>escrever(NÃO logado)", question: "Qual o valor exibido?", options: ["verdadeiro","falso","logado","erro"], correct: 0, successMessage: "Correto! NÃO inverte. NÃO falso = verdadeiro." },
                { type: "multiple", context: "Trace a execução:", code: "bloqueado ← verdadeiro<br>escrever(NÃO bloqueado)", question: "O acesso está liberado?", options: ["falso — acesso bloqueado","verdadeiro — acesso liberado","bloqueado","erro"], correct: 0, successMessage: "Correto! NÃO verdadeiro = falso. Acesso ainda bloqueado." },
                { type: "multiple", context: "Atenção à precedência do NÃO:", code: "a ← verdadeiro<br>b ← falso<br>escrever(NÃO a E b)<br>escrever(NÃO (a E b))", question: "Quais os dois valores exibidos?", options: ["falso / verdadeiro","falso / falso","verdadeiro / verdadeiro","verdadeiro / falso"], correct: 0, successMessage: "Correto! NÃO a E b = (NÃO a) E b = falso E falso = falso. NÃO(a E b) = NÃO(falso) = verdadeiro." },
                { type: "fill", context: "Complete para inverter o estado de conectado:", code: "conectado ← verdadeiro<br>online ← {0} conectado<br>escrever(online) // exibe falso", question: "Qual operador inverte o valor lógico?", blanks: [{id:0,placeholder:"?",hint:"Inverte verdadeiro para falso"}], validate: (a) => [{correct:['não','nao','NÃO','NAO','!','not','NOT'].includes(a[0].trim())}], successMessage: "Correto! NÃO verdadeiro = falso." }
            ]
        },

        // CARD DARK 2 — Respiro
        {
            type: "card", zone: "dark",
            title: "😈 Quase lá. Três níveis para o Boss.",
            content: `<p>Operadores lógicos têm ordem também:</p>
                <table>
                    <tr><th>Prioridade</th><th>Operador</th></tr>
                    <tr><td>1ª</td><td><code>NÃO</code></td></tr>
                    <tr><td>2ª</td><td><code>E</code></td></tr>
                    <tr><td>3ª</td><td><code>OU</code></td></tr>
                </table>
                <p><code>NÃO falso OU verdadeiro E falso</code><br>
                = <code>verdadeiro OU falso</code><br>
                = <code>verdadeiro</code></p>
                <p><em>Quando misturar os três, use parênteses. Sem eles, a lógica pode te pregar uma peça.</em></p>`
        },

        // BASE 13 — Mistura relacional + lógico (ESCRITA LIVRE)
        {
            type: "bank", zone: "dark",
            questions: [
                { type: "write", context: "Escreva uma expressão que verifica se idade é maior ou igual a 18 E menor que 65.", prompt: "Use a variável <code>idade</code>. Exemplo de formato: <code>variavel operador valor</code>", answers: ["idade >= 18 e idade < 65","idade >= 18 E idade < 65","idade>=18 e idade<65","idade>=18 E idade<65"], successMessage: "Correto! Duas condições relacionais com E formam um intervalo." },
                { type: "write", context: "Escreva uma expressão que verifica se nota é maior ou igual a 6 OU se temRecuperacao é verdadeiro.", prompt: "Use as variáveis <code>nota</code> e <code>temRecuperacao</code>.", answers: ["nota >= 6 ou temrecuperacao == verdadeiro","nota >= 6 OU temRecuperacao == verdadeiro","nota>=6 ou temrecuperacao==verdadeiro","nota>=6 OU temRecuperacao==verdadeiro","nota >= 6 ou temrecuperacao","nota >= 6 OU temRecuperacao"], successMessage: "Correto! OU porque basta uma condição para o aluno continuar." },
                { type: "multiple", context: "Trace a execução:", code: "saldo ← 500<br>valor ← 300<br>escrever(saldo >= valor E NÃO saldo == 0)", question: "Qual o valor exibido?", options: ["verdadeiro","falso","500","erro"], correct: 0, successMessage: "Correto! 500>=300 verdadeiro. NÃO(500==0)=verdadeiro. E verdadeiro/verdadeiro=verdadeiro." },
                { type: "write", context: "Escreva a expressão que verifica se um número é par E positivo.", prompt: "Use a variável <code>numero</code>.", answers: ["numero % 2 == 0 e numero > 0","numero % 2 == 0 E numero > 0","numero%2==0 e numero>0","numero%2==0 E numero>0"], successMessage: "Correto! Módulo verifica paridade, relacional verifica sinal." }
            ]
        },

        // BASE 14 — Expressão complexa com parênteses (ESCRITA LIVRE)
        {
            type: "bank", zone: "dark",
            questions: [
                { type: "write", context: "Reescreva a expressão usando parênteses para garantir que a adição acontece ANTES da multiplicação:", prompt: "<code>a ← 2 + 3 * 4</code>", answers: ["a ← (2 + 3) * 4","a← (2+3)*4","a ←(2 + 3)* 4","a←(2+3)*4"], successMessage: "Correto! Sem parênteses=14. Com parênteses=20." },
                { type: "multiple", context: "Trace a execução:", code: "x ← 3<br>y ← 4<br>z ← 2<br>escrever((x + y) * z - x)", question: "Qual o valor exibido?", options: ["11","14","8","17"], correct: 0, successMessage: "Correto! (3+4)=7, 7*2=14, 14-3=11." },
                { type: "write", context: "Escreva EM UMA LINHA o cálculo do total: 3 produtos de R$25 mais frete de R$15, com 10% de desconto sobre o subtotal.", prompt: "Use as variáveis: <code>quantidade</code>, <code>preco</code>, <code>frete</code>, <code>desconto</code> (0.10). Formato esperado: <code>total ← ...</code>", answers: [
                        "total ← (quantidade * preco + frete) * (1 - desconto)",
                        "total ← (preco * quantidade + frete) * (1 - desconto)",
                        "total = (quantidade * preco + frete) * (1 - desconto)",
                        "total = (preco * quantidade + frete) * (1 - desconto)",
                        "total ← (quantidade * preco) * (1 - desconto) + frete",
                        "total ← (preco * quantidade) * (1 - desconto) + frete",
                        "total = (quantidade * preco) * (1 - desconto) + frete",
                        "total = (preco * quantidade) * (1 - desconto) + frete",
                        "total ← quantidade * preco * (1 - desconto) + frete",
                        "total ← preco * quantidade * (1 - desconto) + frete",
                        "total = quantidade * preco * (1 - desconto) + frete",
                        "total = preco * quantidade * (1 - desconto) + frete",
                        "total ← (quantidade * preco + frete) - (quantidade * preco + frete) * desconto",
                        "total ← (preco * quantidade + frete) - (preco * quantidade + frete) * desconto",
                        "total = (quantidade * preco + frete) - (quantidade * preco + frete) * desconto",
                        "total = (preco * quantidade + frete) - (preco * quantidade + frete) * desconto"
                    ], successMessage: "Correto! Subtotal com frete, depois aplica o desconto." },
                { type: "fill", context: "Complete o valor que falta:", code: "a ← 10<br>b ← 3<br>c ← 2<br>resultado ← {0} * (b + c)<br>escrever(resultado) // exibe 50", question: "Qual variável completa o código para exibir 50?", blanks: [{id:0,placeholder:"?",hint:"10 * (3+2) = 50"}], validate: (a) => [{correct:a[0].trim()==='a'}], successMessage: "Correto! 10 * (3+2) = 10 * 5 = 50." }
            ]
        },

        // BASE 15 — Problema completo integrado (ESCRITA LIVRE)
        {
            type: "bank", zone: "dark",
            questions: [
                { type: "multiple", context: "Trace a execução:", code: "preco ← 200<br>desconto ← 0.15<br>frete ← 25<br>total ← preco * (1 - desconto) + frete<br>escrever(total)", question: "Qual o valor exibido?", options: ["195","170","225","185"], correct: 0, successMessage: "Correto! 200*(1-0.15)=170, 170+25=195." },
                { type: "write", context: "No SENAI, um aluno é aprovado direto se tiver nota mínima 7 E frequência mínima de 75%. Escreva a expressão que verifica isso.", prompt: "Use as variáveis <code>nota</code> e <code>frequencia</code>.", answers: ["nota >= 7 e frequencia >= 75","nota >= 7 E frequencia >= 75","nota>=7 e frequencia>=75","nota>=7 E frequencia>=75"], successMessage: "Correto! As duas condições precisam ser verdadeiras." },
                { type: "write", context: "Escreva o cálculo do IMC. Fórmula: peso dividido pela altura ao quadrado.", prompt: "Use as variáveis <code>peso</code> e <code>altura</code>. Formato: <code>imc ← ...</code>", answers: ["imc ← peso / (altura * altura)","imc←peso/(altura*altura)","imc ← peso/(altura*altura)","imc←peso / (altura * altura)"], successMessage: "Correto! Os parênteses são obrigatórios para a precedência correta." },
                { type: "multiple", context: "Trace a execução completa:", code: "velocidade ← 90<br>limite ← 80<br>cnh ← verdadeiro<br>escrever(velocidade > limite E NÃO cnh == falso)", question: "O motorista leva multa?", options: ["verdadeiro — acima do limite com CNH válida","falso — dentro do limite","verdadeiro — CNH inválida","falso — CNH inválida"], correct: 0, successMessage: "Correto! 90>80 verdadeiro. NÃO(cnh==falso)=verdadeiro. E=verdadeiro." }
            ]
        }

    ],

    bossQuestions: [
        { id: 1, code: "escrever(17 % 5)", question: "Qual o valor exibido?", options: ["2","3","5","1"], correct: 0, explanation: "17 ÷ 5 = 3 com resto 2. O % retorna o resto." },
        { id: 2, code: "escrever(2 + 4 * 3 - 1)", question: "Qual o valor exibido?", options: ["13","17","15","11"], correct: 0, explanation: "4*3=12, 2+12=14, 14-1=13. Multiplicação primeiro." },
        { id: 3, code: "a ← verdadeiro<br>b ← falso<br>escrever(a E b)<br>escrever(a OU b)", question: "Quais os dois valores exibidos?", options: ["falso / verdadeiro","verdadeiro / falso","verdadeiro / verdadeiro","falso / falso"], correct: 0, explanation: "E precisa das duas verdadeiras — falso. OU basta uma — verdadeiro." },
        { id: 4, code: "x ← 10<br>escrever(x > 5 E x < 20)<br>escrever(x == 10 OU x == 20)", question: "Quais os dois valores exibidos?", options: ["verdadeiro / verdadeiro","falso / falso","verdadeiro / falso","falso / verdadeiro"], correct: 0, explanation: "10>5 E 10<20=verdadeiro. 10==10=verdadeiro, OU retorna verdadeiro." },
        { id: 5, code: "ativo ← falso<br>escrever(NÃO ativo)", question: "Qual o valor exibido?", options: ["verdadeiro","falso","ativo","erro"], correct: 0, explanation: "NÃO inverte. NÃO falso = verdadeiro." },
        { id: 6, code: "escrever(20 % 4)<br>escrever(21 % 4)", question: "Quais os dois valores exibidos?", options: ["0 e 1","5 e 5","4 e 1","0 e 4"], correct: 0, explanation: "20/4=5 resto 0. 21/4=5 resto 1." },
        { id: 7, code: "a ← 5<br>b ← 5<br>escrever(a == b)<br>escrever(a != b)<br>escrever(a >= b)", question: "Quais os três valores exibidos?", options: ["verdadeiro / falso / verdadeiro","falso / verdadeiro / falso","verdadeiro / verdadeiro / falso","falso / falso / verdadeiro"], correct: 0, explanation: "5==5 verdadeiro. 5!=5 falso. 5>=5 verdadeiro (inclui igual)." },
        { id: 8, code: "preco ← 50<br>quantidade ← 4<br>desconto ← 30<br>total ← preco * quantidade - desconto<br>escrever(total)", question: "Qual o valor exibido?", options: ["170","200","80","140"], correct: 0, explanation: "50*4=200, 200-30=170. Multiplicação antes da subtração." },
        { id: 9, code: "salario ← 2000<br>impostos ← salario * 0.15<br>liquido ← salario - impostos<br>escrever(liquido)", question: "Qual o salário líquido?", options: ["1700","1850","300","2300"], correct: 0, explanation: "2000*0.15=300. 2000-300=1700." },
        { id: 10, code: "idade ← 17<br>temResponsavel ← verdadeiro<br>escrever(idade >= 18 OU temResponsavel == verdadeiro)", question: "O menor pode entrar no evento?", options: ["verdadeiro","falso","17","erro"], correct: 0, explanation: "idade>=18 é falso, mas temResponsavel==verdadeiro é verdadeiro. OU basta uma." },
        { id: 11, code: "minutos ← 200<br>horas ← minutos / 60<br>resto ← minutos % 60<br>escrever(horas)<br>escrever(resto)", question: "Quais os dois valores exibidos?", options: ["3 e 20","3 e 40","2 e 20","3 e 60"], correct: 0, explanation: "200/60=3. 200%60=20. São 3h20min." },
        { id: 12, code: "peso ← 80<br>altura ← 1.60<br>imc ← peso / (altura * altura)<br>escrever(imc > 25)", question: "A pessoa está acima do peso? (IMC > 25 = sobrepeso)", options: ["verdadeiro","falso","80","25"], correct: 0, explanation: "IMC = 80/2.56 = 31.25. 31.25>25 verdadeiro." },
        { id: 13, code: "saldo ← 800<br>aluguel ← 600<br>contas ← 350<br>escrever(saldo >= aluguel + contas)", question: "O saldo cobre aluguel e contas?", options: ["falso","verdadeiro","800","950"], correct: 0, explanation: "aluguel+contas=950. 800>=950 é falso." },
        { id: 14, code: 'nome ← "Ana"<br>idade ← 22<br>escrever("Olá, " + nome + "! Você tem " + idade + " anos.")<br>escrever(idade >= 18)', question: "Quais as duas saídas?", options: ["Olá, Ana! Você tem 22 anos. / verdadeiro","Olá, Ana! Você tem 22 anos. / falso","Ana / 22","erro"], correct: 0, explanation: "Concatenação do M2 + relacional do M3. 22>=18 verdadeiro." },
        { id: 15, code: "numero ← 7<br>par ← numero % 2 == 0<br>escrever(par)", question: "Qual o valor exibido e qual o tipo de par?", options: ["falso — lógico","verdadeiro — lógico","1 — inteiro","falso — inteiro"], correct: 0, explanation: "7%2=1, 1==0 é falso. Resultado de comparação é sempre lógico." },
        { id: 16, code: 'preco ← 150.90<br>quantidade ← 3<br>total ← preco * quantidade<br>escrever("Total: R$ " + total)<br>escrever(total > 400)', question: "Quais as duas saídas?", options: ["Total: R$ 452.7 / verdadeiro","Total: R$ 452.7 / falso","Total: R$ 150.90 / verdadeiro","erro"], correct: 0, explanation: "150.90*3=452.7. 452.7>400 verdadeiro." },
        { id: 17, code: "hora ← 14<br>minuto ← 35<br>escrever(hora >= 12 E hora < 18)<br>escrever(minuto % 15 == 0)<br>escrever((hora * 60 + minuto) > 800)", question: "Quais as três saídas?", options: ["verdadeiro / falso / verdadeiro","verdadeiro / verdadeiro / verdadeiro","falso / falso / verdadeiro","verdadeiro / falso / falso"], correct: 0, explanation: "14>=12 E 14<18=verdadeiro. 35%15=5≠0=falso. 14*60+35=875>800=verdadeiro." },
        { id: 18, code: "a ← 3<br>b ← 4<br>c ← 5<br>escrever(a * a + b * b == c * c)", question: "Qual o valor exibido? O que verifica?", options: ["verdadeiro — triângulo retângulo","falso — não é retângulo","25 — hipotenusa","erro"], correct: 0, explanation: "3²+4²=9+16=25. 5²=25. 25==25 verdadeiro. Pitágoras!" },
        { id: 19, code: 'imc ← peso / (altura * altura)<br>escrever("IMC: " + imc)<br>escrever(imc >= 18.5 E imc <= 24.9)', question: "O que a segunda linha verifica?", options: ["Se o IMC está na faixa normal","Se o peso é saudável","Se a altura é válida","Se o IMC é positivo"], correct: 0, explanation: "IMC entre 18.5 e 24.9 = peso normal. E forma o intervalo." },
        { id: 20, code: "n ← 4<br>escrever(n % 2 == 0 E n > 0)<br>escrever(n % 2 != 0 OU n == 0)", question: "Quais as duas saídas?", options: ["verdadeiro / falso","falso / verdadeiro","verdadeiro / verdadeiro","falso / falso"], correct: 0, explanation: "4%2==0 E 4>0=verdadeiro. 4%2!=0=falso, 4==0=falso. OU=falso." },
        { id: 21, code: "velocidade ← 110<br>limite ← 80<br>escrever(velocidade > limite)<br>escrever(velocidade - limite)", question: "Quais os dois valores exibidos?", options: ["verdadeiro e 30","falso e 30","verdadeiro e 110","falso e 190"], correct: 0, explanation: "110>80 verdadeiro. 110-80=30 km/h acima do limite." },
        { id: 22, code: 'turno ← "manhã"<br>escrever(turno == "manhã" OU turno == "tarde")', question: "Qual o valor exibido?", options: ["verdadeiro","falso","manhã","erro"], correct: 0, explanation: 'turno=="manhã" é verdadeiro. OU retorna verdadeiro imediatamente.' },
        { id: 23, code: "x ← 3<br>y ← 4<br>z ← 2<br>escrever((x + y) * z - x)", question: "Qual o valor exibido?", options: ["11","14","8","17"], correct: 0, explanation: "(3+4)=7, 7*2=14, 14-3=11." },
        { id: 24, code: "a ← verdadeiro<br>b ← falso<br>escrever(NÃO a E b)<br>escrever(NÃO (a E b))", question: "Quais os dois valores exibidos?", options: ["falso / verdadeiro","falso / falso","verdadeiro / verdadeiro","verdadeiro / falso"], correct: 0, explanation: "(NÃO a) E b = falso E falso = falso. NÃO(a E b) = NÃO(falso) = verdadeiro." },
        { id: 25, code: "preco ← 200<br>desconto ← 0.15<br>frete ← 25<br>total ← preco * (1 - desconto) + frete<br>escrever(total)", question: "Qual o valor exibido?", options: ["195","170","225","185"], correct: 0, explanation: "200*(1-0.15)=170, 170+25=195." },
        { id: 26, question: "Qual expressão verifica se um funcionário recebe bônus? Condição: salario < 3000 E avaliacao >= 8 OU anos_empresa > 5", options: ["salario < 3000 E avaliacao >= 8 OU anos_empresa > 5","salario > 3000 E avaliacao >= 8 OU anos_empresa > 5","salario < 3000 OU avaliacao >= 8 E anos_empresa > 5","salario < 3000 E avaliacao > 8 E anos_empresa > 5"], correct: 0, explanation: "Combina E e OU. Quem ganha menos com boa avaliação, OU tem mais de 5 anos." },
        { id: 27, question: "Qual é o resultado de: NÃO (verdadeiro E falso)?", options: ["verdadeiro","falso","erro","nulo"], correct: 0, explanation: "verdadeiro E falso = falso. NÃO falso = verdadeiro." },
        { id: 28, question: "Qual operador tem maior prioridade?", options: ["NÃO","E","OU","Todos iguais"], correct: 0, explanation: "Precedência dos lógicos: NÃO > E > OU. Assim como * > + nos aritméticos." },
        { id: 29, question: "O que distingue = de == em pseudocódigo?", options: ["= atribui valor, == compara valores","== atribui valor, = compara valores","São equivalentes","= é para inteiros, == para texto"], correct: 0, explanation: "= atribui (x ← 5 ou x = 5). == compara (x == 5 retorna verdadeiro ou falso)." },
        { id: 30, question: "Para verificar se um ano é bissexto (divisível por 4 E não por 100, OU divisível por 400), qual expressão está correta?", options: ["ano % 4 == 0 E ano % 100 != 0 OU ano % 400 == 0","ano % 4 == 0 OU ano % 100 != 0 E ano % 400 == 0","ano / 4 == 0 E ano / 100 != 0","ano % 4 != 0 E ano % 100 == 0 OU ano % 400 == 0"], correct: 0, explanation: "Regra real do calendário gregoriano. Combina %, ==, !=, E e OU." }
    ]
};