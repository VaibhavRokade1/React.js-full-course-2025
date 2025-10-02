import React from "react";

function Books({ volumeInfo }) {
  return (
    <div className="border p-4 rounded-lg shadow w-64 bg-white flex flex-col items-center">
      <img
        src={volumeInfo.imageLinks.thumbnail}
        alt=""
        className="w-24 h-24 rounded-full object-cover mb-3"
      />
      <h2 className="text-lg font-semibold">{volumeInfo.title}</h2>
      <p className="text-sm text-gray-600">
        <span className="text-2xl">authors:</span>
        {volumeInfo.authors.map((author) => (
          <p>{author}</p>
        ))}
      </p>
      <p className="text-sm text-gray-800">
        <span className="font-bold"> description :</span>{" "}
        {volumeInfo.description.substring(0, 100)}...
      </p>
    </div>
  );
}

export default Books;
