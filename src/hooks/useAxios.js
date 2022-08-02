import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function useAxios(keyInLS, baseUrl) {
    const [responses, setResponses] = useLocalStorage(keyInLS);
  
    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
      const response = await axios.get(`${baseUrl}${restOfUrl}`);
      setResponses(data => [...data, formatter(response.data)]);
    };
  
    const clearResponses = () => setResponses([]);
  
    return [responses, addResponseData, clearResponses];
  }
  
  function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }
  
  export default useLocalStorage;
  
  export { useAxios, useLocalStorage };
  

/**const useAxios = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(
            "https://deckofcardsapi.com/api/deck/new/draw/"
            );
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        };
        fetchData();
    }, []);
    
    return [data, loading, error];
    }

    export { useAxios };
*/
