import { createContext, useState, useEffect } from "react";
import { TYPES_ACTION_CART } from "../consts";

const changeCartItem = (cartItems, product, quantity) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartDropdownContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
  changeItemQuantity: () => {},
  removeItemFromCart: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const changeItemQuantity = (itemId, action) => {
    itemId = Number(itemId);
    const value = cartItems.find((cartItem) => cartItem.id === itemId);
    if (!value) {
      console.warn("Item not found");
      return;
    }

    switch (action) {
      case TYPES_ACTION_CART.ADD:
        setCartItems((prevCardItems) =>
          changeCartItem(prevCardItems, value, 1)
        );
        break;
      case TYPES_ACTION_CART.REMOVE:
        if (value.quantity <= 1) {
          removeItemFromCart(itemId);
          break;
        }
        setCartItems((prevCardItems) =>
          changeCartItem(prevCardItems, value, -1)
        );
        break;
      default:
        console.warn("Unknown action type");
    }
  };

  const removeItemFromCart = (itemId) => {
    itemId = Number(itemId);
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const addItemToCart = (productToAdd) => {
    setCartItems((prevCartItems) =>
      changeCartItem(prevCartItems, productToAdd, 1)
    );
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalQuantity(newTotal);
  }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen: toggleDropdown,
    cartItems,
    addItemToCart,
    totalQuantity,
    changeItemQuantity,
    removeItemFromCart,
  };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
