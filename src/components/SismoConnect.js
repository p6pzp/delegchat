import { useAccount } from 'wagmi'
import { encodeAbiParameters } from 'viem'
import { SismoConnectButton } from '@sismo-core/sismo-connect-react'

const signMessage = (address) => encodeAbiParameters(
  [{ type: 'address', name: 'delegateAddress' }],
  [address]
)

function SismoConnect({ onResponseBytes, groupId, text = 'Sismo connect' }) {
  const { address } = useAccount()

  if (!groupId) {
    return null
  }

  return (
    <SismoConnectButton
      config={{
        appId: process.env.REACT_APP_SISMO_APP_ID,
        ...(
          !process.env.REACT_APP_VAULT_IMPERSONATE
            ? {}
            : {
              vault: {
                impersonate: [
                  process.env.REACT_APP_VAULT_IMPERSONATE,
                ],
              },
            }
        ),
      }}
      auths={[
        {
          authType: 3, // AuthType.EVM_ACCOUNT
        },
      ]}
      claims={[
        {
          groupId,
        },
      ]}
      signature={{ message: signMessage(address) }}
      onResponseBytes={onResponseBytes}
      text={text}
    />
  )
}

export default SismoConnect
