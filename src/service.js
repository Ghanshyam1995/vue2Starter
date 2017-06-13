module.exports = {
    isLoggedIn: function() {

        if (localStorage.getItem("user_token") != null) {
            return true;
        } else {
            return false;
        }
    },
    Logout: function() {
        localStorage.removeItem("user_token");
    },
    Username: function() {
        let user = JSON.parse(localStorage.getItem("user_token"));
        return user.FirstName + " " + user.LastName;
    }

}