import { IoStatsChartSharp } from "react-icons/io5";
import { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";

function Nav() {
  const { user, loading, logout } = useContext(authContext);
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {user && !loading && (
          <div className="flex items-center gap-2">
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={user.photoURL}
                alt={user.displayName}
                referrerPolicy="no-referrer"
              />
            </div>

            <h2>Hello, {user.displayName}</h2>
          </div>
        )}

        {user && !loading && (
          <nav className="flex items-center gap-4 ">
            <div>
              <a href="#stats">
                <IoStatsChartSharp className="text-3xl" />
              </a>
            </div>
            <div>
              <button onClick={logout} className="btn btn-danger">
                Sign Out
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Nav;
