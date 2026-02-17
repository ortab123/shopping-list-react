import { useState } from "react";

export default function ItemInput({ onAddItems }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      name,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What do you need to buy?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
