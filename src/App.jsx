import { useState } from "react";
import "./App.css";
import Page from "./components/Page";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <section className={dark ? "dark" : ""}>
      <Page dark={dark} handleDark={() => setDark((dark) => !dark)} />
    </section>
  );
}

export default App;
