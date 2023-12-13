import { useState,useEffect } from "react"

import { db } from "../../config/firebase"

import {collection,getDocs,addDoc } from "firebase/firestore"

import { useDispatch } from "react-redux"

import {counterActions} from "../../store"


import Header from "../Header"
import PhoneNumber from "../PhoneNumber"
import County from "../CountyAddress"
import ZipCodeInput from "../ZipCod"
import "./index.css"
const Home=()=>{

    const dispatch=useDispatch()

    const collectionData=collection(db,"collection")

    const[firstName,setFirstName]=useState("")
    const[lastName,setlastName]=useState("")
    const[emailData,setEmail]=useState("")
    const[address,setAddress]=useState("")
    const[optionalAddress,setOptionalAddress]=useState("")
    const[country2,setCountry]=useState("")
    const[state,setState]=useState("")
    const[city,setCity]=useState("")
    const[phoneNumber2,setPhoneNumber2]=useState("")
    const[zipData,setZip]=useState("")
    const[cityBool,setCity2]=useState(false)
    const[stateBool,setState2]=useState(false)
    const[country3,setCountry3]=useState(false)
    const[address1,setAddress1]=useState(false)
    const[emailData1,setEmail1]=useState(false)
    const[firstName1,setFirstName1]=useState(false)
    const[lastName1,setLastName1]=useState(false)


    
   

   

    useEffect(() => {
        let isMounted = true;  
      
        const getList = async () => {
          try {
            const data = await getDocs(collectionData);
      
          
            if (isMounted) {
              const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              
              filteredData.map((eachItem) =>
              dispatch(counterActions.increment(eachItem))
            );
            
            }
          } catch (err) {
            console.log(err);
          }
        };
      
        getList();
     
        return () => {
          isMounted = false;
        };
      }, [collectionData, dispatch]);
     


    const onFirstName=(event)=>{
        setFirstName(event.target.value) 
    }

    const submitForm=async(event)=>{
        event.preventDefault()
        setFirstName1(firstName.length < 5);
        setLastName1(lastName.length < 5);
        setEmail1(!emailData.includes("@"));
        setAddress1(address.length < 5);
        setCity2(city.length<3);
        setState2(state.length<2);
        setCountry3(country2.length<3);
        if(country2.length >= 3 && address.length >=3 && emailData.includes("@")  && firstName.length >= 5 &&
            lastName.length >= 5  &&  city.length >=3 && state.length >=2 ){
            try{
      await addDoc(collectionData,{
        Email:emailData,
        addressOne: address,
        addressTwo: optionalAddress,
        city: city,
        country: country2,
        firstName:firstName, 
        lastName: lastName,
        phoneNumber:phoneNumber2, 
        state: state,
        zipCode:zipData
        }) ;
        setFirstName("");
        setlastName("");
        setEmail("");
        setAddress("");
        setOptionalAddress("")
    }catch(err){
        console.log(err)
    }

    }

    }

    const onSecondName=(event)=>{
        setlastName(event.target.value)
     
    }

    const onEmail=(event)=>{
        setEmail(event.target.value)
    }

    const activeAddress=(event)=>{
        setAddress(event.target.value)
    }

    const activeOptionalAddress=(event)=>{
        setOptionalAddress(event.target.value)
    }

    const activeCounty=(dat)=>{
        setCountry(dat)
     
    }
    const activeState=(state)=>{
        setState(state)
       
    }

    const activeCity=(city)=>{
        setCity(city)
    }

    const activePhoneNumber=(phone)=>{
        setPhoneNumber2(phone)
    }

    const activeZip=(zip)=>{
        setZip(zip)
    }


    return(
        <div className="homeContainer">
            <Header/>
            <div className="formContainer">
            <h1>Enter Your Details</h1>
            <form  onSubmit={submitForm} className="submitFormContainer">
            <p >FirstName (required)</p>
            <input type="text"  value={firstName} placeholder="FirstName" className="textContainer" onChange={onFirstName}/>
            {firstName1 && <p className="firstNameContainer">* Required atleast 5 Charectors</p>}
            <p  className="lastNameContainer">LastName (required)</p>
            <input type="text" value={lastName} placeholder="LastName" className="textContainer" onChange={onSecondName}/>
            {lastName1 && <p className="firstNameContainer">* Required atleast 5 charectors</p>}
            <p className="lastNameContainer">Email-id (required)</p>
            <input type="email"value={emailData} id="EmailId" placeholder="Email-Id" className="textContainer" onChange={onEmail}/>
            {emailData1 && <p className="firstNameContainer">* It required @ symol</p>}
            
            <p className="lastNameContainer">Address Line-1 (required)</p>
            <input type="textarea" value={address} placeholder="place your village and streat" className="textContainer AddressContainer" onChange={activeAddress}/>
            {address1 && <p className="firstNameContainer">* Address is Required</p>}
            <p className="lastNameContainer">Address Line-2 (optional)</p>
            <input type="textarea" value={optionalAddress}  placeholder="Add Your address " className="textContainer AddressContainer" onChange={activeOptionalAddress}/>
     
                <County activeCounty={activeCounty} activeState={activeState} activeCity={activeCity}/>
              
                {country3 && cityBool && stateBool && <p className="firstNameContainer">* country,state,city are required</p>}
                {!cityBool && country3 &&!stateBool &&  <p className="firstNameContainer">* country is required</p>}
                {stateBool && !country3 && !cityBool && <p className="firstNameContainer">* state is required</p>}
                {cityBool && !country3 && !stateBool && <p className="firstNameContainer">* city is required</p>}
                {country3 && cityBool && !stateBool && <p className="firstNameContainer">* country,city are required</p>}
                {!country3 && cityBool && stateBool && <p className="firstNameContainer">* State,city are required</p>}
                {country3 && !cityBool && stateBool && <p className="firstNameContainer">* country,State are required</p>}

           

                <PhoneNumber activePhoneNumber={activePhoneNumber}/>


                <ZipCodeInput activeZip={activeZip}/>
           
                <button type="submit" className="submitButton">Submit</button>
            </form>

            </div>
        </div>
    )
}

export default Home