import axios from "axios";

 
export const getSummary = async (url)=>{
    try{

        const apiEndPoint =  process.env.REACT_APP_BASE_URL||'https://gokul2cid-sumarfastapi.hf.space/summary/';
        const requestBody = {
            url:url
        }
    
        const response = await axios.post(apiEndPoint, requestBody,{
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
            },
        })
         // Log the response from the API
        return response.data.message.slice(8);
    }
    catch (error) {
      // Handle errors
      console.error('Error fetching the summary:', error.response ? error.response.data : error.message);
    }
  
}
