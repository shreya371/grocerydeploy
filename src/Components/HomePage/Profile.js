
import bg from '../images/Profile/orangebg.webp';
import profile from '../images/Profile/images.png'
import Navbar from './Navbar';
import './Profile.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Profile = ({ username1 }) => {
    console.log("inside profile " + username1)

    const [customerDetails, setCustomerDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        address: "",
        cart: []


    })


    // const getCustomerDetails = (customerUsername) => {
    //     const url = `http://localhost:9999/ms2/customer/${customerUsername}`;
    //     axios.get(url).then(res => {

    //         // setCustomerDetails(...res.data)
    //         customerDetails.push(res.data)

    //         console.log(customerDetails)


    //     })
    // }

    // console.log(customerDetails)

    useEffect(() => {
        const url = `http://localhost:9999/ms2/customer/${username1}`;
        axios.get(url).then(res => {

            // setCustomerDetails(res.data)
            //    setCustomerDetails
            // customerDetails.push(res.data)
            var dt = res.data;
            var dt1 = dt.firstName
            var dt2 = dt.lastName
            var dt3 = dt.email
            var dt4 = dt.username
            var dt5 = dt.address
            var dt6 = dt.cart
            console.log(dt1)
            setCustomerDetails({
                firstName: dt1,
                lastName: dt2,
                email: dt3,
                username: dt4,
                address: dt5,
                cart: dt6
            })
            // setCustomerDetails()




        })

    }, []);
    console.log("before return")
    console.log(customerDetails)




    return (<div>

        {/* <button class="btn" onClick={() => getCustomerDetails(username1)}>get details</button> */}
        {/* {customerDetails &&  */}
        <div class="row">
            <div class="col s12 m6" >
                <div class="card" id="profilebg">
                    <div class="card-image">
                        <img src={bg} />
                        <span class="card-title"><img id="imagesizing" src={profile} /></span>
                        {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                    </div>
                    <div class="card-content">
                        <h3>Personal Details</h3>

                        <table class="striped">


                            <tbody>
                                <tr>
                                    <td>Username</td>
                                    <td>{username1}</td>

                                </tr>
                                <tr>
                                    <td>First Name</td>
                                    <td>{customerDetails.firstName}</td>

                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{customerDetails.lastName}</td>

                                </tr>
                                <tr>


                                    <td>Email</td>
                                    <td>{customerDetails.email}</td>
                                </tr>

                                <tr>


                                    <td>Address</td>
                                    <td>{customerDetails.address}</td>
                                </tr>

                            </tbody>
                        </table>




                    </div>
                </div>
            </div>
        </div>
        {/* } */}


    </div>);
}

export default Profile;