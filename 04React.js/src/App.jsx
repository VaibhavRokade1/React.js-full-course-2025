import "./App.css";
// Defoult Import
import UserComponts from "./UserComponts";

// Named Import & multiple import
import { Profile, Setting } from "./UserComponts";

// import variable ( key )
import { key } from "./UserComponts";

function App() {
  return (
    <>
      <h1>App Component</h1>
      <UserComponts />
      <Profile />
      <Setting />
      {key}
    </>
  );
}

export default App;
