# Lista de Pokémon  

## Introdução  

O presente aplicativo faz uma consulta em uma API pública utilizando graphQL e exibe informações a respeito de Pokémons.  
As informações podem ser filtradas por Tipos de Pokémon e também pelo máximo de CP.  

## Bibliotecas e versões de software utilizados no desenvolvimento

O aplicativo foi desenvolvido fazendo uso de:  

-Ubuntu 18.04  
-React 17.0.2  
-Typescript 4.3.5  
-Google Chrome 92.0.4515.131  

-As seguintes bibliotecas foram utilizadas:  

-Apollo (https://www.apollographql.com/docs/react/)  
`npm add @apollo/react-hooks apollo-boost`  

-GraphQL (https://graphql.org/)  
`npm add graphql graphql-tag`  

-Chakra-ui na elaboração das Checkboxes (https://chakra-ui.com/docs/form/checkbox)  
`npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4`  

-Material-ui para o slider (https://next.material-ui.com/components/slider/)  
`npm install @material-ui/core`  

-Bootstrap para estilização e responsividade (https://react-bootstrap.github.io/)
`npm install react-bootstrap@next bootstrap@5.0.2`  


## Instalação

Para instalar o Web app, basta executar em seu prompt de comando:  

`git clone git@github.com:romfe/lista_pokemon.git`  
`cd lista_pokemon`  
`npm install`  

Para rodar o App localmente, basta executar o seguinte comando, como administrador:  
`npm start`  

Em seguida, acessar "localhost:3000" no seu navegador.  

## Operação

A operação é simples e intuitiva; os Pokémons e suas informações serão carregadas na tela conforme os filtros selecionados.  
O slider serve para filtrar os resultados dentro de um determinado intervalo de CP.  
As checkboxes controlam o tipo de Pokémon que é exibido na lista.

## Encaminhamentos

A aplicação apresenta funcionamento sem problemas, mas pode melhorar se:  
-O css for melhor trabalhado. Estou estudando rever as regras de responsividade e aplicar SASS.  
-Implementar o Lazy Loading.