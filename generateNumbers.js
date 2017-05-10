/* --------------------------------------------------------------------
  Programa auxiliar para gerar número de telefones aleatórios.
  Primeira fase do processo seletivo da Caelum - RJ

  Filipe José Teixeira de Oliveira - Github: filipeoliveira
  ---------------------------------------------------------------------- */

const characters = '01-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const filename   = 'random-phone-list.txt'


//Capturando o path da pasta onde este arquivo se encontra.
var path = process.argv[1].split('/');
path.pop();
path = path.join("/");


//Checa se o parâmetro passado satisfaz as seguintes condições:
//   - É número inteiro positivo maior que zero?
if (process.argv[2] <= 0 || isNaN(parseInt(process.argv[2]))){
  console.log("Parâmetro " + process.argv[2] + " inválido. Digite um inteiro positivo maior que zero.");
  process.exit(1);
}
//   - É número inteiro positivo maior que zero e menor que 31?
if (!isNaN(parseInt(process.argv[3])) && process.argv[3] > 0 && process.argv[3] < 31){
  writeRandomString(process.argv[2], process.argv[3], characters);
}
else {
  console.log("Parâmetro " + process.argv[3] + " inválido. Digite um número inteiro maior que zero e menor que 31. Executando com parâmetro default: 25.");
  writeRandomString(process.argv[2], 25, characters);
}


//Gera uma String randomica de acordo com o tamanho e os caracteres passados.
function generateRandomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}


//Função principal para a escrita dos telefones randomicos em arquivo.
function writeRandomString(times, length, chars){

  var fs = require('fs');
  var allStrings = "";

  //Gerando a String com todos os telefones randomicos.
  for (var i = 0; i < times; i++){
    allStrings = allStrings.concat(generateRandomString(length, chars));

    if(i != length -1)
    allStrings = allStrings.concat("\n");
  }

  //Escrevendo-a no path correto.
  fs.writeFileSync(path + "/" + filename , allStrings, 'utf8', function(err) {
    if(err) {
      return console.log(err);
    }
  });

  console.log("Foram gerados " + times + " entradas de tamanho " + length + " no arquivo " + filename);
}
