import './Navbar.css';
const Navbar = ({ username1 }) => {
    return (
        <header>
            <div>
                <div className="mynav ">

                    <div className="navbar-fixed " id="mynavbar">
                        <nav>
                            <div class="nav-wrapper #ff6d00 orange accent-4 black-text large">
                                <a href="#!" class="brand-logo center black-text">EGROCERE</a>
                                <ul class="left" id="navleft">
                                    <li>

                                        <div class="input-field ">
                                            {/* <i class="material-icons prefix">account_circle</i> */}
                                            <i class="material-icons prefix ">search</i>
                                            <input id="icon_prefix" type="text" class="validate" />

                                            <label for="icon_prefix">Search.....</label>
                                        </div>

                                    </li>
                                    {/* <li><button>search</button></li> */}

                                </ul>
                                <ul class="right hide-on-med-and-down " id="navright">
                                    <li ><a href="sass.html">Home</a></li>
                                    <li><a href="/profile">Cart</a></li>
                                    <li><a href="badges.html">Profile</a></li>
                                    <li><a href="badges.html">Logout</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;