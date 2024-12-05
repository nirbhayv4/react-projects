import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <h1 className="text-center" style={{ fontSize: "70px" }}>
            {count}
          </h1>
          <div className="d-flex">
            <button onClick={handleIncrement} className="btn btn-success me-3">
              Increment
            </button>
            <button onClick={handleDecrement} className="btn btn-danger ms-3">
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
