import axios from "https://cdn.skypack.dev/axios";

let form = document.forms.login;

form.onsubmit = async (e) => {
  e.preventDefault();

  let data = {};
  new FormData(form).forEach((v, k) => data[k] = v);

  try {
    let res = await axios.post("https://blog-n7ue.onrender.com/users/login", data);
    let token = res.data.accessToken;

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("fullName", data.fullName);
      localStorage.setItem("email", data.email);
      location.href = "/profile/";
    }
  } catch (err) {
    console.error("Ошибка входа:", err.response?.data || err);
    alert(err.response?.data?.message || "Ошибка при входе");
  }
};
