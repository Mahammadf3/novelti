
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
    updateEmail(state, action) {
      const { id, newMail } = action.payload;
      const updatedList = state.list.map((item) =>
        item.id === id ? { ...item, Email: newMail } : item
      );
      state.list = updatedList;
    },
    updatePhone9(state, action) {
      const { id, newPhone } = action.payload;
      const updatedList = state.list.map((item) =>
        item.id === id ? { ...item, phoneNumber: newPhone } : item
      );
      state.list = updatedList;
    },
    updateAddress(state, action) {
      const { id, newAddress } = action.payload;
      const updatedList = state.list.map((item) =>
        item.id === id ? { ...item, addressOne:newAddress } : item
      );
      state.list = updatedList;
    },

    updateCountry(state, action) {
      const { id, newCountry } = action.payload;
      const updatedList = state.list.map((item) =>
        item.id === id ? { ...item, country:newCountry } : item
      );
      state.list = updatedList;
    },
    updateState(state, action) {
      const { id, newState } = action.payload;
      const updatedList = state.list.map((item) =>
        item.id === id ? { ...item, state:newState } : item
      );
      state.list = updatedList;
    },
    updateCity(state, action) {
      const { id, newCity } = action.payload;
      const updatedList = state.list.map((item) =>
        item.id === id ? { ...item, city:newCity } : item
      );
      state.list = updatedList;
    },
    updateZip(state, action) {
      const { id, newZip} = action.payload;
      const updatedList = state.list.map((item) =>
        item.id === id ? { ...item, zipCode:newZip } : item
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