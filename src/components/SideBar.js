import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.png";
import knowledge from "../assets/knowledge.png";
import members from "../assets/members.png";
import teams from "../assets/teams.png";
import vault from "../assets/vault.png";
import chat from "../assets/chat.png";
import settings from "../assets/settings.png";
import company from "../assets/company.png";
import myprofile from "../assets/myprofile.png";
export const topmenu = [
  { title: "DASHBOARD", url: "/", img: home, tabClicked: false },
  { title: "KNOWLEDGE", url: "/knowledge", img: knowledge, tabClicked: false },
  { title: "MEMBERS", url: "/members", img: members, tabClicked: false },
  { title: "TEAMS", url: "/teams", img: teams, tabClicked: false },
  { title: "VAULT", url: "/vault", img: vault, tabClicked: false },
  { title: "CHAT", url: "/chat", img: chat, tabClicked: false },
];
export const bottommenu = [
  { title: "SETTINGS", url: "/settings", img: settings },
  { title: "COMPANY", url: "/company", img: company },
  { title: "MY PROFILE", url: "/myprofile", img: myprofile },
];
const sideBar = () => {
  return (
    <div className="container top-0 fixed h-full w-56 bg-black border-cyan-400 border-r-2 flex flex-col justify-between z-[1]">
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
