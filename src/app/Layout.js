import { useEffect } from 'react'
import { useFetcher, useNavigation, Outlet } from 'react-router-dom'
import Loading from '../components/Loading'

function Layout() {
  const fetcher = useFetcher()
  const navigation = useNavigation()

  useEffect(
    () => {
      document.title = 'DelegChat'
    }
  )

  if (fetcher.state === 'loading' || navigation.state === 'loading') {
    return (
      <Loading />
    )
  }

  return (
    <div className="app">
      <div className="main">
        <div className="main-inner">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
