import React, { useState } from "react";

// import useState
// create a state to handle which state the item is in (in cart or not)
// add a click event listener to the button
// create function that will be called when button is clicked
//    - change state to opposite
// className for the li is changed based of state
//    - ternary for "in-cart" class name of ""
// ternary for button text if it's in the cart button should say "Remove From Cart" else "Add to Cart"

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function toggleInCart() {
    setInCart((currentInCart) => !currentInCart);
    // console.log("toggleInCart:", inCart);
  }

  // console.log("outside function in component", inCart);
  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  const buttonClass = inCart ? "remove" : "add";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={toggleInCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
