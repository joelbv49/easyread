const axios = require('axios');

const getSummary = async (url)=>{
    try{

        const apiEndPoint =  'https://gokul2cid-sumarfastapi.hf.space/summary/';
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
         console.log(response.data.message.slice(8));
    }
    catch (error) {
      // Handle errors
      console.error('Error fetching the summary:', error.response ? error.response.data : error.message);
    }
  
}

getSummary("https://indianexpress.com/");