import { useState } from "react";
import Header from "./header";
import Form from "./form";
import Lists from "./list";
import Footer from "./footer";

export default App;

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);
  function handleItems(newItem) {
    setItems((items) => [...items, newItem]);
    console.log(items.length);
  }

  function handleClose(id) {
    setItems((items) => items.filter((el) => el.id !== id));
  }

  function onToggle(id) {
    setItems(
      items.map((el) => (el.id === id ? { ...el, packed: !el.packed } : el))
    );
  }
  return (
    <div>
      <Header />
      <Form setItems={setItems} Additems={handleItems} />
      <Lists
        items={items}
        handleClose={handleClose}
        onToggle={onToggle}
        setItems={setItems}
      />
      <Footer items={items} />
    </div>
  );
}
