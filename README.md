# Erick Salmeron — Portfolio

## Estructura del proyecto

```
.
├── public/              # Carpeta que se publica (raíz del sitio en Vercel/Netlify)
│   ├── index.html
│   ├── cv.pdf           # ⚠️ agrega aquí tu CV real (ver cv.pdf.README.txt)
│   └── src/              # Código fuente (JS + CSS), servido como /src/... en el sitio
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

No hay paso de build (no Webpack/Vite/Babel): React se carga vía CDN y los componentes
usan `React.createElement` directamente, así que el sitio funciona sirviendo los
archivos tal cual.

`src/` vive **dentro** de `public/` a propósito: en Vercel (y la mayoría de hosts
estáticos sin configuración), `public/` se detecta automáticamente como la raíz
publicada del sitio, y todo lo que esté fuera de ella no se sube. Si `src/` quedara
como hermano de `public/`, los `<script src="src/...">` apuntarían a rutas que no
existen en producción (justo el error de "Ha fallado la carga del script").

## Desarrollo / vista previa local

```bash
npm run serve
# abre http://localhost:5000
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

La Public Key de EmailJS está diseñada para exponerse en el cliente (no es secreta),
así que no necesitas variables de entorno ni un backend para esto.

## Despliegue a producción (Vercel)

1. Sube el repo a GitHub (o usa `vercel` CLI) e impórtalo en Vercel.
2. Vercel detecta `public/` automáticamente como sitio estático — no necesitas
   configurar Build Command ni Output Directory (déjalos vacíos / por defecto).
3. Listo: `public/index.html` será servido en la raíz del dominio, y
   `public/src/*.js` quedará accesible en `/src/*.js`.

Esto mismo aplica para Netlify (Publish directory = `public`) o GitHub Pages
(usa `public/` como rama/carpeta de publicación).

### Antes de publicar

- [ ] Reemplaza `public/cv.pdf` con tu CV real.
- [ ] Configura las credenciales de EmailJS (ver arriba).
- [ ] Revisa `public/src/translations.js` por si quieres ajustar textos.
- [ ] (Opcional) agrega un `favicon.ico` en `public/`.
