// const heading = React.createElement(
//   "h1",
//   {
//     style: {
//       color: "blue",
//       fontSize: "24px",
//       backgroundColor: "lightgray"
//     }
//   },
//   "Hello world"
// );

const heading = React.createElement(
  "div",
  {id:"parent"},
  React.createElement("h1",{id:"first child"},"Hello world"),
  React.createElement("h2",{id:"second child", style:{background:"red"}},"Hello world")
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//its converts the js object or react element to the html format which browser understands(browser doesn't understand react direclty)
console.log(heading);//object