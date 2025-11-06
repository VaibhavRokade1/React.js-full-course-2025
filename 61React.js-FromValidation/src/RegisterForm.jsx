import { useEffect, useState } from "react";

const RegisterForm = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  useEffect(() => {
    const errors = {};
    if (FirstName.trim() === "") {
      errors.FirstName = "First Name is required";
    }
    if (LastName.trim() === "") {
      errors.LastName = "Last Name is required";
    }
    if (Email.trim() === "") {
      errors.Email = "Email is required";
    } else if (Email.includes("@") === false) {
      errors.Email = "Email is invalid";
    }

    if (Password === "") {
      errors.Password = "Password is required";
    } else if (Password !== ConfirmPassword) {
      errors.ConfirmPassword = "Passwords do not match";
    }

    if (Password.length < 6) {
      errors.Password = "Password must be at least 6 characters";
    }

    setFieldErrors(errors);
    // console.log(fieldErrors);
  }, [FirstName, LastName, Email, Password, ConfirmPassword]);

  const isFormValid = Object.keys(fieldErrors).length === 0;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-center my-5 text-4xl font-bold">Register Form</h1>
      <form
        className="shadow-md border rounded-2xl p-6 md:w-1/2 lg:w-1/3 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <div className="mb-1 font-semibold">First Name</div>
          <input
            type="text"
            className="w-full border rounded-sm p-2"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {fieldErrors.FirstName && (
            <div className="text-red-500 text-sm">{fieldErrors.FirstName}</div>
          )}
        </div>

        <div className="mb-4">
          <div className="mb-1 font-semibold">Last Name</div>
          <input
            type="text"
            className="w-full border rounded-sm p-2"
            onChange={(e) => setLastName(e.target.value)}
          />
          {fieldErrors.LastName && (
            <div className="text-red-500 text-sm">{fieldErrors.LastName}</div>
          )}
        </div>

        <div className="mb-4">
          <div className="mb-1 font-semibold">Email</div>
          <input
            type="email"
            className="w-full border rounded-sm p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          {fieldErrors.Email && (
            <div className="text-red-500 text-sm">{fieldErrors.Email}</div>
          )}
        </div>

        <div className="mb-4">
          <div className="mb-1 font-semibold">Password</div>
          <input
            type="password"
            className="w-full border rounded-sm p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          {fieldErrors.Password && (
            <div className="text-red-500 text-sm">{fieldErrors.Password}</div>
          )}
        </div>

        <div className="mb-4">
          <div className="mb-1 font-semibold">Confirm Password</div>
          <input
            type="password"
            className="w-full border rounded-sm p-2"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {fieldErrors.ConfirmPassword && (
            <div className="text-red-500 text-sm">
              {fieldErrors.ConfirmPassword}
            </div>
          )}
        </div>
        <div className="mb-4">
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full py-2 rounded-sm font-semibold bg-green-400 text-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
