import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
          price={13000.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UL320_.jpg"
        />
        <Product
          id="2"
          title="Apple iPhone 11 Pro Max (64GB, Midnight Green) + Cricket Wireless Plan"
          price={7000.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="New Apple iPad Pro (11-inch, Wi-Fi, 1TB) - Space Gray (2nd Generation)"
          price={15.98}
          rating={3}
          image="https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UY218_.jpg"
        />
        <Product
          id="4"
          title="Teclado Magic Keyboard Apple para Mac, Cinza Espacial, Bluetooth"
          price={1018.98}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41k5KQB1jXL._AC_SX184_.jpg"
        />
        <Product
          id="5"
          title="Notebook Acer (Sem Garantia)"
          price={2599.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Monitor Gamer Samsung 49"
          price={10000.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
