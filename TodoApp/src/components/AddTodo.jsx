import React, { useState } from "react";
import { addTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent adding empty todos
    dispatch(addTodo(input.trim()));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="relative w-full max-w-md mx-auto mt-8 flex items-center">
      <div className="relative flex-1">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-3 leading-tight focus:outline-none"
          placeholder=" "
        />
        <label
          className={`absolute left-0 top-0 text-gray-500 transform ${
            isFocused || input ? "text-xs -translate-y-2" : ""
          } transition-all duration-300 pointer-events-none`}
        >
          Add a new todo...
        </label>
        <div
          className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ${
            isFocused ? "transform scale-x-100" : "transform scale-x-0"
          } transition-transform duration-300`}
        />
      </div>
      <button
        type="submit"
        className="ml-4 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-700 hover:to-indigo-900 text-white font-semibold py-2 px-3 rounded-md focus:outline-none transition-all duration-300 transform hover:scale-105 flex items-center"
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
