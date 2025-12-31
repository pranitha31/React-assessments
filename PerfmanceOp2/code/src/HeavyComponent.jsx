import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered!");

  return (
    <div style={{ marginTop: "30px", padding: "20px", border: "2px solid #333" }}>
      <h2>Heavy Component</h2>
      <p>This is a heavy UI section that should not re-render when the counter updates.</p>
    </div>
  );
}

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(HeavyComponent);