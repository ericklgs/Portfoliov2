// Header.js
function Header(props) {
  const page = props.page;
  const setPage = props.setPage;
  const ctx = useApp();
  const lang = ctx.lang; const setLang = ctx.setLang;
  const theme = ctx.theme; const setTheme = ctx.setTheme;
  const t = ctx.t;

  const menuOpen = React.useState(false);
  const isOpen = menuOpen[0]; const setMenuOpen = menuOpen[1];

  const pages = ["home", "about", "projects", "contact"];

  function go(p) { setPage(p); setMenuOpen(false); }

  const e = React.createElement;

  const sunIcon = e("svg", { viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round" },
    e("circle", { cx:"12", cy:"12", r:"4" }),
    e("path", { d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" })
  );
  const moonIcon = e("svg", { viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round" },
    e("path", { d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
  );

  return e("header", { className:"header" },
    e("div", { className:"header__inner" },
      e("button", { className:"logo", onClick: function(){ go("home"); } },
      ),
      e("nav", { className:"nav" + (isOpen ? " nav--open" : "") },
        pages.map(function(p, i) {
          return e("button", {
            key: p,
            className:"nav__link" + (page === p ? " nav__link--active" : ""),
            onClick: function(){ go(p); }
          },
            e("span", { className:"nav__index" }, "0" + (i+1)),
            t.nav[p]
          );
        })
      ),
      e("div", { className:"header__controls" },
        e("button", { className:"pill-btn", onClick: function(){ setLang(lang === "es" ? "en" : "es"); } },
          e("span", null, lang === "es" ? "ES" : "EN"),
          e("span", { className:"pill-btn__divider" }, "/"),
          e("span", null, lang === "es" ? "EN" : "ES")
        ),
        e("button", { className:"icon-btn", onClick: function(){ setTheme(theme === "dark" ? "light" : "dark"); } },
          theme === "dark" ? sunIcon : moonIcon
        ),
        e("button", { className:"burger" + (isOpen ? " burger--open" : ""), onClick: function(){ setMenuOpen(!isOpen); } },
          e("span"), e("span"), e("span")
        )
      )
    )
  );
}
