// import { createContext,useContext } from "react";


// export const TodoContext = createContext({
// //properties
//     Todos:[
//     {   id:1,
//         todo:'todo Msg',
//         completed:false,
//     },{},
//  ],
//  // functionalities : write only names not definitions
//  addTodo :() =>{ },
//  updateTodo: (id,todo) => {},
//  deleteTodo: (id) => {},
//  toggleComplete:(id) => {}



// })
// //context not used for big project we used redux,zustend(state management library)
// export const useTodo = () => {
//     return useContext(TodoContext)

// }

// export const TodoProvider = TodoContext.Provider



import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider