import { useContractWrite, usePrepareContractWrite } from 'wagmi'

function MintDelegNoun({ responseBytes, delegateeAddress, groupId, contractAddress }) {
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    functionName: 'mint',
    args: [responseBytes, delegateeAddress, groupId],
  })

  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  if (!delegateeAddress) {
    return null
  }

  return (
    <>
      <button disabled={!write} onClick={() => write?.()}>
        Mint DelegNoun
      </button>
      {isLoading && <p>Check wallet</p>}
      {isSuccess && <p>Transaction: {JSON.stringify(data)}</p>}
    </>
  )
}

export default MintDelegNoun
