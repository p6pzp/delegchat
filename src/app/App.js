import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { hardhat } from 'viem/chains'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import Dao from '../pages/Dao'
import Channel from '../pages/Channel'

const { chains, publicClient } = configureChains(
  [
    hardhat,
  ],
  [
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'DelegChat',
  projectId: process.env.REACT_APP_PROJECT_ID,
  chains,
})

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

function App() {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} modalSize="compact">
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
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
