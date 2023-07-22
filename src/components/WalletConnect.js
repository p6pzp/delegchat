import { useConnectModal } from '@rainbow-me/rainbowkit'

function WalletConnect() {
  const { openConnectModal, connectModalOpen } = useConnectModal()

  return (
    <button onClick={() => openConnectModal?.()} disabled={connectModalOpen}>
      {connectModalOpen ? 'Connecting wallet...' : 'Connect wallet'}
    </button>
  )
}

export default WalletConnect
