import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isCompleted: false // Initialize the isCompleted property as false
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted; // Toggle the completion status
            }
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        }
    }
});

export const { addTodo, removeTodo, toggleTodo, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
