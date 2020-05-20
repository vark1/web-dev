# Preparing the database

```sql
    CREATE DATABASE shopdb;
    USE shopdb;
    CREATE USER shopper IDENTIFIED BY 'shoppass';
    grant all privileges on shopdb to shopper;
    grant all privileges on shopdb.* to shopper;
```