import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"></Link>
                    </li>
                    <li>
                        <Link to="/Post"></Link>
                    </li>
                    <li>
                        <Link to="/Edit"></Link>
                    </li>
                </ul>
            </nav>

            <Navbar />


            <Outlet />
        </>


    )
};

export default Layout;