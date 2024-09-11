# Library Database

This is an Api Rest application with a complete CRUD and a Mongodb database with 2 collections, Authors and Books.

## Technologies
- NodeJS
- MongoDB Atlas

## Libraries
- Express
- Mongoose
- dotenv
- Nodemon (dev)

## Installation

```sh
cd project-6-api-rest
npm i
```

## Scripts 

Run dev server:
```sh
npm run dev
```
Run server:
```sh
npm run start
```

Initiallize Authors and Books seeds and then make the relations between them:

```sh
npm run seed
```

## Endpoints

**Authors**

|HTTP Method|URL|Description|
|---|---|---|
|`GET`|http://localhost:3000/api/v1/authors | Retrieves list of Authors |
|`GET`|http://localhost:3000/api/v1/authors/:id | Retrieves Author by Id |
|`POST`|http://localhost:3000/api/v1/authors/ | Adds new Author to database |
|`PUT`|http://localhost:3000/api/v1/authors/:id | Updates Author by Id |
|`DELETE`|http://localhost:3000/api/v1/authors/:id | Deletes Author by Id |

**Books**

|HTTP Method|URL|Description|
|---|---|---|
|`GET`|http://localhost:3000/api/v1/books | Retrieves list of Books |
|`GET`|http://localhost:3000/api/v1/books/:id | Retrieves Book by Id |
|`GET`|http://localhost:3000/api/v1/books/category/:category | Retrieves list of Books that matches category |
|`POST`|http://localhost:3000/api/v1/books/ | Adds new Book to database |
|`PUT`|http://localhost:3000/api/v1/books/:id | Updates Book by Id |
|`DELETE`|http://localhost:3000/api/v1/books/:id | Deletes Book by Id |
