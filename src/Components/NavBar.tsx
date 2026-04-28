import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { CiUser } from "react-icons/ci";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { user, login, logout } = useAuth();
  return (
    <nav className="bg-red-500 text-white shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold  tracking-wide flex items-center gap-2 hover:cursor-pointer">
          ⚡ <span className="text-yellow-300">PokeDex</span>
        </h1>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link
            to="/favorites"
            className="hover:text-yellow-300 transition-colors"
          >
            Favorites
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded-full">
                <CiUser className="w-5 h-5" />
                <span className="text-sm">{user.displayName}</span>
              </div>

              <button
                onClick={logout}
                className="text-xs bg-black/20 hover:bg-black/30 px-3 py-1 rounded-md transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={login}
              className="bg-yellow-400 text-black px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
            >
              Login
            </button>
          )}
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-red-500 border-t border-white/20">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link
            to="/favorites"
            className="hover:text-yellow-300 transition-colors"
          >
            Favorites
          </Link>
          {user ? (
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                <CiUser className="w-5 h-5" />
                <span>{user.displayName}</span>
              </div>

              <button
                onClick={logout}
                className="bg-black/20 hover:bg-black/30 px-3 py-1 rounded-md transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={login}
              className="bg-yellow-400 text-black px-3 py-1.5 rounded-md font-semibold hover:bg-yellow-300 transition"
            >
              Login with Google
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
