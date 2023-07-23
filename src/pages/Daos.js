import DAOS from '../daos'
import DaoCard from '../components/DaoCard'
import './Daos.css';

function Daos() {
  return (
    <div className='container'>
      <div className='gridcontainer'>
        {DAOS.map((dao) => (
          <DaoCard dao={dao} />
        ))}
        <div className='DaoCard'>
        <h2>Your DAO </h2>
        <div>
        <a target="_blank" rel="noopener noreferrer" href='https://eml2h9kbu5d.typeform.com/to/utpnDE0s'>Request</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Daos
