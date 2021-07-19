function validateForm() {
    var username = document.forms["myForm"]["user"].value;
    var password = document.forms["myForm"]["pass"].value;
        if ((username == "") && (password == "")) {
            alert("Username and password must be filled out");
            return false;
        }
        if (username == "") {
            alert("Username must be filled out");
            return false;
        }
        if ((username.length <= 2) || (username.length > 20)) {
            alert("Username length must be between 2 characters to 20 characters");
            return false;
        }
        if (/[^a-zA-Z0-9]/.test(username)) {
            alert("Special characters are not allowed");
            return false;
        }
        if (password == "") {
            alert("Password must be filled out");
            return false;
        }
        if ((password.length < 6) || (password.length > 20)) {
            alert("Password length must between 6 characters to 20 characters");
            return false;
        }
}
