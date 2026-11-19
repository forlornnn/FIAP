Algoritmo "CONDICAO"

Var
   dinheiro, p_nota, s_nota, f_nota: Real
   NUMERO, ANO_ATUAL, ANO_NASCIMENTO, IDADE: Inteiro
Inicio

   Escreva("quanto de dinheiro vc tem? ")
   Leia(dinheiro)
   Se(dinheiro >= 1000) entao
      Escreval("UHUUUUL, VAMOS PARA DISNEY")
   Senao(dinheiro <=999) entao
      Escreval("fundeo sou pobre")
   FimSE

   Escreva("fala um numero ai: ")
   Leia(NUMERO)
   Se(NUMERO % 2 = 0) entao
      Escreval("Seu numero é par!")
   Senao
      Escreval("Seu numero é impar!")
   FimSE

   Escreval("Agora vamos ver se vc esta dentro da lei para dirigir")
   Escreva("Ano atual (yyyy): ")
   Leia(ANO_ATUAL)
   Escreva("Ano de nascimento (yyyy): ")
   Leia(ANO_NASCIMENTO)
   IDADE <- ANO_ATUAL - ANO_NASCIMENTO
   Se (IDADE >= 18) entao
      Escreval("Como vc ja tem ", IDADE, " anos vc ja pode tirar carta monstro!")
   Senao
      Escreval("vc tem so ", IDADE, " espere fazer 18 aninhos")
   FimSE
   
   Escreva("PRIMEIRA NOTA: ")
   Leia(p_nota)
   Escreva("SEGUNDA NOTA: ")
   Leia(s_nota)
   f_nota <- (p_nota + s_nota) / 2
   Se (f_nota >= 6) entao
      Escreval("SUA MEDIA: ", f_nota)
      Escreva("VOCE PASSOU")
   Senao
      Escreval("SUA MEDIA: ", f_nota)
      Escreva("VOCE NAO PASSOU")
   FimSE
   
   
   
   

Fimalgoritmo
