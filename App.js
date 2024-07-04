/*const heading = React.createElement("h1",{id:"heading"},"my kingdom is ritika's kingdom !!");*/
import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",
{id:"heading"},
"Varanasi: An oldest city ")
console.log(heading);

const JsxHeading = (
<h1 className="heading" tabIndex="5">The ancient city of World</h1>)
console.log(JsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"))

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namastey Banaras!!
        </h1>
);

//component composition: composing two componets into one another
const HeadingComponent = () => (
    <div id="container">
        <h2>{40+50}</h2>
        {Title()}
         <Title />
         <Title></Title>
        <h1 className="heading">Hii We are learning functional components</h1>
    </div>
);

root.render(<HeadingComponent />)

