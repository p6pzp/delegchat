import { json } from 'react-router-dom'
import DAOS from '../daos'

function daoLoader({ params }) {
  const dao = DAOS.find((dao) => dao.name === params?.daoName)
  if (!dao) {
    throw json({ message: `DAO ${params?.daoName} not found` }, { status: 404 })
  }
  console.debug('dao', { dao })
  return { dao }
}

export default daoLoader
