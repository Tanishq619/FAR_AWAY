export default function ListItems({ items, handleClose, onToggle }) {
  return (
    <li className="text-[#ffebb3] font-bold text-xl " key={items.description}>
      <input
        type="checkbox"
        className="mr-2 accent-[#ffebb3] p-4"
        value={items.packed}
        onChange={() => onToggle(items.id)}
      />
      {items.quantity}
      <span className={`ml-2 ${items.packed ? "line-through" : ""}`}>
        {items.description}
      </span>
      <button className="ml-2" onClick={() => handleClose(items.id)}>
        ❌
      </button>
    </li>
  );
}
