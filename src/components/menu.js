import React from "react";

const Menu = ({ menuItems, filterItems }) => {
  return (
    <div>
      <div className="filter-buttons">
        <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterItems("lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterItems("shakes")}>Shakes</button>
      </div>

      <div className="menu-list">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            data-test-id={`menu-item-${item.category}`}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="category">{item.category}</p>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;