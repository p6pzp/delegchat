import { useAccount } from 'wagmi'
import WalletConnect from '../components/WalletConnect'

function Authenticated({ children }) {
  const { isConnected } = useAccount()

  if (!isConnected) {
    return (
      <WalletConnect />
    )
  }

  return (
    children
  )
}

export default Authenticated
