// Footer.js
function Footer() {
  const ctx = useApp();
  const t = ctx.t;
  const year = new Date().getFullYear();
  const e = React.createElement;

  return e("footer", { className:"footer" },
    e("div", { className:"footer__inner" },
      e("span", null, "© " + year + " Erick Salmeron — " + t.footer.rights),
      e("span", null, t.footer.builtWith)
    )
  );
}
