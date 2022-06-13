import React from "react";
import MainComponent from "./components/mainComponent";
import { Provider } from "react-redux";
import {store} from "./components/store/store"







function App() {
  return (
    <>
      <Provider store = { store }>
        <MainComponent />
      </Provider>
    </>
  );
}

export default App;
