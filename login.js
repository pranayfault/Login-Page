     function validate() {
         var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (email === "pathakprasumitra@gmail.com" && password === "Pranay123") {
               window.location.replace("🌷");
               // window.location('dashboard.htmll');
            alert("Login successful");
            return false;
        } else {
         alert ("🤡");
        }
    }

