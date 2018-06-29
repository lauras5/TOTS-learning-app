import axios from "axios";

export default {
    // testing front/back end connection
    testpost : function() {
        return axios.post("/api", {headers: {"Access-Control-Allow-Origin": "*"}}, {name : 'name'})
        .then(function(response) {
            console.log('working')
        })
    },
    testget : function() {
        return axios.get("/api", {headers: {"Access-Control-Allow-Origin": "*"}})
        .then(function(response) {
            console.log(response.data)
        })
        
    },
    
    // number game axios requests
    getNumberGame: function() {
        return axios.get("/api/numbergame");
<<<<<<< HEAD
    },

    // user axios requests
    postUsers : function(userData) {
        return axios.post("/api/users", userData)
    },
    getUsers : function(userData) {
        return axios.get("/api/users", userData)
=======
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2
    }
;