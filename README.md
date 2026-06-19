# Erick Salmeron — Portfolio

## Estructura del proyecto

```
.
├── public/              # Archivos estáticos / punto de entrada
│   ├── index.html
│   └── cv.pdf           # Aquí se actualiza el CV
├── src/                 # Código fuente (JS + CSS)
│   ├── main.js
│   ├── App.js
│   ├── context.js
│   ├── Header.js
│   ├── Footer.js
│   ├── Home.js
│   ├── About.js
│   ├── Projects.js
│   ├── Contact.js
│   ├── translations.js
│   └── styles.css
├── package.json
└── .gitignore
```

## Configurar EmailJS (formulario de contacto)

1. Crea una cuenta en https://www.emailjs.com/
2. Crea un **Service** (Gmail, Outlook, etc.) y copia su **Service ID**.
3. Crea un **Template** con las variables `from_name`, `from_email` y `message`,
   y copia su **Template ID**.
4. Copia **Public Key** desde *Account → General*.
5. Reemplaza los valores en:
   - `src/Contact.js` → `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`
   - `src/main.js` → `"YOUR_PUBLIC_KEY"`

La Public Key de EmailJS está diseñada para exponerse en el cliente (no es secreta),
así que no se necesitan variables de entorno ni un backend para esto.

## Despliegue a producción

Cualquier hosting estático funciona (Netlify, Vercel, GitHub Pages, Cloudflare Pages):

