
function showSignup() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}


function showLogin() {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}


function signup() {
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  if (name && email && password) {
    let user = {
      name: name,
      email: email,
      password: password
    };


    localStorage.setItem(email, JSON.stringify(user));

    alert("✅ Signup successful! Now login.");


    document.getElementById("signupName").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";

    showLogin();
  } else {
    alert("⚠ All fields are required!");
  }
}


function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let user = JSON.parse(localStorage.getItem(email));

  if (user && user.password === password) {
    alert("✅ Login successful! Welcome " + user.name);
  } else {
    alert("❌ Invalid Email or Password!");
  }
}
