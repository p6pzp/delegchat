function DaoInfo({ dao }) {
  return (
    <>
      <h1>{dao.title ?? dao.name}</h1>
      {dao.comingSoon && <span>Coming soon</span>}
    </>
  )
}

export default DaoInfo
