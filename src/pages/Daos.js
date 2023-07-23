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
      </div>
    </div>
  )
}

export default Daos
