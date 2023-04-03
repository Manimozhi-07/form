const form = document.querySelector("#reg-form");
const uname = document.querySelector("#name");
const emailaddress = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const btn = document.querySelector("#submit-button");
const reg = /\S+@\S+\.\S+/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

uname.addEventListener("input", () => {
  validateUserName();
  enableButton();
});
emailaddress.addEventListener("input", () => {
  validateEmail();
  enableButton();
});
password.addEventListener("input", () => {
  validatePassword();
  enableButton();
});
cpassword.addEventListener("input", () => {
  validateConfirmPassword();
  enableButton();
});

function validateUserName() {
  //USERNAME
  if (uname.value.trim().length === 0) {
    error(uname, "Name field should not be empty");
  } else if (uname.value.trim().length < 5 || uname.value.trim().length > 10) {
    error(uname, "Name must be minimum of 5 charcters or maximum of 10");
  } else {
    success(uname);
  }
}
//EMAIL
function validateEmail() {
  if (emailaddress.value.trim().length === 0) {
    error(emailaddress, "Provide Email Address");
  } else if (!emailaddress.value.match(reg)) {
    error(emailaddress, "provide valid email address");
  } else {
    success(emailaddress);
  }
}
//PASSWORD
function validatePassword() {
  if (password.value.trim().length === 0) {
    error(password, "Password field should not be empty");
  } else if (
    password.value.trim().length < 5 ||
    password.value.trim().length > 20
  ) {
    error(password, "Password must be minimum of 5 charcters or maximum of 20");
  } else {
    success(password);
  }
}
//CONFIRM PASSWORD
function validateConfirmPassword() {
  if (cpassword.value.trim().length === 0) {
    error(cpassword, "Password field should not be empty");
  } else if (cpassword.value != password.value) {
    error(cpassword, "Password does not matches");
  } else {
    success(cpassword);
  }
}
function error(element, message) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");

  const para = parent.querySelector("p");
  para.textContent = message;
}
function success(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}
function enableButton() {
  if (
    uname.value.trim().length >= 5 &&
    uname.value.trim().length <= 10 &&
    emailaddress.value.match(reg) &&
    password.value.trim().length >= 5 &&
    password.value.trim().length <= 20 &&
    cpassword.value == password.value
  ) {
    btn.style.backgroundColor = "green";
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
