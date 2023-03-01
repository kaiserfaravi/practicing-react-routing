import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Products from './Component/Products/Products';
import Main from './Layout/Main';
import FriendDetail from './Component/FriendDetail/FriendDetail';

function App() {
  const router = createBrowserRouter([
 {path:"/",
  element: <Main></Main>,
  children:[
  {path:"/", element: <Home></Home>},
  {path:"/home", element: <Home></Home>},
  {path:"/friend",
  loader:async()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
  },
  element:<Products></Products>}
 ]},
 {
  path:"/friend/:friendId",
  loader:async ({params})=>{
   
    return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
  },
  element:<FriendDetail></FriendDetail>
 },
 {path:"/about", element: <About></About>},
 {path:'*',element: <div><h3>Routes not found</h3></div> }
 
  ])
  return (
    <div className="App">
   <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
