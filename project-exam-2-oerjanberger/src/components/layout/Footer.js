import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Footer() {
    const [auth] = useContext(AuthContext);
    return (
        <footer>
            <div>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                {auth ? (
                    <Link to="/postList"><img src="/images/logo//Logo_secondary.svg" alt="React logo, Home button" className="logo__footer"></img></Link>
                ) : (
                    <Link to="/" end><img src="/images/logo//Logo_secondary.svg" alt="React logo, Home button" className="logo__footer"></img></Link>
                )}
                <p>Copyright &copy;</p>
            </div>
        </footer>
    );
};
