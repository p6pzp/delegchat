import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Layout />,
          errorElement: <span>Error</span>,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
      ])}
      fallbackElement={<span>Loading...</span>}
    />
  )
}

export default App
