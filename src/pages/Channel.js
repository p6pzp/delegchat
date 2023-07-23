import { useRouteLoaderData } from 'react-router-dom'
import { useAccount, useNetwork } from 'wagmi'
import DaoInfo from '../components/DaoInfo'
import WalletConnect from '../components/WalletConnect'
import ErrorMessage from '../components/ErrorMessage'

function Channel() {
  const { dao } = useRouteLoaderData('dao')
  const { address } = useAccount()
  const { chain } = useNetwork()

  if (!chain || !address) {
    return (
      <>
        <DaoInfo dao={dao} />
        <WalletConnect />
      </>
    )
  }

  if (!(chain.id in dao.contracts)) {
    return (
      <>
        <DaoInfo dao={dao} />
        <ErrorMessage
          error={{ message: `Chain ${chain.name} not supported` }}
        />
      </>
    )
  }

  return (
    <>
      <DaoInfo dao={dao} />
      <span>Channel</span>
    </>
  )
}

export default Channel
