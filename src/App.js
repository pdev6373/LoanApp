import React, { useState } from "react";
import { Main } from "./components/main/Main";
import { Nav } from "./components/nav/Nav";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <div className="App">
      <Nav
        setNavOpen={setNavOpen}
         navOpen={navOpen}
        hamburgerClicked={hamburgerClicked}
      />
      <Main
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        setHamburgerClicked={setHamburgerClicked}
      />
    </div>
  );
}

export default App;
