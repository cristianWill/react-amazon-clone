import React, { useState } from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import If from "./If";

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const [showMessage, setMessage] = useState(false);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });

    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 1000);
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
      <If teste={showMessage}>
        <p className="product__addItemMessage">Item adicionado!</p>
      </If>
    </div>
  );
}

export default Product;
