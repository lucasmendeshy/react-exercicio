import { useEffect, useState } from "react";
import "./index.css";
const App = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProdutos() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        // .then((res) => res.json())
        // .then((json) => console.log(json));
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getProdutos();
  }, []);
  /* console.log(produtos); Testando */

  return (
    <>
    <h1>Exercício 2</h1>
    <section>
      <article>
      {produtos.map(({id, title, price, image}) => (
        <div key={id}>
          <h2>{title}</h2>
        <p> 
          <img class="foto" src={image} alt="foto dos produtos" />
        </p>
          <p>{price}</p>
        </div>
      ))}
      </article>
    </section>
    </>
  );
};
export default App;
