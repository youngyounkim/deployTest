import { useState } from "react";
import "./App.css";
import Router from "./shared/Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
