// main.js — Punto de entrada

// Inicializa EmailJS con tu Public Key (Account > General en emailjs.com)
emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, null));
