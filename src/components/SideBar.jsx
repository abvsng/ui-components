/* eslint-disable react/prop-types */

import { useState } from "react";

export default function SideBar({ children }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <HamMenu setShow={setShow} />
      {show && <SideBarMenu setShow={setShow} MenuData={children} />}
    </>
  );
}
function SideBarMenu({ setShow, MenuData }) {
  return (
    <>
      <div
        id="sideBarWrapper"
        className="w-full h-full fixed"
        onClick={() => {
          setShow(false);
        }}
      >
        <div
          id="sideBarMenu"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-3/7 h-full fixed right-0 bg-slate-400"
        >
          {MenuData}
        </div>
      </div>
    </>
  );
}
function HamMenu({ setShow }) {
  return (
    <>
      <button
        onClick={() => {
          setShow((p) => !p);
        }}
        className="bg-slate-300 hover:bg-slate-500 p-1 m-2 rounded-xl cursor-pointer fixed right-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </>
  );
}
