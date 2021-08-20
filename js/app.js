// variables
const sendBtn = document.querySelector("#sendBtn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.querySelector("#email-form");

// eventListeners
eventListeners();
function eventListeners() {
  // Initializations
  document.addEventListener("DOMContentLoaded", appInit);
  email.addEventListener("blur", validateFields);
  subject.addEventListener("blur", validateFields);
  message.addEventListener("blur", validateFields);
  resetBtn.addEventListener("click", resetForm);
  form.addEventListener("submit", submitForm);
}

// Functions

// Disable Send Btn
function appInit() {
  sendBtn.disabled = true;
  sendBtn.style.backgroundColor = "#7F8C8D";
  sendBtn.style.cursur = "none";
}

function validateFields() {
  validateLength(this);

  if (this.type === "email") {
    validateEmail(this);
  }

  let error = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = false;
      sendBtn.style.backgroundColor = "#0077c0";
    }
  }
}

function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderColor = "#0EAC51";
    field.classList.remove("error");
  } else {
    field.style.borderColor = "#B71C0C";
    field.classList.add("error");
  }
}

function validateEmail(field) {
  const emailText = field.value;
  if (emailText.includes("@")) {
    field.style.borderColor = "#0EAC51";
    field.classList.remove("error");
  } else {
    field.style.borderColor = "#B71C0C";
    field.classList.add("error");
  }
}



function submitForm(e) {
  e.preventDefault();

  const cardHeader = document.querySelector(".card-header");
  // const loaderText=document.querySelector('.loader-text');
  const loader=document.querySelector('#loaders');
  loader.style.display="block";
  const cardHeaderText=document.querySelector('.card-header-text');
  
  
  setTimeout(() => {
    loader.style.display="none";
    // cardHeader.style.display="block";
    cardHeader.style.backgroundColor="#0EAC51";
    
    form.reset()
    cardHeaderText.innerHTML="پیام شما با موفقیت ارسال شد";
    setTimeout(() => {
      cardHeader.style.display="block";
     
    }, 500);
  }, 3000);
}

function resetForm(e) {
  e.preventDefault();
  form.reset();
}