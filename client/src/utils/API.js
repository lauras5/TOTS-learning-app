import axios from "axios";

export default {
    getNumberGame: function() {
        return axios.get("/api/numbergame");
    }
};