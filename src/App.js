import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";
import AddItems from "./components/AddItems/AddItems";
import SearchItems from "./components/SearchItems/SearchItems";

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
    <div className="App">
      <Header Itemlength={items.length} />
      <Main
        items={items.filter((item) =>
          item.item.toLowerCase().includes(searchItems.toLowerCase())
        )}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <AddItems
        addItems={addItems}
        setAddItems={setAddItems}
        handleSubmit={handleSubmit}
      />
      <SearchItems searchItems={searchItems} setSearchItems={setSearchItems} />
    </div>
  );
}

export default App;
