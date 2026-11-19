Algoritmo "USANDO ESCOLHA"
Var
   N1, N2: INTEIRO
   M: REAL
   M_L: CARACTERE

Inicio
   Escreva (" PRIMEIRA NOTA: ")
   LEIA (N1)
   ESCREVA (" SEGUNDA NOTA: ")
   LEIA (N2)
   M <- (N1 + N2) / 2
   ESCOLHA M
   CASO 10
      M_L <- "S"
   CASO 9
      M_L <- "A"
   CASO 8
      M_L <- "B"
   CASO 7
      M_L <- "C"
   CASO 6
      M_L <- "D"
   CASO 5
      M_L <- "E"
   OUTROCASO
      M_L <- "F"
   FIMESCOLHA
      ESCREVAL (" MEDIA: ", M)
      ESCREVAL (" APROVEITAMENTO: ", M_L)
      Se (M >= 6) entao
         ESCREVAL (" STATUS: APROVADO ")
      senao
         ESCREVAL (" STATUS: REPROVADO ")
      FIMSE

Fimalgoritmo