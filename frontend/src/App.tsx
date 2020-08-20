import React from "react";
import Router from "./router";
import { PopUp } from "./components/common";
import { PopUpContext } from "./context";

function App(): JSX.Element {
  return (
    <div className="App">
      <PopUpContext.PopUpProvider>
        <Router />
        <PopUp />
      </PopUpContext.PopUpProvider>
    </div>
  );
}

export default App;
