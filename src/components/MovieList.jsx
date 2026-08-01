import Divider from "./Divider"
import MovieOne from "./MovieOne"
import MovieTwo from "./MovieTwo"
import MovieThree from "./MovieThree"

function LoveteamList() {
  return (
    <>
      <h2>Featured Loveteam Movies</h2>
      <MovieOne />
      <Divider />
      <MovieTwo />
      <Divider />
      <MovieThree />
    </>
  );
}

export default LoveteamList