import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
});

export const CartDropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CartDropdownContext.Provider value={{ setIsOpen: toggleDropdown, isOpen }}>
      {children}
    </CartDropdownContext.Provider>
  );
};
