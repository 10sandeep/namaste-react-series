      // it is just creating h1 element inside react,its a core thing of react

    //   {} is an object used for attribute
      // const heading = React.createElement("h1", {id:"heading"} ,"Namaste React! ");
      //  when we are creating a root to rendering something inside it is a job of react dom
      //   when we wants to put our h1 inside the dom or browser we need react dom
        //  const root = ReactDOM.createRoot(document.getElementById("root"));
        //  root.render( heading);

        //   

       //creating a nested structure
        // const parent=React.createElement("div", {id:"parent"},
        //   React.createElement("div" ,{id:"child"},
        //   React.createElement("h1" ,{},"i am the heading") ) );
        //   console.log(parent)

        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(parent);

        //creating a siblings you can convert it into an array of children

        const parent=React.createElement("div", {id:"parent"},
         [ React.createElement("div" ,{id:"child"},[
          React.createElement("h1" ,{},"i am the heading"),
          React.createElement("h2" ,{},"i am the second heading"),
          ]),
        
         
            React.createElement("div" ,{id:"child"},[
            React.createElement("h1" ,{},"i am the heading"),
            React.createElement("h2" ,{},"i am the second heading"),
          ]),
         ]);




          console.log(parent)

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);

