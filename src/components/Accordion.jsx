import { useState } from "react";

/* eslint-disable react/prop-types */
export function Accordion({ title, children }) {
  const [showAccContent, setShowAccContent] = useState(false);
  return (
    <>
      <div className="bg-black text-white p-3 w-1/5 m-3  rounded-3xl">
        <AccTitle title={title} setShowAccContent={setShowAccContent} />
        {showAccContent && <AccContent content={children} />}
      </div>
    </>
  );
}
function AccTitle({ title, setShowAccContent }) {
  return (
    <div
      onClick={() => {
        setShowAccContent((p) => !p);
      }}
      className=" p-2 font-semibold text-xl cursor-pointer hover:bg-gray-700"
    >
      {title}
    </div>
  );
}
function AccContent({ content }) {
  return (
    <>
      <div className="text-xs">{content}</div>
    </>
  );
}
