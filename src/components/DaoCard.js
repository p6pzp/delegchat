import { Link } from 'react-router-dom'
import './DaoCard.css';

function DaoCard({ dao }) {
  return (
    <div className='DaoCard'>
      <h2>{dao.name}</h2>
      <div>
        {dao.comingSoon
          ? <span>Coming soon</span>
          : <Link to={`/dao/${dao.name}`}>Open</Link>
        }
      </div>
    </div>
  )
}

export default DaoCard
