export default function Footer({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((el) => el.packed === true).length;
  const percent =
    totalItems === 0 ? 0 : Math.trunc((packedItems / totalItems) * 100);
  console.log(percent);

  return (
    <div className="bg-[#76c7ad]">
      <h1 className="text-center text-white text-3xl p-4">
        {percent === 100
          ? "You are ready to go ✈️"
          : ` 💼 You have ${totalItems} items on your list, and you already packed
          ${packedItems}( ${percent}%)`}
      </h1>
    </div>
  );
}
