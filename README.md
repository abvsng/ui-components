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
      <Accordion title="Click Me">This is the accordion content.</Accordion>
    </div>
  );
}
```

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
```

# SideBar Menu Component

A simple sidebar menu component built with React and Tailwind CSS.

## Features

- Responsive sidebar menu.
- Click outside to close the menu.
- Customizable menu content via `children` prop.

## Installation

No installation is required. Just copy the `SideBar` component into your project.

## Usage

Import the `SideBar` component and wrap it around your menu items.

```jsx
import SideBar from "./SideBar";

export default function App() {
  return (
    <SideBar>
      <ul className="p-4 text-white">
        <li className="p-2">Home</li>
        <li className="p-2">About</li>
        <li className="p-2">Contact</li>
      </ul>
    </SideBar>
  );
}
```

## Props

| Prop     | Type        | Description                          |
| -------- | ----------- | ------------------------------------ |
| children | `ReactNode` | The menu content inside the sidebar. |

## Customization

The component uses Tailwind CSS for styling. You can customize it by modifying the class names in the `SideBar`, `SideBarMenu`, and `HamMenu` components.
