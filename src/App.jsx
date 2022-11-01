import { useEffect, useState } from "react";
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
    <div>
      <ul>
        {produtos.map(({ id, title, price }) => {
          <li key={id}></li>;
        })}
      </ul>
    </div>
  );
};
export default App;
