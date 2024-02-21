import { useState } from "react";
import ListItems from "./listitems";

export default function Lists({ items, handleClose, onToggle, setItems }) {
  const [sortBy, setSortBy] = useState("input");
  function handleReset() {
    const action = window.confirm("Do you want to clear the list? 💢");

    if (action) setItems([]);
  }
  let sortedArray = items;
  if (sortBy === "input") sortedArray = items;
  if (sortBy === "description") {
    sortedArray = sortedArray
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedArray = sortedArray
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="bg-[#5a3e2b]">
      <ul className=" px-[2rem] py-[2rem]  h-[26.5rem] md:flex md:flex-row md:items-start flex flex-col sm:items-center md:gap-[5rem] gap-[2rem] overflow-auto">
        {sortedArray.map((el) => (
          <ListItems
            items={el}
            key={el.id}
            handleClose={handleClose}
            onToggle={onToggle}
          />
        ))}
      </ul>

      <select
        className="bg-[#ffebb3] p-1 h-8 text-sm w-[8rem] md:ml-[40%] ml-[38%] rounded-xl"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="input">Sort by input</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed</option>
      </select>
      <button
        className="ml-[48%] mt-2 md:mt-0 md:ml-4 md:py-2 md:px-4 sm:p-1  bg-[#f4a226] font-bold mb-2 rounded-lg"
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </div>
  );
}
