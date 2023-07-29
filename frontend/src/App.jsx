import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <>
      <div className="App m-1">
        <h1>Hop On!</h1>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
