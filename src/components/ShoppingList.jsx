import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({
  itemsList,
  onDeleteItem,
  onToggleItem,
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
    </div>
  );
}
