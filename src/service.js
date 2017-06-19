module.exports = {
    isLoggedIn: function() {

        if (localStorage.getItem("authUser") != null) {
            return true;
        } else {
            return false;
        }
    },
    Logout: function() {
        localStorage.removeItem("authUser");
    }


}