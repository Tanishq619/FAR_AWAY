import { useState } from "react";

export default function Form({ Additems }) {
  let [desc, setDesc] = useState("");
  let [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      description: desc,

      packed: false,
      id: Date.now(),
      quantity: select,
    };

    Additems(newItem);

    console.log(newItem);
    setDesc("");
    setSelect(1);
  }
  return (
    <div className="flex bg-[#e5771f] p-4 gap-4 justify-center">
      <h1 className="text-3xl text-white">
        What do you need for your 😍 trip?
      </h1>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <select
          className="py-2 px-4  rounded-xl bg-[#ffebb3]"
          value={select}
          onChange={(e) => setSelect(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="py-2 px-4  rounded-xl bg-[#ffebb3]  placeholder:text-slate-800"
          placeholder="Items..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></input>

        <button className="py-2 px-4 bg-[#76c7ad] font-bold rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
}
