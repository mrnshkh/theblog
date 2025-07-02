export const routes = [
  {
    path: /^\/(home)?\/?$/,
    view: async (app) => {
      const response = await fetch("/src/pages/home/index.html");
      const html = await response.text();
      app.innerHTML = html;
    },
    loadStyles: () =>
      import("../pages/home/style.css", { assert: { type: "css" } }),
    loadScripts: () => import("../pages/home/script.js"),
  },
    {
    path: /^\/(signup)?\/?$/,
    view: async (app) => {
      const response = await fetch("/src/pages/signup/index.html");
      const html = await response.text();
      app.innerHTML = html;
    },
    loadStyles: () =>
      import("../pages/signup/style.css", { assert: { type: "css" } }),
    loadScripts: () => import("../pages/signup/script.js"),
  },
  {
    path: /^\/(login)?\/?$/,
    view: async (app) => {
      const response = await fetch("/src/pages/login/index.html");
      const html = await response.text();
      app.innerHTML = html;
    },
    loadStyles: () =>
      import("../pages/login/style.css", { assert: { type: "css" } }),
    loadScripts: () => import("../pages/login/script.js"),
  },
   {
    path: /^\/(profile)?\/?$/,
    view: async (app) => {
      const response = await fetch("/src/pages/profile/index.html");
      const html = await response.text();
      app.innerHTML = html;
    },
    loadStyles: () =>
      import("../pages/profile/style.css", { assert: { type: "css" } }),
    loadScripts: () => import("../pages/profile/script.js"),
  },
  {
    path: /^\/(404)?\/?$/,
    view: async (app) => {
      const response = await fetch("/src/pages/404/index.html");
      const html = await response.text();
      app.innerHTML = html;
    },
    loadStyles: () =>
      import("../pages/404/style.css", { assert: { type: "css" } }),
    loadScripts: () => import("../pages/404/script.js"),
  }

];
