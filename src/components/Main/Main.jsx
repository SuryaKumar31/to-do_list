import React from "react";
import "./Main.css";
import { FaCircleMinus } from "react-icons/fa6";

const Main = ({ items, handleChange, handleDelete }) => {
  return (
    <main className="main">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />
              <label
                className="label--item"
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <FaCircleMinus
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="task-list">No tasks here yet</p>
      )}
    </main>
  );
};

export default Main;
