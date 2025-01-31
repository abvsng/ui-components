# Accordion Component

A simple, reusable, and responsive accordion component built with React and Tailwind CSS.

## Features
- Collapsible content with smooth toggle functionality.
- Lightweight and easy to integrate.
- Fully customizable with Tailwind.

## Installation
You can copy the `Accordion` component into your project.

If you haven't installed TailwindCSS, follow the official setup guide:  
[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

## Usage
Import the component and use it in your project.

```jsx
import Accordion from "./Accordion";

export default function App() {
  return (
    <div className="p-5">
      <Accordion title="Click Me">
        This is the accordion content.
      </Accordion>
    </div>
  );
}
# Modal Component

A reusable and customizable modal component built with React and Tailwind CSS.

## Installation

This component does not require any additional dependencies beyond React and Tailwind CSS.

## Usage

Import the `Modal` component and use it within your React project.

### Example:

```jsx
import { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>

      {showModal && (
        <Modal setShowModal={setShowModal}>
          <h2 className="text-xl mb-4">Modal Content</h2>
          <p>This is a simple modal component.</p>
        </Modal>
      )}
    </div>
  );
}
