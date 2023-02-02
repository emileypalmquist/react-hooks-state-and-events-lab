import React, { useState } from "react";
import Item from "./Item";

// import useState
// create a state called selectedCategory
// listen for change on select element
// function handle change
//   - change state to what option was selected
// filter our items so only the items with the category of selectedCategory are render

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedcategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedcategory(event.target.value);
  }

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }

    return item.category === selectedCategory;
    // if (item.category === selectedCategory) {
    //   return true;
    // } else {
    //   return false;
    // }
  });

  console.log(filteredItems);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
