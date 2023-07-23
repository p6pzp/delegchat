import { Link } from 'react-router-dom'

function DaoCard({ dao }) {
  return (
    <>
      <h4>{dao.name}</h4>
      <Link to={`/dao/${dao.name}`}>Enter</Link>
    </>
  )
}

export default DaoCard
