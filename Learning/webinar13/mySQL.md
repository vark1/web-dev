## Login to mySQL without root,
```shell
    mysql -u root
    mysql>
```

## Login to mySQL with root,

```shell
    mysql -u root -p
    Enter Password: 
```

## Create Database, User and Grant access

```sql
    CREATE DATABASE mytestdb;
    CREATE USER myuser IDENTIFIED BY mypass;
    USE mytestdb;
    GRANT ALL PRIVILEGES ON mytestdb.* to myuser;
    FLUSH PRIVILEGES;
```

```shell
    mysql -u myuser -p
    Enter password: (enter 'mypass' here)
```

```
```