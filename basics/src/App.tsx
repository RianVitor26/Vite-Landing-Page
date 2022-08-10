import { Tweet } from './components/Tweet';
import { useState } from 'react';
function App() {
/*
Uso do useState para mudar algo no componente
UseState retorna o valor inicial da variável e uma função para modificação
O TypeScript exige a tipagem da variavel
*/
  
  const [tweets, setTweets] = useState<String[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])
/* 
Função para criar um tweet.
Chamando a função de setar um valor para a variável, substituindo-a.
Como variável é um array, deve-se colocar colchetes dentro da função.
Utilizando operador spread para copiar o conteúdo da array.
*/
  function createTweet() {
    setTweets([...tweets, 'Tweet 5'])
  }
/* 
Percorrendo a array para pegar cada valor.
Retornando o componente com a propriedade text com o valor de cada iteração do map
*/
  return (
    <>
      {tweets.map(tweets => {
        return <Tweet text={tweets} />
      })}
      
      <button onClick={createTweet}>Adicionar Tweet</button>
    </>
  )
}

export default App
