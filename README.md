# 🎮 Algoritmo Quest

> Aprenda lógica de programação jogando.

**Algoritmo Quest** é um jogo educacional gamificado desenvolvido para tornar o aprendizado de algoritmos e lógica de programação mais envolvente e progressivo. O projeto nasceu a partir da disciplina de Algoritmos do curso Técnico em Desenvolvimento de Sistemas do SENAI.

🔗 **[Jogar agora](https://sacradev.github.io/algoritmo-quest/)**

---

## 🗺️ Estrutura do jogo

O jogo é dividido em duas grandes jornadas: **Mundos** e **Galáxias**.

### Mundos
São 9 mundos, cada um cobrindo um tema da lógica de programação:

| # | Mundo | Tema |
|---|-------|------|
| 1 | ☀️ Variáveis e Tipos | Tipos de dados, atribuição, troca de valores |
| 2 | 🌍 Entrada e Saída | Leitura e exibição de dados |
| 3 | 🪐 Operadores | Aritméticos, relacionais e lógicos |
| 4 | 🌙 Decisão SE/SENÃO | Estruturas condicionais simples |
| 5 | ⭐ Decisão Múltipla | Estruturas condicionais aninhadas |
| 6 | 🌟 Repetição PARA | Laços de repetição com contador |
| 7 | 🪐 Repetição ENQUANTO | Laços de repetição com condição |
| 8 | ☄️ Vetores e Listas | Estruturas de dados sequenciais |
| 9 | 💫 Funções | Modularização e reutilização de código |

Cada mundo é composto por **10 casas** divididas em duas zonas:
- ☀️ **Zona Light** — introdução progressiva ao tema
- 🌑 **Dark Side** — desafios mais complexos e situações de erro
- 👑 **Boss** — prova final com 20 questões para conquistar a letra do mundo

### 🌌 Galáxias — Danger Zone
São 7 galáxias que formam a palavra **GALÁXIA**. Cada galáxia é uma revisão cumulativa dos mundos anteriores:

| Galáxia | Conteúdo revisado |
|---------|-------------------|
| 1ª | Mundos 1, 2 e 3 |
| 2ª | Mundos 1 a 4 |
| 3ª | Mundos 1 a 5 |
| ... | progressão até todos os mundos |

---

## 🧩 Tipos de questão

O jogo conta com 5 formatos diferentes de questão para evitar repetição e estimular diferentes formas de raciocínio:

- **Múltipla escolha** — identificar a resposta correta entre alternativas
- **Preenchimento** — completar trechos de código com os valores corretos
- **Arrastar e soltar** — ordenar elementos na sequência correta
- **Associação de pares** — conectar conceitos com seus valores correspondentes
- **Boss Quiz** — sequência de 20 questões rápidas para consolidar o tema

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript puro (sem frameworks)

A arquitetura evoluiu de um único arquivo para uma estrutura modular, separando engine, mundos e galáxias em arquivos independentes.

---

## 📁 Estrutura de arquivos

```
algoritmo-quest/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── engine.js      # Motor principal do jogo
    ├── worlds.js      # Dados e configuração dos mundos
    ├── world1.js      # Conteúdo: Variáveis e Tipos
    ├── world2.js      # Conteúdo: Entrada e Saída
    ├── world3.js      # Conteúdo: Operadores
    ├── world4.js      # Conteúdo: Decisão SE/SENÃO
    ├── galaxy1.js     # Galáxia Alpha — revisão cumulativa
    └── ...
```

---

## 🚧 Status do projeto

Em desenvolvimento ativo. Mundos e galáxias sendo implementados progressivamente.

- [x] Mundo 1 — Variáveis e Tipos
- [ ] Mundo 2 — Entrada e Saída *(em revisão)*
- [ ] Mundo 3 — Operadores *(em revisão)*
- [x] Mundo 4 — Decisão SE/SENÃO
- [x] Galáxia 1
- [ ] Mundos 5 a 9
- [ ] Galáxias 2 a 7

### 🎲 Randomização de questões *(em implementação)*
Cada mundo terá um banco expandido de questões. A cada sessão, um subconjunto é selecionado aleatoriamente — garantindo que dois usuários diferentes tenham experiências distintas no mesmo conteúdo. Isso aumenta o valor de replay e torna a avaliação mais robusta.

---

## 👨‍💻 Autor

**Victor Sacramento**
[GitHub](https://github.com/sacradev) · [LinkedIn](https://www.linkedin.com/in/victor-sacramento/)
