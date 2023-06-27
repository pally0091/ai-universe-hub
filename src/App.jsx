/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "./App.css";
import ToolCard from "./ToolCard";

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
        <div className="grid grid-cols-3 w-11/12 mx-auto gap-4 mt-3">
          {tools?.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
            ></ToolCard>
          ))}
        </div>
        <footer>footer section</footer>
      </div>
    </>
  );
}

export default App;
