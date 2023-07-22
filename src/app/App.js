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
            {
              path: '/dao/:daoName',
              children: [
                {
                  index: true,
                  element: <Dao />,
                },
                {
                  path: 'channel/:channelId',
                  element: <Channel />,
                },
              ],
            },
          ],
        },
      ])}
      fallbackElement={<span>Loading...</span>}
    />
  )
}

export default App
