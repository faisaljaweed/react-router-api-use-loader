import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-700">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/contacts"}>Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
