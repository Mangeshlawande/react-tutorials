// naming conventions
// 2 method 
import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial state: arr, obj

const initialState = {
    todos:[
        { id:1, text:"Hello World !!"},
    ]
}
// slice big version of reducers (functionality)
//inbuilt props imp to take

//need to write definition instead of declaration 
// have access of state(var add val) and action(fun get value from )
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id:nanoid(), 
                text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id!==action.payload)
        },
        // updateTodo : (state,action) => {
        //     state.todos = state.todos.map((todo) =>(todo.id === action.payload ? todo.text=action.todo[text]: todo ) )
        // },
        
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer