import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import ItemInput from "./components/ItemInput";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [itemsList, setItemsList] = useState(() => {
    const savedItems = localStorage.getItem("shopping-items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [templates, setTemplates] = useState(() => {
    const savedTemplates = localStorage.getItem("shopping-templates");
    const defaultTemplates = {
      weekly: ["Milk", "Cheese", "Eggs", "Bread"],
      party: ["Disposable utensils", "Soft drink", "Snacks", "Beer"],
      baby: ["Materna", "Wipes", "Diapers"],
    };
    return savedTemplates ? JSON.parse(savedTemplates) : defaultTemplates;
  });

  useEffect(() => {
    localStorage.setItem("shopping-items", JSON.stringify(itemsList));
  }, [itemsList]);

  useEffect(() => {
    localStorage.setItem("shopping-templates", JSON.stringify(templates));
  }, [templates]);

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

  function handleLoadTemplate(templateKey) {
    const templateItems = templates[templateKey];
    if (!templateItems) return;

    const newItems = templateItems.map((name) => ({
      id: Date.now() + Math.random(),
      name,
      packed: false,
    }));

    setItemsList((prev) => [...prev, ...newItems]);
  }

  function handleSaveAsTemplate() {
    if (itemsList.length === 0)
      return alert("You cannot save an empty list as a template.");

    const templateName = prompt(
      "Give your new template a name (for example: BBQ, Gym):",
    );
    if (!templateName) return;

    const newTemplateItems = itemsList.map((item) => item.name);

    setTemplates((prev) => ({
      ...prev,
      [templateName]: newTemplateItems,
    }));
  }

  function handleDeleteTemplate(name) {
    if (window.confirm(`Delete the template "${name}"?`)) {
      const newTemplates = { ...templates };
      delete newTemplates[name];
      setTemplates(newTemplates);
    }
  }

  const numItems = itemsList.length;
  const numPacked = itemsList.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className="app">
      <Header />
      <div className="templates-container">
        <div className="templates-list">
          {Object.keys(templates).map((name) => (
            <div key={name} className="template-badge">
              <span onClick={() => handleLoadTemplate(name)}>{name}</span>
              <button
                className="delete-temp-btn"
                onClick={() => handleDeleteTemplate(name)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <button className="save-template-btn" onClick={handleSaveAsTemplate}>
          📃save current list as a template
        </button>
      </div>
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
