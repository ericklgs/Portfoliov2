# Erick Salmeron — Portfolio

## Estructura del proyecto

```
.
├── public/              # Archivos estáticos / punto de entrada
│   ├── index.html
│   └── cv.pdf           # ⚠️ agrega aquí tu CV real (ver cv.pdf.README.txt)
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

No hay paso de build (no Webpack/Vite/Babel): React se carga vía CDN y los componentes
usan `React.createElement` directamente, así que el sitio funciona sirviendo los
archivos tal cual. `public/index.html` referencia los archivos de `src/` con rutas
relativas (`../src/...`), por lo que **debes servir la carpeta raíz del proyecto**
(no solo `public/`) para que `src/` siga siendo accesible.

## Desarrollo / vista previa local

```bash
npm run serve
# abre http://localhost:5000/public/
```

## Configurar EmailJS (formulario de contacto)

1. Crea una cuenta en https://www.emailjs.com/
2. Crea un **Service** (Gmail, Outlook, etc.) y copia su **Service ID**.
3. Crea un **Template** con las variables `from_name`, `from_email` y `message`,
   y copia su **Template ID**.
4. Copia tu **Public Key** desde *Account → General*.
5. Reemplaza los valores en:
   - `src/Contact.js` → `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`
   - `src/main.js` → `"YOUR_PUBLIC_KEY"`

La Public Key de EmailJS está diseñada para exponerse en el cliente (no es secreta),
así que no necesitas variables de entorno ni un backend para esto.

## Despliegue a producción

Cualquier hosting estático funciona (Netlify, Vercel, GitHub Pages, Cloudflare Pages):

- **Publish/Output directory:** la raíz del repo (`.`), no `public/`.
- **Entry point:** `public/index.html`.
- En Netlify/Vercel puedes configurar una redirección de `/` → `/public/index.html`,
  o simplemente subir el repo tal cual y apuntar el dominio a esa ruta.
- Si prefieres servir `public/` como raíz pura, copia (o symlinkea) `src/` dentro de
  `public/` como parte de tu propio paso de build.

### Antes de publicar

- [ ] Reemplaza `public/cv.pdf` con tu CV real.
- [ ] Configura las credenciales de EmailJS (ver arriba).
- [ ] Revisa `src/translations.js` por si quieres ajustar textos.
- [ ] (Opcional) agrega un `favicon.ico` en `public/`.
