import axios from "axios";
const URL=`http://api.weatherapi.com/v1/current.json?key=c75857fe51bd496f8ce125756231311
`;
 export const fetchWeather=async(query)=>{
    const {data}=await axios.get(URL,{
        params:{
            q:query,       
        }
    })
    return data
}

