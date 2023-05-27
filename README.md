# Missão Certificação Nv2.

DevTeam 2

## Descrição
[Descrição do projeto]

## Configuração do Ambiente
   
   #Porta do app
   
    A porta da aplicação esta configurada para 3005 no arquivo PACKAGE.JSON em scripts


   #Persistência dos dados

   O projeto foi desenvolvido para persistir seus dados tanto para Localstorage (modo default) assim como para o banco MongoDb estando local ou no Mongo Atlas Databse, para isso basta configurar as informações pertinentes ao banco em .env.local e ativar a opção ATIVE_DB= true em 'setDB.ts'
    
    obs: o tipo de conexão (string de conexão) a ser usada e feita pela configuração de TIPO_CONEXAO em 'setDB.ts' onde temos as seguintes opções :

         1 mongoDB sem necessidade de autenticação
         2 mongoDB com necessidade de autenticação
         3 mongoDB ATLAS (obrigatório usuario e senha)

   
    
### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:
- [Ferramenta 1]
- [Ferramenta 2]
- [Ferramenta 3]

### Instalação
Siga as etapas abaixo para configurar o ambiente:

1. Clone este repositório:
   ```shell
   git clone https://github.com/seu-usuario/projeto-xyz.git
