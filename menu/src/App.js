import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

export const CategoryContext = React.createContext();

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      return setMenuItem(items);
    }
    const newMenuItem = items.filter((item) => item.category === category);
    setMenuItem(newMenuItem);
  };

  return (
    <CategoryContext.Provider value={{ categories, filterItems }}>
      <section>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories/>
        <Menu menuLists={menuItem} />
      </section>
    </CategoryContext.Provider>
  );
}
export default App;
