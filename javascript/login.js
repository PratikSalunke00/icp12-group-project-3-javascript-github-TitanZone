
    function showSignup() {
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("signupBox").style.display = "block";
    }

   
    function showLogin() {
      document.getElementById("signupBox").style.display = "none";
      document.getElementById("loginBox").style.display = "block";
    }

   
    document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault();
      let email = document.getElementById("signupEmail").value;
      let password = document.getElementById("signupPassword").value;

      if (email === "" || password === "") {
        alert("Please fill out all fields!");
        return;
      }

      let user = {
        email: email,
        password: password
      };

      localStorage.setItem("userData", JSON.stringify(user));
      alert("Signup successful ✅ Now login!");
      showLogin();
    });

    
    document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let userData = {
        email: email,
        password: password
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("signup successful ✅ Please login now.");
});

    