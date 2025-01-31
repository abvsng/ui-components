import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-black text-white px-4 py-2 hover:bg-slate-800 rounded-full cursor-pointer"
        onClick={() => {
          setShowModal((p) => !p);
        }}
      >
        Modal
      </button>
      {showModal && <Modal setShowModal={setShowModal}></Modal>}
    </>
  );
}

export default App;
