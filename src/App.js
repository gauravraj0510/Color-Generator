import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import { useEffect } from "react";

function App() {
  const [color, setColor] = useState("");
  const [percent, setPercent] = useState();
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#A020F0").all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (percent > 0 && percent < 100) {
        let colors = new Values(color).all(percent);
        console.log(colors);
        console.log(percent);
        setList(colors);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#ff0000"
            className={error ? "error" : null}
          />
          <input
            type="number"
            value={percent}
            placeholder="Distribution percent"
            onChange={(e) => setPercent(parseInt(e.target.value))}
            className={error ? "error" : null}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          // console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
              percent={percent}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
