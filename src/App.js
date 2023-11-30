import React,{useState} from 'react';
import './App.css';
import { fetchWeather } from './fetchweather';
import img from "./logo192.png"
import Accordion from './Accordion';
import Accordions from './Accordion';
// asking for notification permission
if("Notification" in window){
    askForNotificationPermission()
}


function configurePushSub(){

  if(!("serviceWorker" in navigator)){
    return;
  }
  var reg;
  navigator.serviceWorker.ready.then(function(swReg){
    reg=swReg
    return swReg.pushManager.getSubscription()
  }).then(function(sub){
    if(sub===null){
      // create a new sub
      var vapid_public_key="BFBA8_0CpjKaBButPuM600J-Dysu32CsoKHVQknh6JLxVwgLTCP2dm3oCvvYvzfRT0PVhyKwhvkKjw3CZXPeuT0"
      var convertedvapidkey=urlBase64ToUint8Array(vapid_public_key)
      reg.pushManager.subscibe({
        userVisibleOnly:true,
        applicationServerKey:convertedvapidkey
      })

    }else{

    }
  }).then((newsub)=>{


  })
}
function urlBase64ToUint8Array(base64String){
  var padding="=".repeat((4-base64String.length % 4)%4)
  console.log(padding)
  var base64=(base64String + padding).replace("/g", "+").replace("/_/g","/")
  var rawData=window.atob(base64)
  var outputArray=new Uint8Array(rawData.length)
  for (var i=0; 1<rawData.length;i++){
    outputArray[i]=rawData.charCodeAt(i)
  }
  console.log(outputArray)
  return outputArray;
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
      swReg.showNotification("VISCIO ORDERS",options)
    })
  }
  const options={
    body:"you got a new order from kingsley",
    icon:"./logo192.png",
    image:"./logo192.png",
    dir:"ltr",
    lang:"en-Us",
    vibrate:[200,50,100],
    badge:"./logo192.png",
    tag:"confirm-notification",
    renotify:true,
    actions:[
      {action:"confirm",title:"confirm"},
      {action:"back",title:"okay"},
    ]
  }
 console.log("notification sent")
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
    <Accordions/>
  );
}

export default App;
