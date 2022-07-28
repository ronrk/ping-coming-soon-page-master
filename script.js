const emailInput = document.querySelector("input");
const btn = document.querySelector(".btn");
const errorText = document.querySelector(".error-text");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(!emailInput.checkValidity());
  if (!emailInput.checkValidity()) {
    errorText.classList.add("show");
  } else {
    errorText.classList.remove("show");
    emailInput.value = "";
  }
});
