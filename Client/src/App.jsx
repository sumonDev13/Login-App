import "./App.css";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Username from "./Components/UserName";
import Password from './Components/Password'
import Register from './Components/Register'
import Profile from './Components/Profile'
import Recovery from './Components/Recovery'
import Reset from './Components/Reset'
import PageNotFound from "./Components/PageNotFound";



/*root routes  */
const router = createBrowserRouter([
  {
      path : '/',
      element : <Username/>
  },
  {
      path : '/register',
      element : <Register/>
  },
  {
      path : '/password',
      element : <Password />
  },
  {
      path : '/profile',
      element : <Profile />
  },
  {
      path : '/recovery',
      element : <Recovery/>
  },
  {
      path : '/reset',
      element : <Reset></Reset>
  },
  {
      path : '*',
      element : <PageNotFound/>
  },
])


function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
