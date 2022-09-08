import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
    submitBtn: document.querySelector('button'),
};


const formData = {};

form.addEventListener('input', throttle(inputText, 500));
form.addEventListener('submit', onFormSubmit);

updateTextarea();


function onFormSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    const dataObj = JSON.parse(localStorage.getItem(STORAGE_KEY));

}

function inputText(e) {
    formData[e.target.name] = e.target.value;
    const stringifiedData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringifiedData);

}

function updateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage === null) {
        return;
    }

    refs.input.value = savedMessage['email'] || '';
    refs.textarea.value = savedMessage['message'] || '';
}