import axios from "axios";
const apiKey="c75857fe51bd496f8ce125756231311"
const URL=`https://api.weatherapi.com/v1/current.json?key=c75857fe51bd496f8ce125756231311
`;
 export const fetchWeather=async(query)=>{
   
    const {data}=await axios.get(URL,{
        params:{
            q:query,       
        },
        headers:{     
            "Content-Type": "application/json",
        }
    })
    return data
}

