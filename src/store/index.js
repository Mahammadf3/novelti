
import {createSlice,configureStore} from "@reduxjs/toolkit"

const initialState = {
  list:[],

};

const createSliceData = createSlice({
  name: "formData",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      const newData = action.payload;
      const existingItem=state.list.find(item=>item.id===newData.id || item.Email===newData.Email);
      if(!existingItem){

   
      state.list = [...state.list, newData];
      } 
    },  
    decrement(state, action) {
      const data2 = action.payload;
      const updatedList = state.list.filter((item) => item.id !== data2.id);
      state.list = updatedList;
    },
    updateFirstName2(state, action) {
      const { id, newFirstName } = action.payload;
      const updatedList = state.list.map((item) =>
        item.id === id ? { ...item, firstName: newFirstName } : item
      );
      state.list = updatedList;
    },
    updateLastName2(state, action) {
      const { id, newLastName } = action.payload;
      const updatedList = state.list.map((item) =>
        item.id === id ? { ...item, lastName: newLastName } : item
      );
      state.list = updatedList;
    },
  },
});


 

const store = configureStore({
  reducer:{counter:createSliceData.reducer}
});

export const counterActions=createSliceData.actions;

export default store;