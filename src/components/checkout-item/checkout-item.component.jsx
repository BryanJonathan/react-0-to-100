import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import "./checkout-item.styles.scss";
import { TYPES_ACTION_CART } from "../../consts";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  const { changeItemQuantity, removeItemFromCart } =
    useContext(CartDropdownContext);

  const handleClick = (event) => {
    console.log(event);
    const value = event.target.dataset.value;
    const action = event.target.dataset.action;
    changeItemQuantity(value, action);
  };

  const handleRemove = (event) => {
    const itemId = Number(event.target.dataset.value);
    removeItemFromCart(itemId);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div
          data-action={TYPES_ACTION_CART.REMOVE}
          data-value={id}
          onClick={handleClick}
          className="arrow"
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          data-action={TYPES_ACTION_CART.ADD}
          data-value={id}
          onClick={handleClick}
          className="arrow"
        >
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div onClick={handleRemove} data-value={id} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
