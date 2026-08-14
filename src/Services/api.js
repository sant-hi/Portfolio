import axios from "axios";

const BASE_URL = "https://portfolio-backend-422t.onrender.com/api";

export const sendContactMessage = async (data) => {
    return await axios.post(
        `${BASE_URL}/contact/`,
        data
    );
};