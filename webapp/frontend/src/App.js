// App.js

import {BrowserRouter,Routes,Route, createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";


const Layout =()=>{
  return(<>
    <Navbar/>
    <Outlet/>
    <Footer/>
     </>)
}
const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
    {
      path:"/about",
      element:<About/>
      },
    {
      path:"/contact",
      element:<Contact/>
      },
    ]
  },
  {
    path:"/register",
    element:<Register/>,
  },
  {
    path:"/login",
    element:<Login/>,
  }
])

function App(){
  return(<div className="app">
    <div className="container"> 
    <RouterProvider router={router}/>
    </div>
    </div>
 )
}

export default App;
