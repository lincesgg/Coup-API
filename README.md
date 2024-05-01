# Coup-API
Criando uma API para Gerenciar PARTIDAS de COUP / Golpe de Estado

### API Base Plan
---
createMatch() -> Match

- Match
    - ID: str
    - config: object
        - maxTimePerTurn: int
        - maxTimeToAccuse: int
    - charactersDeck: **Character Array [ ]
    - .
    - players: Player Array [ ]
    - crrPlayerIdx: int
    - .
    - #passTurn ( )

- Player
    - ID: str
    - name
    - characters: **Character Array [ ]
    - coins: int
    - .
    - loseCharacter( characterIndex:int )

- Character
    - Name
    - Actions: Action Array [ ]

- Action
    - #name: str
    - #description: str
    - #cost: int
    - #validExecutionSituations: int Array [ ]
    - #actionFunction: function
    - .
    - verifyCapacity ( player: Player )
    - execute (taget: Player)


- executionSituations: ENUM
    - 0 → (❗) Ação de Turno 
    - 1 → (❕) Reação Livre

### Regras do Jogo
---
- Partida
    - Jogadores
        - Moedas (🪙)
        - Personagens (♟️)
        - Ações
            - (❗) Ação de Turno 
                - → No seu Turno, você pode Agir Gratuitamente
            - (❕) Reação Livre
                - → No Ação Alheia, uma vez por rodada, você pode Reagir Gratuitamente
            - (❗🪙) Ação de Turno Pagas 
                - → No seu Turno, você pode Agir conforme o valor Definido
        - Mentir (⁉️) → Quem você não importa, desde que nãos desconfiem! Shhhh!
    - Gerenciador de Turno
        - Definir Jogador Atual
        - Passar Para próximo Jogador, se Demorar Demais

---

- Ações
    - Gerais
        - (❗) **Saque Abastado (⛃)** → Pegue 2 🪙
        - (❗9🪙 ) **Golpe de Estado (🏦)** →  Mate Uma ♟️de outro jogador, escolhida por ele
    
    - Personagens (♟️)
        - Duque
            - (❗) **Dono do Banco** → Pegue 3 🪙
            
            - (❕) **Sem Crédito o Suficiente** → Impessa Saque Abastado (⛃)

        - Assasino
            - (❗3🪙 ) **Qual o valor de uma vida?** → Escolha um jogador e Mate Uma Personagem (♟️) escolhida por ele

        - Condessa
            - ❕**Sozinho hoje, Bonitão?** → Se um assasino tentar te Matar, Seduza ele e impeça o assasinato

        - Capitão
            - (❗) **Pague o que Me Deve!** → Roube 2🪙 de um Jogador

            - (❕) **Sem Brincadeirinhas, Humph!** → Se alguém tentar te roubar, Intimide ele e impeç o roubo
            
        - Investigador
            - (❗) **Olha só, o que temos por aqui?** → Force um Jogador a escolher uma Personagem (♟️) para revelar para você.
            
            - (❗e❕) **Um bom investigador, nunca sai só com uma máscara!** → No seu turno ou Se alguém te forçar a revelar uma de suas personagens (♟️), você pode trocar qualquer uma de suas personagens (♟️) por uma outra no baralho.
            
