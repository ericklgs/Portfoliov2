// Home.js
function Home(props) {
  const setPage = props.setPage;
  const ctx = useApp();
  const t = ctx.t;
  const lines = t.home.terminalLines;

  const s1 = React.useState([]); const visibleLines = s1[0]; const setVisibleLines = s1[1];
  const s2 = React.useState(0);  const charIndex = s2[0];    const setCharIndex = s2[1];
  const s3 = React.useState(0);  const lineIndex = s3[0];    const setLineIndex = s3[1];

  React.useEffect(function() {
    setVisibleLines([]);
    setLineIndex(0);
    setCharIndex(0);
  }, [lines]);

  React.useEffect(function() {
    if (lineIndex >= lines.length) return;
    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      const tid = setTimeout(function() {
        setVisibleLines(function(prev) {
          const copy = prev.slice();
          copy[lineIndex] = currentLine.slice(0, charIndex);
          return copy;
        });
        setCharIndex(function(c) { return c + 1; });
      }, 28);
      return function() { clearTimeout(tid); };
    } else {
      const tid2 = setTimeout(function() {
        setLineIndex(function(l) { return l + 1; });
        setCharIndex(0);
      }, 350);
      return function() { clearTimeout(tid2); };
    }
  }, [charIndex, lineIndex, lines]);

  const e = React.createElement;

  const terminalLines = lines.map(function(line, i) {
    const isPrompt = line.charAt(0) === "$";
    const content = visibleLines[i] || "";
    const showCursor = i === lineIndex && charIndex <= line.length;
    return e("div", {
      key: i,
      className:"terminal__line " + (isPrompt ? "terminal__line--prompt" : "terminal__line--output")
    },
      content,
      showCursor ? e("span", { className:"terminal__cursor" }) : null
    );
  });

  return e("section", { className:"page page--home" },
    e("div", { className:"home__grid" },
      e("div", { className:"home__text" },
        e("p", { className:"eyebrow" }, t.home.eyebrow),
        e("h1", { className:"home__title" }, t.home.title),
        e("p", { className:"home__subtitle" }, t.home.subtitle),
        e("div", { className:"home__actions" },
          e("button", { className:"btn btn--primary", onClick: function(){ setPage("projects"); } },
            t.home.cta, " ", e("span", { className:"btn__arrow" }, "→")
          ),
          e("a", {
            className:"btn btn--cv",
            href:"cv.pdf",
            download: true,
            title: t.home.cvBtn
          },
            e("span", { className:"btn__cv-icon" },
              e("svg", { viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round", width:"18", height:"18" },
                e("path", { d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                e("polyline", { points:"7 10 12 15 17 10" }),
                e("line", { x1:"12", y1:"15", x2:"12", y2:"3" })
              )
            ),
            t.home.cvBtn
          )
        )
      ),
      e("div", { className:"home__terminal" },
        e("div", { className:"terminal" },
          e("div", { className:"terminal__bar" },
            e("span", { className:"terminal__dot terminal__dot--red" }),
            e("span", { className:"terminal__dot terminal__dot--yellow" }),
            e("span", { className:"terminal__dot terminal__dot--green" }),
            e("span", { className:"terminal__title" }, "zsh — mariana")
          ),
          e("div", { className:"terminal__body" }, terminalLines)
        )
      )
    )
  );
}
