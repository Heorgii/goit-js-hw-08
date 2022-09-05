import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.input'),
    textarea: document.querySelector('.textarea'),
};

updateTextarea();
const formData = {};

formEl.form.addEventListener('input', throttle(onTextareaInput, 500));

formEl.form.addEventListener('submit', e => {
    e.preventDefault();
    e.currentTarget.reset();
    const dataObj = JSON.parse(localStorage.getItem(STORAGE_KEY));
});

function onTextareaInput(e) {
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