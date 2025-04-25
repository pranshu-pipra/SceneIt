import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold">
          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            SceneIt
          </Link>
        </div>

        {/* Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/favourites"
            className="hover:text-yellow-400 transition duration-300"
          >
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
