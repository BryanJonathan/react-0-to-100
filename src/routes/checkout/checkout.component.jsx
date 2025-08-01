import "./checkout.styles.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { TYPES_ACTION_CART } from "../../consts";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, totalQuantity, changeItemQuantity, removeItemFromCart } =
    useContext(CartDropdownContext);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal || 0}</div>
    </div>
  );
};

export default Checkout;
