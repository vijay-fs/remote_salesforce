import React from "react";
import { Link } from "react-router-dom";
import { topmenu, bottommenu } from "../data/menudata";

const sideBar = () => {
  return (
    <div className="container top-0 fixed h-full w-52 bg-black border-cyan-400 border-r-2 flex flex-col justify-between z-[1]">
      <div className="mx-auto">
        <div className="p-4">
          <h1 className="text-white text-center">Remote Salesforce</h1>
        </div>
        <div className="p-4 navbar navbar-default navbar-static-top">
          <>
            {topmenu.map((item) => (
              <Link
                exact="true"
                to={item.url}
                key={item.id}
                activeclassname="active"
                className="flex flex-row items-center text-white p-2 hover:bg-slate-800 rounded w-40 mx-auto justify-left"
              >
                <img
                  className="w-6 h-6 rounded-full"
                  src={item.img}
                  alt={item.title}
                />
                <>
                  <h1 className="text-white ml-2 text-xs current [&.active]:bg-blue-400">
                    {item.title}
                  </h1>
                </>
              </Link>
            ))}
          </>
        </div>
      </div>
      <div className="">
        <div className="p-4">
          <>
            {bottommenu.map((item) => (
              <>
                <Link
                  to={item.url}
                  activeclassname="active"
                  className="flex flex-row items-center text-white p-2 hover:bg-slate-800 rounded w-40 mx-auto justify-left"
                  key={item.title}
                >
                  <img
                    className="w-6 h-6 rounded-full"
                    src={item.img}
                    alt={item.title}
                  />
                  <h1 className="text-white ml-2 text-xs">{item.title}</h1>
                </Link>
              </>
            ))}
          </>
        </div>
        <div className="p-4 text-white text-xs text-center border-t border-inherit">
          <p>Powered by Team v</p>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
