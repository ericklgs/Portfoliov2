// context.js — Contexto global de la app
const AppContext = React.createContext({});

function useApp() {
  return React.useContext(AppContext);
}
