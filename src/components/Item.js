import React, { useState } from "react";
// when the user clicks the <button> element, the item should be added to their virtual cart. The way we'll show the user that the item is in the cart is by changing the className on the <li> element:
// in-cart class or empty string class

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  function handleCartClick() {
    setIsInCart((currentIsInCart) => !currentIsInCart);
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className="add">
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
