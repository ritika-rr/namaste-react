/*const heading = React.createElement("h1",{id:"heading"},"my kingdom is ritika's kingdom !!");*/
const parent=React.createElement("parent",{id:"parent"},
[React.createElement("child",{id:"child"},
[React.createElement("h1",{},"This is h1 tag"),
React.createElement("h2",{},"This is h2 tag")]),
React.createElement("child",{id:"child"},
[React.createElement("h1",{},"This is h1 tag"),
React.createElement("h2",{},"This is h2 tag")])
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);