import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import { items } from "../data/items";
// state variable that will change based on user interaction
// import from react useState pass in an argument of initialState(boolean, number, object, array) -> returns [stateValue, stateFunctionToSetOurStateValue]
// initialState to be:
//   - false (if we want to default to light)
//   - true (if we want to default to dark)
// use state variable in the ternary for appClass

// onClick event listener
// event handler => function that takes in the sytheticEvent and does something

function App() {
  const [isDark, setIsDark] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light";
  const buttonName = isDark ? "Light Mode" : "Dark Mode";

  function handleButtonClick() {
    setIsDark((currentIsDark) => !currentIsDark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleButtonClick}>{buttonName}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
