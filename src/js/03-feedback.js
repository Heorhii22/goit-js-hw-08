import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
let formData = {};
const data = localStorage.getItem(STORAGE_KEY);
const parsedData = JSON.parse(data);

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");


formEl.addEventListener("input", throttle(onFormInputType, 500));
formEl.addEventListener("submit", onFormSubmit);

populateTextArea();

function onFormInputType(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
  
  console.log(savedData);
  
  e.currentTarget.reset();
  
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function populateTextArea() {
  if (data) {
    inputEl.value = parsedData.email || '';
    textareaEl.value = parsedData.message || '';
  }
}
