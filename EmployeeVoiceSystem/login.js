document.addEventListener("DOMContentLoaded", () => {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const signInForm = document.querySelector(".sign-in-form");
  const signUpForm = document.querySelector(".sign-up-form");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = signInForm.querySelector("input[type='text']").value;
    const password = signInForm.querySelector("input[type='password']").value;

    if (username === "123" && password === "123") {
      alert("Sign in successful!");
      window.location.href = "tampilan.html"; // Redirect to index.html
    } else {
      alert("Invalid username or password");
    }
  });

  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Perform sign-up logic here
    const username = signUpForm.querySelector("input[type='text']").value;
    const email = signUpForm.querySelector("input[type='email']").value;
    const password = signUpForm.querySelector("input[type='password']").value;

    if (username && email && password) {
      alert("Sign up successful!");
      // Implement your sign-up logic here
    } else {
      alert("Please fill in all fields");
    }
  });
});
