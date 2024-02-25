import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { // is mai wo sab states hon gi jo website mai use honi hon gi 
    todo: [
        {
            id: 1,
            text: "hello"
        }
    ],
    count: 0
}

export const toDoSlice = createSlice(
    {
        // all these properties are by default
        name: "ToDo",

        // initial state of state defined below
        initialState,

        // reducers are functions  that take the current (state) and an action
        reducers: {
            addToDo: (state, action) => {
                // this state includes the current state
                // action includes the data that is being sent from the component e.g addToDo("some Text") etc.

                const todo = {
                    id: nanoid(), // this  will generate a random unique ID for each item of todos.
                    text: action.payload
                }
                state.todo.push(todo) //this will update the current state with the data

                state.count = state.count + 1
            },

            // lets create a new function
            removeToDo: (state, action) => {
                const NewToDo = state.todo.filter((todo) => {
                   return todo.id !== action.payload
                })

                // const NewToDo = state.todo.filter((todo) => todo.id !== action.payload)

                state.todo = NewToDo
                console.log(NewToDo);
                state.count = state.count + 1

            }
        }
    }
)

export const { addToDo, removeToDo } = toDoSlice.actions

export default toDoSlice.reducer