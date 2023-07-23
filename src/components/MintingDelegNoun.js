import { Link } from 'react-router-dom'
import { useWaitForTransaction } from 'wagmi'
import Loading from '../components/Loading'
import ErrorMessage from './ErrorMessage'

function MintingDelegNoun({ chainId, transactionHash, daoName, delegateeAddress }) {
  console.debug('transactionHash', transactionHash)
  const {
    data,
    error,
    isLoading,
    // isSuccess,
    isError,
    refetch,
  } = useWaitForTransaction({
    enabled: !!transactionHash,
    chainId,
    hash: transactionHash,
  })

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (isError) {
    return (
      <ErrorMessage error={error} onRetry={refetch} />
    )
  }

  console.debug('data', data)
  return (
    <>
      <p><b>NFT Minted!</b></p>
      <Link to={`/dao/${daoName}/channel/${delegateeAddress}`}>Enter chat</Link>
    </>
  )
}

export default MintingDelegNoun
