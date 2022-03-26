import React from "react";
import ContextProductProvider from "./context/contextSneakers";
import Routing from "./Routing";
import "./App.css";

const App = () => {
  return (
    <>
      <ContextProductProvider>
        <Routing />
      </ContextProductProvider>
    </>
  );
};

export default App;
