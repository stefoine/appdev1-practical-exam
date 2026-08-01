function MovieTwo() {
  const title = "Un/Happy for You";
  const actor1 = "Joshua Garcia";
  const actor2 = "Julia Barretto";
  const releaseYear = 2018;
  const totalWatches = 100;
  const isPopular = true;

  return (
    <>
      <h3>{title}</h3>
      <p>{actor1 + " and " + actor2}</p>
      <span className="year">({releaseYear})</span>
      <p>Watched {totalWatches * 2} times</p>
      <p>{isPopular ? "🔥 Trending" : "Underrated Gem"}</p>
    </>
  )
}

export default MovieTwo