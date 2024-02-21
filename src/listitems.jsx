export default function ListItems({ items, handleClose, onToggle }) {
  return (
    <li
      className="text-[#ffebb3] h-[3rem] flex items-center justify-center w-[100%] md:w-auto text-sm font-bold md:text-xl "
      key={items.description}
    >
      <input
        type="checkbox"
        className="mr-2 accent-[#ffebb3]"
        value={items.packed}
        onChange={() => onToggle(items.id)}
      />
      {items.quantity}
      <span className={`ml-1 md:ml-2  ${items.packed ? "line-through" : ""}`}>
        {items.description}
      </span>
      <button className="ml-2" onClick={() => handleClose(items.id)}>
        ❌
      </button>
    </li>
  );
}
