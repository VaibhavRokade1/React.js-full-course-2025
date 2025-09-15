import "./App.css";
import UserForm from "./Components/UserForm";
import DisplayUsers from "./Components/DisplayUsers";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-slate-900 flex items-start gap-6 p-6">
        <UserForm />
        <DisplayUsers />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
