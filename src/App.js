import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import AddItems from "./components/AddItems";
import SearchItems from "./components/SearchItems";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo_list")) || []
  );
  // addItems
  const [addItems, setAddItems] = useState("");
  // searchItems
  const [searchItems, setSearchItems] = useState("");
  function handleChange(id) {
    const listContent = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listContent);
    localStorage.setItem("todo_list", JSON.stringify(listContent));
  }
  function handleDelete(id) {
    const listContent = items.filter((item) => item.id !== id);
    setItems(listContent);
    localStorage.setItem("todo_list", JSON.stringify(listContent));
  }
  function addNewItems(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const listItem = { id, checked: false, item };
    const listContent = [...items, listItem];
    setItems(listContent);
    localStorage.setItem("todo_list", JSON.stringify(listContent));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItems(addItems);
    setAddItems("");
  };
  return (
    <div className="container border border-white pt-5 min-h-screen rounded App">
      <Header Itemlength={items.length} />
      <AddItems
        addItems={addItems}
        setAddItems={setAddItems}
        handleSubmit={handleSubmit}
      />
      <SearchItems searchItems={searchItems} setSearchItems={setSearchItems} />
      <Main
        items={items.filter((item) =>
          item.item.toLowerCase().includes(searchItems.toLowerCase())
        )}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
