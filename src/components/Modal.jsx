/* eslint-disable react/prop-types */
export default function Modal({ setShowModal, children }) {
  return (
    <>
      <div
        onClick={() => {
          setShowModal(false);
        }}
        id="modalWrapper"
        className="fixed flex top-0 w-full h-full flex-row items-center justify-center bg-gray-800/50 bg-opacity-20"
      >
        <div
          style={{ overflowY: "auto" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          id="modal"
          className="fixed w-3/7 h-4/5 bg-black text-white p-3 rounded-xl"
        >
          <button
            className="p-1 rounded-full hover:bg-slate-600 cursor-pointer bg-slate-900"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <Cross />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
function Cross() {
  return (
    <>
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
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </>
  );
}
