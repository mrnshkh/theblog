
import { redirect } from '../../utils/helpers';


let form = document.forms.auth;

form.onsubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let user = {};

    formData.forEach((value, key) => {
        user[key] = value;
    });

    console.log(user);
    redirect("/src/pages/home/")
};