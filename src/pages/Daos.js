import DAOS from '../daos'
import DaoCard from '../components/DaoCard'

function Daos() {
  return (
    <>
      {DAOS.map((dao) => (
        <DaoCard dao={dao} />
      ))}
    </>
  )
}

export default Daos
