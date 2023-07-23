import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import DelegNouns from '../contracts/DelegNouns.json'
import ErrorMessage from '../components/ErrorMessage'

function MintDelegNoun({ responseBytes, delegateeAddress, groupId, chainId, contractAddress }) {
  const {
    isError: prepareIsError,
    error: prepareError,
    refetch,
    config,
  } = usePrepareContractWrite({
    enabled: !!delegateeAddress,
    abi: DelegNouns,
    chainId,
    address: contractAddress,
    functionName: 'mint',
    args: [responseBytes, groupId, delegateeAddress],
  })

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    write,
    reset,
  } = useContractWrite(config)

  if (!delegateeAddress) {
    return null
  }

  if (prepareIsError) {
    return (
      <ErrorMessage error={prepareError} onRetry={() => refetch()} />
    )
  }

  if (isError) {
    return (
      <ErrorMessage error={error} onRetry={() => reset()} />
    )
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
