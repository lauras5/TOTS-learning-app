import axios from "axios";

export default {
    getNumberGame: function() {
        return axios.get("/api/numbergame");
    },

    // user axios requests
    postUsers : function(userData) {
        return axios.post("/api/users", userData)
    },
    getUsers : function() {
        return axios.get("/api/users")
    }
};