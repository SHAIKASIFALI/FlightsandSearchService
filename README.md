# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`
```
## DB Design
- Airplane Table
- Flight Table
- Airport Tbale
- City Table

- A flight can have an aeroplane where as the same aeroplane can be used for many flights.
- A city has many flights where as oneairport belongs to a city
-one airport can have many flights , but one flight belongs to an airport


##Tables 
### cities Table-> id,name,created_at,updated_at
### airports Table -> id, name, cityId
    relationship -> one city can have many airports where as one airport belongs to an city (one to many relationship)

###todoinservvice
1.Code Refactoring(Done)
2.Writing the error handling cases(Done)
3.Writing the Jest error test cases..
4.Have an caching at this service..
5.add the middlewares
6.seed the data 