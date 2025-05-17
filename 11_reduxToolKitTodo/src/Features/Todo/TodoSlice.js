import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id: 1, text: ""}]
}


export const todoSlice = createSlice({
    name:"todo",           // This should be there coz when you will be using the rdk dev tool you will see that name
    initialState,          // You can define its values directly here as well rather than outside above
    reducers: {           // Here reducer has properties and functions
        addTodo : (state, action) => {    // You always got a state and action and always have an access
            const todo = {
                id: nanoid(),
                text: action.payload  // Payload is itself an object
            }
            state.todos.push(todo)

        },  
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }          
}) 

// You have to export 2 parts of it this is the part of the syntax

export const {addTodo,removeTodo} = todoSlice.actions    // You have to export each individual reducers

export default todoSlice.reducer   // you have to export each and evrytime the the whole slice reducers