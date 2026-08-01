function MovieThree() {
  const title = "Hello, Love, Again";
  const actor1 = "Kathryn Bernardo";
  const actor2 = "Alden Richards";
  const releaseYear = 2024;
  const rating = 8.5;
  const isLatestRelease = true;

  function formatRating() {
    return `⭐ ${rating}/10`;
  }

  return (
    <>
      <h3>{title}</h3>
      <p>{`Starring ${actor1} & ${actor2}`}</p>
      <span className="year">({releaseYear})</span>
      <p>{formatRating()}</p>
      <p>{isLatestRelease ? "🎬 Latest Release" : "Previous Release"}</p>
    </>
  )
}

export default MovieThree