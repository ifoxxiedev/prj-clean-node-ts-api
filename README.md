# Starter project template using [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)


## Princípios Fundamentais
  
- Isolar as camadas baseadas em interfaces, dessa forma iremos conseguir trocar a implementação, as tecnologias do projeto de forma orgânica.
 
- Componentes devem ser trocados facilmente.
  
-  Sempre depender de interfaces, justamente para facilitar a troca dos componentes 
da arquitetura

- Pensar orientado a domínio, mesmo sendo um ponto mais forte em DDD(Domain Driven Design) podemos aqui com os use-cases e suas respectivas entidades focar no domínio

- Infraestrutura é menor dos nossos problemas, devem ser decididades posteriormente
quando temos um molde do nosso domínio e o mesmo já está validade, por exemplo, acesso
a bancos de dados, interfaces, procolocos etc...

- Desenvolver orientado a testes (Favoravel ao desenvolver/time)


## Pontos (Discussão)

- Quando implmentamos um padrão arquitetural como o **Clean Architecture**, podemos perceber então que o numero de arquivos irá aumentar, porém junto dele
lançamos mão do *S.O.L.I.D* que define boas praticas de escrita e usos de classes
em Orientação a Objetos.

- Por esse motivo há uma linha tênue e muitas vezes confundidas entre Over Engineering e responsabilidade definida e seu desacoplamento, ou seja,
se cresce o numero de arquivos para fazer a mesma coisa então estamos fazendo
Over Engineering ? Não quando estamos falando de responsabilidade unica, se 
a idéia é aplicar um padrão arquitetural, isolar as partes, e ter reuso, 
é uma balança de um lado  diminuimos acoplamento, do outro lado aumentamos a complexidade, de um lado separamos o código em suas respectivas camadas
do outro lado aumentamos o numero de arquivos e suas interfaces resepectivas. 



## O que vamos fazer?

- Trabalhar arquitetura em camadas (Independência, Abstração), aumentar a abstração, diminuir acoplamento.
  
- Separar em responsabilidades e focar no principal, regras de negocio. (Que independe da arquitetura :) )