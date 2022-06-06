### Exercicio 1 

a) VARCHAR(255) é para declarar um o valor atribuído no qual o valor dentros dos parênteses significa a quantidade de caractéres que espera ser recebida.
   DATE é pra declarar um valor no farmato de data, exemplo: yyyy/mm/dd.
   PRIMARY KEY é declarado para obter um valor inicial que seja único.
   NOT NULL é declarado quando se espera que se tenha algo preenchido no espaço de valor.

b) Ao rodar SHOW DATABASES me foi mostrado uma tabela com o database utilizado no SQL, no caso o meu.
   Ao rodar SHOW TABLES me foi mostrado todas as tabelas criadas detro do meu database.

c) O comando DESCRIBE em Actors mostrou a estrutura básica e todos os respectivos valores que são esperados como parâmetros dessa tabela.


### Exercicio 2

a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
   Erro de Código: 1062. Entrada duplicada '00' para a chave 'PRIMARY'

   O erro ocorreu devido a PRIMARY esperar um valor único.

c) Error Code: 1136. Column count doesn't match value count at row 1
   Erro de Código: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

   O erro ocorreu devido aos parâmetros de birth_date e gender serem NOT NULL, ou seja, é esperado um valor deles, porém esses valores não foram informados como parâmetro na criação do id 003.

   CORREÇÃO:

   INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) Error Code: 1364. Field 'name' doesn't have a default value
   Erro de Código: 1364. Campo 'name' não tem um valor padrão

   O erro ocorreu devido ao parâmetro name requerer um valor, e como não foi passado nenhum valor e nem foi chamado como parâmetro, ocorreu esse erro.

   CORREÇÃO:

   INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES(
  "004",
  "Rony Tamos",
  400000,
  "1949-04-18", 
  "male"
);

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
   Erro de Código: 1292. Valor de data incorreto: '1950' para coluna 'birth_date' na linha 1

   O erro ocorreu devido a falta das "" ao passar o valor de data.

   CORREÇÃO: 

   INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f) Eles já tinhas sido criados nos exercícios acima :p


### Exercicio 3

a) SELECT * FROM Actor WHERE gender = "female";

b) SELECT salary FROM Actor WHERE name = "Tony Ramos";

c) SELECT * FROM Actor WHERE gender = "invalid";
    
   O resultado foi que não apareceu nenhuma das pessoas registradas na tabela porquê o gender de todas até então foram passados corretamente, logo não constam como inválidos.

d) SELECT id, name, salary FROM Actor WHERE salary <= 500000;

e) Error Code: 1054. Unknown column 'nome' in 'field list'
   Erro de Código: 1054. Coluna desconhecida 'nome' em 'field list'

   O erro ocorreu porquê o parâmetro nome não existe, o correto seria name de acordo com o modelo inicial do CREATE TABLE e também por conta da falta de ; no final da linha.

   CORREÇÃO:

   SELECT id, name FROM Actor WHERE id = "002";


### Exercicio 4

a) SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

   A querry acima busca filtrar todos os atores(as) da tabela de Actor no qual o nome deles começem com as letras A e J e que respectivamente tenham um salário maior que R$ 300.000,00.

b) SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * FROM Actor WHERE (name LIKE "%G%");

d) SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;


### Exercicio 5

a) CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
	title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    score INT NOT NULL
);

   A tabela contém um id que espera um valor de até 255 caractéres que seja único, title espera receber um valor não vazio e único, synopsis espera receber um texto, release_date espera uma string no modelo data e score espera receber números como parâmetro de avaliação mas não é obrigatório.

b) INSERT INTO Movies (id, title, synopsis, release_date, score) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/06/01",
    7
);

c) INSERT INTO Movies (id, title, synopsis, release_date, score) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
);

d) INSERT INTO Movies (id, title, synopsis, release_date, score) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

e) INSERT INTO Movies (id, title, synopsis, release_date, score) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);


### Exercicio 6

a) SELECT id, title, score FROM Movies WHERE id = "003";

b) SELECT * FROM Movies WHERE title = "Se Eu Fosse Você";

c) SELECT id, title, synopsis FROM Movies WHERE score >= 7; 


### Exercicio 7

a) SELECT * FROM Movies WHERE (title LIKE "%vida%");

b) SELECT * FROM Movies WHERE (synopsis LIKE "%férias%");

c) SELECT * FROM Movies WHERE release_date <= "2022/06/06";

d) SELECT * FROM Movies WHERE release_date <= "2022/06/06" AND (synopsis LIKE "%saber%") AND score >= 7;