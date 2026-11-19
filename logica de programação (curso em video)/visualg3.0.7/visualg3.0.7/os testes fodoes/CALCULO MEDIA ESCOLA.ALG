Algoritmo "CALCULO MEDIA ESCOLA"

Var
   N1, N2, M: Real

Inicio
      Escreva("PRIMEIRA NOTA: ")
      Leia(N1)
      Escreva("SEGUNDA NOTA: ")
      Leia(N2)
      M <- (N1 + N2) / 2
      Escreval(" A MEDIA FOI DE: ", M:4:2)
      Se(M >= 6) entao
           Escreval("ALUNO APROVADO")
      Senao
           Se(M >=5) e (M <6) entao
                Escreval("ALUNO DE RECUPERACAO")
           senao
                Escreva("ALUNO REPROVADO")
           FimSe
      FimSe
      
Fimalgoritmo