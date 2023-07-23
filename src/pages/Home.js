import { Link } from 'react-router-dom'
import './Home.css';

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1>Chat with your delegate</h1>
        <p>
          A secure and privacy-preserving chat for DAO delegators to communicate with their delegate.
          Token-gated access ensures privacy and transparency. Foster collaboration within DAOs. LFG!
        </p>
        <Link to="/daos">Enter app</Link>
      </div>
    </div>
  )
}

export default Home
