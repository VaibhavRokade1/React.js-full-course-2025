import React from "react";

export default function Card({ name, contact, city, email, laptop }) {
  // const { name, contact, city, email } = props;
  return (
    <div className="w-80 h-100 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-md hover:shadow-sky-400 transition-shadow">
      <div className="w-full rounded-lg h-40 bg-sky-300 overflow-hidden flex items-center justify-center">
        <img
          src="https://imgs.search.brave.com/gxrkxupu1g8V3tQna5d8FYKIoRoYIXe9qGEO7WphDAU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NDQ0MjQxMS9waG90/by9zZWxmLW1hbmFn/ZW1lbnQtaXMtYS1m/cmVlbGFuY2Vycy1n/cmVhdGVzdC10b29s/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UbGItOWV6LWJ2/N2hLdDRtSkNtSzg5/R3oxS2FiaWJKaVdC/U0JhVUlRejNJPQ"
          alt="user not found..."
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h2 className="text-3xl font-extrabold text-sky-400 py-2">{name}</h2>
        <p>
          <span className="font-bold">Contact : </span> {contact}
        </p>
        <p>
          <span className="font-bold">City : </span> {city}
        </p>
        <p>
          <span className="font-bold">Email : </span> {email}
        </p>
        {laptop && (
          <p className="font-bold">
            <span className="text-green-500 font-bold"> Laptop : </span>{" "}
            {laptop}
          </p>
        )}
      </div>
      <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
        See More
      </button>
    </div>
  );
}
