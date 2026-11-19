Algoritmo "salario"
Var
   NOME: Caractere
   SALARIO, NOVO_SALARIO: Real
   DEPENDENTES: Inteiro

Inicio
      Escreva (" Qual o nome do funcionario? ")
      Leia (NOME)
      Escreva (" Qual o salario do funcionario? R$")
      Leia (SALARIO)
      Escreva (" Qual a quantidade de dependentes? ")
      Leia (DEPENDENTES)
      Escolha DEPENDENTES
              Caso 0
                   NOVO_SALARIO <- SALARIO + (SALARIO*5/100)
              Caso 1, 2, 3
                   NOVO_SALARIO <- SALARIO + (SALARIO*10/100)
              Caso 4, 5, 6
                   NOVO_SALARIO <- SALARIO + (SALARIO*15/100)
              outroCaso
                   NOVO_SALARIO <- SALARIO + (SALARIO*18/100)
      FimEscolha
      
      Escreva (" O novo salario de ", NOME, " vai ser de: R$", NOVO_SALARIO:5:2)
      
      
      
Fimalgoritmo