import React from "react";
import Main from "./components/Main";
import Search from "./components/Search";
import Saved from "./components/Saved";

const App = () => (
  <div className="container">
    <Main />
    <Search />
    <Saved />
  </div>
);

export default App;