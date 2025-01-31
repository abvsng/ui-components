import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Accordion({ title, children }) {
  const [showAccContent, setShowAccContent] = useState(false);
  return (
    <>
      <div className="bg-black text-white p-2 w-1/5 m-3 rounded-xl">
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
      className=" p-2 font-semibold text-xl cursor-pointer hover:bg-gray-700 rounded-xl"
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
