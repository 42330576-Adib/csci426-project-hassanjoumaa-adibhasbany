import React, { useState } from 'react';

const menuData = [
  {
    category: 'Frappe',
    items: [
      { name: 'Coffee dose frappe', price: '5.0$' },
      { name: 'Frappe', price: '5.0$' },
      { name: 'Caramel frappe', price: '5.0$' },
      { name: 'Salted caramel frappe', price: '5.0$' },
      { name: 'White mocha frappe', price: '5.0$' },
      { name: 'Matcha frappe', price: '5.0$' },
    ],
  },
  {
    category: 'Milk Shakes',
    items: [
      { name: 'Oreo', price: '4.5$' },
      { name: 'Lotus', price: '4.5$' },
      { name: 'Strawberry', price: '4.5$' },
      { name: 'Chocolate', price: '4.5$' },
      { name: 'Frozen yogurt', price: '4.5$' },
      { name: 'Blueberry blom', price: '4.5$' },
      { name: 'Protein shake', price: '5.0$' },
    ],
  },
  {
    category: 'Hot Beverages',
    items: [
      { name: 'Espresso', price: '1.0$' },
      { name: 'Doppio', price: '2.0$' },
      { name: 'V60', price: '3.0$' },
      { name: 'Americano', price: '3.0$' },
      { name: 'Nescafe', price: '1.5$' },
      { name: 'Special chocolate', price: '3.0$' },
      { name: 'Cappuccino', price: '3.0$' },
      { name: 'Café latte', price: '3.3$' },
      { name: 'Extra (caramel, vanille or hazelnut)', price: '+0.7$' },
      { name: 'Café mocha', price: '3.5$' },
      { name: 'Hot chocolate', price: '1.5$' },
      { name: 'Cherry chocolate', price: '4.0$' },
      { name: 'Matcha latte', price: '4.0$' },
      { name: 'Flavored tea', price: '1.0$' },
      { name: 'Caramelized lotus', price: '4.5$' },
    ],
  },
  {
    category: 'Smoothies',
    items: [
      { name: 'Mango', price: '4.0$' },
      { name: 'Strawberry', price: '4.0$' },
      { name: 'Mixed berries', price: '4.0$' },
      { name: 'Tropical fruits', price: '4.0$' },
    ],
  },
  {
    category: 'Iced Coffee',
    items: [
      { name: 'Iced latte', price: '4.0$' },
      { name: 'Iced latte (caramel, vanille or hazelnut)', price: '4.0$' },
      { name: 'Iced mocha', price: '4.0$' },
      { name: 'Iced spanish latte', price: '4.0$' },
      { name: 'Iced matcha', price: '4.0$' },
      { name: 'Cherry chocolate', price: '4.0$' },
    ],
  },
  {
    category: 'Refreshers',
    items: [
      { name: 'Mojito', price: '4.0$' },
      { name: 'Mojito (choose your own flavour)', price: '4.0$' },
      { name: 'Ice tea peach', price: '4.0$' },
      { name: 'Strawberry boba', price: '4.0$' },
      { name: 'Mango boba', price: '4.0$' },
    ],
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(
    menuData[0]?.category || ''
  );
  const [selectedItemName, setSelectedItemName] = useState(
    menuData[0]?.items[0]?.name || ''
  );
  const [orderItems, setOrderItems] = useState([]);

  const getItemsForCategory = (category) =>
    menuData.find((c) => c.category === category)?.items || [];

  const currentItems = getItemsForCategory(selectedCategory);

  const parsePriceToNumber = (priceStr) =>
    parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;

  const handleAddItem = () => {
    if (!selectedCategory || !selectedItemName) return;

    const cat = menuData.find((c) => c.category === selectedCategory);
    const item = cat?.items.find((i) => i.name === selectedItemName);
    if (!item) return;

    const priceNumber = parsePriceToNumber(item.price);

    setOrderItems((prev) => {
      const index = prev.findIndex(
        (i) => i.name === item.name && i.category === selectedCategory
      );

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          qty: updated[index].qty + 1,
        };
        return updated;
      }

      return [
        ...prev,
        {
          name: item.name,
          category: selectedCategory,
          price: priceNumber,
          qty: 1,
        },
      ];
    });
  };

  const handleQtyChange = (index, value) => {
    const qty = Math.max(1, Number(value) || 1);
    setOrderItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], qty };
      return updated;
    });
  };

  const handleRemoveItem = (index) => {
    setOrderItems((prev) => prev.filter((_, i) => i !== index));
  };

  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="page menu-page">
      <h1>Menu</h1>
      <p>Discover all our Coffee Dose drinks, grouped by category.</p>

      {/* MENU TABLE */}
      <div className="menu-table-wrapper">
        <table className="menu-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {menuData.map((group) => (
              <React.Fragment key={group.category}>
                {group.items.map((item) => (
                  <tr key={group.category + item.name}>
                    <td>{group.category}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* ORDER SECTION */}
      <div className="order-section">
        <h2>Order</h2>
        <p>
          Build a quick order list to estimate your total. (This is a demo
          order builder – final orders are made in-store.)
        </p>

        <div className="order-controls">
          <select
            value={selectedCategory}
            onChange={(e) => {
              const newCat = e.target.value;
              setSelectedCategory(newCat);
              const firstItem = getItemsForCategory(newCat)[0];
              setSelectedItemName(firstItem ? firstItem.name : '');
            }}
          >
            {menuData.map((group) => (
              <option key={group.category} value={group.category}>
                {group.category}
              </option>
            ))}
          </select>

          <select
            value={selectedItemName}
            onChange={(e) => setSelectedItemName(e.target.value)}
          >
            {currentItems.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="cta-button order-add-btn"
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>

        {orderItems.length > 0 ? (
          <>
            <div className="menu-table-wrapper order-table-wrapper">
              <table className="menu-table order-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Line Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item, index) => (
                    <tr key={item.category + item.name}>
                      <td>{item.category}</td>
                      <td>{item.name}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={item.qty}
                          onChange={(e) =>
                            handleQtyChange(index, e.target.value)
                          }
                          className="order-qty-input"
                        />
                      </td>
                      <td>${(item.price * item.qty).toFixed(2)}</td>
                      <td>
                        <button
                          type="button"
                          className="order-remove-btn"
                          onClick={() => handleRemoveItem(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="order-total">
              Total: <span>${total.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <p className="order-empty">
            No items added yet. Choose a drink and click <strong>Add</strong>.
          </p>
        )}
      </div>
    </div>
  );
}

export default Menu;
