export const myInitialState = {
  basket: [
    // {
    //   id: "2",
    //   title:
    //     "Apple iPhone 11 Pro Max (64GB, Midnight Green) + Cricket Wireless Plan",
    //   price: 7000.0,
    //   rating: "3",
    //   image: "https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg",
    // },
  ],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((acum, element) => acum + element.price, 0);
};

const myReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      newBasket.splice(
        newBasket.findIndex((element) => element.id === action.id),
        1
      );

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default myReducer;
