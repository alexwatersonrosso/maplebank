import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Maple Bank</Link>
                <div className="navbar-expand" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                        
                     
                        <Link className="nav-item nav-link active" to="/createaccount">CreateAccount</Link>
                        <Link className="nav-item nav-link active" to="/login">Login</Link>
                        <Link className="nav-item nav-link active" to="/deposit">Deposit</Link>
                        <Link className="nav-item nav-link active" to="/withdraw">Withdraw</Link>
                        <Link className="nav-item nav-link active" to="/alldata">AllData</Link>
                    </div>
                </div>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
};

export default Home;