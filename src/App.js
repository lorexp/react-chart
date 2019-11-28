import React from "react";
import ExampleChart from "./components/Chart/index";
import html2canvas from "html2canvas";

import moment from "moment";

import "moment/locale/pt-br";

const data = [
  [{ type: "string", label: "Mês" }, "Rentabilidade no mês"],
  [moment("1", "MM").format("MMMM"), 1],
  [moment("2", "MM").format("MMMM"), 5],
  [moment("3", "MM").format("MMMM"), 4],
  [moment("4", "MM").format("MMMM"), 10],
  [moment("5", "MM").format("MMMM"), 11],
  [moment("6", "MM").format("MMMM"), 120],
  [moment("7", "MM").format("MMMM"), 1],
  [moment("8", "MM").format("MMMM"), 1],
  [moment("9", "MM").format("MMMM"), 1],
  [moment("10", "MM").format("MMMM"), 1],
  [moment("11", "MM").format("MMMM"), 1],
  [moment("12", "MM").format("MMMM"), null]
];

const test = async () => {
  let input = document.getElementById("test");

  let result = await html2canvas(input);
  console.log(result.toDataURL("image/png", 1.0));
};

const App = () => (
  <div className="App">
    <ExampleChart data={data} />
    <button id="botao" onClick={test}>
      Clique
    </button>
  </div>
);

export default App;
