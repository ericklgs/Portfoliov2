// Contact.js
// NOTE: emailjs is loaded globally via the EmailJS CDN script in public/index.html
// (window.emailjs), and initialized once in main.js with your EmailJS public key.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

function Contact() {
  const ctx = useApp();
  const t = ctx.t;
  const s1 = React.useState({ name:"", email:"", message:"" });
  const form = s1[0]; const setForm = s1[1];
  const s2 = React.useState(false);
  const submitted = s2[0]; const setSubmitted = s2[1];
  const s3 = React.useState(false);
  const sending = s3[0]; const setSending = s3[1];
  const s4 = React.useState(null);
  const error = s4[0]; const setError = s4[1];

  function handleChange(ev) {
    const updated = Object.assign({}, form);
    updated[ev.target.name] = ev.target.value;
    setForm(updated);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    setError(null);
    setSending(true);

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: form.name,
      from_email: form.email,
      message: form.message
    }).then(function() {
      setSending(false);
      setSubmitted(true);
      setForm({ name:"", email:"", message:"" });
    }).catch(function(err) {
      setSending(false);
      setError(err && err.text ? err.text : "Something went wrong. Please try again.");
    });
  }

  const e = React.createElement;

  return e("section", { className:"page page--contact" },
    e("p", { className:"eyebrow" }, t.nav.contact),
    e("h1", { className:"page__title" }, t.contact.title),
    e("p", { className:"page__lead" }, t.contact.lead),
    e("div", { className:"contact__grid" },
      e("form", { className:"contact-form", onSubmit:handleSubmit },
        e("label", { className:"field" },
          e("span", { className:"field__label" }, t.contact.formNameLabel),
          e("input", { className:"field__input", type:"text", name:"name", required:true, placeholder:t.contact.formNamePlaceholder, value:form.name, onChange:handleChange })
        ),
        e("label", { className:"field" },
          e("span", { className:"field__label" }, t.contact.formEmailLabel),
          e("input", { className:"field__input", type:"email", name:"email", required:true, placeholder:t.contact.formEmailPlaceholder, value:form.email, onChange:handleChange })
        ),
        e("label", { className:"field" },
          e("span", { className:"field__label" }, t.contact.formMessageLabel),
          e("textarea", { className:"field__input field__input--textarea", name:"message", required:true, rows:5, placeholder:t.contact.formMessagePlaceholder, value:form.message, onChange:handleChange })
        ),
        e("button", { className:"btn btn--primary btn--small", type:"submit", disabled:sending },
          sending ? "…" : t.contact.submit
        ),
        submitted ? e("p", { className:"contact-form__success" }, t.contact.submitted) : null,
        error ? e("p", { className:"contact-form__error" }, error) : null
      ),
      e("aside", { className:"contact-direct" },
        e("h2", { className:"subheading" }, t.contact.directTitle),
        e("dl", { className:"contact-direct__list" },
          e("div", { className:"contact-direct__item" },
            e("dt", null, t.contact.directLabels.email),
            e("dd", null, "el.gs9595@gmail.com")
          ),
          e("div", { className:"contact-direct__item" },
            e("dt", null, t.contact.directLabels.location),
            e("dd", null, "Cuautla, Morelos, MX")
          ),
          e("div", { className:"contact-direct__item" },
            e("dt", null, t.contact.directLabels.social),
            e("dd", null, "LinkedIn @erickleogs")
          )
        )
      )
    )
  );
}
