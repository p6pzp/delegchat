import { json } from 'react-router-dom'

export async function getDelegatee(daoName, delegator) {
  const response = await fetch(
    `https://api.karmahq.xyz/api/dao/${daoName}/tokenholders/${delegator}`
  )

  if (response.status !== 200) {
    throw json({ message: `Delegatee at ${daoName} from ${delegator} failed` }, {
      status: response.status,
    })
  }

  const { data } = await response.json()

  if (!data?.tokenholders || !data.tokenholders.length || !data.tokenholders[0].delegatingHistories.length) {
    throw json({ message: `Delegatee at ${daoName} from ${delegator} wrong response` })
  }

  return data.tokenholders[0].delegatingHistories[0].toDelegate
}
