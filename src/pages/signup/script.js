import { redirect } from "../../utils/helpers.js";
import axios from "axios";

const form = document.forms.auth;
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((val, key) => data[key] = val);

  try {
    const res = await axios.post(
      "https://blog-n7ue.onrender.com/login",  
      data
    );
    const token = res.data.token;              
    localStorage.setItem("token", token);      
    redirect("/");                             
  } catch (err) {
    console.error(err);
    alert("Ошибка: проверь логин/пароль или поля формы");
  }
});
