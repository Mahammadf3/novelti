import React, { useState } from "react";
import "./index.css";

const countries = [
  {
    name: "India",
    states: [
      {
        name: "Andhra Pradesh",
        cities: ["Vijayavada","Visakapatnam","Nellore","Kadapa","Tirupathi"],
      },
      {
        name: "Telangana",
        cities: ["suryapet","Kothagudem","Hyderabad","Sircilla","shamshabad"],
      },
      {
        name: "Karnataka",
        cities: ["Bengaluru","vijayapura","udupi","tumakuru","Shivamogga"],
      },
      {
        name: "Maharastra",
        cities: ["Mumbai","pune","nagpur","achalpur","Nashik"],
      },
      {
        name: "Goa",
        cities: ["panaji","Mapusa","mormugao","canacona","ponda"],
      },
      {
        name: "chattisgarh",
        cities: ["Bolada","Mungeli"],
      },
      {
        name: "punjab",
        cities: ["Amritsar","Bathinda","Moga","Batala","patiala"],
      },
      {
        name: "Arunachal Pradesh",
        cities: ["Tezu","Roing"],
      },
      {
        name: "Assam",
        cities: ["Tezpur","chorhat"],
      },
      {
        name: "TamilNadu",
        cities: ["chennai","Madurai","salem","coimbatore","Tirunelveli"],
      },
    ],
  },
  {
    name: "Austrelia",
    states: [
      {
        name: "Queensland",
        cities: ["Brisbane", "cairns"],
      },
      {
        name: "Tasmania",
        cities: ["Hobart","Devonport"],
      },
      {
        name: "Victoria",
        cities: ["Melbourn","Geelong"],
      },
    ],
  },
  {
    name: "U.s",
    states: [
      {
        name: "california",
        cities: ["Los Angeles","San Francico","sacramento"],
      },
      {
        name: "Texas",
        cities: ["Houston", "Austin"],
      },
      {
        name: "Florida",
        cities: ["Miami", "Tampa"],
      },
    ],
  },
  {
    name: "New Zealand",
    states: [
      {
        name: "Queensland",
        cities: ["Brisbane", "cairns"],
      },
      {
        name: "Tasmania",
        cities: ["Hobart","Devonport"],
      },
      {
        name: "Victoria",
        cities: ["Melbourn","Geelong"],
      },
    ],
  },
  {
    name: "japan",
    states: [
      {
        name: "Queens",
        cities: ["Brisbane", "cairns"],
      },
      {
        name: "Tasmania",
        cities: ["Hobart","Devonport"],
      },
      {
        name: "Victoria",
        cities: ["Melbourn","Geelong"],
      },
    ],
  },
  {
    name: "Brazil",
    states: [
      {
        name: "Brasili",
        cities: ["Brisbane", "cairns"],
      },
      {
        name: "Tasmania",
        cities: ["Hobart","Devonport"],
      },
      {
        name: "paulo",
        cities: ["Melbourn","Geelong"],
      },
    ],
  },
  {
    name: "spain",
    states: [
      {
        name: "Brasili",
        cities: ["Brisbane", "cairns"],
      },
      {
        name: "Tasmania",
        cities: ["Hobart","Devonport"],
      },
      {
        name: "Victoria",
        cities: ["Melbourn","Geelong"],
      },
    ],
  },
  {
    name: "Turkey",
    states: [
      {
        name: "Brasili",
        cities: ["Brisbane", "cairns"],
      },
      {
        name: "Tasmania",
        cities: ["Hobart","Devonport"],
      },
      {
        name: "Victoria",
        cities: ["Melbourn","Geelong"],
      },
    ],
  },
  {
    name: "sweden",
    states: [
      {
        name: "Brasili",
        cities: ["Brisbane", "cairns"],
      },
      {
        name: "Tasmania",
        cities: ["Hobart","Devonport"],
      },
      {
        name: "Victoria",
        cities: ["Melbourn","Geelong"],
      },
    ],
  },
  {
    name: "singapore",
    states: [
      {
        name: "Brasili",
        cities: ["Brisbane", "cairns"],
      },
      {
        name: "Tasmania",
        cities: ["Hobart","Devonport"],
      },
      {
        name: "Victoria",
        cities: ["Melbourn","Geelong"],
      },
    ],
  }

];

const County = (props) => {
  const{activeCounty,activeState,activeCity}=props
  const [country, setCountry] = useState("--country--");
  const [state, setState] = useState("--state--");
  const [city, setCity] = useState("--city--");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const changeCountry = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
   
    const selectedCountryStates = countries.find((ctr) => ctr.name === selectedCountry).states;
    setStates(selectedCountryStates);
    activeCounty(selectedCountry);
  };

  const changeStates = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    const selectedStateCities = states.find((sts) => sts.name === selectedState).cities;
    setCities(selectedStateCities);
    activeState(selectedState)
  };

  const changeCity = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    activeCity(selectedCity)
  };

  return (
    <div className="countryContainer">
      <h3>Select Country,state and cities</h3>
      <select value={country} onChange={changeCountry} className="selectContainer">
      <option disabled value="--country--">Select country</option>
        {countries.map((ctr) => (
          <option key={ctr.name} value={ctr.name}>
            {ctr.name}
          </option>
        ))}
      </select>
      <br />
      <select value={state} onChange={changeStates} className="selectContainer"  >
      <option disabled value="--state--">Select state</option>
        {states.map((str) => (
          <option key={str.name} value={str.name}>
            {str.name}
          </option>
        ))}
      </select>
      <br />
      <select value={city} onChange={changeCity} className="selectContainer" >
  <option disabled value="--city--">Select City</option>
  {cities.map((cts) => (
    <option key={cts} value={cts}>
      {cts}
    </option>
  ))}
</select>
    </div>
  );
};

export default County;
