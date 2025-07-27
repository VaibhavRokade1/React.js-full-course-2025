import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//  {/* <h1>Derived State</h1>
//       <ul>
//         <li>
//           State that is calculated or derived form the onthor state value or
//           props within your components.
//         </li>
//         <li>Derived state can be a variable</li>
//         <li>No Need to extra state only variable and constants are enough</li>
//       </ul> */}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
