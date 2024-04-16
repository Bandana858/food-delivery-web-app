//const parent = React.createElement(
//  "div",
// {id: "parent"},
//React.createElement(
//  "div",
//{id: "child"},
//[React.createElement("h1",{},"I'm h1 tag"),
//React.createElement("h2",{},"I'm h2 tag")]
//)
//)

//console.log(parent)

//const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(parent);


//more complex nested elements using react
//const parent = React.createElement("div",
//{id: "parent"},
//[
//React.createElement("div",
//{id: "child"},
//[
//React.createElement("h1", {}, "I'm an h1 tag"),
//React.createElement("h2", {}, "I'm an h2 tag")
//]),
//React.createElement("div",
//{id: "child2"},
//[
//React.createElement("h1", {}, "I'm an h1 tag"),
//React.createElement("h2", {}, "I'm an h2 tag")
//]),
//])

//console.log(parent);
//const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(parent);


//Using react packages installed in our app
//import React from "react";
//import ReactDOM from "react-dom/client"
//const parent = React.createElement("div",
//{id: "parent"},
//[
//React.createElement("div",
//{id: "child"},
//[
//React.createElement("h1", {}, "hello world"),
//React.createElement("h2", {}, "I'm an h2 tag")
//]),
//React.createElement("div",
//{id: "child2"},
//[
//React.createElement("h1", {}, "I'm an h1 tag"),
//React.createElement("h2", {}, "I'm Bandana Roy")
//]),
//])

//console.log(parent);
//const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(parent);

//import React from "react";
//import ReactDOM from "react-dom/client"

//const heading = React.createElement(
//"h1",
//{id: "heading"},
//"Namaste React"
//);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//creating h1 tag using JSX
//const headingJSX = <h1 id= "heading">Namaste React using JSX</h1>
//const roots = ReactDOM.createRoot(document.getElementById("root"));
//roots.render(headingJSX);

//Multiple line JSX codes needs to be wrapped inside brackets
//const jsxHeading = (<h1 className = "head">
//Namaste React Using JSX
//It is very helpful
//</h1>)
//const roott = ReactDOM.createRoot(document.getElementById("root"));
//roott.render(jsxHeading)


//Functional Component
//const HeadingComponent = ()=>{
//return <h1>Namaste React Functional Component</h1>
//}
//const functionRoot = ReactDOM.createRoot(document.getElementById("root"))
//functionRoot.render(<HeadingComponent/>)


//COMPONENT COMPOSITION
//import React from "react";
//import ReactDOM from "react-dom/client"
//component inside component
//const Title=()=>(
//<h1 className="head">
//Namaste React Using JSX
//</h1>
//);

//const HeadingComponent=()=>(
//<div id="container">
//<Title/>
//<h1 className="heading">
//Namaste React Functional Component
//</h1>
//</div>
//);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent/>);

//putting any js code inside JSX
//const number = 1000;
//const HeadingComponent=()=>(
//<div id="container">
//{number}
//<h2>{100+200}</h2>
//<h1 className="heading">
//Namaste React Functional Component
//</h1>
//</div>
//);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent/>);

//react element inside react component
//const title=(
//<h1 className="head">
//Namaste React Using JSX
//</h1>
//);
//const HeadingComponent=()=>(
//<div id="container">
//{title}
//<h1 className="heading">
//Namaste React Functional Component
//</h1>
//</div>
//);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent/>);

//react element inside react element
//const elem = <span>React Element</span>
//const title=(
//<h1 className="head">
//{elem}
//Namaste React Using JSX
//</h1>
//);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(title);

//react component inside react element
//const HeadingComponent=()=>(
//<div id="container">
//<h1 className="heading">Namaste react finctional component</h1>
//</div>
//);
//const title=(
//<h1 className="head">
//namaste react using JSX
//<HeadingComponent/>

//</h1>)
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(title);


//BUILDING A FOOD DELIVERY APP
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

import Header from "./components/Header.js"

import Body from "./components/Body.js"

import About from "./components/About.js"
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import cartPage from "./components/cartPage.js";
import CartPage from "./components/cartPage.js";



const Grocery = lazy(() => import("./components/Grocery.js"));
const AppLayout = () => {
  const [userInfo, setuserInfo] = useState()

  //authetication//
  useEffect(() => {
    const data = {
      Name: "Bandana Roy",
    }
    setuserInfo(data.Name)
  }, [])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userInfo, setuserInfo }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  )
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading......</h1>}>
          <Grocery />
        </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cartPage",
        element: <CartPage/>
      }
    ],
    errorElement: <Error />
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
