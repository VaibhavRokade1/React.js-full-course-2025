import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const MyForm = () => {
  const [captchaDone, setCaptchaDone] = useState(false);

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaDone(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaDone) {
      alert("Please verify reCAPTCHA ✅");
      return;
    }
    alert("Form submitted successfully 🎉 (not fully secure, demo only!)");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 mb-2 block"
      />
      <ReCAPTCHA
        sitekey="6LfPetorAAAAAKhcPqSRRyRpeA7KMsY-ZTDVrIRn" 
        onChange={handleCaptcha}
      />
      <button
        type="submit"
        disabled={!captchaDone}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;
