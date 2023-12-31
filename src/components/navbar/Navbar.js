import { Link } from "react-router-dom/cjs/react-router-dom";
import { useTheme } from "../../hooks/useTheme";

// Components
import SearchBar from "../../pages/searchBar/SearchBar";

// Import Styles
import "./Navbar.css";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="create">Create Recipe</Link>
      </nav>
    </div>
  );
}
