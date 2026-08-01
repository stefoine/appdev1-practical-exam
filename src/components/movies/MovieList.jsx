import Line from "../Divider"
import MovieOne from "./MovieOne"
import MovieTwo from "./MovieTwo"
import MovieThree from "./MovieThree"

function LoveteamList() {
  return (
    <>
      <h2>Featured Loveteam Movies</h2>
      <MovieOne />
      <Line />
      <MovieTwo />
      <Line />
      <MovieThree />
    </>
  );
}

export default LoveteamList