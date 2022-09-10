import '../css/common.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('[type="email"]'),
    submitBtn: document.querySelector('[type="submit"]'),
};

const formData = {};

updateTextarea();

refs.form.addEventListener('input', throttle(inputText, 500));
refs.form.addEventListener('submit', formSubmit);

function inputText(e) {
    e.preventDefault();
    formData[e.target.name] = e.target.value;
    const stringifiedData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function formSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    // const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
}

function updateTextarea() {
    const data = localStorage.getItem(STORAGE_KEY);
    const saveData = JSON.parse(data);
    if (saveData) {
        refs.input.value = formData.email || '';
        refs.textarea.target.value = formData.message || '';
    }

    return;
}