import { useState } from "react";
import Carousel from "./Carousel";
import Cart from "./Cart";
import Categories from "./Categories";
import Footer from "./Footer";

import Navbar from "./Navbar";
import './Navbar.css';
import Profile from "./Profile";
import Searchbar from "./Searchbar";
import bg from "../images/backgroundimg.webp";
import bgtr from "../images/upbg.png";
import logo from "../images/LOGO.png";

const Home = ({ username1 }) => {

    const [homeLink, setHomeLink] = useState(true)//-----
    const [cartLink, setCartLink] = useState(false)
    const [profileLink, setProfileLink] = useState(false)
    // const [searchLink,setSearchLink]=useState(false)

    const sayhome = () => {
        setHomeLink(true)
        setCartLink(false)
        setProfileLink(false)

    }

    const saycart = () => {
        setHomeLink(false)
        setCartLink(true)
        setProfileLink(false)
    }
    const sayprofile = () => {
        setHomeLink(false)
        setCartLink(false)
        setProfileLink(true)

    }


    return (


        <div class="home">
            <header>
                <div>
                    <div className="mynav ">

                        <div className="navbar-fixed " id="mynavbar">
                            <nav>
                                <div class="nav-wrapper white black-text large">
                                    <a href="#!" class="brand-logo center black-text"><img id="logo" src={logo}></img></a>

                                    <ul class="left" id="navleft">
                                        <li>
                                            <div class="action-btn" >
                                                <a class="btn-floating btn-large #e65100 orange darken-4" href="#categoriesbox">
                                                    <i class="large material-icons" >search</i>
                                                </a>

                                            </div>
                                        </li>


                                    </ul>
                                    <ul class="right hide-on-med-and-down " id="navright">
                                        <li ><a onClick={() => { sayhome() }} id="navlinks" >Home</a></li>
                                        <li><a onClick={() => { saycart() }} id="navlinks">Cart</a></li>
                                        <li><a onClick={() => { sayprofile() }} id="navlinks">Profile</a></li>
                                        <li><a href="/login" id="navlinks">Logout</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {homeLink &&

                <main class="white" >
                    <img id="bgimg" src={bgtr} />
                    {/* <Carousel /> */}
                    <Categories username1={username1} />
                </main>

            }

            {profileLink && <Profile username1={username1} />}
            {cartLink && <Cart username1={username1} />}

            <Footer />





        </div>






    );
}

export default Home;