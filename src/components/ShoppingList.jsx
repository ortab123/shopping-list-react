import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({
  itemsList,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  return (
    <div className="list">
      <ul>
        {itemsList.map((item) => (
          <ShoppingItem
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <button className="clear-btn" onClick={onClearList}>
        Clear list
      </button>
    </div>
  );
}
