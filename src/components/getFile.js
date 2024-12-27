import axios from "axios";

export const uploadPdf = async (file) => {
    try {
        const apiEndPoint = process.env.REACT_APP_BASE_FILE || 'https://gokul2cid-sumarfastapi.hf.space/upload-pdf/';

        // Create a FormData object to handle the file upload
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post(apiEndPoint, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'accept': 'application/json',
            },
        });

        // Log the response from the API
        return response.data.Summary; // Assuming the API returns extracted text in `text` field
    } catch (error) {
        // Handle errors
        console.error('Error uploading the PDF:', error.response ? error.response.data : error.message);
    }
};
