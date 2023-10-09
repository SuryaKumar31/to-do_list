import React from "react";
import "./AddItems.css";
import { FaCirclePlus } from "react-icons/fa6";
import { useRef } from "react";
const AddItems = ({ addItems, setAddItems, handleSubmit }) => {
  const reference = useRef();
  return (
    <div className="addItems">
      <form className="addItems--form" onSubmit={handleSubmit}>
        <input
          className="addItems--input b-o-p"
          type="text"
          placeholder="Create a task"
          value={addItems}
          onChange={(e) => setAddItems(e.target.value)}
          ref={reference}
          required
          autoFocus
        />
        <button
          className="addItems--button b-o-p"
          onClick={() => reference.current.focus()}
        >
          <FaCirclePlus />
        </button>
      </form>
    </div>
  );
};

export default AddItems;
