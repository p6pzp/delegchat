import './Loading.css'

function Loading({ children }) {
  return (
    <div className="loading">
      <div className="loading-inner">
        <div className="loading-dual-ring">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Loading
