import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hiiii My name is Sandeep");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
//react element
const name = <h1>Jai Jagannath</h1>;

//react component
const Heading2 = () => {
  return <h1>Suprava Nayak</h1>; 
}; 

// const Heading1 = () => (
//   <div>
//     <h1>Sandeep Nayak</h1>
//     <Heading2 />
//   </div>
// );

const Heading1 = () => {
 return  <div>
      <h1>Sandeep Nayak</h1>
      <Heading2 />
    </div>
  };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading1 />);
