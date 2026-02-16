import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import ItemInput from "./components/ItemInput";
import ShoppingItem from "./components/ShoppingItem";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [itemsList, setItemsList] = useState([]);
  return (
    <>
      <Header />
      <ItemInput />
      <ShoppingList />
      <ShoppingItem />
    </>
  );
}

export default App;
