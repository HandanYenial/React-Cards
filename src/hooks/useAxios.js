import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



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
