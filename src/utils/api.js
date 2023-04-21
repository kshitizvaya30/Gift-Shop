import axios from "axios";


export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_SERVER_URL+url);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
