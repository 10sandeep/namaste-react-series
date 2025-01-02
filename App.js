      // it is just creating h1 element inside react,its a core thing of react

    //   {} is an object used for attribute
      const heading = React.createElement("h1", {id:"heading"} ,"Namaste React! ");
      //  when we are creating a root to rendering something inside it is a job of react dom
      //   when we wants to put our h1 inside the dom or browser we need react dom
         const root = ReactDOM.createRoot(document.getElementById("root"));
         root.render( heading);

        //   