// import React, { useState } from "react";

// function App() {
//   const [bgColor, setBgColor] = useState("white");

//   const colors = [
//     "red",
//     "green",
//     "blue",
//     "purple",
//     "lime",
//     "grey",
//     "yellow",
//     "pink",
//     "black",
//     "white",
//   ];

//   const changeColor = (color) => {
//     setBgColor(color);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: bgColor,
//         height: "100vh",
//         transition: "background-color 0.5s",
//       }}
//     >
//       <div>
//         {colors.map((color) => (
//           <button key={color} onClick={() => changeColor(color)}>
//             {color}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./index.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const colors = [
    "red",
    "green",
    "blue",
    "purple",
    "lime",
    "grey",
    "yellow",
    "pink",
    "black",
    "white",
  ];

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app-container" style={{ backgroundColor: bgColor }}>
      <h1>Select a Color</h1>
      <div className="button-container">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => changeColor(color)}
            className={`color-button ${color}`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
