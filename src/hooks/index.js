import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify"; 

export const useFetchParties = () => {
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCandidates = async () => {
            try {
                const response = await axios.get('https://onevote-backend.onrender.com/voter/getList');
                setCandidates(response.data || []);
                console.log(candidates)
                setLoading(false);
            } catch (error) {
                toast.error("Error fetching candidates");
                console.error("Fetch error:", error);
                setLoading(false); 
            }
        };
        getCandidates();
    }, []);

    return { candidates, loading} ;
};
