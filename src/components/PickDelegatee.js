import { useEffect, useState } from 'react'
import { getDelegatee } from '../api/karma'
import Loading from '../components/Loading'
import ErrorMessage from './ErrorMessage'

function PickDelegatee({ daoName, delegatorAddress, onDelegatee }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [delegateeAddress, setDelegateeAddress] = useState(null)

  useEffect(
    () => {
      if (daoName && delegatorAddress && !error && !delegateeAddress) {
        setLoading(true)
        getDelegatee(daoName, delegatorAddress).then(
          (delegatee) => {
            setLoading(false)
            setDelegateeAddress(delegatee)
            onDelegatee(delegatee)
          },
          (err) => {
            setLoading(false)
            setError(err)
          }
        )
      }
    },
    [daoName, delegatorAddress, error, delegateeAddress, onDelegatee]
  )

  if (!delegatorAddress) {
    return null
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <ErrorMessage error={error} onRetry={() => setError(null)} />
    )
  }

  return (
    <p><i>Delegatee</i> <code>{delegateeAddress}</code></p>
  )
}

export default PickDelegatee
