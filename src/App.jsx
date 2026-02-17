import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import ItemInput from "./components/ItemInput";
import ShoppingItem from "./components/ShoppingItem";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [itemsList, setItemsList] = useState([]);

  function handleAddItems(item) {
    setItemsList((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItemsList((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItemsList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="app">
      <Header />
      <ItemInput onAddItems={handleAddItems} />
      <ShoppingList
        itemsList={itemsList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
    </div>
  );
}

export default App;
