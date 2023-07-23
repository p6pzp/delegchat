import { useRouteError } from 'react-router-dom'

function RouteError() {
  const error = useRouteError()

  return (
    <p>Error: {error?.message || error?.data?.message || 'Unknown error'}</p>
  )
}

export default RouteError
