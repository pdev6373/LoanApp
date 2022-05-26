import React, { useState } from "react";
import { Main } from "./components/main/Main";
import { Nav } from "./components/nav/Nav";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="App">
      <Nav navOpen={navOpen} />
      <Main navOpen={navOpen} setNavOpen={setNavOpen} />
    </div>
  );
}

export default App;
