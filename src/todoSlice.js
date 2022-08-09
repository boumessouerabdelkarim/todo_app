import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  todoList: [
    { id: 1, description: "Faire les courses", done: false },
    { id: 2, description: "Ménage !", done: true },
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state,action) => {
     state.todoList.push(action.payload);
     console.log(state)
    },
    editTask: (state,action) => {
      
      state.todoList=state.todoList.map(el=>(el.id === action.payload.id) ? action.payload : el)
    },
    deleteTask:(state,action)=>{
      state.todoList=state.todoList.filter(t=>t.id!==action.payload )
        
    
  },
}})

// Action creators are generated for each case reducer function
export const { addTask,editTask,deleteTask } = todoSlice.actions

export default todoSlice.reducer