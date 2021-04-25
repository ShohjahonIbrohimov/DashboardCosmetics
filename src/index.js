import React from "react";
import ReactDOM from "react-dom";
import App from "./routes";
import "antd/dist/antd.css";
import "./styles/main.css";
import * as serviceWorker from "./serviceWorker";
// REDUX
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// ROUTE
import { BrowserRouter as Router } from "react-router-dom";

const arrObjs = [
  { fruit: "Apple" },
  { fruit: "Banana" },
  { fruit: "Apple" },
  { fruit: "Apelsin" },
  { fruit: "Apelsin" },
  { fruit: "Apelsin" },
  { fruit: "Apelsin" },
];

let arrString = arrObjs.map((item) => item.fruit);

var counts = {}; //We are going to count occurrence of item here
var compare = 0; //We are going to compare using stored value
var mostFrequent; //We are going to store most frequent item

console.log(getMostFrequet(arrString));

function getMostFrequet(array) {
  for (var i = 0, len = array.length; i < len; i++) {
    var word = array[i];

    if (counts[word] === undefined) {
      //if count[word] doesn't exist
      counts[word] = 1; //set count[word] value to 1
    } else {
      //if exists
      counts[word] = counts[word] + 1; //increment existing value
    }
    if (counts[word] > compare) {
      //counts[word] > 0(first time)
      compare = counts[word]; //set compare to counts[word]
      mostFrequent = array[i]; //set mostFrequent value
    }
  }

  return mostFrequent;
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
