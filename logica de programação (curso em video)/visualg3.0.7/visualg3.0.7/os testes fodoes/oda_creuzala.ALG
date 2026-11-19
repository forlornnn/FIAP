Algoritmo "codigo_bunda"

Var
   ano_atual, ano_nasci, idade: Inteiro
   meu_dinheiro, meu_dol, temp_usa, temp_br, produto, taxado, emprestimo, juros, parcela, valor_total: Real
   
Inicio

   Escreva("Em que ano nos estamos? ")
   Leia(ano_atual)
   Escreva("Em que ano eu nasci? ")
   Leia(ano_nasci)
   idade <- ano_atual - ano_nasci
   Escreval("Minha idade é: ", idade)

   Escreva("Quantos reais eu tenho? ")
   Leia(meu_dinheiro)
   Escreva(meu_dinheiro, " esse é seu dinheiro em reais, ou seja,")
   meu_dol <- meu_dinheiro / 5.31
   Escreval(" vc tem", meu_dol:9:2, " em dolares")

   Escreva("qual a temperatura daqui (em F)? ")
   Leia(temp_usa)
   temp_br <- (temp_usa - 32) / 1.8
   Escreval("no Brasil estaria ", temp_br:4:1, " em celsius")

   Escreva("quanto custou isso ai? ")
   Leia(produto)
   taxado <- (produto * 60) / 100
   Escreva("vc vai ter que pagar", taxado, " a mais,")
   Escreval(" o valor total ficou: ", produto + taxado)

   Escreva(" qual o valor do emprestimo? ")
   Leia(emprestimo)
   juros <- emprestimo * 20 / 100
   Escreva("em quantas parcelas vc vai querer pagar? ")
   Leia(parcela)
   valor_total <- (juros + emprestimo) / parcela
   Escreva("vão ficar", parcela, " parcelas de", valor_total, " reais")
Fimalgoritmo