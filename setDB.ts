
/*

-----------
IMPORTANTE
-----------
A porta da aplicação esta configurada no arquivo
PACKAGE.JSON em scripts

 "scripts": {
    "dev": "next dev --port=3005",


*/

// AKI PARA ATIVAR CONEXAO USE true
const ATIVE_DB = false;
 
// conexão tipo :

// 1 mongoDB sem necessidade de autenticação
// 2 mongoDB com necessidade de autenticação
// 3 mongoDB ATLAS (obrigatório usuario e senha)

// completar config (usuario/senha e porta) em .env.local

// AKI  configure seu tipo de conexão AKI
const TIPO_CONEXAO = "2";

enum TipoConexao {
  LOCALHOST_SEM_AUTENTICACAO = "1",
  LOCALHOST_COM_AUTENTICACAO = "2",
  ATLAS_MONGO_COM_AUTENTICACAO = "3",
  MONGO_EXTERNO="4",
}

const DB = process.env.DB;
const USER = process.env.USER;
const PWD = process.env.PWD;

const PORT = process.env.PORT;

const DEF_CONEXAO: TipoConexao = TIPO_CONEXAO as TipoConexao;

var URL_SELECIONADA=''

const URL_MONGO = `mongodb://localhost:${PORT}`;

const URL_ATLAS = `mongodb+srv://${USER}:${PWD}@clustersp.gdup60c.mongodb.net/?retryWrites=true&w=majority`;

const URL_MONGO_USER = `mongodb://${USER}:${PWD}@127.0.0.1:${PORT}/${DB}?authSource=admin`;

//inclusao de uma conexão para outra maq na rede de casa
const URL_MONGO_EXTERNO= `mongodb://192.168.0.10:${PORT}`;
 
switch (DEF_CONEXAO) {
  case TipoConexao.LOCALHOST_SEM_AUTENTICACAO:
    console.log("conexão sem autenticação localhost");
    URL_SELECIONADA = URL_MONGO;
    break;
  case TipoConexao.LOCALHOST_COM_AUTENTICACAO:
    console.log("conexão com autenticação localhost");
    URL_SELECIONADA = URL_MONGO_USER;
    break;
  case TipoConexao.ATLAS_MONGO_COM_AUTENTICACAO:
    console.log("conexão sem autenticação atlas mongoDb");
    URL_SELECIONADA = URL_ATLAS;
    break;
  case TipoConexao.MONGO_EXTERNO:
    console.log("conexão sem autenticação outra maquina da rede");
    URL_SELECIONADA = URL_MONGO_EXTERNO;
    break;
   
   
    default:
    URL_SELECIONADA = URL_MONGO_USER;
}

console.log('URL_SELECIONADA',URL_SELECIONADA)
 
export { ATIVE_DB, URL_SELECIONADA  };
