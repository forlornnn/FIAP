Algoritmo "media da escola com letra"

Var
   N1, N2: REAL
   M: REAL
   M_L: CARACTERE


Inicio

   Escreval ("VAMOS CALCULAR SUA MEDIA!")
   Escreva (" PRIMEIRA NOTA:  ")
   Leia (N1)
   Escreva (" SEGUNDA NOTA:  ")
   Leia (N2)
   M <- (N1 + N2) / 2
   Se (M > 9.9) entao
      M_L <- "S"
   senao
      Se (M >= 9) entao
         M_L <- "A"
      senao
         Se (M >= 8) entao
            M_L <- "B"
         senao
            Se (M >= 7) entao
               M_L <- "C"
            senao
               Se (M >= 6) entao
                  M_L <- "D"
               senao
                  Se (M >= 5) entao
                     M_L <- "E"
                  senao M_L <- "F"
                  Fimse
               Fimse
            Fimse
         Fimse
      Fimse
   Fimse

   Escreval ("MEDIA: ", M)
   Escreval ("CLASSIFICAÇAO:  ", M_L)
   Se (M >= 5.95) entao
      Escreval ("STATUS: APROVADO")
   senao
      Escreval ("STATUS: REPROVADO")
   Fimse
Fimalgoritmo