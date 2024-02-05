
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name ="email"]');
const message = document.querySelector('textarea[name="message"]');
const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFormState) {
    email.value = savedFormState.email || '';
    message.value = savedFormState.message || '';
};
form.addEventListener('input', throttle(function () {
    const formState = {
        email: email.value,
        message: message.value,

    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));

}, 500));
form.addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.removeItem('feedback-form-state');
    const formData = {
        email: email.value,
        message: message.value,
    }
    console.log(formData);
});