import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>DelegChat</h1>
      <p>Privacy-preserving & token-gated chat room for DAO delegates</p>
      <Link to="/daos">Enter app</Link>
    </>
  )
}

export default Home
