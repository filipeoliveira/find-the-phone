/* --------------------------------------------------------------------
  Programa para encontrar o número de telefone associado a uma expressão.
  Primeira fase do processo seletivo da Caelum - RJ

  Filipe José Teixeira de Oliveira - Github: filipeoliveira
  ---------------------------------------------------------------------- */

  // Inicializando um Objeto com todas as regras da tabela mencionada no exercício:

  var table = {
                "A": 2, "B": 2, "C": 2, "D": 3, "E": 3, "F": 3, "G": 4, "H": 4,
                "I": 4, "J": 5, "K": 5, "L": 5, "M": 6, "N": 6, "O": 6, "P": 7,
                "Q": 7, "R": 7, "S": 7, "T": 8, "U": 8, "V": 8, "W": 9, "X": 9,
                "Y": 9, "Z": 9,
              }

  var errors = [];

// Função principal para checar o número de telefone (digitos) associado a expressão que contém letras.
function checkExpression(expression){

  var phoneNumbers = []

  expression.forEach(function(expression, index){
    var exp   = expression.split('');
    if (exp.length > 30){
      var err = {
        "error": "Expressão com mais de 30 caracteres",
        "expression": expression,
        "length": exp.length,
        "index": index
      }
      errors.push(err);
    }

    //RRetirar a iteração da ultima linha (Length === 0)(EOF)
    if (exp.length){
      var phone = "";

      exp.forEach(function(char){

        if (char === "-"){
          phone = phone.concat("-");
        }
        else if (char === "0"){
          phone = phone.concat("0");
        }
        else if (char === "1"){
          phone = phone.concat("1");
        }
        else {
          phone = phone.concat(table[char]);
        }

      })
      phoneNumbers.push(phone)
    }
  })
  return phoneNumbers;
}


// Ter certeza que é passado um arquivo, como entrada, na linha de comando.
if (process.argv.length < 3) {
  console.log('É necessário passar um arquivo como entrada.\nTente executar "js findphone.js phone-list.txt"\n');
  process.exit(1);
}

//Lendo aquivo de entrada via nodejs
var fs           = require('fs')
var filename     = process.argv[2];
var result       = fs.readFileSync(filename, 'utf8').toString().split("\n");

var phoneNumbers = checkExpression(result);

phoneNumbers.forEach(function(phoneNumber){
  console.log(phoneNumber);
})

//Feedback para o usuário, em caso de erros nas expressões fornecidas pela entrada.
if(errors.length){
  errors.forEach(function(err){
    console.log(err);
  })
}
