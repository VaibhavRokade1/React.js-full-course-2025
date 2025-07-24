import User from "./User";

function App() {
  //  function creation on main file
  const handleName = (name) => {
    alert(name);
  };

  return (
    <>
      <h1>Pass functions in to the props</h1>
      <User handleName={handleName} name="Vaibhav" />
      <br />
      <br />
      <User handleName={handleName} name="Aditya" />
      <br />
      <br />
      <User handleName={handleName} name="Vikas" />
      <br />
      <br />
      <User handleName={handleName} name="Kishor" />
      <br />
      <br />
      <User handleName={handleName} name="Anil" />
      <br />
      <br />
    </>
  );
}

export default App;
