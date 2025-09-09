import { useState } from "react";
import "./App.css";
function Square() {
  const [value, setvalue] = useState(null);
  function handleClicked() {
    setvalue("X");
  }
  return (
    <button
      onClick={handleClicked}
      className="text-3xl border border-gray-600 h-12 w-12 m-1 bg-white leading-9"
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div className="flex">
        <Square value={1} />
        <Square value={0} />
        <Square value={1} />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default Board;
