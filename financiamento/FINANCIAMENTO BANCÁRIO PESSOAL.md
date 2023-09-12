FINANCIAMENTO BANCÁRIO PESSOAL

Um cidadão brasileiro procurou sua agência bancária para buscar um financiamento para viajar de férias com a família. Conversando com o gerente do banco, o cidadão descobriu que a instituição tem diversas regras para conceder um financiamento pessoal e que possui inúmeras variáveis que influenciam o valor que poderá ser financiado, assim como as taxas de juros e a forma de pagamento.

As regras que determinam o valor do financiamento são determinadas conforme o valor do salário líquido. O valor do financiamento não pode ultrapassar 4 vezes o valor do salário líquido. Se ultrapassar o valor liberado, deverá mostrar a seguinte mensagem “Financiamento não concedido”.

Cálculo da taxa de juros (regras):

- Somente poderá calcular o valor do juro se o valor solicitado do financiamento for autorizado.

- A taxa de juros que será cobrada é influenciada pelo tempo de permanência no seu emprego (os juros são de 2% ao mês, mas, se estiver há mais de três anos na empresa onde trabalha, ganha um desconto de 0,05% na taxa de juros).

Cálculo do número de parcelas (regras):

- O número de parcelas somente poderá ser calculado se o valor do financiamento for autorizado.

- Depende do valor a financiar. O número de parcelas normal é de 3, mas se o valor a financiar é maior que R$ 5.000,00, o valor será parcelado em 6 vezes.

Vamos auxiliar o cidadão a simular o financiamento?

Vamos desenvolver um algoritmo em pseudocódigo que receba os valores do salário líquido do cidadão, o tempo de empresa e o valor que pretende financiar no banco. Calcule o valor da parcela e imprima as seguintes informações, caso consiga o financiamento.

- valor financiado

- total a ser pago pelo financiamento

- valor em R$ do juro a ser pago pelo financiamento

- número de parcelas

- valor de cada parcela

A seguir, apresentamos uma solução para o problema. Lembrando: é possível termos variações entre as soluções. Essa é uma solução bem detalhada do problema.

Algoritmo "financiamento_pessoal"
var
   sal, valor, juros, valor_juro, total, valor_parcela: real
   anos, parcela:inteiro
inicio
   Escreva("Digite o seu salário liquído: ")
   Leia(sal)
   Escreva("Digite o tempo de empresa ( em anos completos): ")
   Leia(anos)
   Escreva("Digite o valor do financiamento desejado: ")
   Leia(valor)
   se (valor <= 4 * sal) entao
      juros <- 2/100
      se(anos>3) entao // testa se está a mais de 3 anos na empresa
         juros <- juros - (0.5/100)
      fimse
      valor_juro <- valor * juros // calcula os juros do financiamento
      total <- valor_juro + valor // acrescenta os juros ao valor financiado
      parcela <- 3 // parcela recebe 3
          se (valor >5000) entao // testa se pode parcelar em 6 vezes, se valor for > 5000
             parcela <- 6
         fimse
         valor_parcela <- total / parcela // calcula o valor de cada parcela
         // imprime as saídas
         Escreval("Valor do financiamento = ", valor)
         Escreval("Total do finaciamento com juros = ", total)
         Escreval("Valor em R$ do juro = ", valor_juro)
         Escreval("Numero de parcelas = ", parcela)
         Escreval("Valor da parcela = ", valor_parcela)
      fimse
      se(valor > 4* sal) entao
          escreval("Financiamento não concedido!!!")
      fimse
fimalgoritmo

No exemplo acima, foi utilizado comando de seleção simples e, dentro dele, mais dois comandos de seleção simples, para atender a todas as regras propostas pelo problema.