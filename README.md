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
