import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg text-center font-semibold text-lg mb-4">
        Todos
      </div>
      <ul className="divide-y divide-gray-300">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`py-4 flex m-2 h-7 justify-between items-center ${
              todo.isCompleted ? "bg-gradient-to-r from-purple-500 to-pink-500 rounded" : ""
            }`}
          >
            <button
              onClick={() => handleToggleTodo(todo.id)}
              className={`w-5 h-5 flex justify-center items-center  m-2 rounded-full border-2 border-gray-400 focus:outline-none ${
                todo.isCompleted ? "bg-gradient-to-r from-green-400 to-green-500" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-4 h-4 m-2 text-black ${todo.isCompleted ? "block" : "hidden"}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <div
              className={`${todo.isCompleted ? "line-through" : ""} text-gray-800 flex-1 ml-4`}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 focus:outline-none hover:text-red-700 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
