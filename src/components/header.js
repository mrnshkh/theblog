export function Header() {
  let Header = document.querySelector("header");
  if (!Header) return; // если header нет — выходим из функции

  const isLoggedIn = !!localStorage.getItem("token");

  Header.innerHTML = `
    <div class="header-left">
    </div>

    <div class="burger" id="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <nav class="nav-links" id="nav">
      <a href="#">Blog</a>
      <a href="#">Projects</a>
      <a href="#">About</a>
      <a href="#">Newsletter</a>
      ${
        isLoggedIn
          ? `<a href="/profile/">Profile</a>`
          : `<a href="/signup/">Signup</a>`
      }
    </nav>

    <div class="theme-buttons">
      <button class="black" aria-label="Тёмная тема">🌙</button>
      <button class="white" aria-label="Светлая тема">☀️</button>
    </div>
  `;
}
