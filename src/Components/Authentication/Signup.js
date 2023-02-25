import './Login.css';
import { useState } from 'react';
import signupimg from '../images/login/signup-img-1.png';
const Login = () => {

}
const Signup = () => {

    const [firstnamec, setFirstnamec] = useState("")
    const [lastnamec, setLastnamec] = useState("")
    const [emailc, setEmailc] = useState("")
    const [addressc, setAddressc] = useState("")
    const [usernamec, setUsernamec] = useState("")
    const [passwordc, setPasswordc] = useState("")

    const signupdata = {
        firstName: firstnamec,
        lastName: lastnamec,
        email: emailc,
        address: addressc,
        username: usernamec,
        password: passwordc
    }

    const signup = () => {

        fetch('http://localhost:9092/ms2/register', {
            method: "POST",
            body: JSON.stringify(signupdata),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => { return response.text() })
            .then(text => {
                if (text === "valid") {

                    alert("signup successfull");
                }
                else {
                    alert("enter valid details-password length should be > 5")
                }
            })


    }




    return (<div>
        <div class="col s12 m7">

            <div class="card horizontal" id="cart">

                <div class="card-stacked">
                    <div class="card-content">
                        {/* form */}
                        {/* <h4>Signup</h4> */}
                        <div>
                            <h6>First Name</h6>
                            <div id="search-form">

                                <input type="text" id="query" name="q" placeholder='First name' onChange={(e) => { setFirstnamec(e.target.value) }}></input>

                            </div>
                            <h6>Last Name</h6>
                            <div id="search-form">
                                <input type="text" id="query" name="q" placeholder='Last name' onChange={(e) => { setLastnamec(e.target.value) }} ></input>
                            </div>
                            <h6>Email</h6>
                            <div id="search-form">
                                <input type="email" id="query" name="q" placeholder='Email' onChange={(e) => { setEmailc(e.target.value) }}></input>
                            </div>
                            <h6>Address</h6>
                            <div id="search-form">
                                <input type="text" id="query" name="q" placeholder='Address' onChange={(e) => { setAddressc(e.target.value) }}></input>
                            </div>
                            <h6>Username</h6>
                            <div id="search-form">
                                <input type="text" id="query" name="q" placeholder='Username' onChange={(e) => { setUsernamec(e.target.value) }}></input>
                            </div>
                            <h6>Password</h6>
                            <div id="search-form">
                                <input type="password" id="query" name="q" placeholder='password' onChange={(e) => { setPasswordc(e.target.value) }}></input>
                            </div><br></br>







                            <button class="btn #ef6c00 orange darken-3" id="signup-button" onClick={() => { signup() }}>Signup</button>
                            <p id="alink-stext">Already a member? <a href="/login"> Login</a></p>

                        </div>

                    </div>


                </div>
                <div class="card-image">
                    <img id="signup-cartimagesizing" src={signupimg} />
                </div>
            </div>
        </div>


    </div>);
}

export default Signup;