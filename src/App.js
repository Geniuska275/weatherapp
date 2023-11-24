import React,{useState} from 'react';
import './App.css';
import { fetchWeather } from './fetchweather';
import img from "./logo192.png"
// asking for notification permission
if("Notification" in window){
    askForNotificationPermission()
}
function askForNotificationPermission(){
 Notification.requestPermission((result)=>{
  console.log("choice",result)
  if(result!=="granted"){
    console.log("No Notification permission granted")
  }else{
    displayConfirmNotification()
  }
 })
}

function displayConfirmNotification(){
  if("serviceWorker" in navigator){
    navigator.serviceWorker.ready.then((swReg)=>{
      swReg.showNotification("successfully subscribed(SW)",options)
    })
  }
  const options={
    body:"you got a new order from kingsley",
    icon:"./logo192.png",
    
    
  }
  new Notification("successfully subscribed",options)
  console.log("new notification")
}

function App() {
  const[query,setQuery]=useState("")
  const [weather,setWeather]=useState("")
  const[fahr,setFarh]=useState("")
  const [location,setLocation]=useState({})
  const[condition,setCondition]=useState({})
  const search=async(e)=>{
      const {current,location}=await fetchWeather(query)
      console.log(current.temp_c)
      console.log(location)
      setLocation(location)
      setFarh(current.temp_f)
      setCondition(current.condition)
      setWeather(current.temp_c)
      setQuery("")
  }
  return (
    <div className="main-container">
      <h1 style={{fontWeight:"bolder",color:"#ff8c00"}}>WEATHER APP.</h1>
      <input
      type='text' 
      className='search'
      value={query}
      onChange={(e)=>setQuery(e.target.value)} 
      placeholder='search city...'
      
      />
      <button onClick={search} className='button'>Search {query}</button>
      {
        weather ?
          <div className='city'>
            <h2 className='city-name'>
            <span>{location.name}</span>
              <sup>{location.country}</sup>
              </h2>
              <div className='city-temp'>
                {weather}
                <sup>&deg;C</sup>

              </div>
              <div className='city-temp'>
                {fahr}
                <sup>&deg;F</sup>
              </div>
              <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <h3>{condition.text}
                </h3>
                <img src={condition.icon} />
              </div>
               <h3 style={{color:"#ff8c00",fontWeight:"bold"}}>{location.localtime}</h3>
          </div>
        :""
      }          
    
    </div>
  );
}

export default App;
