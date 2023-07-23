function ErrorMessage({ children, error, onRetry }) {
  return (
    <p>
      Error: {error?.message || 'Unknown error'}
      {children}
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </p>
  )
}

export default ErrorMessage
