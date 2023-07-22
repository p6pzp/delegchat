import { useRouteError } from 'react-router-dom'

function RouteError() {
  const error = useRouteError()

  return (
    <span>Error: {error?.message || error?.data?.message || 'Unknown error'}</span>
  )
}

export default RouteError
