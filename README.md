# Kidz School API - EC Utildning - Assignment 1

School assignment - JavaScript 2.  
(Only added GET routes so far)  

UI can be found [here](https://github.com/Nasimmhn/ec-kidz-school).

Summary
- TypeScript
- Azure SQL Database


## How set up

1. Create a file named ``config.ts``and save in ``/src``
```javascript
const config = {
    user: '<USERNAME>',
    password: '<PASSWORD>',
    server: '<SERVER_NAME>.database.windows.net',
    database: '<DATABASE_NAME>'
}

module.exports = config;
```

2. ``npm install``

3. ``npm start`` to build and start, or ``npm run dev`` for dev.

## SQL Database

Run the script ``sql_create_tables_data.sql`` in your SQL Database to create the all tables, stored procedures and test data.