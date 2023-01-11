# Api de blogs

## tecnologias utilizadas no seu desenvolvimento

1. Sequelize
2. Node.js
3. docker e docker-compose
4. jsonwebtoken(JWT)
5. joi

## descrição

Essa Api de blogs foi feita como projeto da escola de programação fullstack [trybe](https://www.betrybe.com/).

Dessa vez o objetivo foi utilizar o ORM [sequelize](https://sequelize.org/) a fim de diminuir a quantidade de strings queryes SQL, evitando erros e diminuindo a complexidade do código e melhorar a organização atravéz da arquitetura MSC. Isso junto das validações de usuário, feitas através do JWT

## funcionamento

A api tem varios endpoints simulando um blog, o usuário pode obter os users atravéz do get na rota 'users', os posts atravéz da 'posts' e assim por diante. Isso sempre exigindo validação, que é feita na hora do registro e do login.

### registro

metodo: 'post'

rota: '/user'

corpo esperado da requisição:

```json
  {
    "displayName": "joão",
    "email": "admin@email.com",
    "password": "123456",
    "image": "http:imageUrl.png"
    // a imagem não é obrigatória
  }
```

corpo da resposta esperado

```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjpzU1hd9k_Vw5IWKGL4hcCVG8"
      }
```

No caso de uma requisição inadequada, a api retorna  erros deste tipo:

```json
    {
      "message": "User already registered"
    }
```

```json
    {
      "message": "\"password\" length must be at least 6 characters long"
    }
```

### login

metodo: 'post'

rota: '/login'

corpo esperado da requisição:

```json
{
  "email": "joaopaulo@gmail.com",
  "password": "123456"
}
```

corpo da resposta esperado

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjpzU1hd9k_Vw5IWKGL4hcCVG8"
}
```

No caso de uma requisição inadequada, a api retorna  erros deste tipo:

```json
{
  "message": "Some required fields are missing"
}
```

```json
{
  "message": "Invalid fields"
}
```

### postagem

metodo: 'post'

rota: '/post'

corpo esperado da requisição:

```json
{
  "title": "titulo",
  "content": "iaeeee galera",
  "categoryIds": [1, 2]
}
```

corpo da resposta esperado

```json
{
  "id": 3,
  "title": "titulo",
  "content": "iaeeee galera",
  "userId": 1,
  "updated": "2022-05-18T18:00:01.196Z",
  "published": "2022-05-18T18:00:01.196Z"
}
```

### outras (gets, delete e put)

As outras rotas tem o foco muito maior na obtenção de informações, como os gets, que pegam os usuários em '/user', os posts em '/post' e categorias em '/category', sendo respectivamente delimitadas através do parâmentro id,quando especificado.

exemplo:

get('/user') retorna todos os users

get('/user/1') retorna apenas o user de id 1

get('/post') retorna todos os posts

get('/post/1') retorna apenas o post de id 1

a api ainda conta com as opções de delete e put para respectivamente deletar e editar usuários e posts
