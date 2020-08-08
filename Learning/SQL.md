# Structured Query Language

For databases we have two languages:

1. DDL (Data Definition Language) (eg:- create)
2. DML (Data Manipulation Language) (eg:- alter)

PS: not a case sensitive language

# SQL QUERIES AND CONSTRAINTS

## **CONSTRAINTS**

Constraints are the conditions which are applied on an attribute or set of attributes of a relation.

### Different types of constraints

1. Column constraints:- Applied on single attribute (Column)
2. Table constraints:- Applies on multiple attributes (Columns)

> UNIQUE: particular attribute accepts only unique values. ie values cant repeat in that column again

> NULL/NOT NULL: whether data can be null(no input) or not.

> PRIMARY KEY: makes sure there should not be any repeated values in an attribute. Similar to UNIQUE constraint.

> DEFAULT: gives default value to an attribute

> CHECK: used to put constraint on a value inserted by the user. Keywords used with check constraints: IN, BETWEEN, LIKE
>
> - IN : School char[50] CHECK (School IN ('Kendriya','Vidyalaya')). _This means the school name will either be 'Kendriya' or 'Vidyalaya'. It cant be anything else._
> - BETWEEN: Marks int CHECK(Marks BETWEEN 33 and 100). _This means the marks can only be equal to or inbetween 33 and 100_
> - LIKE: RollNo char(4) CHECK(RollNo LIKE 'KV\_ \_'). _This means RollNo should look like 'KV\_ \_'_
> - Multiple keywords: ..., Marks int, CHECK (School 'CodingBlocks' AND Marks>90) OR (School 'VidyaMandir' AND Marks>85)

## **QUERIES**

## _For table creation_

```sql
CREATE TABLE table_name(
   column_name datatype[size],
   column_name datatype[size],
   column_name datatype[size],
)
```

example with constraints:

```sql
CREATE TABLE STUDENT(
   RollNo int PRIMARY KEY NOT NULL,
   Name char[30] NULL,
   School char[50] DEFAULT 'Kendriya Vidyalaya',
   Marks int CHECK(Marks>0)
)
```

## _For data insertion_

```sql
INSERT INTO student
VALUES (1, 'Varun', 'Kendriya Vidyalaya', 90)
```

## _To fetch data_

```sql
SELECT /*keywords: ALL(default), DISTINCT*/column_name_1, column_name_2,... /* use * for all*/
FROM table_name
WHERE condition(eg: school="VMC", eg: school<>"VMC" /*<> is not-equals-to operator*/, eg: NOT school = "VMC");
```

Keywords:

> BETWEEN: a range

> IN/NOT IN: to check if a values is this or that

> LIKE/NOT LIKE: matching a particular pattern
>
> - %(percentage): Multiple characters. <br>
>   eg: SELECT \* FROM student WHERE school LIKE %cod% ;<br> _This means iske left and right me kuch bhi aaskta h bas beech me cod aana chahiye. This will take 'decode' as well as 'coding blocks'_

> - \_(underscore): character by character.<br>
>   eg: SELECT \* FROM student WHERE name LIKE 'C \_ \_ \_'; <br> _This means there can only be 4 characters after C. They might be anything but only 4. This will take 'code' but wont take 'coding'_

> - \ (backslash): to ignore the next character. <br>
>   eg: SELECT name, Marks FROM students WHERE name '% \_h';
>   <br> _This selects name and marks of the students who have \_h at the end of their names._

> NULL/NOT NULL: when comparing with NULL/NOT NULL, we dont use equals-to sign. <br>
> eg: SELECT \* FROM students WHERE Marks is NULL

e.g:

```sql
SELECT *
FROM student
/*WHERE Marks BETWEEN 81 and 90*/
/*WHERE School IN("BBT" OR "VMC")*/
WHERE School NOT IN("BBT" OR "VMC");
;
```
