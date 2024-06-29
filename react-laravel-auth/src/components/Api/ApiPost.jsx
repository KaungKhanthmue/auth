import axios from "axios";
import { useState } from "react";

const useApiPost = (url) => {
  const [dataform, setDataForm] = useState(null); 
  const [error, setError] = useState(null);

  const fetchData = async (form) => {
    try {
      const response = await axios.post(url, form);
      setDataForm(response.data); 
    } catch (error) {
      setError(error.response ? error.response.data : "An error occurred");
      console.error('API Error:', error); 
    }
  };

  return {
    fetchData,
    dataform,
    error,
  };
};

export default useApiPost;
