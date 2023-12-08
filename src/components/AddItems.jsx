import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useRef } from "react";
const AddItems = ({ addItems, setAddItems, handleSubmit }) => {
  const reference = useRef();
  return (
    <div className="flex justify-center items-center my-2">
      <form onSubmit={handleSubmit}>
        <input
          className="p-3 rounded-tl rounded-bl w-56 md:w-96 border-none outline-none text-black"
          type="text"
          placeholder="Create a task"
          value={addItems}
          onChange={(e) => setAddItems(e.target.value)}
          ref={reference}
          required
          autoFocus
        />
        <button
          className="bg-lime-600 pad rounded-tr rounded-br"
          onClick={() => reference.current.focus()}
        >
          <FaCirclePlus className="text-center" />
        </button>
      </form>
    </div>
  );
};

export default AddItems;
