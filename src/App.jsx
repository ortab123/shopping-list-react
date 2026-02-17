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
  return (
    <>
      <Header />
      <ItemInput onAddItems={handleAddItems} />
      console.log({itemsList.length})
      <ShoppingList />
      <ShoppingItem />
    </>
  );
}

export default App;
