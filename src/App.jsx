/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [tools, setTools] = useState();

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setTools(data?.data.tools));
    console.log(tools);
  }, []);
  return (
    <>
      <div>
        <h1
          id="head-name"
          className="text-5xl font-bold bg-black text-gray-600 py-4 italic"
        >
          AI Universe Hub
        </h1>
        <div>items </div>
        <footer>footer section</footer>
      </div>
    </>
  );
}

export default App;
