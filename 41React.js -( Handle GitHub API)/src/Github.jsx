import React from "react";
import useGithubUser from "./useGithubUser";

function Github({
  name,
  avatar_url,
  login,
  bio,
  followers,
  following,
  public_repos,
}) {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-6 max-w-2xl mx-auto transition hover:scale-[1.01] duration-300">
        <div className="flex items-center gap-5">
          <img
            src={
              avatar_url || "https://avatars.githubusercontent.com/u/583231?v=4"
            }
            alt="Avatar"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {name || "unknown"}
            </h2>
            <p className="text-slate-500">@{login || "example1"}</p>
          </div>
        </div>
        <p className="mt-4 text-slate-700 leading-relaxed">
          {bio ||
            "This is a placeholder bio from GitHub. In the real app, this will bedynamically loaded."}
        </p>
        <div className="mt-6 flex justify-between text-sm text-slate-600">
          <p>
            <span className="font-semibold text-zinc-800">Repos:</span>{" "}
            {public_repos || 0}
          </p>
          <p>
            <span className="font-semibold text-zinc-800">Followers:</span>{" "}
            {followers || 0}
          </p>
          <p>
            <span className="font-semibold text-zinc-800">Following:</span>
            {following || 0}
          </p>
        </div>
      </div>
    </>
  );
}

export default Github;
