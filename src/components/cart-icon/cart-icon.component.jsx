import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context.jsx";

const CartIcon = () => {
  const { setIsOpen, totalQuantity } = useContext(CartDropdownContext);
  return (
    <div className="cart-icon-container" onClick={setIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
