export function Header() {
    let Header = document.querySelector("header");
Header.innerHTML = `
<div class="header-left">
    <p>Your Name</p>
  </div>
 
    <div class="burger" id="burger">
  <span></span>
  <span></span>
  <span></span>
</div>

<nav class="nav-links" id="nav" >
  <a href="#">Blog</a>
  <a href="#">Projects</a>
  <a href="#">About</a>
  <a href="#">Newsletter</a>
</nav>

    <div class="theme-buttons">
      <button class="black" aria-label="Тёмная тема">🌙</button>
      <button class="white" aria-label="Светлая тема">☀️</button>
    </div>
  </div>
`
}