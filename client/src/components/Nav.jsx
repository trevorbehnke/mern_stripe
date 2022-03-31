import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/";
import { useContext } from "react";

function Nav() {
  const [state, setState] = useContext(UserContext);

  const history = useHistory();

  const logout = () => {
    setState({ user: {}, token: "" });
    localStorage.removeItem("auth");
    history.push("/login");
  };

  console.log("state", state);

  return (
    <ul className="nav border">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">
          Home
        </Link>
      </li>
      {state && state.token ? (
        <li className="nav-item">
          <span onClick={logout} className="nav-link">
            Logout
          </span>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default Nav;
