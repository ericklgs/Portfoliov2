// Projects.js
function Projects() {
  const ctx = useApp();
  const t = ctx.t;
  const e = React.createElement;

  return e("section", { className:"page page--projects" },
    e("p", { className:"eyebrow" }, t.nav.projects),
    e("h1", { className:"page__title" }, t.projects.title),
    e("p", { className:"page__lead" }, t.projects.lead),
    e("div", { className:"projects__grid" },
      t.projects.items.map(function(project, i) {
        return e("article", { className:"project-card", key:project.name },
          e("span", { className:"project-card__index" }, "0" + (i+1)),
          e("h2", { className:"project-card__title" }, project.name),
          e("p", { className:"project-card__description" }, project.description),
          e("div", { className:"project-card__tags" },
            project.tags.map(function(tag) {
              return e("span", { className:"tag", key:tag }, tag);
            })
          ),
          e("a", { className:"project-card__link", href:"#", onClick: function(ev){ ev.preventDefault(); } },
            t.projects.viewLabel, " ", e("span", { className:"btn__arrow" }, "→")
          )
        );
      })
    )
  );
}
