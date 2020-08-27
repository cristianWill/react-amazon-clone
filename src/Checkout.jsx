import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import SubTotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Sua cesta está vazia!</h2>
            <p className="checkout__message">
              Voce não tem itens na sua cesta, para adicionar, clique no botao
              "Add ao carrinho" proximo ao item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Seu carrinho de produtos:</h2>
            {basket?.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckoutProduct>
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal></SubTotal>
        </div>
      )}
    </div>
  );
}

export default Checkout;
