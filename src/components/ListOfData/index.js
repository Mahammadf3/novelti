import React from "react";
import { db } from "../../config/firebase.js";
import { useState } from "react";

import { counterActions } from "../../store/index.js";

import { deleteDoc, doc, updateDoc } from "firebase/firestore";

import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/index.js";

import "./index.css";

const ListOfData = () => {
  const [updateFirstName, setFirstName] = useState("");
  const[updateLastName,setLastName]=useState("")
  const[activeEdit,setEdit]=useState(true)
  const[isActiveEditLastName,setEditLastName]=useState(true)

  const dispatch = useDispatch();
  const listDataForm = useSelector((state) => state.counter.list);

  const deleteData = async (id) => {
    const formdoc = doc(db, "collection", id);
    await deleteDoc(formdoc);
    dispatch(counterActions.decrement({ id: id }));
  };

  const updateFirstNameInFirebase = async (id) => {
    const formdoc1 = doc(db, "collection", id);
    await updateDoc(formdoc1, { firstName: updateFirstName });
  
    dispatch(counterActions.updateFirstName2({ id: id, newFirstName: updateFirstName }));
    setFirstName(""); 
    setEdit((prevName) => !prevName);
  };

  const updateLastNameInFirebase = async (id) => {
    const formdoc1 = doc(db, "collection", id);
    if (updateLastName.length >= 5) {
      await updateDoc(formdoc1, { lastName: updateLastName });
      dispatch(counterActions.updateLastName2({ id: id, newLastName: updateLastName }));
      setLastName(""); 
    }
    setEditLastName((prevName) => !prevName);
  };
  

  return (
    <div className="listContainer">
      <Header />
      <h3 className="listHeading">List of all users</h3>
      <div className="subListContainer">
        {listDataForm.length > 0 ? (
          listDataForm.map((eachItem) => (
            <div key={eachItem.id} className="detailsContainer">
              <div className="classButton">
                <button type="button" className="deleteButton" onClick={() => deleteData(eachItem.id)}>
                  Delete
                </button>
              </div>
         <div className={!activeEdit ?"editName":"firstNameContainerEdit"}>
                <p className="prefixName">FirstName: {eachItem.firstName} </p>
                <div className="alignEditButton">
                {!activeEdit &&

                <input type="text" value={updateFirstName} className="textContainer2" onChange={(e) => setFirstName(e.target.value)} />}
                {!activeEdit?
                <button type="button" className="editButton" onClick={() => updateFirstNameInFirebase(eachItem.id)}>
                   save
                </button>: <button type="button" className="editButton" onClick={() => updateFirstNameInFirebase(eachItem.id)}>
                   Edit
                </button>}
                </div> 
              </div>
              <div className={!isActiveEditLastName ?"editName2":"firstNameContainerEdit2"}>
                <p className="prefixName">LastName: {eachItem.lastName}</p>
                <div className="alignEditButton">
                  {!isActiveEditLastName && 
                <input type="text" value={updateLastName}  className="textContainer2" onChange={(e) => setLastName(e.target.value)} />}
                  {!isActiveEditLastName ?
                  <button type="button" className="editButton" onClick={() => updateLastNameInFirebase(eachItem.id)}>
                  save
                </button>:
                <button type="button" className="editButton" onClick={() => updateLastNameInFirebase(eachItem.id)}>
                  Edit
                </button>}
                </div>
              </div>
             
           <p className="prefixName">Email: {eachItem.Email}</p>
           <p className="prefixName">phoneNumber: {eachItem.phoneNumber}</p>
           <p className="prefixName">state: {eachItem.state}</p>
           <p className="prefixName">country: {eachItem.country}</p>
           <p className="prefixName">city : {eachItem.city}</p>
           <p className="prefixName">Address : {eachItem.addressOne}</p>
           <p className="prefixName">zipCode: {eachItem.zipCode}</p>
       
            </div>
          ))
        ) : (
          <div className="notFoundContainer">
          <p className="notFoundPassage">No data is Found (Go to home section and visit listOfUsers again)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListOfData;
