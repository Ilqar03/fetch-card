import React, { useEffect, useState } from "react";
import "./Main.scss"
function Main() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <>
      {products.map((element) => {
        return (<>
        <div class="container">
  <div class="images">
    <img src={element.image} />
  </div>
  <div class="product">
    <p>{element.category}</p>
    <h1>{element.title}
    </h1>
    <h2>{element.price}</h2>
    <p class="desc">{element.description}</p>
    <div class="buttons">
      <button class="add">BUY</button>
      <button class="like"><span>♥</span></button>
    </div>
  </div>
</div>


        </>)
      })}
    </>
  );
}

export default Main;
