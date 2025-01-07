// const heading= React.createElement("h1",{id:"head"},"I love Bhubaneswar");
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


// const parent=React.createElement("div",{id:"parent"},React.createElement("h2",{},"i love cuttack"),
//     React.createElement("h2",{id:"child"},"i love cuttack"),
//     React.createElement("h2",{},"i love cuttack"),
//     React.createElement("h2",{},"i love cuttack"), );
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)


const appu=React.createElement("div",{id:"parent"},[
    React.createElement("h2",{id:"child"},[
        React.createElement("h1",{},"I am a developer"),
        React.createElement("h1",{},"I am a  ai developer"),
        React.createElement("h1",{},"I am a Web Developer")
    ]),
    React.createElement("h2",{id:"child2"},[
        React.createElement("h1",{},"I am a developer"),
        React.createElement("h1",{},"I am a  ai developer"),
        React.createElement("h1",{},"I am a Web Developer")
    ])
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(appu)
