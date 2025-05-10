import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';


const App = () => {
  const [contry, setContry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [selectcountry, setSelectContry] = useState([""]);
  const [selectstate, setSelectState] = useState([""]);
  const [selectcity, setSelectCity] = useState([""]);

  useEffect(()=>{
    axios.get("https://crio-location-selector.onrender.com/countries")
    .then((response)=>{setContry(response.data);
    }).catch((error)=>{console.error("Error fetching contry", error);
    })
  },[]);

  useEffect(()=>{
    if(selectcountry)
      {
        axios.get(`https://crio-location-selector.onrender.com/country=${selectcountry}/states`)
        .then((response)=>{
          setState(response.data);
          setCity([]);
          setSelectState([""]);
          setSelectCity([""]);
        }).catch((error)=>{console.error("Error fetching state");
          })
    }
  },[selectcountry]);

  useEffect(()=>{
    if(selectcountry && selectcity){
      axios.get(`https://crio-location-selector.onrender.com/country=${selectcountry}/state=${selectstate}/cities`).then((response)=>{
        setCity(response.data);
        setSelectCity([""]);
      }).catch((error)=>{
        console.log("Error fetching city", error);
      })
    }
  },[selectcountry, selectstate]);
  return (
    <div className="titlename">
      <h1>Select Location</h1>
      <div className="selects">
        <select
        value={selectcountry}
        onChange={(e)=>{setSelectContry(e.target.value)}}
        className='select'
        >
          <option value="" disabled>Select Contry</option>
          {contry.map((contrys)=>(
            <option value={contrys} key={contrys}>
              {contrys}
            </option>
          ))}
        </select>
        <select
        value={selectstate}
        onChange={(e)=>{setSelectState(e.target.value)}}
        disabled={!selectcountry}
        className='select'
        >
          <option value="" disabled>
            Select State
          </option>
          {state.map((states)=>(
            <option value={states} key={states}>
              {states}
            </option>
          ))}
              </select>
        <select 
          value={selectcity}
          onChange={(e)=>{setSelectCity(e.target.value)}}
          disabled={!selectstate}
          className='select'
        >
          <option value="" disabled>Seleted Citys</option>
          {city.map((citys)=>(
              <option value={citys} key={{citys}}>
                {citys}
              </option>
          ))}
        </select>
      </div>
      {selectcity  && (
          <h1 className='showncountry'>You Selected{" "}
            <span className='shownstate1'>{selectcity}</span>,
            <span className='shownstate'>
               {" "}
               {selectstate},{selectcountry}
            </span>
          </h1>
        )}
    </div>
  )
}

export default App