# AllBooks

O AllBooks é uma loja virtual que vende livros da Casa do Código. 
É um MVP que tá só começando e ainda tem muitas funcionalidades novas para serem desenvolvidas.

# JSONServer + JWT Auth

Essa é ma API Rest mockada, utilizando json-server e JWT.

## 🛠️ Instalação

```bash
$ npm install
$ npm run start-auth
```
## 🛠️ Como se registrar?

Você pode fazer isso efetuando uma requisição post para:

```
POST http://localhost:8000/public/registrar
```

Com os seguintes dados:


```
{
    "nome": "vinicios de sousa",
    "email": "vinicios@.com",
    "senha": "123456",
    "endereco": "Rua Vergueiro, 3185",
    "complemento": "Vila Mariana",
    "cep": "04101-300"
}
```

Repare que o e-mail é um campo único e usuários com e-mails duplicados não serão persistidos.

## 🛠️ Como fazer login?

Você pode fazer isso efetuando uma requisição post para:

```
POST http://localhost:8000/public/login
```

Com os seguintes dados:


```
{
  "email": "vinicios@.com",
  "senha":"123456"
}
```

Você vai receber um token no seguinte formato:

```
{
   "access_token": "<ACCESS_TOKEN>",
   "user": { ... dados do usuário ... }
}
```

## Autenticar próximas requests?

E então, adicionar este mesmo token ao header das próximas requisições:

```
Authorization: Bearer <ACCESS_TOKEN>

```

/* Atenção: resolução do erro Git:
   "fatal: Need to specify how to reconcile divergent branches."

   Comandos rápidos:
   - Rebase (aplica commits locais sobre o remoto):
     git fetch origin
     git pull --rebase origin <branch>

   - Merge (comportamento clássico):
     git pull --no-rebase origin <branch>

   - Fast-forward apenas:
     git pull --ff-only origin <branch>

   Definir preferência (global ou por repositório):
     git config --global pull.rebase true    # rebase por padrão
     git config --global pull.rebase false   # merge por padrão
     git config pull.rebase true             # por repositório

   Em caso de conflitos:
     git rebase --abort     # cancela rebase
     git merge --abort      # cancela merge
     Resolver conflitos, git add <arquivos>, git rebase --continue (ou git commit)

   Recomendações:
   - Rebase para histórico linear (feature branches).
   - Merge para preservar histórico de merges.
*/


