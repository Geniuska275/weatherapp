import axios from "axios";
const lat=90
const lon=28
const API_KEY="38d349c3d11e6d48959c7ff0b109d380"
const URL=`http://api.weatherapi.com/v1/current.json?key=c75857fe51bd496f8ce125756231311
`;

 export const fetchWeather=async(query)=>{
    console.log(query)
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            
        }
    })
    console.log(data)

  
    return data
}

