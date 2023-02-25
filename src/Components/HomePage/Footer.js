import './Navbar.css'
const Footer = () => {
    return (
        <footer class="page-footer #e65100 orange darken-4">
            <div class="">
                <div class="row" id="myfooter">

                    <div class="col s5">
                        <h4>EGROCERE</h4>
                        <h4>One stop for all groceries!</h4>
                    </div>
                    <div class="col s3">
                        <h5>Categories</h5>
                        <ul>
                            <li>Dairy</li>
                            <li>Vegetables</li>
                            <li>Cookies</li>
                            <li>Cleaning</li>
                            <li>Fruits</li>
                        </ul>
                    </div>
                    <div class="col s3">
                        <h5>Brand</h5>
                        <ul>
                            <li>Sunfeast</li>
                            <li>Jersey</li>
                            <li>Mother Dairy</li>

                        </ul>

                    </div>

                </div>

            </div>
            <div class="footer-copyright" id="copyright-text">
                <div class="container">
                    <h6 id="copyright-text">© 2023 egrocere.com</h6>

                </div>
            </div>
        </footer>

    );
}

export default Footer;