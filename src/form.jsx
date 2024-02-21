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
    <div className="flex flex-col items-center md:flex md:flex-row bg-[#e5771f] py-2 px-1 md:p-4 gap-4 md:justify-center">
      <h1 className="w-[20rem] text-center md:w-auto text-2xl tracking-tighter md:text-3xl text-white">
        What do you need for your 😍 trip?
      </h1>
      <form
        className="flex flex-col justify-center md:flex md:flex-row items-center gap-4"
        onSubmit={handleSubmit}
      >
        <select
          className="h-8 md:h-auto md:py-2 md:px-4  rounded-xl bg-[#ffebb3]"
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
