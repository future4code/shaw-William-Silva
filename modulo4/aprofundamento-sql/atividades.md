### Exercício 1

a) Esse comando apagaria a coluna salary da tabela de Actor.

b) Esse comando altera o nome de gender para sex na tabela de Actor e limita o número de caractéres máximo pra 6.

c) Esse comando altera a quantidade máxima de caractéres permitido para 255.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


### Exercício 2

a) UPDATE Actor SET name = "Moacyr Franco", birth_date = "1936-10-05" WHERE id = 003;

b) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
   UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

c) UPDATE Actor 
   SET 
   name = "Lázaro Ramos", 
   birth_date = "1978-11-01", 
   salary = 900000,
   gender = "male"
   WHERE id = "005";

d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
   
   No meu caso ele executou a linha de código sem erros, porém como não encontrou o id que eu informei ele só me informou que nenhuma linha foi afetada pelo meu código.


### Exercício 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


### Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;


### Exercício 5

a) O código executa um COUNT no gender de todos que são atores, então depois com o GROUP BY definido como gender, ele retorna o número de contagem de todos os gêneros existentes na tabela Actor.

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;


### Exercício 6

a) ALTER TABLE Movies ADD playing_limit_date VARCHAR(255) NOT NULL;

b) ALTER TABLE Movies CHANGE score score DOUBLE NOT NULL;

c) UPDATE Movies SET playing_limit_date = "2022/06/28" WHERE id = 001;
   UPDATE Movies SET playing_limit_date = "2020/01/13" WHERE id = 002;

d) UPDATE Movies SET synopsis = "Oi eu sou um sinopse tesde do filme com id 001" WHERE id = 001;
   0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

   O código rodou porém não alterou nada pois não encontrou o id de valor 001.