import React, { useEffect } from "react";
import { Provider } from "react-redux";
// import { Helmet } from "react-helmet";
import { store } from "./redux/store";
import RoutesDefined from "./routes";
import "./App.scss";

const App = () => {
  // useEffect(() => {
  //   const date = new Date();
  //   const hours = date.getHours();
  //   const icons = ["blue", "red", "yellow", "green"];
  //   document
  //     .getElementById("dynamic-favicon")
  //     .setAttribute("href", `icons/${icons[hours % 4]}.svg`);
  // });

  return (
    // <Helmet>
    //   <link
    //     id="dynamic-favicon"
    //     rel="icon"
    //     type="image/x-icon"
    //     href="assets/icons/logos/icon-blue.ico"
    //   />
    <Provider store={store}>
      <RoutesDefined />
    </Provider>
    // </Helmet>
  );
};

export default App;
