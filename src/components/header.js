const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
import { isLoggedIn } from "../../utils/auth.js";
import { logout } from "../utils/auth.js";

export function Header() {
  const header = document.querySelector("header");
  header.innerHTML = `
    <div class="header-left">
      <a href="/" class="logo">The Blog</a>
    </div>

    <div class="burger" id="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <nav class="nav-links" id="nav">
      <a href="/">Home</a>
      ${
        isLoggedIn()
          ? `<a href="/profile.html">Profile</a>
             <button id="btn-logout" class="nav-btn">Logout</button>`
          : `<a href="/login.html">Login</a>
             <a href="/signup.html">Sign Up</a>`
      }
    </nav>

    <div class="theme-buttons">
      <button class="black" aria-label="Тёмная тема">🌙</button>
      <button class="white" aria-label="Светлая тема">☀️</button>
    </div>
  `;

 
  if (isLoggedIn()) {
    document
      .getElementById("btn-logout")
      .addEventListener("click", logout);
  }


  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}
