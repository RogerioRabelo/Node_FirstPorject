const { error } = require("console");
const fs = require("fs"); // Modulo manipulador de arquivos
const path = require("path"); // Modulo manipulador de caminhos

//  Criar pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro gerado: ", error);
//   }
//   console.log("Pasta criada com sucesso");
// });

//  Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) {
      console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);

//  Adiciona conteúdo a um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "teste.txt"),
  " You are easy to understand!",
  (error) => {
    if (error) {
      console.log("Erro: ", error);
    }
    console.log("Arquivo modificado com sucesso!");
  }
);

//  Ler arquivo
fs.readFile(
  path.join(__dirname, "/test", "teste.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Error: ", error);
    }
    console.log("data inside the file: ", data);
  }
);
