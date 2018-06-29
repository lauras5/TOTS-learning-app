import axios from "axios";

export default {
    // number game axios requests
    getNumberGame: function() {
        return axios.get("/api/numbergame");
    },
    // user axios requests
    postUsers : function(userData) {
        return axios.post("/api/users", userData)
        .then(function(response) {
            console.log('response is working')
        })
        .catch(function(err) {
            console.log(err)
        })
    },
    getUsers : function(userData) {
        return axios.get("/api/users")
    },
    authenticate : function(username) {
        return axios.get("/api/users/")

        console.log('succesfully hit API')
    }
};