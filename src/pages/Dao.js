import { useRouteLoaderData } from 'react-router-dom'
import Authenticated from '../layout/Authenticated'

function Dao() {
  const { dao } = useRouteLoaderData('dao')

  return (
    <Authenticated>
      <h2>{dao.name}</h2>
    </Authenticated>
  )
}

export default Dao
