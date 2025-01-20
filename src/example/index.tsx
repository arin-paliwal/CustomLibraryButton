import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "../components";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Button Component Demo</h1>
      <Button>
        <h2>Test Button</h2>
        <p>This is a test of the Button component</p>
      </Button>

      <Button
        backgroundColor="#f0f4ff"
        padding="2rem"
        shadow="0 4px 12px rgba(0,0,0,0.1)"
      >
        <h2>Custom Button</h2>
        <p>This is a custom styled Button</p>
      </Button>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
