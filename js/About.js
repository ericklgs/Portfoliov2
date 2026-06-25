// About.js
function About() {
  const ctx = useApp();
  const t = ctx.t;
  const e = React.createElement;

  return e("section", { className:"page page--about" },
    e("p", { className:"eyebrow" }, t.nav.about),
    e("h1", { className:"page__title" }, t.about.title),
    e("div", { className:"about__grid" },
      e("div", { className:"about__text" },
        e("p", { className:"about__lead" }, t.about.lead),
        e("p", { className:"about__body" }, t.about.body),
        e("h2", { className:"subheading" }, t.about.skillsTitle),
        e("ul", { className:"skills" },
          t.about.skills.map(function(skill) {
            return e("li", { key:skill, className:"skills__item" }, skill);
          })
        )
      ),
      e("div", { className:"about__facts" },
        e("h2", { className:"subheading" }, t.about.factsTitle),
        e("div", { className:"facts" },
          t.about.facts.map(function(fact) {
            return e("div", { className:"fact", key:fact.label },
              e("span", { className:"fact__value" }, fact.value),
              e("span", { className:"fact__label" }, fact.label)
            );
          })
        )
      )
    )
  );
}
