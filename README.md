repositorio para entrega da atividade de SuperHero API. Aluno: Rodrygo Rogerio Vascocnellos RA:10381768
# 

### Disclaimer: 
Este codigo foi feito no "[codesandbox.io](https://codesandbox.io)".
Como eu não estava presente no dia que o trabalho foi explicado, foi seguido o [enunciado](https://bragafilho.craft.me/yqfTax2ZyW6Ca5) provido as cegas, ou seja, repliquei o codigo fornecido em next.js.
No acesso da API foi utilizado o Token do professor.
#

# SuperHero API  
Clique [aqui](https://codesandbox.io/p/devbox/2q7chj) para visualizar o codigo no codesandbox.io 

__Descrição do Projeto__:

Este projeto é uma aplicação em Next.js que exibe uma lista de herois, com suas habilidades (neste caso inteligencia e força) e a imagem do heroi. A aplicação utiliza a SuperHero API para buscar dados sobre os herois e os exibe em cards.

__Aplicação__: 
- Aplicação busca informações dos herois pela SuperHero API. 
- Heroi é representado pelo card
- Card de Heroi possui nome, barra de inteligencia, barra de força, foto.
- Cada card se adapta para o tamanho de tela por flexbox

__Estrutura__(o que foi criado a partir do enunciado): 
- Page.js: Componente principal que cria o card dos heróis e faz a chamada à API para buscar dados dos herois.
- HeroCard.js: Componente que caracteriza os cards dos herois, com as informações como nome, imagem e barras de inteligencia e força.
- Globals.css, HeroCard.module.css e Home.module.css são os estilos utilizados para a aplicação

__Funcionamento__: 
__Page__: Aplicação, que gerencia o estado dos herois e faz as requisições para a API. Utiliza useEffect para  as requisições assim que o componente for montado. O "Use Client" foi utilizado para a execução pelo codesandbox.  

Cada herói é buscado através do código único da API (getHeroes(200) e getHeroes(465)), a função getHeroes é responsavel por buscar os dados do heroi e armazená-los no estado heroes, que é então mapeado em um HeroCard.  

__HeroCard__: Componente que recebe as informações de um heroi como props e as exibe dentro de um card. As barras de inteligência e força são representadas com elementos span que têm largura relacionada com os valores das habilidades. ex:
 ```html
<p>
  intelligence:{" "}
  <span
    style={{ width: `${hero.intelligence}%`, backgroundColor: "#F9B32F" }}
    className={styles.bar}
  ></span>
</p>
```
