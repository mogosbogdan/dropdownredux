import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import DropdownMenu from "./components/DropdownMenu";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App top">
        <DropdownMenu />
        <Card />
      </div>
    </Provider>
  );
}

export default App;
