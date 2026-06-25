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
          e("div", { className:"project-card__links" },
            e("a", {
              className:"project-card__link project-card__link--view",
              href: project.url || "#",
              target: project.url ? "_blank" : "_self",
              rel: "noopener noreferrer",
              onClick: project.url ? null : function(ev){ ev.preventDefault(); }
            },
              t.projects.viewLabel, " ", e("span", { className:"btn__arrow" }, "→")
            ),
            e("a", {
              className:"project-card__link project-card__link--github",
              href: project.github || "#",
              target: project.github ? "_blank" : "_self",
              rel: "noopener noreferrer",
              onClick: project.github ? null : function(ev){ ev.preventDefault(); }
            },
              e("svg", { viewBox:"0 0 24 24", fill:"currentColor", width:"16", height:"16" },
                e("path", { d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" })
              ),
              t.projects.githubLabel
            )
          )
        );
      })
    )
  );
}
