function DaoInfo({ dao }) {
  return (
    <>
      <h2>{dao.name}</h2>
      {dao.comingSoon && <span>Coming soon</span>}
    </>
  )
}

export default DaoInfo
