import { redirect } from "../../utils/helpers.js";



let form = document.forms.login;

form.onsubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let user = {};

    formData.forEach((value, key) => {
        user[key] = value;
    });

    console.log(user);
};