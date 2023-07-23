import { useEffect } from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import DelegNouns from '../contracts/DelegNouns.json'
import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import './MintDelegNoun.css'

function MintDelegNoun({ responseBytes, delegateeAddress, groupId, chainId, contractAddress, onTransaction }) {
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

  useEffect(
    () => {
      if (isSuccess && data?.hash) {
        onTransaction(data.hash)
      }
    },
    [data, isSuccess, onTransaction]
  )

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
      <button className='black-button' disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? <Loading /> : 'Mint DelegNoun'}
      </button>
    </>
  )
}

export default MintDelegNoun
