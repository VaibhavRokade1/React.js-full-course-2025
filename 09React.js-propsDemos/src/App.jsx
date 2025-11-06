import { useEffect, useState } from "react";
import User from "./components/User";

export default function App() {
  // const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  useEffect(() => {
    const fun = async () => {
      setLoading(true);
      try {
        const responce = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responce.json();

        // setUserData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fun();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    // <div className="p-6">
    //   <h1 className="text-2xl font-bold mb-4">Users List (Props Demo)</h1>
    //   <div className="flex gap-4 flex-wrap">
    //     {userData.map((user) => (
    //       <User {...user} />
    //     ))}
    //   </div>
    // </div>
    <>
      <div className="flex justify-center p-2">
        {" "}
        <div className="text-white border p-5 ">
          <h1 className="text-2xl font-extrabold">Contact Form</h1>
          <form>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              className="text-white border border-gray-400 p-2 rounded-2xl my-5"
              placeholder="Enter a name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <button className="border p-2 px-4 rounded bg-green-800 ">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-2">
        <h1 className="text-2xl text-center text-white">Name : {name}</h1>
      </div>
    </>
  );
}
