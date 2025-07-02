import { routes } from "./routes";
import { Header } from "../components/header";

export async function router() {
  const pathname = window.location.pathname;
  console.log("👉 Путь из window.location.pathname:", pathname);
  const app = document.getElementById("app");
  const route = routes.find((r) => pathname.match(r.path));

  if (!route) {
    console.warn("❌ Маршрут не найден для:", pathname);
    app.innerHTML = "<h1>404: Страница не найдена</h1>";
    alert("❌ Маршрут не найден для:", pathname);
    return;
  }

  await route.loadStyles();
  await route.view(app);
  await route.loadScripts();

  
  Header();
}
