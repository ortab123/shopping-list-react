export default function ShoppingItem({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <div className="item-text">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span
          style={
            item.packed ? { textDecoration: "line-through", color: "#999" } : {}
          }
        >
          {item.name}
        </span>
      </div>
      <button className="delete-btn" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
