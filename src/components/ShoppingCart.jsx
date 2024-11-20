import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Item } from "./Item";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  // Calcular la cantidad total de productos en el carrito
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // Calcular el precio total de los productos en el carrito
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  ).toFixed(3); // Limita a dos decimales
  

  return (
    <div className="cart-container">
      <div>
        <div>Cantidad de productos: {quantity}</div>
        <div>Total: ${totalPrice}</div>
        <hr />
        <div>Lista de Productos: 
          <hr />
          <ul>
            {cart.length > 0 ? (
              cart.map((product) => (
                <li key={product.id}>
                  <span>{product.name}</span> <br/>
                  <span>Cantidad: {product.quantity}</span> <br/>
                  <span>Precio unitario: ${product.price}</span><br/>
                  <img src={product.imgUrl} alt={product.name} width="100" />
                  <hr />
                </li>
              ))
            ) : (
              <p>No hay productos en el carrito</p>
            )}
          </ul>
        </div>
        <button onClick={() => alert('Compra exitosa ✔', cart)}>Comprar</button>
      </div>
    </div>
  );
};
