import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import DropdownMenu from "./components/DropdownMenu";
import Card from "./components/Card";

function App() {
  return (
    <Provider store={store}>
      <div>
        <DropdownMenu />
        <Card />
      </div>
    </Provider>
  );
}

export default App;
