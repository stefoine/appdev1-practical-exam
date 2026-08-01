import { SITE_TITLE, SITE_DESCRIPTION } from "./constants";

function Header() {
  return (
    <header>
      <h1>{SITE_TITLE}</h1>
      <p>{SITE_DESCRIPTION}</p>
    </header>
  );
}

export default Header;