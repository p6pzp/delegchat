import { Link } from 'react-router-dom'

function DaoCard({ dao }) {
  return (
    <>
      <h4>{dao.name}</h4>
      {dao.comingSoon
        ? <span>Coming soon</span>
        : <Link to={`/dao/${dao.name}`}>Open</Link>
      }
    </>
  )
}

export default DaoCard
