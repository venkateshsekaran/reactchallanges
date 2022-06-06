import React, { useState } from "react";
function App() {
  let [number, setnumber] = useState("");
  let [check, setcheck] = useState("");
  let checkHandler = (event) => {
    setnumber(event.target.value);
    if (event.target.value % 2 === 0) {
      console.log("Even");
      setcheck(`${event.target.value} is Even`);
    } else {
      console.log("Odd");
      setcheck(`${event.target.value} is Odd`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <pre>Enter No is:{JSON.stringify(number)}</pre>
          <pre>{JSON.stringify(check)}</pre>
          <form>
            <label>Enter number to check odd or even: </label>
            <input type="number" onMouseLeave={checkHandler} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
