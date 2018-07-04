import axios from "axios";

export default {
    // number game axios requests
    getNumberGame: function () {
        return axios.get("/api/numbergame");
    },

    getCardGame: function () {
        return axios.get("/api/cardgame");
    },

    getColorGame: function () {
        return axios.get('/api/colorgame')
    },

    getSoundGame: function() {
        return axios.get('/api/soundgame')
    },

    getUsers : function(userData) {
        return axios.get("/api/users", userData)
    },

    getCurrentUser: function (userData) {
        return axios.get("/api/users/" + userData)
    },

    // user axios requests
    postUsers: function (userData) {
        return axios.post("/register", userData)
            .then(function (response) {
                console.log('user has created a profile')
            })
            .catch(function (err) {
                console.log('sign up error')
                console.log(err)
            })
    },

    authenticate: function (userName, userPassword) {

        console.log('username: ' + userName)

        return axios.get("/register", {
            params: {
                'username': userName
            }
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (err) {
                console.log(err)
            })
    },

    // user axios requests
    postUsers: function (userData) {
        return axios.post("/register", userData)
            .then(function (response) {
                console.log('user has created a profile')
            })
            .catch(function (err) {
                console.log('sign up error')
                console.log(err)
            })
    },

    login: function (username, password) {
        return axios.post('/login', username, password)
            .then(function (response) {
                console.log('response: ' + response)
            })
            .catch(function (err) {
                console.log(err)
            })
    },
    

    updateNumberGameUser : function (id, userData) {
        return axios.put("/api/numbergame/user/" + id, userData)
    },

};