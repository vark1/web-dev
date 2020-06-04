```sql
    CREATE DATABASE journaldb;
    USE journaldb;
    CREATE USER journalist IDENTIFIED BY 'journalpass';
    grant all privileges on journaldb to journalist;
    grant all privileges on journaldb.* to journalist;
```

```shell
    mysql -u journalist -p
    Enter password: (enter 'journalpass' here)
```