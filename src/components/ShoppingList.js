import React, { useState } from "react";
import Item from "./Item";
// You should also use the selectedCategory variable to determine which items to display in the shopping list. You'll need some way of filtering the array of items based on the selectedCategory.

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilterChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
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
