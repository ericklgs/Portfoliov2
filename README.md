# Erick Salmeron — Portfolio

## Estructura del proyecto

```
.
├── public/              # Carpeta que raiz.
│   ├── index.html
│   ├── cv.pdf           # Reemplazar por CV real.
│   └── src/              # Código fuente.
│       ├── main.js
│       ├── App.js
│       ├── context.js
│       ├── Header.js
│       ├── Footer.js
│       ├── Home.js
│       ├── About.js
│       ├── Projects.js
│       ├── Contact.js
│       ├── translations.js
│       └── styles.css
├── package.json
└── .gitignore
```

## Configurar EmailJS (formulario de contacto)

1. Crea una cuenta en https://www.emailjs.com/
2. Crea un **Service** (Gmail, Outlook, etc.) y copia su **Service ID**.
3. Crea un **Template** con las variables `from_name`, `from_email` y `message`,
   y copia su **Template ID**.
4. Copia tu **Public Key** desde *Account → General*.
5. Reemplaza los valores en:
   - `public/src/Contact.js` → `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`
   - `public/src/main.js` → `"YOUR_PUBLIC_KEY"`

La Public Key de EmailJS está diseñada para exponerse en el cliente,
así que no se necesitan variables de entorno ni un backend para esto.
