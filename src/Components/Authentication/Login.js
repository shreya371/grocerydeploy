import React, { useEffect } from 'react';
import { Link, Navigate, Route, Router, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';
import Home from '../HomePage/Home';
import { Helmet } from "react-helmet";
import loginbg from '../images/loginbg.jpg';
import loginimg from '../images/login/login-img-1.png'
const Login = ({ }) => {

    const [isLoggedin, setIsLoggedin] = useState(true)
    const [loginpg, setLoginpg] = useState(true);
    const [homepg, sethomepg] = useState(false);
    const [userName, setUserName] = useState("demo123")



    //register
    const [values, setValues] = useState({
        // name: "",
        // email: "",
        // pass: "",

        // firstName: "",
        // lastName: "",
        // email: "",
        // username: "",
        // password: "",
        // address: ""


    });

    const signup = () => {

        let data = values
        fetch('http://localhost:9092/ms2/register', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => response.json())
            .then(json => console.log(json))

        alert("signup successfull ! Login now")


    }

    //Login
    // const [valueslogin, setValueslogin] = useState({
    //     username: "",
    //     password: "",
    // });
    const [username1, setUsername1] = useState('');
    const [password1, setPassword1] = useState('');

    let data = {
        username: username1,
        password: password1
    }


    const navigate = useNavigate();

    const Login = () => {
        let data1 = data
        fetch('http://localhost:9093/ms3/login', {
            method: "POST",
            body: JSON.stringify(data1),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => { return response.text() })
            .then(text => {
                if (text === "LOGIN SUCCESSFULL") {

                    // alert("Login successfull");
                    sethomepg(true)
                    setLoginpg(false)
                    console.log(username1)



                }
                else {
                    alert("Invalid Username or Password")
                }
            })



    }

    return (
        <div id="loginbody">
            {homepg && <Home username1={username1} />}
            {loginpg &&
                <div>
                    <div class="col s12 m7">

                        <div class="card horizontal" id="cart">
                            <div class="card-image">
                                <img id="login-cartimagesizing" src={loginimg} />
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    {/* form */}

                                    <div id="login-form-box">
                                        <h5>Username</h5>
                                        <div id="search-form">
                                            <input type="search" id="query1" name="q" placeholder='username' onChange={(e) => { setUsername1(e.target.value) }} ></input>
                                        </div>
                                        <h5>Password</h5>
                                        <div id="search-form">

                                            <input type="password" id="query2" name="q" placeholder='password' onChange={(e) => { setPassword1(e.target.value) }}></input>

                                        </div><br></br>
                                        <button class="btn #ef6c00 orange darken-3" id="login-button" onClick={() => Login()}>Login</button>
                                        <p id="alink-text">not a member? <a href="/signup"> signup here</a></p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>






                // <div id="onlylogin">
                //     <div class="container1" id="container1">
                //         <div class="row card hoverable">
                //             <div class="card-content ">
                //                 <h4 class="center blue-text">Login Form</h4>
                //                 <form class="row s12">
                //                     <div class="col s12">
                //                         <div class="input-field">
                //                             <input type="text" name="" placeholder="Username*" onChange={(e) => { setUsername1(e.target.value) }} />
                //                         </div>
                //                     </div>
                //                     <div class="col s12">
                //                         <div class="input-field">
                //                             <input type="password" name="" placeholder="Password*" onChange={(e) => { setPassword1(e.target.value) }} />
                //                         </div>
                //                     </div>
                //                     <div class="col s12">
                //                         <p><label><input type="checkbox" /></label></p>
                //                     </div>
                //                     <div class="col s12 center">
                //                         <button type="button" class="btn btn-large waves-effect waves-light blue" onClick={() => Login()}>Login<i class="material-icons right">send</i></button><br></br>
                //                         <a href="/signup">Not a member? create account</a>
                //                     </div>
                //                 </form>
                //             </div>
                //         </div>
                //     </div>

                // </div>
            }
        </div>

    );
}

export default Login;