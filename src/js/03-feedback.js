import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const formData = {};
const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");

populateTextArea();

formEl.addEventListener("input", throttle(onFormInputType, 500));
formEl.addEventListener("submit", onFormSubmit);

function onFormInputType(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextArea() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    inputEl.value = parsedData.email;
    textareaEl.value = parsedData.message;
  }
}