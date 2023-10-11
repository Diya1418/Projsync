import Nav from "./components/navbar/nav";
import Login from "./components/logReg/login/login";
import Notices from "./components/Notices/notices";
import Events from "./components/Events/events";
import Alumni from "./components/Alumni/alumni";
import Home from "./components/Home/home";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Nav/>, children:[
      {index:true , element:<Home/>},
      {path:'/alumni', element:<Alumni/>},
      {path:'/login', element:<Login/>},
      {path:'/notices', element:<Notices/>},
      {path:'/events', element:<Events/>},

    ],
  },
  ]);

  return (
    <>
     <RouterProvider router={router}/>
      
    </>
  );
}

export default App;
