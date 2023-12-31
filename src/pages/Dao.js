import { useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import { useAccount, useNetwork } from 'wagmi'
import DaoInfo from '../components/DaoInfo'
import WalletConnect from '../components/WalletConnect'
import SismoConnect from '../components/SismoConnect'
import PickDelegatee from '../components/PickDelegatee'
import MintDelegNoun from '../components/MintDelegNoun'
import MintingDelegNoun from '../components/MintingDelegNoun'
import ErrorMessage from '../components/ErrorMessage'

function Dao() {
  const { dao } = useRouteLoaderData('dao')
  const { address } = useAccount()
  const { chain } = useNetwork()

  const [delegateeAddress, setDelegateeAddress] = useState(null)
  const [responseBytes, setResponseBytes] = useState(null)
  const [transactionHash, setTransactionHash] = useState(null)

  if (!chain || !address) {
    return (
      <>
        <DaoInfo dao={dao} />
        <WalletConnect />
      </>
    )
  }

  if (dao.comingSoon) {
    return (
      <DaoInfo dao={dao} />
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
    <div className='container'>
      <DaoInfo dao={dao} />
      {responseBytes
        ? (
          <>
            <PickDelegatee
              daoName={dao.name}
              delegatorAddress={address}
              onDelegatee={setDelegateeAddress}
            />
            {delegateeAddress && !transactionHash && (
              <MintDelegNoun
                chainId={chain.id}
                contractAddress={dao.contracts[chain.id]}
                groupId={dao.groupId}
                delegateeAddress={delegateeAddress}
                responseBytes={responseBytes}
                onTransaction={setTransactionHash}
              />
            )}
            {delegateeAddress && transactionHash && (
              <MintingDelegNoun
                chainId={chain.id}
                transactionHash={transactionHash}
                daoName={dao.name}
                delegateeAddress={delegateeAddress}
              />
            )}
          </>
        )
        : (
          <SismoConnect
            groupId={dao.groupId}
            onResponseBytes={setResponseBytes}
          />
        )
      }
    </div>
  )
}

export default Dao
