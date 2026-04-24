import { ImStatsDots } from "react-icons/im"
import { IoMdTime } from "react-icons/io"
import { IoHomeOutline } from "react-icons/io5"
import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-20">
      
      {/* left */}
      <div className="flex-1">
        <a className="text-2xl text-[#244D3F] font-normal">
          <span className="font-semibold">keen</span>Keeper
        </a>
      </div>

      <div className="flex-none">

     {/* dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-xl">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <Link to="/" className="flex items-center gap-2">
                <IoHomeOutline /> Home
              </Link>
            </li>
            <li>
              <Link to="/timeline" className="flex items-center gap-2">
                <IoMdTime /> Timeline
              </Link>
            </li>
            <li>
              <Link to="/stat" className="flex items-center gap-2">
                <ImStatsDots /> Stats
              </Link>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal hidden lg:flex text-lg text-gray-700 px-1">
          <li>
            <Link to="/" className="flex items-center gap-1">
              <IoHomeOutline /> Home
            </Link>
          </li>
          <li>
            <Link to="/timeline" className="flex items-center gap-1">
              <IoMdTime /> Timeline
            </Link>
          </li>
          <li>
            <Link to="/stat" className="flex items-center gap-1">
              <ImStatsDots /> Stats
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar