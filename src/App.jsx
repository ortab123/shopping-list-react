import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import ItemInput from "./components/ItemInput";
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

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete your list?",
    );
    if (confirmed) setItemsList([]);
  }

  const numItems = itemsList.length;
  const numPacked = itemsList.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className="app">
      <Header />
      <ItemInput onAddItems={handleAddItems} />
      <ShoppingList
        itemsList={itemsList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />

      <footer className="stats">
        {numItems === 0
          ? "start add items to your list!"
          : percentage === 100
            ? "You have collect all items in your list🛒🥳"
            : `You have already collect ${numPacked} items, you have ${numItems - numPacked} more items left on your list (${percentage}%)`}
      </footer>
    </div>
  );
}

export default App;
