let form = document.querySelector("form");
let nm = document.querySelector("#name");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let small = document.querySelectorAll("small");
let resultMessage = document.querySelector("#resultMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameRegex = /^[A-Za-z ]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let nameAns = nameRegex.test(nm.value);
  let emailAns = emailRegex.test(email.value);
  let passwordAns = passwordRegex.test(password.value);
  let isValid = true;

  if (!nameAns) {
    small[0].style.display = "initial";
    small[0].textContent = "Enter a valid name";
    isValid = false;
  } else {
    small[0].style.display = "none";
  }
  if (!emailAns) {
    small[1].style.display = "initial";
    small[1].textContent = "Please enter a email";
    isValid = false;
  } else {
    small[1].style.display = "none";
  }
  if (!passwordAns) {
    small[2].style.display = "initial";
    small[2].textContent = "Please enter a password";
    isValid = false;
  } else {
    small[2].style.display = "none";
  }
  if (isValid) {
    resultMessage.style.display = "initial";
    resultMessage.style.color = "black";
    resultMessage.textContent = "all good";
  } else {
    resultMessage.textContent = "something was Error!";
    resultMessage.style.display = "initial";
  }
});
