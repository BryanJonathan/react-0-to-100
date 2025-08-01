import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { TYPES_ACTION_CART } from "../../consts";

const Checkout = () => {
  const { cartItems, totalQuantity, changeItemQuantity, removeItemFromCart } =
    useContext(CartDropdownContext);

  const handleClick = (event) => {
    const value = event.target.value;
    const action = event.target.dataset.action;
    changeItemQuantity(value, action);
  };

  const handleRemove = (event) => {
    const itemId = Number(event.target.value);
    removeItemFromCart(itemId);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
      <p>This is where the checkout process will be implemented.</p>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imageUrl} alt={item.name} />
          <div className="item-details">
            <span className="name">{item.name}</span>
            <span className="price"> ${item.price}</span>
          </div>
          <div className="quantity">
            <span>Quantity: {item.quantity}</span>
            <button
              value={item.id}
              onClick={handleClick}
              data-action={TYPES_ACTION_CART.ADD}
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            >
              +
            </button>
            <button
              value={item.id}
              onClick={handleClick}
              data-action={TYPES_ACTION_CART.REMOVE}
              style={{ marginRight: "1rem" }}
            >
              -
            </button>
            <button value={item.id} onClick={handleRemove}>
              x
            </button>
          </div>
        </div>
      ))}
      <div className="total-quantity">
        <p>=================</p>
        <span>Total Items: {totalQuantity}</span>
      </div>
    </div>
  );
};

export default Checkout;
