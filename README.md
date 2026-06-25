# Erick Salmeron — Portfolio

Portafolio personal construido con React (sin bundler), HTML, CSS y JavaScript.

---

## Estructura del proyecto

```
portfolio/
├── index.html              # Punto de entrada
├── css/
│   └── styles.css          # Todos los estilos
├── js/
│   ├── translations.js     # Textos en ES/EN
│   ├── context.js          # Contexto global de React
│   ├── Header.js           # Navegación
│   ├── Footer.js           # Pie de página
│   ├── Home.js             # Sección Inicio
│   ├── About.js            # Sección Sobre mí
│   ├── Projects.js         # Sección Proyectos
│   ├── Contact.js          # Sección Contacto (usa EmailJS)
│   ├── App.js              # Componente raíz
│   └── main.js             # Punto de entrada de React
└── assets/
    ├── cv.pdf              # ← CV
    └── og-image.png        # ← Imagen de vista previa
```

## Notas técnicas

- **Sin bundler** — React se carga via CDN (UMD). No requiere Node.js para producción.
- **Sin JSX** — el código usa `React.createElement()` directamente para evitar transpilación.
- **Modo oscuro/claro** — controlado por `data-theme` en `<html>`.
- **Bilingüe ES/EN** — todos los textos están en `js/translations.js`.