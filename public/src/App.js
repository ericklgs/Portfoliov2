// App.js — Componente raíz
function App() {
  const s1 = React.useState("es");   const lang = s1[0];  const setLang = s1[1];
  const s2 = React.useState("dark"); const theme = s2[0]; const setTheme = s2[1];
  const s3 = React.useState("home"); const page = s3[0];  const setPage = s3[1];

  React.useEffect(function() {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  React.useEffect(function() {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const t = translations[lang];
  const e = React.createElement;

  let currentPage;
  if (page === "about")    currentPage = e(About, null);
  else if (page === "projects") currentPage = e(Projects, null);
  else if (page === "contact")  currentPage = e(Contact, null);
  else                          currentPage = e(Home, { setPage: setPage });

  return e(AppContext.Provider, { value:{ lang:lang, setLang:setLang, theme:theme, setTheme:setTheme, t:t } },
    e("div", { className:"app" },
      e(Header, { page:page, setPage:setPage }),
      e("main", { className:"main" }, currentPage),
      e(Footer, null)
    )
  );
}
