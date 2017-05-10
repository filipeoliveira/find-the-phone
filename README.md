
Solução para o problema "Encontre o telefone" proposto no processo seletivo da Caelum em 2017.
-------------
![N|Solid](https://lh3.ggpht.com/CiDEYCDkRkfXSlVcmj7B5untVQQlzY_6vNfx7Sgbr3Sk9WK6G0nArf8E7cMrIGX-GBQS=w200)
![N|Solid](https://www.caelum.com.br/apostila-html-css-javascript/anuncios/caelum_2x.png)

O código todo está em javascript e a solução para o problema pode ser encontrada no arquivo **findphone.js**.

Para executar é necessário passar como parâmetro o arquivo contendo as expressões a serem lidas.

### Exemplo:
`js findphone.js random-phone-list.txt`

Há um tratamento de erros no findphone.js para verificar se há alguma entrada que não esteja no padro definido (máximo de 30 caracteres por linha) e um tratamento para não considerar a última iteração da leitura do arquivo (EOF).

Há também um aviso caso o usurio não passe nenhum parâmetro ao executar o arquivo.

--

Escrevi também um programa para gerar entradas aleatórias para poder testar a solução do problema proposto. O programa recebe como parâmetro: O número de expressões telefonicas a serem escritas no arquivo e o tamanho de cada expressão telefonica. Tais informações são escritas no arquivo **random-phone-list.js**. 

### Exemplo:
`js generateNumbers.js 20 25`

O tamanho default de cada expressão é 25.



Enunciado do problema "Encontre o telefone"
-------------
Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a
letras. Dessa maneira a expressão MY LOVE significa 69 5683. Claro que existem alguns
problemas, uma vez que alguns números de telefone não formam uma palavra ou uma frase
e os dígitos 1 e 0 não estão associados a nenhuma letra.
Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente baseado
na tabela abaixo. Uma expressão é composta por letras maiúsculas (A-Z), hífens (-) e os números 1 e 0.


| Letras  | Número |
| ------------- | ------------- |
| ABC  | 2  |
| DEF  | 3  |
| GHI  | 4  |
| JKL  | 5  |
| MNO  | 6  |
| PQRS  | 7  |
| TUV  | 8  |
| WXYZ  | 9  |

### Entrada
A entrada consiste de um conjunto de expressões. Cada expressão está sozinha em uma linha e possui C
caracteres, onde 1 ≤ C ≤ 30. A entrada é terminada por fim de arquivo (EOF).
### Saída
Para cada expressão você deve imprimir o número de telefone correspondente.


###  Exemplo

| Entrada  | Saída |
| ------------- | ------------- |
| 1-HOME-SWEET-HOME  | 1-4663-79338-4663 |
| MY-MISERABLE-JOB  | 69-647372253-562 |

