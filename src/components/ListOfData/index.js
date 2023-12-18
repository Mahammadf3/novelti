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
  const[updateLastName,setLastName]=useState("");
  const[updateEmail,setUpdateEmail]=useState("");
  const[updatePhoneNumber,setPhoneNumber]=useState("");
const[updateAddress2,setAddressUpdate]=useState("")
const[updateCountry,setCountry]=useState("");
const[updateState,setState]=useState("")
const[useCity,setCity]=useState("")
const[useZipCode,setzipCode]=useState("")
const[isActiveZip,setActivezip]=useState(true)
const[isActveCity,setActiveCity]=useState(true)
const[upActiveState,setActiveState]=useState(true)
const[activeCountry,setActiveCountry]=useState(true);
const[isAddress,setActiveAddress]=useState(true)
  const[isActivePhone,setActivePhone]=useState(true)
  const[activeEdit,setEdit]=useState(true)
  const[isActiveEditLastName,setEditLastName]=useState(true)
  const[isActiveEmail,setEmailData]=useState(true)



  const dispatch = useDispatch();
  const listDataForm = useSelector((state) => state.counter.list);

  const deleteData = async (id) => {
    const formdoc = doc(db, "collection", id);
    await deleteDoc(formdoc);
    dispatch(counterActions.decrement({ id: id }));
  };

  const updateFirstNameInFirebase = async (id) => {
    const formdoc1 = doc(db, "collection", id);
    if (updateFirstName.length <=14 && updateFirstName.length >0) {
    await updateDoc(formdoc1, { firstName: updateFirstName });
  
    dispatch(counterActions.updateFirstName2({ id: id, newFirstName: updateFirstName }));
    setFirstName(""); 

    }
    setFirstName(""); 
    setEdit((prevName) => !prevName);

  
  };

  const updateLastNameInFirebase = async (id) => {
    const formdoc1 = doc(db, "collection", id);
    if (updateLastName.length <=14 && updateLastName.length >0 ) {
      await updateDoc(formdoc1, { lastName: updateLastName });
      dispatch(counterActions.updateLastName2({ id: id, newLastName: updateLastName }));
      setLastName(""); 
    }
    setLastName(""); 
    setEditLastName((prevName) => !prevName);
  };

  const updateEmailInFirebase=async(id)=>{
    const formdoc1 = doc(db, "collection", id);
    if (updateEmail.length <=25 && updateEmail.length >0 && updateEmail.includes("@")) {
    await updateDoc(formdoc1, { Email: updateEmail });
      dispatch(counterActions.updateEmail({ id: id, newMail:updateEmail}));
      setUpdateEmail("")
    }
    setUpdateEmail("")
      setEmailData(prevMail=>!prevMail)
    } 

    const updatePhoneData= async (id) => {
      const formdoc1 = doc(db, "collection", id);
      if (updatePhoneNumber.length <=14 && updatePhoneNumber.length>6) {
        await updateDoc(formdoc1, { phoneNumber:updatePhoneNumber  });
        dispatch(counterActions.updateLastName2({ id: id, newPhone: updatePhoneNumber }));
        setPhoneNumber("")
      }
      setPhoneNumber("")
      setActivePhone((prevName) => !prevName);
    };

    const updateAddressFirebase=async(id)=>{
      const formdoc1 = doc(db, "collection", id);
      if (updateAddress2.length <=20 && updateAddress2.length>=3) {
      await updateDoc(formdoc1, { addressOne:updateAddress2  });
        dispatch(counterActions.updateAddress({ id: id, newAddress:updateAddress2}));
        setAddressUpdate("")
      }
      setAddressUpdate("")
        setActiveAddress(prevStatus=>!prevStatus)
      } ;

      const updateCountryInFirebase=async(id)=>{
        const formdoc1 = doc(db, "collection", id);
        if (updateCountry.length <=12 && updateCountry.length >=3 ) {
        await updateDoc(formdoc1, {country:updateCountry  });
          dispatch(counterActions.updateCountry({ id: id, newCountry:updateCountry}));
          setCountry("")
        }
        setCountry("")
          setActiveCountry(prevStatus=>!prevStatus)
        } ;

        const updateStateInFirebase=async(id)=>{
          const formdoc1 = doc(db, "collection", id);
          if (updateState.length <=15 && updateState.length >=3 ) {
          await updateDoc(formdoc1, {state:updateState});
            dispatch(counterActions.updateState({ id: id, newState:updateState}));
            setState("")
          }
          setState("")
            setActiveState(prevStatus=>!prevStatus)
          } ;

          
        const updateCityInFirebase=async(id)=>{
          const formdoc1 = doc(db, "collection", id);
          if (useCity.length <=15 && useCity.length >=3 ) {
          await updateDoc(formdoc1, {state:useCity});
            dispatch(counterActions.updateCity({ id: id, newCity:useCity}));
            setCity("")
          }
          setCity("")
            setActiveCity(prevStatus=>!prevStatus)
          } ;

          const updateZipFirebase=async(id)=>{
            const formdoc1 = doc(db, "collection", id);
            if (useZipCode.length ===6 && useZipCode.length >0 ) {
            await updateDoc(formdoc1, {state:useZipCode});
              dispatch(counterActions.updateZip({ id: id, newZip:useZipCode}));
              setzipCode("")
            }
            setzipCode("")
              setActivezip(prevStatus=>!prevStatus)
            } ;


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

              <div className={!isActiveEmail ?"editName2":"firstNameContainerEdit2"}>
                <p className="prefixName">Email: {eachItem.Email}</p>
                <div className="alignEditButton">
                  {!isActiveEmail && 
                <input type="text" value={updateEmail}  className="textContainer2" onChange={(e) => setUpdateEmail(e.target.value)} />}
                  {!isActiveEmail ?
                  <button type="button" className="editButton" onClick={() => updateEmailInFirebase(eachItem.id)}>
                  save
                </button>:
                <button type="button" className="editButton" onClick={() => updateEmailInFirebase(eachItem.id)}>
                  Edit
                </button>}
                </div>
              </div>

              <div className={!isActivePhone ?"editName2":"firstNameContainerEdit2"}>
                <p className="prefixName">phoneNumber: {eachItem.phoneNumber}</p>
                <div className="alignEditButton">
                  {!isActivePhone && 
                <input type="text" value={updatePhoneNumber}  className="textContainer2" onChange={(e) => setPhoneNumber(e.target.value)} />}
                  {!isActivePhone ?
                  <button type="button" className="editButton" onClick={() => updatePhoneData(eachItem.id)}>
                  save
                </button>:
                <button type="button" className="editButton" onClick={() =>updatePhoneData(eachItem.id)}>
                  Edit
                </button>}
                </div>
              </div>

              <div className={!activeCountry ?"editName2":"firstNameContainerEdit2"}>
              <p className="prefixName">country: {eachItem.country?.slice(0, 25)}</p>
                <div className="alignEditButton">
                  {!activeCountry && 
                <input type="text" value={updateCountry}  className="textContainer2" onChange={(e) => setCountry(e.target.value)} />}
                  {!activeCountry ?
                  <button type="button" className="editButton" onClick={() => updateCountryInFirebase(eachItem.id)}>
                  save
                </button>:
                <button type="button" className="editButton" onClick={() => updateCountryInFirebase(eachItem.id)}>
                  Edit
                </button>}
                </div>
              </div>
  
              <div className={!upActiveState ?"editName2":"firstNameContainerEdit2"}>
            
                <p className="prefixName">state: {eachItem.state?.slice(0, 30)}</p>
                <div className="alignEditButton">
                  {!upActiveState && 
                <input type="text" value={updateState}  className="textContainer2" onChange={(e) => setState(e.target.value)} />}
                  {!upActiveState ?
                  <button type="button" className="editButton" onClick={() => updateStateInFirebase(eachItem.id)}>
                  save
                </button>:
                <button type="button" className="editButton" onClick={() => updateStateInFirebase(eachItem.id)}>
                  Edit
                </button>}
                </div>
              </div>

              <div className={!isActveCity ?"editName2":"firstNameContainerEdit2"}>
              <p className="prefixName">city : {eachItem.city?.slice(0,20)}</p>
            <div className="alignEditButton">
              {!isActveCity && 
            <input type="text" value={useCity}  className="textContainer2" onChange={(e) => setCity(e.target.value)} />}
              {!isActveCity?
              <button type="button" className="editButton" onClick={() => updateCityInFirebase(eachItem.id)}>
              save
            </button>:
            <button type="button" className="editButton" onClick={() => updateCityInFirebase(eachItem.id)}>
              Edit
            </button>}
            </div>
          </div>
        
          

           <div className={!isAddress ?"editName2":"firstNameContainerEdit2"}>
                <p className="prefixName">Address : {eachItem.addressOne?.slice(0, 30)}</p>
                <div className="alignEditButton">
                  {!isAddress && 
                <input type="text" value={updateAddress2}  className="textContainer2" onChange={(e) => setAddressUpdate(e.target.value)} />}
                  {!isAddress ?
                  <button type="button" className="editButton" onClick={() => updateAddressFirebase(eachItem.id)}>
                  save
                </button>:
                <button type="button" className="editButton" onClick={() => updateAddressFirebase(eachItem.id)}>
                  Edit
                </button>}
                </div>
              </div>

              <div className={!isActiveZip ?"editName2":"firstNameContainerEdit2"}>
              <p className="prefixName">zipCode: {eachItem.zipCode?.slice(0,6)}</p>
           
                <div className="alignEditButton">
                  {!isActiveZip && 
                <input type="text" value={useZipCode}  className="textContainer2" onChange={(e) => setzipCode(e.target.value)} />}
                  {!isActiveZip ?
                  <button type="button" className="editButton" onClick={() => updateZipFirebase(eachItem.id)}>
                  save
                </button>:
                <button type="button" className="editButton" onClick={() => updateZipFirebase(eachItem.id)}>
                  Edit
                </button>}
                </div>
              </div>
 
         
       
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
