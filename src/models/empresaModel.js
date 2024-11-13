var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO empresa (razao_social, nome_fantasia, cnpj, 
        cep, telefoneEmpresa, telefoneCelular, emailEmpresa, senha ) VALUES ( '${razao_social}',
        '${nome_fantasia}','${cnpj}', '${cep}', '${telefoneEmpresa}','${telefoneCelular}','${emailEmpresa}',
        '${senha}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};
