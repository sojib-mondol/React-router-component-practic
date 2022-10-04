
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componests/Home/Home';
import About from './componests/About/About';
import Products from './componests/Products/Products';
import Main from './layout/Main';
import Friends from './componests/Friends/Friends';
import FriendsDetails from './componests/FriendsDetails/FriendsDetails'
import Posts from './componests/Posts/Posts';
import PostDetails from './componests/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: 'home', element: <Home></Home>},
        {path: 'products', element: <Products></Products>},
        {
          path: 'friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          }, 
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async ({params}) => {
            // 
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendsDetails></FriendsDetails>
        },
        {
          path: 'posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts');
          },
          element: <Posts></Posts>
        },
        {
          path: '/post/:psotId',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.psotId}`)
          },
          element: <PostDetails></PostDetails>
        }
        
      ]
    },
    
    {path: 'about', element: <About></About>},
    {path: '*', element: <div>This route not found</div>},

  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
