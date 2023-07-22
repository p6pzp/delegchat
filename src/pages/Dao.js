import { useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import { useAccount } from 'wagmi'
import { encodeAbiParameters } from 'viem'
import { SismoConnectButton } from '@sismo-core/sismo-connect-react'
import Authenticated from '../layout/Authenticated'

const signMessage = (address) => encodeAbiParameters(
  [{ type: 'address', name: 'delegateAddress' }],
  [address]
)

function Dao() {
  const { dao } = useRouteLoaderData('dao')
  const { address } = useAccount()

  const [responseBytes, setResponseBytes] = useState(null)

  return (
    <Authenticated>
      <h2>{dao.name}</h2>
      {responseBytes && (
        <span>Yay!</span>
      )}
      {!responseBytes && (
        <SismoConnectButton
          config={{
            appId: process.env.REACT_APP_SISMO_APP_ID,
          }}
          auths={[
            {
              authType: 3, // AuthType.EVM_ACCOUNT
            },
          ]}
          claims={[
            {
              groupId: dao.groupId,
            },
          ]}
          signature={{ message: signMessage(address) }}
          onResponseBytes={(responseBytes) => setResponseBytes(responseBytes)}
          text="Mint a DelegNoun"
        />
      )}
    </Authenticated>
  )
}

export default Dao
