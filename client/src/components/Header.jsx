import { Link, NavLink } from "react-router";
import CustomLink from "./CustomLink";
import Tabs from "./Tabs";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import useThemeContext from "../contexts/ThemeContext/ThemeContext";
import useAuthContext from "../contexts/AuthContext/AuthContext";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import logo from "/logo.png";
import MobileNav from "./MobileNav";

export default function Header() {
  const { theme, toggleTheme } = useThemeContext();
  const { user, logOut } = useAuthContext();
  const navLinks = (
    <>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/dashboard">DashBoard</CustomLink>
      <CustomLink to="/explore">Explore</CustomLink>
      <CustomLink to="/browseTips">Browse</CustomLink>
      {user && (
        <>
          <CustomLink to="/shareTip">Share a Tip</CustomLink>
          <CustomLink to={`/myTips`}>My Tips</CustomLink>
        </>
      )}
    </>
  );

  const themeTogglerIcon = (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <MdDarkMode className="text-4xl cursor-pointer" />
      ) : (
        <MdLightMode className="text-4xl cursor-pointer" />
      )}
    </button>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logout Successful");
      })
      .catch((err) => {
        toast("Logout Failed", { type: "err" });
      });
  };

  return (
    <section className="dark:bg-gray-900 bg-indigo-800  fixed top-0 left-0 text-white w-screen z-50 ">
      <header className="navbar container justify-between items-center  mx-auto ">
        <div className="flex items-center">
          <Tooltip id="show-user-email" />
          <MobileNav navLinks={navLinks} />
          <Link
            className="text-xl font-bold  sm:text-2xl whitespace-nowrap flex items-center gap-2"
            to={"/"}
          >
            <img src={logo} className="sm:w-6 w-4  rounded-sm " />
            <span>Desi Garden</span>
          </Link>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
            {!user && <CustomLink to="/login">Login</CustomLink>}
          </ul>
        </div>
        <div className="flex  gap-3 items-center">
          <div className="flex items-center gap-3">
            {!user && (
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  `text-lg sm:text-2xl font-medium lg:hidden ${
                    isActive ? "link" : ""
                  }`
                }
              >
                Log In
              </NavLink>
            )}
            {themeTogglerIcon}
          </div>
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  className="w-10 rounded-full"
                  data-tooltip-id="show-user-email"
                  data-tooltip-content={user.displayName}
                >
                  <img src={user.photoURL} alt="failed" />
                </div>
              </div>
              <Tabs>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="text-lg bg-gray-700"
                  >
                    Logout
                  </button>
                </li>
              </Tabs>
            </div>
          )}
        </div>
      </header>
    </section>
  );
}
