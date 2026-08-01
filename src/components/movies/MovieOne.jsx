function MovieOne() {
  const actor1 = "James Reid";
  const actor2 = "Nadine Lustre";
  const releaseYear = 2017;
  const isClassic = true;

  return (
    <>
      <h3>Never Not Love You</h3>
      <p>{`${actor1} and ${actor2}`}</p>
      <span className="year">({releaseYear})</span>
      <p>{isClassic ? "✨ Classic" : "Recent"}</p>
    </>
  )
}

export default MovieOne